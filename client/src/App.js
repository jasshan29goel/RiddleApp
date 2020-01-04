import React ,{Fragment,useEffect} from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Landing';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Questions from './components/Questions/Questions';
import SingleQuestion from './components/Question/SingleQuestion';
import PrivateRoute from './components/routing/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

 return(
<Provider store={store}>
<Router>
    <Fragment>
      <Navbar/>
      <Route exact path="/" component={Landing}/>
      <section className="container">
        <Switch>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
      <PrivateRoute exact path="/questions" component={Questions}/>
      <PrivateRoute exact path='/questions/:id' component={SingleQuestion} />
   
       </Switch> 
    </section>
     </Fragment>
    </Router>
</Provider>
)};

export default App;
