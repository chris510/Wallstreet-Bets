import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { parseFloatToDollars } from '../../util/numbers.util';
import { fetchUserPortfolios } from '../../util/portfolios_api_util';
// import Odometer from 'react-odometerjs';


const RED = "#EB5333";
const GREEN = "#67CF9A";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: this.props.portfolio,
      intradayData: [],
      historicalData: [],
      fiveYearData: [],
      activeRange: '5Y',
      lineColor: GREEN,
      price: 0
    }
    this.changeDate = this.changeDate.bind(this);
    this.handleChangeRange = this.handleChangeRange.bind(this);
    this.setRangeButtonStatus = this.setRangeButtonStatus.bind(this);
    this.chartLineColor = this.chartLineColor.bind(this);
  }

  componentDidMount() {
    if (!this.state.fiveYearData.length > 0) {
      this.props.fetchUserPortfolios()
        .then( result => {debugger
          this.setState({
          chartData: Object.values(result.portfolio),
          fiveYearData: Object.values(result.portfolio)
        }
        )});
    } else {
      this.setState({
        chartData: this.props.portfolio,
        fiveYearData: this.props.portfolio
      });
    };
  }

  changeDate(range) {
    let newChartData;
    let fiveYearLength = this.state.fiveYearData.length;
    // let portfolioLength = this.props.portfolio.length;
    if (range === "1D") {
      newChartData = this.state.intradayData
    } else if (range === "1W") {
      newChartData = this.state.fiveYearData.slice(fiveYearLength - 5, fiveYearLength)
      // newChartData = this.props.portfolio.slice(portfolioLength - 5, portfolioLength);
    } else if (range === "1M") {
      newChartData = this.state.fiveYearData.slice(fiveYearLength - 21, fiveYearLength)
      // newChartData = this.props.portfolio.slice(portfolioLength - 21, portfolioLength);
    } else if (range === "3M") {
      newChartData = this.state.fiveYearData.slice(fiveYearLength - 66, fiveYearLength)
      // newChartData = this.props.portfolio.slice(portfolioLength - 66, portfolioLength);
    } else if (range === "1Y") {
      newChartData = this.state.fiveYearData.slice(fiveYearLength - 253, fiveYearLength)
      // newChartData = this.props.portfolio.slice(portfolioLength - 253, portfolioLength);
    } else if (range === "5Y") {
      newChartData = this.state.fiveYearData
      // newChartData = this.props.portfolio
    }
    
    this.setState({
      chartData: newChartData,
    })
    debugger
  }

  handleChangeRange(e) {
    let range = e.currentTarget.textContent;
    this.setState({
      activeRange: range
    });
    this.changeDate(range);
  }

  setRangeButtonStatus(range) {
    let res = "portfolio-range-btn";
    if (this.state.activeRange === range) {
      res = `portfolio-range-btn-active`;
    }
    return res;
  }

  chartLineColor() {
    let newLineColor;

    if (this.state.chartData.length !== 0 && this.state.chartData[0].close > this.state.chartData[this.state.chartData.length - 1].close) {
      newLineColor = RED;
    } else {
      newLineColor = GREEN;
    }

    this.setState({
      LineColor: newLineColor
    })

  }

  render() {
    return (
      <div className="portfolio-chart-container">
        <div className="portfolio-chart-header">
          <div className="portfolio-name">
            Balance
          </div>
          <div className="portfolio-price">
            {/* {this.state.price} */} $54.38
          </div>
          <div className="portfolio-change">
            +$3.49 (+1.01%)
          </div>
        </div>
        <div className="portfolio-chart">
          <ResponsiveContainer width={600} height={200} className="portfolio-graph-chart-container">
            <LineChart data={this.state.chartData} cursor="pointer">
              <Line
                type="linear"
                dataKey="balance"
                stroke={this.state.lineColor}
                strokeWidth={2}
                dot={false}
                connectNulls={true}
              />
              <Tooltip cursor={{ stroke: "lightgrey", strokeWidth: 2 }} />
              <XAxis hide={true} dataKey='balance' />
              <YAxis domain={['30000', '120000']} hide={true} />
            </LineChart>
          </ResponsiveContainer>
          <div className="portfolio-chart-ranges">
            <li className={this.setRangeButtonStatus("1D")} onClick={this.handleChangeRange}>1D</li>
            <li className={this.setRangeButtonStatus("1W")} onClick={this.handleChangeRange}>1W</li>
            <li className={this.setRangeButtonStatus("1M")} onClick={this.handleChangeRange}>1M</li>
            <li className={this.setRangeButtonStatus("3M")} onClick={this.handleChangeRange}>3M</li>
            <li className={this.setRangeButtonStatus("1Y")} onClick={this.handleChangeRange}>1Y</li>
            <li className={this.setRangeButtonStatus("5Y")} onClick={this.handleChangeRange}>5Y</li>
          </div>
        </div>
      </div>
    )
  }
};

export default Portfolio;