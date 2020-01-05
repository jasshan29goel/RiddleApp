import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

const Navbar = ({logout,auth}) => {
  const authLinks = (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <Link className="nav-link" to="/questions"  >
      <i className="fa fa-question"/>{' '}

      Questions     
      </Link>                         
      </li>
      <li>
      <Link className="nav-link" to="/"  onClick={logout}>
      <i className="fa fa-sign-out-alt"/>{' '}

      Logout     
      </Link>                         
      </li>
    </ul>
    );
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
        <i className="fa fa-cogs"/>{' '}
          RiddleApp
        </Link >
        <div>

        {auth.isAuthenticated && authLinks}

        </div>
      </div>
    </nav>
        )
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {  logout }
)(Navbar);