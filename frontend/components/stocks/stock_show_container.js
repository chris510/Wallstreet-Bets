import React from 'react';
import { connect } from 'react-redux';
import { fetchStockNews } from '../../actions/stock_actions';
import StockShow from './stock_show';

const mapStateToProps = (state, ownProps) => ({
  stockNews: state.entities.stocks[ownProps.match.params.symbol].news.articles
});

const mapDispatchToProps = dispatch => ({
  fetchStockNews: (symbol) => dispatch(fetchStockNews(symbol))
})

export default connect(mapStateToProps, mapDispatchToProps)(StockShow);