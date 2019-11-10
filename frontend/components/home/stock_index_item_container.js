import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStocks } from '../../actions/stock_actions';
import { fetchNews } from '../../actions/news_actions';
import Home from './home'

const mapStateToProps = state => ({
  orders: state.entities.orders
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home);