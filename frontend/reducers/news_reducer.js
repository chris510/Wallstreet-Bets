import { RECEIVE_NEWS } from '../actions/news_actions';

const newsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_NEWS:
      return action.news.articles
    default:
      return oldState;
  }
}

export default newsReducer;