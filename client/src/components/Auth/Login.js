import React, { useState } from 'react';
import FormElement from '../Layout/FormElement';
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    
      const { email, password } = formData;
    
      const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
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

export default Login;
