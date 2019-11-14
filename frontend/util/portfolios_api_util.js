export const fetchPortfolios = () => (
  $.ajax({
    method: 'GET',
    url: `/api/portfolios`
  })
);