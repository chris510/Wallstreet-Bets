import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
    this.checkMatch = this.checkMatch.bind(this);
  }

  checkMatch(stock) {
    let match = false;
    let input = this.state.input.toLowerCase();
    const _checkMatch = (foundStock) => {
      foundStock = foundStock.toLowerCase();
      return input.length <= foundStock.length && foundStock.slice(0, input.length) === (input);
    } 
    if (stock.name && (_checkMatch(stock.name) || _checkMatch(stock.symbol))) match = true;
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
          results.push(stocks[i])
          i++
        }
      }
    }
    return results;
  }
  
  redirectToStockShow(symbol) {
    this.props.history.push(`/stocks/${ticker}`);
  }

  handleInput(e) {
    this.setState({ 
      input: e.target.value
    });
  }

  renderSearchResults() {
    if (this.state.input.length > 0) {
      return (
        <div className="search-results-container">
          <div className="search-results-header">
            Stocks
          </div>
          {this.searchStocks().map((stock, i) => {
            return (
              <div key={i} className="search-result-item">
                <div className="search-result-symbol">{stock.symbol}</div>
                <div className="search-result-name">{stock.name}</div>
              </div>
            )
          })}
        </div>
      )
    }
  }

  render(){
    return (
      <div className="search-bar-wrapper">
        <div className="search-bar-container">
          <input 
            type="text"
            placeholder="Search"
            onChange={this.handleInput} />
          <button id="search-button" type="submit">
            {/* <SVGIcon name="search" width={25} /> */}
          </button>
          {this.renderSearchResults()}
        </div>
      </div>
    )
  }
}

export default SearchBar;