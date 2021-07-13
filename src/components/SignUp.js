import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signup } from "../actions/auth";
const SignUp = ({ signup, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
  });
  const { name, email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      signup(name, email, password, re_password);
    }
  };
  return (
    <div className="signupScreen">
      <form onSubmit={(e) => onSubmit(e)} method="POST">
        <h1>Sign Up</h1>
        <input
          placeholder="Name"
          type="text"
          name="name"
          onChange={(e) => onChange(e)}
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          onChange={(e) => onChange(e)}
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={(e) => onChange(e)}
          required
        />
        <input
          placeholder="Confirm Password"
          type="password"
          name="re_password"
          onChange={(e) => onChange(e)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <h4>
        <span className="signupScreen_grey">Already have Account?</span>
        <Link to="/login">
          <span className="signupScreen_link"> Login.</span>
        </Link>
      </h4>
    </div>
  );
};

SignUp.propTypes = {
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(SignUp);
