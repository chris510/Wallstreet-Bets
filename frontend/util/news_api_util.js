export const fetchNews = () => (
  $.ajax({
    method: 'GET',
    url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${window.newsAPIKey}`
  })
)