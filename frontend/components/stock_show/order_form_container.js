import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OrderForm from './order_form';
import { fetchStockPrice } from '../../actions/stock_actions';

const mapStateToProps = (state, ownProps )=> ({
  stock: state.entities.stocks[ownProps.stock.symbol]
});

const mapDispatchToProps = dispatch => ({
  fetchStockPrice: (symbol) => dispatch(fetchStockPrice(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm); 