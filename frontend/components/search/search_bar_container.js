import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './search_bar';

const mapStateToProps = (state, ownProps) => ({
  allStocks: state.entities.stocks.allStocks
})

const mapDispatchToProps = dispatch => ({

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));