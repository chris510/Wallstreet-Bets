import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import NavSplashContainer from './nav/nav_splash_container';
import SplashContainer from './splash/splash_container'
import HomeContainer  from "./home/home_container";
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import StockShowContainer from './stock_show/stock_show_container';

import { fetchStocks } from '../actions/stock_actions';
import { fetchNews } from '../actions/news_actions';
import { fetchWatchedStocks } from '../actions/watch_action';
// import {fetchWatchedStocks} from '../util/watches_api_util';
import { fetchWatchIntradayData } from '../actions/watch_action';

import { fetchStockNews, fetchStockInfo, fetchStock, fetchStockIntradayData, fetch1YrHistoricalData } from '../actions/stock_actions';

window.fetchStock = fetchStock;
window.fetchStocks = fetchStocks;
window.fetchNews = fetchNews;
window.fetchStockNews = fetchStockNews;
window.fetchStockInfo = fetchStockInfo;
window.fetchStockIntradayData = fetchStockIntradayData;
window.fetchWatchedStocks = fetchWatchedStocks;
window.fetchWatchIntradayData = fetchWatchIntradayData;
window.fetch1YrHistoricalData = fetch1YrHistoricalData;

const App = () => (
  <div className="main-div">
    <header>
      <NavSplashContainer />
      {/* <Route exact path="/" component={NavSplashContainer} /> */}
    </header>
    <Route exact path="/" component={SplashContainer} />
    <Route exact path="/home" component={HomeContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <Route path="/stocks/:symbol" component={StockShowContainer} />
  </div>
);

export default App;