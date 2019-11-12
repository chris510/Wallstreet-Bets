import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStockIntradayData } from '../../actions/stock_actions';
import StockShowChart from '../stock_show/stock_show_chart';

const mapStateToProps = (state, ownProps) => ({
  stock: state.entities.stocks[ownProps.match.params.symbol],
  // intradayData: state.entities.stocks[ownProps.match.params.symbol].intradayData
  intradayData: ownProps.intradayData
});

const mapDispatchToProps = dispatch => ({ 
  fetchStockIntradayData: (symbol) => dispatch(fetchStockIntradayData(symbol))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StockShowChart));