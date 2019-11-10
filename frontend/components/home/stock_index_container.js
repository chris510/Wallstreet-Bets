import { connect } from 'react-redux';
import StockIndex from './stock_index';
import { fetchStocks } from '../../actions/stock_actions'


const mapStateToProps = state => ({
  stocks: state.entities.stocks,
  orders: state.entities.orders
});

const mapDispatchToProps = dispatch => ({
  fetchStocks: () => dispatch(fetchStocks()),
})

export default connect(mapStateToProps, mapDispatchToProps)(StockIndex);