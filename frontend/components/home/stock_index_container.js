import { connect } from 'react-redux';
import StockIndex from './stock_index';
import { fetchStocks, fetchStockIntradayData } from '../../actions/stock_actions'
import { fetchWatchedStocks } from '../../actions/watch_action';


const mapStateToProps = state => ({
  stocks: state.entities.stocks,
  orders: state.entities.orders,
  watches: state.entities.watches
});

const mapDispatchToProps = dispatch => ({
  fetchStocks: () => dispatch(fetchStocks()),
  fetchWatchedStocks: () => dispatch(fetchWatchedStocks()),
  fetchStockIntradayData: symbol => dispatch(fetchStockIntradayData(symbol))
})

export default connect(mapStateToProps, mapDispatchToProps)(StockIndex);