import React, { useRef, useState } from "react";
import "./SignUpScreen.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";
import { Redirect } from "react-router";
function SignUpScreen({ login, isAuthenticated }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  const register = (e) => {
    e.preventDefault();
  };
  const signIN = (e) => {
    e.preventDefault();
  };
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="signupScreen">
      <form onSubmit={(e) => onSubmit(e)} method="POST">
        <h1>Sign In</h1>
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
        <button type="submit">Sign In</button>
      </form>
      <h4>
        <span className="signupScreen_grey">New to Netflix?</span>
        <span className="signupScreen_link"> Sign Up now.</span>
      </h4>
    </div>
  );
}
SignUpScreen.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(SignUpScreen);
