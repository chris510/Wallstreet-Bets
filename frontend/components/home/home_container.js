import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStocks, fetchStockIntradayData } from '../../actions/stock_actions';
import { fetchNews } from '../../actions/news_actions';
import Home from './home'

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  // stocks: Object.values(state.entities.stocks),
  stocks: state.entities.stocks,
  orders: state.entities.orders,
  news: state.entities.news
})

const mapDispatchToProps = dispatch => ({
  fetchStocks: () => dispatch(fetchStocks()),
  // fetchStockIntradayData: (symbol) => dispatch(fetchStockIntradayData(symbol)),
  fetchNews: () => dispatch(fetchNews())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);