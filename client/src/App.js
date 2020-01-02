import React ,{Fragment} from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Landing';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => (

<Router>
    <Fragment>
      <Navbar/>
      <Route exact path="/" component={Landing}/>
      <section className="container">
        <Switch>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
          
       </Switch> 
    </section>
     </Fragment>
    </Router>

);

export default App;
