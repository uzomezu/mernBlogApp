import React from "react";
import PropTypes from "prop-types";
import NavigationBar from "../../components/layout/NavigationBar";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

const NavBar = ({ auth, logoutUser }) => {
  const handleClick = (e) => {
    e.preventDefault();
    logoutUser();
  };
  return <NavigationBar auth={auth.isAuthenticated} onClick={handleClick} />;
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

NavBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { logoutUser })(NavBar);
