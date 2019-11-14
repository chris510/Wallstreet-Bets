import * as PortfolioAPIUtil from '../util/portfolios_api_util';

export const RECEIVE_USER_PORTFOLIO = 'RECEIVE_USER_PORTFOLIO';

const receiveUserPortfolio = portfolio => ({
  type: RECEIVE_USER_PORTFOLIO,
  portfolio
});

export const fetchUserPortfolios = () => dispatch => {
  PortfolioAPIUtil.fetchUserPortfolios()
    .then(portfolio => dispatch(receiveUserPortfolio(portfolio)))
};