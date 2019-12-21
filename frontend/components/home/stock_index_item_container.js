import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStocks, fetchStockIntradayData } from '../../actions/stock_actions';
import { fetchWatchIntradayData }  from '../../actions/watch_actions';
import StockIndexItem from "./stock_index_item";

const mapStateToProps = (state, ownProps) => ({
  orders: state.entities.orders,
  stocks: state.entities.stocks,
  watches: state.entities.watches
  // intradayData: state.entities.stocks[ownProps.symbol].intradayData,
  // latestPrice: state.entities.stocks[ownProps.symbol].intradayData.quote.latestPrice
});

const mapDispatchToProps = dispatch => ({ 
  fetchStockIntradayData: symbol => dispatch(fetchStockIntradayData(symbol)),
  fetchWatchIntradayData: symbol => dispatch((fetchWatchIntradayData(symbol)))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockIndexItem);