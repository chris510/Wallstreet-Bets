import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StockItemChart from './stock_item_chart';
import { fetchStockIntradayData, fetch1YrHistoricalData, fetch5YrData } from '../../actions/stock_actions';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
  fetchStockIntradayData: symbol => dispatch(fetchStockIntradayData(symbol)),
  fetch1YrHistoricalData: symbol => dispatch(fetch1YrHistoricalData(symbol)),
  fetch5YrData: symbol => dispatch(fetch5YrData(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockItemChart);