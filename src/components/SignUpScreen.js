import React, { useRef, useState } from "react";
import "./SignUpScreen.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, signup } from "../actions/auth";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
function SignUpScreen({ login, isAuthenticated, signup }) {
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
  /* const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  }; */
  const registeration = (e) => {
    e.preventDefault();
    signup(email, password);
  };
  const signIn = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="signupScreen">
      <form method="POST">
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
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
      </form>
      <h4>
        <span className="signupScreen_grey">New to Netflix?</span>

        <span className="signupScreen_link" onClick={registeration}>
          {" "}
          Sign Up now.
        </span>
      </h4>
    </div>
  );
}
SignUpScreen.propTypes = {
  login: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, signup })(SignUpScreen);
