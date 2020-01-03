import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

const Navbar = ({logout}) => {

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Riddler
        </Link >
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
              <i className="fas fa-question" />   About     
              </Link>  
              </li>
              <li className="nav-item">
              <a className="nav-link" href="/"  onClick={logout}>
              Logout     
              </a>                         
              </li>
          </ul>
        </div>
      </div>
    </nav>
        )
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(
  null,
  {  logout }
)(Navbar);