import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (

              <div className="text-center  " >
                <h1>Launch your awesome startup now!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos quibusdam soluta at.</p>
                <p>
                  
                  <Link to="/login" className="btn btn-success btn-ghost btn-lg mr-2" role="button">Login</Link>
                  <Link to="/register" className="btn btn-success btn-ghost btn-lg " role="button">Register</Link>
                </p>
    
              </div>
    )
};
export default Landing;
