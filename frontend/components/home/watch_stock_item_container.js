import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import WatchStockItem from './watch_stock_item';
import { fetchWatchIntradayData } from '../../actions/watch_action';

const mapStateToProps = (state, ownProps) => ({
  orders: state.entities.orders,
  stock: state.entities.watches[ownProps.symbol],
  intradayData: state.entities.watches[ownProps.symbol].intradayData,
  // latestPrice: state.entities.watches[ownProps.symbol].intradayData.quote.latestPrice
});

const mapDispatchToProps = dispatch => ({
  fetchWatchIntradayData: symbol => dispatch(fetchWatchIntradayData(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchStockItem);