import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="search-bar-wrapper">
        <div className="search-bar-container">
          <input 
            aria-labelledby="search-button" />
          <button id="search-button" type="submit">
            <SVGIcon name="search" width={25} />
          </button>
        </div>
      </div>
    )
  }
}

export default SearchBar;