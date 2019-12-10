import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OrderForm from './order_form';
import { fetchStockPrice } from '../../actions/stock_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps )=> ({
  stock: state.entities.stocks[ownProps.stock.symbol]
});

const mapDispatchToProps = dispatch => ({
  fetchStockPrice: (symbol) => dispatch(fetchStockPrice(symbol)),
  openModal: () => dispatch(openModal('order')),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm); 