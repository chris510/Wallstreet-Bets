import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStocks, fetchStockIntradayData } from '../../actions/stock_actions';
import { fetchNews } from '../../actions/news_actions';
import Home from './home'
import StockIndexItem from "./stock_index_item";

const mapStateToProps = (state, ownProps) => ({
  orders: state.entities.orders,
  stock: state.entities.stocks[ownProps.symbol],
  intradayData: state.entities.stocks[ownProps.symbol].intradayData,
  // latestPrice: state.entities.stocks[ownProps.symbol].intradayData.quote.latestPrice
});

const mapDispatchToProps = dispatch => ({ 
  fetchStockIntradayData: symbol => dispatch(fetchStockIntradayData(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockIndexItem);