import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { parseFloatToDollars, parseFloatToPosNegDollars, parseFloatToPostNegPercent } from '../../util/numbers.util';
import { fetchUserPortfolios } from '../../util/portfolios_api_util';
import Odometer from 'react-odometerjs';


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
      currentBalance: 124001.40,
      flux: 0,
      fluxPrecent: 0

    }
    this.changeDate = this.changeDate.bind(this);
    this.handleChangeRange = this.handleChangeRange.bind(this);
    this.setRangeButtonStatus = this.setRangeButtonStatus.bind(this);
    this.chartLineColor = this.chartLineColor.bind(this);
    this.calculateBalance = this.calculateBalance.bind(this);
    this.calculateFlux = this.calculateFlux.bind(this);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.resetHoverPrice = this.resetHoverPrice.bind(this);
  }

  componentDidMount() {
    if (!this.state.fiveYearData.length > 0) {
      this.props.fetchUserPortfolios()
        .then( result => 
          this.setState({
          chartData: Object.values(result.portfolio),
          fiveYearData: Object.values(result.portfolio)
         }
        )
        // .then(result => this.setintradayData(Object.values(result.portfolio)))
      );
    } else {
      this.setState({
        chartData: this.props.portfolio,
        fiveYearData: this.props.portfolio
      });
    };
  }

  calculateBalance() {
    let balance = 0
    if (this.state.fiveYearData.length > 0) {
      balance += this.state.fiveYearData[this.state.fiveYearData.length - 1].balance
      return parseFloatToDollars(balance);
    } else {
      return parseFloatToDollars(balance);
    }
  }

  calculateFlux(dataPoint) {
    let newFlux = 0;
    let newFluxPercent = 0;

    debugger
    if (dataPoint) {
      let firstData = this.state.chartData[0];
      newFlux = dataPoint.balance - firstData.balance
      newFluxPercent = (1 - firstData.balance / dataPoint.balance) * 100;
    }
    return this.setState({
      flux: newFlux,
      fluxPercent: newFluxPercent
    });
  }

  handleMouseHover(e) {
    if (e.activePayload) {
      let price = e.activePayload[0].payload.balance;
      this.calculateFlux(e.activePayload[0].payload);
      if (price) {
        let time;
        if (this.state.active === "1D") {
          time = e.activePayload[0].payload.label + " ET";
        } else {
          time = e.activePayload[0].payload.date;
        }
        this.setState({
          hoverPrice: price,
          time: time
        });
      }
    }
  }

  resetHoverPrice() {
    this.calculateFlux(this.state.chartData[this.state.chartData.length - 1]);
    return this.setState({ hoverPrice: this.state.currentBalance })
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

    if (this.state.chartData.length !== 0 && this.state.chartData[0].balance > this.state.chartData[this.state.chartData.length - 1].balance) {
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
            $<Odometer
              value={this.state.hoverPrice}
            />
          </div>
          <div className="portfolio-change">
            {parseFloatToPosNegDollars(this.state.flux)} ({this.state.fluxPrecent})
          </div>
        </div>
        <div className="portfolio-chart">
          <ResponsiveContainer width="100%" height="100%" className="portfolio-graph-chart-container">
            <LineChart data={this.state.chartData} onMouseMove={this.handleMouseHover} onTouchStart={this.handleMouseHover} cursor="pointer">
              <Line
                type="linear"
                dataKey="balance"
                stroke={this.state.lineColor}
                strokeWidth={2}
                dot={false}
                connectNulls={true}
              />
              <Tooltip cursor={{ stroke: "lightgrey", strokeWidth: 2 }} />
              <XAxis hide={true} dataKey='label' />
              <YAxis domain={['30000', '200000']} hide={true} />
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