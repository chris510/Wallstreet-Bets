import * as NewsAPIUtil from '../util/news_api_util';

export const RECEIVE_NEWS = 'RECEIVE_NEWS';

const receiveNews = news => ({
  type: RECEIVE_NEWS,
  news
});

export const fetchNews = () => dispatch => (
  NewsAPIUtil.fetchNews()
    .then(news => dispatch(receiveNews(news)))
);

export const fetchStockNews = (symbol) => dispatch => (
  NewsAPIUtil.fetchStockNews(symbol)
    .then(news => dispatch(receiveNews(news)))
);



