export const fetchUserPortfolios = () => (
  $.ajax({
    method: 'GET',
    url: `/api/portfolios`
  })
);