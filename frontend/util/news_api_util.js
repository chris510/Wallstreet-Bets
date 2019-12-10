const NEWS_API_KEY = "8868a878c38c47c183af5cdbde202881";

export const fetchNews = () => (
  $.ajax({
    method: 'GET',
    url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
  })
);

export const fetchStockNews = symbol => (
  $.ajax({
    method: 'GET',
    url: `https://newsapi.org/v2/everything?q=${symbol}&apiKey=${NEWS_API_KEY}`
  })
  
);