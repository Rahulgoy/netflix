import React, { useEffect } from "react";
import Rows from "./Rows";
import LoginScreen from "./LoginScreen";
import ProfileScreen from "./ProfileScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { checkAuthenticated, load_user } from "../actions/auth";

function Home({ isAuthenticated, auth, checkAuthenticated, load_user }) {
  const user = auth.user;
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, []);
  return (
    <>
      <Router>
        {!(isAuthenticated && user) ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <Rows />
            </Route>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  checkAuthenticated: PropTypes.func.isRequired,
  load_user: PropTypes.func.isRequired,
});
export default connect(mapStateToProps, { checkAuthenticated, load_user })(
  Home
);
