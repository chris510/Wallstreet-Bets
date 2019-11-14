import { connect } from 'react-redux';
import { fetchIntradayData } from '../../actions/stock_actions';
import { fetchUserPortfolios } from '../../actions/portfolio_actions';
import Portfolio from './portfolio';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  // portfolio: ownProps.portfolio
  portfolio: Object.values(state.entities.portfolios)
});

const mapDispatchToProps = dispatch => ({
  // fetchIntradayData: (ticker) => dispatch(fetchIntradayData(ticker)),
  fetchUserPortfolios: () => dispatch(fetchUserPortfolios())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Portfolio));