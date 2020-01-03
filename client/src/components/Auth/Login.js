
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import FormElement from '../Layout/FormElement';

const Login = ({login,isAuthenticated}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    
      const { email, password } = formData;
    
      const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    };
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
      };
    return (
        <div className="container card mb-3 ">
        <div className="card-header">Login
        </div>
        <div className="card-body">
            <form onSubmit={e => onSubmit(e)}>
            <FormElement label="Email"  name="email" placeholder="Enter Email" type="text" value={email} onChange={e => onChange(e)}/>
            <FormElement label="Password"  name="password" placeholder="Enter Password" type="text" value={password} onChange={e => onChange(e)}/>
            <input
                type="submit"
                value="Login"
                className="btn btn-light btn-block"
                />
            </form> 
        </div>
    </div>
    )
};


Login.propTypes = {
    login: PropTypes.func.isRequired,
  };
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
    mapStateToProps,
    { login }
)(Login);
