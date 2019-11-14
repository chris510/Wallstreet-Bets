import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStocks } from '../../actions/stock_actions';
import { fetchNews } from '../../actions/news_actions';
import { fetchUserPortfolios } from '../../actions/portfolio_actions';
import Home from './home'

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  portfolios: Object.values(state.entities.portfolios),
  // stocks: Object.values(state.entities.stocks),
  stocks: state.entities.stocks,
  orders: state.entities.orders,
  news: state.entities.news
})

const mapDispatchToProps = dispatch => ({
  fetchStocks: () => dispatch(fetchStocks()),
  fetchNews: () => dispatch(fetchNews()),
  fetchUserPortfolios: () => dispatch(fetchUserPortfolios())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);