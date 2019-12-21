import * as WatchAPIUtil from '../util/watches_api_util';

export const RECEIVE_WATCHED_STOCKS = 'RECEIVE_WATCHED_STOCKS';
export const RECEIVE_WATCHED_STOCK = 'RECEIVE_WATCHED_STOCK';
export const REMOVE_WATCHED_STOCK = 'REMOVE_WATCHED_STOCK';

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

const receiveWatchedStock = stock => ({
  type: RECEIVE_WATCHED_STOCK,
  stock
});

const removeWatchedStock = (stock, symbol) => ({
  type: REMOVE_WATCHED_STOCK,
  stock,
  symbol
})

export const fetchWatchedStocks = () => dispatch => (
  WatchAPIUtil.fetchWatchedStocks()
    .then( watchedStocks => dispatch(receiveWatches(watchedStocks)))
);

export const fetchWatchIntradayData = symbol => dispatch => (
  WatchAPIUtil.fetchWatchIntradayData(symbol)
    .then(intradayData => dispatch(receiveWatchIntradayData(symbol, intradayData)))
);

export const addToWatches = watch => dispatch => (
  WatchAPIUtil.addToWatches(watch).
    then(watch => dispatch(receiveWatchedStock(watch)))
)

export const removeFromWatches = (stock, symbol) => dispatch => (
  WatchAPIUtil.removeFromWatches(stock)
    .then(stock => dispatch(removeWatchedStock(stock, symbol)))
)
