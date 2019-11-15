import * as StockAPIUtil from '../util/stock_api_util';

export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';

export const RECEIVE_STOCK_INTRADAY_DATA = 'RECEIVE_STOCK_INTRADAY_DATA';
export const RECEIVE_HISTORICAL_DATA = 'RECEIVE_HISTORICAL_DATA';
export const RECEIVE_5YR_DATA = 'RECEIVE_5YR_DATA'
export const RECEIVE_STOCK_INFO = 'RECEIVE_STOCK_INFO';
export const RECEIVE_STOCK_NEWS = 'RECEIVE_STOCK_NEWS';


const receiveStock = stock => ({
  type: RECEIVE_STOCK,
  stock
});

const receiveStocks = payload => ({
  type: RECEIVE_STOCKS,
  payload
});

const receiveStockIntradayData = (symbol, intradayData) => ({
  type: RECEIVE_STOCK_INTRADAY_DATA,
  intradayData,
  symbol
});

const receiveHistoricalData = (symbol, historicalData) => ({
  type: RECEIVE_HISTORICAL_DATA,
  symbol,
  historicalData
});

const receive5YrData = (symbol, fiveYearData) => ({
  type: RECEIVE_5YR_DATA,
  symbol,
  fiveYearData
})

const receiveStockInfo = (symbol, info) => ({
  type: RECEIVE_STOCK_INFO,
  info,
  symbol
});

const receiveStockNews = (symbol, news) => ({
  type: RECEIVE_STOCK_NEWS,
  news,
  symbol
});

export const fetchStocks = () => dispatch => (
  StockAPIUtil.fetchPayload()
    .then( payload => dispatch(receiveStocks(payload)))
);

export const fetchStock = symbol => dispatch => {
  const doFetches = () => Promise.all([
    dispatch(fetchStockInfo(symbol)),
    dispatch(fetchStockNews(symbol))
  ]);

  StockAPIUtil.fetchStock(symbol)
    .then(stock => dispatch(receiveStock(stock)))
    .then(doFetches)
};

export const fetchStockIntradayData = symbol => dispatch => (
  StockAPIUtil.fetchStockIntradayData(symbol)
    .then( intradayData => dispatch(receiveStockIntradayData(symbol, intradayData)))
);

export const fetch1YrHistoricalData = symbol => dispatch => (
  StockAPIUtil.fetch1YrHistoricalData(symbol)
    .then( historicalData => dispatch(receiveHistoricalData(symbol,historicalData)))
);

export const fetch5YrData = symbol => dispatch => (
  StockAPIUtil.fetch5yrHistoricalData(symbol)
    .then( (fiveYearData) => dispatch(receive5YrData(symbol, fiveYearData)))
);

export const fetchStockInfo = symbol => dispatch => (
  StockAPIUtil.fetchStockInfo(symbol)
    .then( info => dispatch(receiveStockInfo(symbol, info)))
);

export const fetchStockNews = (symbol) => dispatch => (
  StockAPIUtil.fetchStockNews(symbol)
    .then( stockNews => dispatch(receiveStockNews(symbol, stockNews)))
);

// export const fetchStock = symbol => dispatch => (
//   StockAPIUtil.fetchStock(symbol)
//     .then( () => dispatch(receiveStock(stock)))
//     .then( stock => console.log(stock))
// )

// export const fetchStock = symbol => (
//   alpha.data.intraday({symbol})
//   .then(data => (console.log(data)))
// )