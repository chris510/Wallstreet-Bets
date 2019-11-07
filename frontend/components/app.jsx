import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import NavSplashContainer from './nav/nav_splash_container';
import SplashContainer from './splash/splash_container'
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';

const App = () => (
  <div className="main-div">
    <header>
      <NavSplashContainer />
      {/* <Route exact path="/" component={NavSplashContainer} /> */}
    </header>
    <Route exact path="/" component={SplashContainer} />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;