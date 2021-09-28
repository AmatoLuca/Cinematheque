const express = require('express');
const router = express.Router();
const middleAuth = require('../middleware/middleAuth');
const User = require('../models/User');


// @route       GET api/list
// @desc        Obtain liked movies from database 
// @access      Private

router.get('/', middleAuth, async (req, res) => {
  const id = req.user.id;
  
  try {
    let user = await User.findById(id);
    // NOT FOUND
    if (!user) return res.status(404).json({ msg: "User not found" });
    // Make sure user own contact
    if (user._id.toString() !== req.user.id) {
      // UNAUTHORIZED
      return res.status(401).json({ msg: "Not authorized" });
    }
    
    const movieList = user.list;

    res.json({ movieList });

  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error');
  }

});


// @route       POST api/list
// @desc        save new liked movie into the list 
// @access      Private

router.post('/', middleAuth, async (req, res) => {
  const id = req.user.id;
  const movieID = req.body.id;

  try {
    let user = await User.findById(id);
    // NOT FOUND
    if (!user) return res.status(404).json({ msg: "User not found" });

    // Make sure user own contact
    if (user._id.toString() !== req.user.id) {
      // UNAUTHORIZED
      return res.status(401).json({ msg: "Not authorized" });
    }
    
    user = await User.findByIdAndUpdate(
      id,
      { $push: { list: movieID } },
      { new: true }
    );

    res.json(user);

  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});


// @route       DELETE api/list
// @desc        delete a liked movie from database 
// @access      Private

router.delete('/:id', middleAuth, async (req, res) => {
  const userId = req.user.id;
  const movieIdToDelete = req.params.id;

  console.log(userId, movieIdToDelete);

  try {
    let user = await User.findById(req.user.id);
    if (!user) return res.status(401).json({ msg: "Not authorized" });
    // Make sure user own contact
    // contact.user is the _id reference user
    if (user._id.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await User.findOneAndUpdate(
      { _id: userId },
      { $pull: { list: movieIdToDelete } }
    );

    res.json( { msg: 'Movie Removed' } ) 

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;