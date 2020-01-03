import React, {  useState } from 'react';
import { connect } from 'react-redux';
import {  Redirect } from 'react-router-dom';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import FormElement from '../Layout/FormElement';


const Register = ({ register ,isAuthenticated}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
      });
      const { name, email, password, password2 } = formData;

      const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            console.log("password does not match");
        } else {
            register({ name, email, password });
        }
      };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
    return (
        <div className="container card mb-3 ">
        <div className="card-header">Register
        </div>
        <div className="card-body">
            <form onSubmit={e => onSubmit(e)}>
            <FormElement label="Name"  name="name" placeholder="Enter Name" type="text" value={name} onChange={e => onChange(e)}/>
            <FormElement label="Email"  name="email" placeholder="Enter Email" type="text" value={email} onChange={e => onChange(e)}/>
            <FormElement label="Password"  name="password" placeholder="Enter Password" type="text" value={password} onChange={e => onChange(e)}/>
            <FormElement label="Confirm Password"  name="password2" placeholder="Re-enter Password" type="text" value={password2} onChange={e => onChange(e)}/>
            <input
                type="submit"
                value="Register"
                className="btn btn-light btn-block"
                />
            </form> 
        </div>
    </div>
    )
};
Register.propTypes = {
  register: PropTypes.func.isRequired,
 isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {  register }
)(Register);