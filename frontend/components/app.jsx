import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import ModalContainer from './modal/modal_container';
import NavSplashContainer from './nav/nav_splash_container';
import SplashContainer from './splash/splash_container'
import HomeContainer  from "./home/home_container";
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import StockShowContainer from './stock_show/stock_show_container';

import styled from "@emotion/styled";
import { useTheme } from "./change_theme/theme_context";

// const Wrapper = styled("div")`
//   background: ${props => props.theme.background};
//   width: 100vw;
//   height: 100vh;
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
//   color: ${props => props.theme.body};
// `;

const App = () => (
  <div className="app">
    <NavSplashContainer />
  <div className="main-div">
    <ModalContainer />
    <Route exact path="/" component={SplashContainer} />
    <Route exact path="/home" component={HomeContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <Route path="/stocks/:symbol" component={StockShowContainer} />
  </div>
  </div>
)
;

export default App;