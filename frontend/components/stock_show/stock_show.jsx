import React from 'react';
import { Link } from 'react-router-dom';
import NewsIndexItem from '../home/news/news_index_item';
import StockItemChartContainer from '../home/stock_item_chart';
import OrderFormContainer from '../../components/stock_show/order_form_container';

class StockShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   odometerValue: 0
    // };
    this.renderLatestPrice = this.renderLatestPrice.bind(this)
  }

  componentDidMount() {
    this.props.fetchStockInfo(this.props.match.params.symbol);
    this.props.fetchStockNews(this.props.match.params.symbol);
    // this.setState({ odometerValue: 600 }); 
  }

  renderLatestPrice() {
    if (this.props.stock.intradayData) {
      let lastItem = (this.props.stock.intradayData.length - 1);
      let price = this.props.stock.intradayData[lastItem].close;
      return (
        <div className="stock-index-current-price">
          ${price}
        </div>
      )
    }
  }

  render() {

    const { stock, news } = this.props
    // const { odometerValue } = this.state;
    // if (stock.hasOwnProperty('news') && stock.hasOwnProperty('info')) {
      if (!stock || !stock.info) {
        return null;
      } else {
        return ( 
          <div className="stock-show-main">
            <div className="stock-show-container-1">
                <div className="stock-show-chart-container">
                  <div className="stock-show-chart-header">
                    <div className="stock-show-name">
                      {stock.name}
                    </div>
                    <div className="stock-show-price">
                    {this.renderLatestPrice()}
                    </div>
                    <div className="stock-show-change">
                      +$3.49 (+1.01%)
                    </div>
                  </div>
                  <StockItemChartContainer
                    intradayData={stock.intradayData}
                    name='stock-show-chart'
                  />
                  <div className="stock-show-chart-ranges">
                    <li>1D</li>
                    <li>1W</li>
                    <li>1M</li>
                    <li>3M</li>
                    <li>1Y</li>
                    <li>5Y</li>
                  </div>
                </div>
                <div className="stock-info-container">
                  <div className="stock-info-header">About</div>
                  <div className="stock-info-description">
                    {stock.info.description}
                  </div>
                  <div className="stock-stats-container">
                    <div className="stock-stats-1">
                      <div>
                        <div>CEO</div>
                        <div>{stock.info.CEO}</div>
                      </div>
                      <div>
                        <div>Sector</div>  
                        <div>{stock.info.sector}</div>
                      </div>
                      <div>
                        <div>Industry</div>
                        <div>{stock.info.industry}</div>
                      </div>
                      <div>
                      <div>Exchange</div>
                      <div>{stock.info.exchange}</div>
                      </div>
                    </div> 
                    <div className="stock-stats-2">
                        {/* <div>{stock.info.state}</div>
                        <div>{stock.info.city}</div>
                        <div>{stock.info.employees}</div> */}
                    </div>
                  </div>
                </div>
                <div className="stock-show-news-container">
                  <div className="index-title">
                    Recent News
                    </div>
                  {news.map(singleNews => {
                    return (
                      <div className="news-index-item">
                        <NewsIndexItem
                          key={singleNews.id}
                          url={singleNews.url}
                          source={singleNews.source.name}
                          title={singleNews.title}
                          description={singleNews.description}
                          image={singleNews.urlToImage}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            <div className="stock-show-container-2">
              <OrderFormContainer
                stock={stock}
              />
              {/* <div className="stock-order-container">
                <div className="stock-order-form-container">
                  <div className="stock-order-type"></div>
                  <div className="stock-order-stats">
                    <form>
                      <div className="order-form-header">
                        <div>ORDER BUY</div>
                        <div>ORDER SELL</div>
                      </div>
                      <div className="order-form-row-1">
                        <h3>Shares</h3>
                        <input type="text" className="input-shares" placeholder="0" />
                      </div>
                      <div className="order-form-row-2">
                        <div className="order-form-market">
                          <h3>Market Price</h3>
                        </div>
                        <div className="order-form-price">
                          <h3>$62.43</h3>
                        </div>
                      </div>
                      <div className="order-form-row-3">
                        <h3>Estimated Cost</h3>
                        <div className="order-form-cost-4">
                        </div>
                      </div>
                      <div className="order-form-row-5">
                      </div>
                      <div className="order-form-row-6">
                        <input type="submit" className="order-form-submit" />
                      </div>
                    </form>
                  </div>
                  <div className="stock-submit-button-container"></div>
                  <div className="buying-power"></div>
                </div>
                <div className="watch-submit-option"></div>
              </div> */}
            </div>
          </div>
        )
      }
  //   } else {
  //     return (
  //       <div>USER DOESN'T HAVE THE STOCKS AND NEWS IN THE STATE</div>
  //     )
  //   }  
  }
};

export default StockShow;