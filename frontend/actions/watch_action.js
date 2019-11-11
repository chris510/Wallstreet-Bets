import * as WatchAPIUtil from '../util/watches_api_util';

export const RECEIVE_WATCHED_STOCKS = 'RECEIVE_WATCHED_STOCKS';
// export const RECEIVE_WATCHED_STOCK = 'RECEIVE_WATCHED_STOCK';
// export const CREATE_WATCHED_STOCK = 'CREATE_WATCHED_STOCK';
// export const REMOVE_WATCHED_STOCK = 'REMOVE_WATCHED_STOCK';

export const RECEIVE_WATCH_INTRADAY_DATA = 'RECEIVE_WATCH_INTRADAY_DATA';

const receiveWatches = watchedStocks => ({
  type: RECEIVE_WATCHED_STOCKS,
  watchedStocks
});

const receiveWatchIntradayData = (symbol, intradayData) => ({
  type: RECEIVE_WATCH_INTRADAY_DATA,
  intradayData,
  symbol
})

// const receiveWatchedStock = watchedStock => ({
//   type: RECEIVE_WATCHED_STOCK,
//   watchedStock
// });

// const postWatchedStock = watchedStock => ({
//   type: CREATE_WATCHED_STOCK,
//   watchedStock
// });

export const fetchWatchedStocks = () => dispatch => (
  WatchAPIUtil.fetchWatchedStocks()
    .then( watchedStocks => dispatch(receiveWatches(watchedStocks)))
    // .then( res => console.log(res))
);

export const fetchWatchIntradayData = symbol => dispatch => (
  WatchAPIUtil.fetchWatchIntradayData(symbol)
    .then(intradayData => dispatch(receiveWatchIntradayData(symbol, intradayData)))
);

// export const fetchWatchedStock = watchId => dispatch (
//   WatchAPIUtil.fetchWatchedStock()
//     .then( watchedStock => dispatch(receiveWatchedStock(watchedStock)))
// );

// export const createWatchedStock = watch => dispatch (
//   WatchAPIUtil.createWatchedStock(watch)
//     .then( watchedStock => dispatch(postWatchedStock(watchedStock)) )
// );


// const removeWatchedStock = watchId => ({
//   type: REMOVE_WATCHED_STOCK,
//   watchId
// })