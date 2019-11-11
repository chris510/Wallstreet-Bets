import * as WatchAPIUtil from '../util/watches_api_util';

export const RECEIVE_WATCHED_STOCKS = 'RECEIVE_WATCHED_STOCKS';
export const RECEIVE_WATCHED_STOCK = 'RECEIVE_WATCHED_STOCK';
export const CREATE_WATCHED_STOCK = 'CREATE_WATCHED_STOCK';
export const REMOVE_WATCHED_STOCK = 'REMOVE_WATCHED_STOCK';

const receiveWatchedStocks = watchedStocks => ({
  type: RECEIVE_WATCHED_STOCKS,
  watchedStocks
});

const receiveWatchedStock = watchedStock => ({
  type: RECEIVE_WATCHED_STOCK,
  watchedStock
});

const createWatchedStock = watchedStock => ({
  type: CREATE_WATCHED_STOCK,
  watchedStock
});

export const fetchWatchedStocks = () => dispatch (
  WatchAPIUtil.fetchWatchedStocks()
    .then( watchedStocks => dispatch(receiveWatchedStocks(watchedStocks)))
);

export const fetchWatchedStock = () => dispatch (
  WatchAPIUtil.fetchWatchedStock()
    .then( watchedStock => dispatch(receiveWatchedStock(watchedStock)))
);

export const createWatchedStock = watch => dispatch (
  WatchAPIUtil.createWatchedStock(watch)
    .then( watchedStock => dispatch(createWatchedStock(watchedStock)) )
);


// const removeWatchedStock = watchId => ({
//   type: REMOVE_WATCHED_STOCK,
//   watchId
// })