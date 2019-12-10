import React from 'react';
import { Link } from 'react-router-dom';
import NewsIndexItem from '../home/news/news_index_item';
import StockItemChartContainer from '../home/stock_item_chart_container';
import OrderFormContainer from '../../components/stock_show/order_form_container';
import { parseFloatToDollars } from '../../util/numbers.util';
// import Odometer from 'react-odometerjs';

class StockShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0
    };
    // this.renderLatestPrice = this.renderLatestPrice.bind(this)
  }

  componentDidMount() {
    this.props.fetchStock(this.props.match.params.symbol)
    this.props.fetchStockInfo(this.props.match.params.symbol);
    this.props.fetchStockNews(this.props.match.params.symbol);
    // this.props.fetchStockIntradayData(this.props.match.params.symbol);      
    // this.props.fetch1YrHistoricalData(this.props.match.params.symbol);
  }

  // renderLatestPrice() {
  //   if (this.props.stock.intradayData) {
  //     let lastItem = (this.props.stock.intradayData.length - 1);
  //     let price = this.props.stock.intradayData[lastItem].close;
  //     return (
  //       <div className="stock-show-price">
  //         {/* <Odometer  */}
  //           {/* value= */}
  //           {parseFloatToDollars(price)}
  //         {/* /> */}
  //       </div>
  //     )
  //   }
  // }

  render() {
    const { stock, news } = this.props
    // const { odometerValue } = this.state;
    // if (stock.hasOwnProperty('news') && stock.hasOwnProperty('info')) {
      if (!stock) {
        return null;
      } else {
        return ( 
          <div className="stock-show-main">
            <div className="stock-show-container-1">
                  <StockItemChartContainer
                    intradayData={stock.intradayData}
                    // info={info}
                    // historicalData={stock.historicalData}
                    stock={stock}
                    name='stock-show-chart'
                  />
                <div className="stock-info-container">
                  <div className="stock-info-header">About</div>
                  <div className="stock-info-description">
                    {stock.description}
                  </div>
                  <div className="stock-stats-container">
                    <div className="stock-stats-1">
                      <div>
                        <div className="about-headers">CEO</div>
                        <div>{stock.CEO}</div>
                      </div>
                      <div>
                        <div className="about-headers">Employees</div>  
                        <div>{stock.employees}</div>
                      </div>
                      <div>
                        <div className="about-headers">Headquarters</div>
                        <div>{stock.city} {stock.state}</div>
                      </div>
                      <div>
                        <div className="about-headers">Exchange</div>
                        <div>{stock.exchange}</div>
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
                  {news.slice(0,5).map(singleNews => {
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
                intradayData={intradayData}
              />
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