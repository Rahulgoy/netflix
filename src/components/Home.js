import React, { useEffect } from "react";
import Nav from "./Nav";
import Rows from "./Rows";
import LoginScreen from "./LoginScreen";
import Banner from "./Banner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfileScreen from "./ProfileScreen";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { checkAuthenticated } from "../actions/auth";
import SignUpScreen from "./SignUpScreen";
import SignUp from "./SignUp";
function Home({ isAuthenticated, auth, checkAuthenticated }) {
  useEffect(() => {
    // checkAuthenticated();
  }, []);
  return (
    <>
      <Router>
        {!isAuthenticated ? (
          <LoginScreen />
        ) : (
          <>
            <Switch>
              <Route path="/profile">
                <ProfileScreen />
              </Route>
              <Route path="/login">
                <SignUpScreen />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
            </Switch>
          </>
        )}
      </Router>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  checkAuthenticated: PropTypes.func.isRequired,
});
export default connect(mapStateToProps, { checkAuthenticated })(Home);
