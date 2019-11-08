import { SOME_KEY, AV_API_KEY } from 'react-native-dotenv';

import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import NavSplashContainer from './nav/nav_splash_container';
import SplashContainer from './splash/splash_container'
import HomeContainer  from "./home/home-container";
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';

import { fetchStocks } from '../actions/stock_actions'
import { doAjax } from '../util/stock_api_util';

window.fetchStocks = fetchStocks;
window.doAjax = doAjax;


// console.log(process.env.REACT_APP_AV_API_KEY);
// console.log(process.env);
// console.log(SOME_KEY);
console.log(AV_API_KEY);

const App = () => (
  <div className="main-div">
    <header>
      <NavSplashContainer />
      {/* <Route exact path="/" component={NavSplashContainer} /> */}
    </header>
    <Route exact path="/" component={SplashContainer} />
    <Route exact path="/home" component={HomeContainer} />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;