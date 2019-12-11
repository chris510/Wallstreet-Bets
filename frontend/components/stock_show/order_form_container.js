import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OrderForm from './order_form';
import { fetchStockPrice } from '../../actions/stock_actions';
import { openModal, closeModal } from '../../actions/modal_actions'; 
import { createOrder, deleteOrder } from '../../actions/order_actions';

const mapStateToProps = (state, ownProps )=> ({
  stock: state.entities.stocks[ownProps.stock.symbol],
  currentUser: state.session
});

const mapDispatchToProps = dispatch => ({
  fetchStockPrice: (symbol) => dispatch(fetchStockPrice(symbol)),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: (modal) => dispatch(closeModal(modal)),
  createOrder: (order) => dispatch(createOrder(order)),
  deleteOrder: (orderId) => dispatch(deleteOrder(orderId))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm); 