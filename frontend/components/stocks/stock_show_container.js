import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStockNews, fetchStockInfo } from '../../actions/stock_actions';
import StockShow from './stock_show';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  stock: state.entities.stocks[ownProps.match.params.symbol],
  news: state.entities.stocks[ownProps.match.params.symbol].news,
  info: state.entities.stocks[ownProps.match.params.symbol].info
});

const mapDispatchToProps = dispatch => ({
  fetchStockInfo: (symbol) => dispatch(fetchStockInfo(symbol)),
  fetchStockNews: (symbol) => dispatch(fetchStockNews(symbol))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StockShow));