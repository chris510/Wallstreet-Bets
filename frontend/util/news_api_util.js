import { NEWS_API_KEY } from 'react-native-dotenv';

export const fetchNews = () => (
  $.ajax({
    method: 'GET',
    url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
  })
)