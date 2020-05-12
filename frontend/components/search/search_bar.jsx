import React from 'react';
import SVGIcon from '../svg_icons/svg.icons';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
    this.checkMatch = this.checkMatch.bind(this);
    this.redirectToStockShow = this.redirectToStockShow.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  checkMatch(stock) {
    let match = false;
    let input = this.state.input.toLowerCase();
    const _checkMatch = (foundStock) => {
      foundStock = foundStock.toLowerCase();
      return input.length <= foundStock.length && foundStock.slice(0, input.length) === (input);
    } 
    if (stock && (_checkMatch(stock.name) || _checkMatch(stock.symbol))) match = true;
    return match;
  }

  searchStocks() {
    const results = [];
    if (this.props.allStocks) {
      const maxResults = 6;
      const stocks = Object.values(this.props.allStocks)
      let allStocksSize = stocks.length;
      let i = 0;
      while (results.length < maxResults && i < allStocksSize) {
        if (this.checkMatch(stocks[i])) {
          results.push(stocks[i]);
        }
        i++;
      }
    }
    return results;
  }

  handleInput(e) {
    this.setState({ 
      input: e.target.value
    });
  }

  redirectToStockShow(symbol) {
    this.props.history.push(`/stocks/${symbol}`);
    this.setState({
      input: ""
    })
  }

  resetSearch() {
    this.setState({
      input: ""
    })
  }

  renderSearchResults() {
    if (this.state.input.length > 0) {
      return (
        <div className="search-results-container">
          <div className="search-results-header">
            Stocks
          </div>
          <div className="search-results-item-container">
          {this.searchStocks().map((stock, i) => {
            return (
              // <Link to={`/stocks/${stock.symbol}`} className="search-link">
                <div key={i} className="search-results-item" onClick={() => this.redirectToStockShow(stock.symbol)}>
                  <div className="search-results-symbol">{stock.symbol}</div>
                  <div className="search-results-name">{stock.name}</div>
                </div>
              // </Link>
            )
          })}
          </div>
        </div>
      )
    }
  }

  render(){
    return (
      <div className="search-bar-container" onMouseLeave={this.resetSearch}>
        <div className="search-icon">
          <SVGIcon name="search" width={25} />
        </div>
        <input 
          type="text"
          className="search-bar-input"
          placeholder="Search"
          value={this.state.input}
          onChange={this.handleInput}/>
        {this.renderSearchResults()}
      </div>
    )
  }
}

export default SearchBar;