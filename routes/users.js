const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require("express-validator");
const UserModel = require('../models/User');


// @route       POST api/users
// @desc        Register a user
// @access      Public

router.post('/', 
  
  [
    check('name', 'Please add a name').not().isEmpty(),
    check('email', 'Please insert a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
  ],

  async (req, res) => {
    const errors = validationResult(req);

    // BAD REQUEST 
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await UserModel.findOne({ email: email });

      // BAD REQUEST
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      // create an user doc in mongodb
      user = new UserModel({
        name : name,
        email: email,
        password: password
      });

      // user password encrypting
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // save user in mongodb
      await user.save();

      // prepare the payload and JWT sign
      const payload = {
        user: { id: user.id }
      };

      jwt.sign(
        payload, 
        config.get('jwtSecret'),
        { expiresIn: 3600000 }, // 1h
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

    } catch (error) {
      console.error(error.msg);
      res.status(500).send('Internal Server Error');
    }
    
  });


module.exports = router;