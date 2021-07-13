import React from "react";
import Nav from "./Nav";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";
import "./ProfileScreen.css";
function ProfileScreen({ auth, logout }) {
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>{auth.user.email}</h2>
            <div className="profileScreen_plans">
              <h4>Plans</h4>

              <button
                onClick={() => logout()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  logout: PropTypes.func.isRequired,
});
export default connect(mapStateToProps, { logout })(ProfileScreen);
