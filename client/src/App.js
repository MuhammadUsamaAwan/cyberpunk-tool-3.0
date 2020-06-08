import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/sass/main.scss';
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
import Features from './components/pages/home/Features';
import Footer from './components/layout/Footer';
import Contact from './components/pages/home/Contact';
import Builds from './components/pages/builds/Builds';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ResetPassword from './components/auth/ResetPassword';
import ForgotPassword from './components/auth/ForgotPassword';
import ChangePassword from './components/auth/ChangePassword';
import Profile from './components/pages/profile/Profile';
import Profiles from './components/pages/profile/Profiles';
import Comments from './components/pages/builds/Comments';
import Planner from './components/pages/planner/Planner';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Features />
            <Contact />
          </Route>
          <Route exact path='/builds' component={Builds} />
          <Route exact path='/build'>
            <Comments />
          </Route>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/forgotpassword' component={ForgotPassword} />
          <Route exact path='/resetpassword' component={ResetPassword} />
          <Route exact path='/changepassword' component={ChangePassword} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/profiles' component={Profiles} />
          <Route exact path='/planner' component={Planner} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
