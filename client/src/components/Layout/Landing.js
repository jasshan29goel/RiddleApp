import React ,{Fragment} from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
      <Fragment>
              <div className=" text-center " >
                <h1>Welcome to the RiddleApp</h1>
                <p>Get the best questions for training your brain</p>
                <p>Happy Thinking</p>
                <p>
                  
                  <Link to="/login" className="btn btn-success btn-ghost btn-lg mr-2" role="button">
                    <i className="fa fa-sign-in-alt" />
                      {' '}Login
                    </Link>
                  <Link to="/register" className="btn btn-success btn-ghost btn-lg " role="button">
                  <i className="fa fa-user-plus" />
                      {' '}Register
                    
                    </Link>
                </p>
    
              </div>
      </Fragment>
    )
};
export default Landing;
