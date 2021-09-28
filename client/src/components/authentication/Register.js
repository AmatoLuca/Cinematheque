import React, { useState, useContext, useEffect } from "react";
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';


const Register = (props) => {
  const authContext = useContext(AuthContext);
  const { register, isAuthenticated, error, clearErrors } = authContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
      setAlert('You are logged in', 'void-field');
    } 
    
    if(error === 'User already exists') {
      setAlert(error, 'void-field');
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history, history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", 'void-field');
    } else if (password !== password2) {
      setAlert("Passwords do not match", 'void-field');
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

  return (
    <div className="form-container">
      <div className="form-inner-case">
        <h5 className="title-register-form">
          Account <span>Register</span>
        </h5>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              minLength="6"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              required
              minLength="6"
            />
          </div>
          <input
            type="submit"
            value="Register"
            className="btn btn-primary btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
