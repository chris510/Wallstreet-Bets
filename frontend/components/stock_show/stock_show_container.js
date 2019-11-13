import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStock, fetchStockInfo } from '../../actions/stock_actions';
import { fetchStockNews } from '../../actions/news_actions';
import StockShow from './stock_show';

const mapStateToProps = (state, ownProps) => ({
  // currentUser: state.entities.users[state.session.id],
  stock: state.entities.stocks[ownProps.match.params.symbol],
  news: state.entities.news
  // info: state.entities.stocks[ownProps.match.params.symbol].info
});

const mapDispatchToProps = dispatch => ({
  fetchStock: (symbol) => dispatch(fetchStock(symbol)),
  fetchStockInfo: (symbol) => dispatch(fetchStockInfo(symbol)),
  fetchStockNews: (symbol) => dispatch(fetchStockNews(symbol)),
  fetch1YrHistoricalData: symbol => dispatch(fetch1YrHistoricalData(symbol))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StockShow));