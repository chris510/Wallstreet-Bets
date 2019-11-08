import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStocks } from '../../actions/stock_actions';

import Home from './home'

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  stocks: Object.values(state.entities.stocks)
})

const mapDispatchToProps = dispatch => ({
  fetchStocks: () => dispatch(fetchStocks())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);