import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import NavContainer from './nav/nav_container';
// import Splash from './splash/splash';
import SplashContainer from './splash/splash_container'
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <NavContainer />
    <Route path="/" component={SplashContainer} />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;