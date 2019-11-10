import { connect } from 'react-redux';
import { fetchNews } from '../../../actions/news_actions';
import NewsIndex from './news_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({
  fetchNews: () => fetchNews()
})

export default (mapStateToProps, mapDispatchToProps)(NewsIndex);