import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStocks, fetchStock, fetchStockInfo, fetchStockIntradayData, fetchStockPrice, fetchUserStocks } from '../../actions/stock_actions';
import { fetchStockNews } from '../../actions/news_actions';
import StockShow from './stock_show';

const mapStateToProps = (state, ownProps) => ({
  // currentUser: state.entities.users[state.session.id],
  stock: state.entities.stocks[ownProps.match.params.symbol],
  watches: state.entities.watches,
  allStocks: state.entities.stocks.allStocks,
  news: state.entities.news
  // info: state.entities.stocks[ownProps.match.params.symbol].info
});

const mapDispatchToProps = dispatch => ({
  fetchStock: (symbol) => dispatch(fetchStock(symbol)),
  fetchUserStocks: () => dispatch(fetchUserStocks()),
  fetchStockInfo: (symbol) => dispatch(fetchStockInfo(symbol)),
  fetchStockNews: (symbol) => dispatch(fetchStockNews(symbol)),
  fetch1YrHistoricalData: (symbol) => dispatch(fetch1YrHistoricalData(symbol)),
  fetchStockIntradayData: (symbol) => dispatch(fetchStockIntradayData(symbol)),
  fetchStocks: () => dispatch(fetchStocks()),
  fetchStockPrice: (symbol) => dispatch(fetchStockPrice(symbol))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StockShow));