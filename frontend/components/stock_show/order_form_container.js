import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OrderForm from './order_form';
import { fetchStockPrice } from '../../actions/stock_actions';
import { openModal, closeModal } from '../../actions/modal_actions'; 
import { createOrder } from '../../actions/order_actions';
import { addToWatches, removeFromWatches } from '../../actions/watch_actions';

const mapStateToProps = (state, ownProps )=> ({
  stock: state.entities.stocks[ownProps.stock.symbol],
  watches: state.entities.watches,
  watchSymbols: Object.keys(state.entities.watches),
  currentUser: state.session
});

const mapDispatchToProps = dispatch => ({
  fetchStockPrice: (symbol) => dispatch(fetchStockPrice(symbol)),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: (modal) => dispatch(closeModal(modal)),
  createOrder: (order) => dispatch(createOrder(order)),
  addToWatches: (stock) => dispatch(addToWatches(stock)),
  removeFromWatches: (watchId, symbol) => dispatch(removeFromWatches(watchId, symbol))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderForm)); 