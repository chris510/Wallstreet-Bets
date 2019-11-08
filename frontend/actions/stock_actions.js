import * as StockAPIUtil from '../util/stock_api_util';

// import { SOME_KEY, AV_API_KEY } from 'react-native-dotenv';

export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_STOCKS = 'RECEIVE_STOCKS'

// const alpha = require('alphavantage')({ key: `${AV_API_KEY}` });

const receiveStock = stock => ({
  type: RECEIVE_STOCK,
  stock
});

const receiveStocks = stocks => ({
  type: RECEIVE_STOCKS,
  stocks
});

export const fetchStocks = () => dispatch => (
  StockAPIUtil.fetchStocks()
    .then( stocks => dispatch(receiveStocks(stocks)))
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