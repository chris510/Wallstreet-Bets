export const fetchNews = () => (
  $.ajax({
    method: 'GET',
    url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${window.newsAPIKey}`
  })
);

// export const fetchStockNews = symbol => (
//   $.ajax({
//     method: 'GET',
//     url: `https://newsapi.org/v2/everything?q=${symbol}&apiKey=${window.newsAPIKey}`
//   })
// );