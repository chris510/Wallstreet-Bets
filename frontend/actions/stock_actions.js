import * as StockAPIUtil from '../util/stock_api_util';

export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_STOCKS = 'RECEIVE_STOCKS'

export const RECEIVE_STOCK_NEWS = 'RECEIVE_STOCK_NEWS'


const receiveStock = stock => ({
  type: RECEIVE_STOCK,
  stock
});

const receiveStocks = payload => ({
  type: RECEIVE_STOCKS,
  payload
});

const receiveStockNews = (symbol, news) => ({
  type: RECEIVE_STOCK_NEWS,
  symbol,
  news
})

export const fetchStocks = () => dispatch => (
  StockAPIUtil.fetchPayload()
    .then( payload => dispatch(receiveStocks(payload)))
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