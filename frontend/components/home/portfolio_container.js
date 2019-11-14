import { connect } from 'react-redux';
import { fetchIntradayData } from '../../actions/stock_actions';
import { fetchUserPortfolios } from '../../actions/portfolio_actions';
import Portfolio from './portfolio';

const mapStateToProps = (state, ownProps) => {

};

const mapDispatchToProps = dispatch => ({
  // fetchIntradayData: (ticker) => dispatch(fetchIntradayData(ticker)),
  fetchUserPortfolios: () => fetchUserPortfolios()
});

export default connect(null, mapDispatchToProps)(Portfolio);