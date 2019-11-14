import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { parseFloatToDollars } from '../../util/numbers.util';
// import { fetchPortfolios } from '../../util/portfolios_api_util';
// import Odometer from 'react-odometerjs';


const RED = "#EB5333";
const GREEN = "#67CF9A";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
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
    if (this.props.portfolios) {
      this.props.fetchUserPortfolios()
        .then( res => this.setState({
          chartData: res.porfolio,
          fiveYearData: res.portfolio
        }))
    } else {
      this.setState({
        chartData: this.props.portfolio,
        fiveYearData: this.props.portfolio
      })
    }
    // this.props.fetchUserPortfolios();
    debugger
  }


  changeDate(range) {
    let newChartData;
    let fiveYearLength = this.state.fiveYearData.length;
    if (range === "1D") {
      newChartData = this.state.intradayData
    } else if (range === "1W") {
      newChartData = this.state.fiveYearData.slice(fiveYearLength - 5, fiveYearLength)
    } else if (range === "1M") {
      newChartData = this.state.fiveYearData.slice(fiveYearLength - 21, fiveYearLength)
    } else if (range === "3M") {
      newChartData = this.state.fiveYearData.slice(fiveYearLength - 66, fiveYearLength)
    } else if (range === "1Y") {
      newChartData = this.state.fiveYearData.slice(fiveYearLength - 253, fiveYearLength)
    } else if (range === "5Y") {
      newChartData = this.state.fiveYearData
    }
    debugger
    // let newColor;
    // if (newChartData.length !== 0 && newChartData[0].balance > newChartData[newChartData.length - 1].balance) {
    //   newColor = RED;
    // } else {
    //   newColor = GREEN;
    // }
    this.setState({
      chartData: newChartData,
      // lineColor: newColor
    },
      // this.setColorStatus
    )

    // this.setState({
    //   chartData: newChartData
    // });

    // let newLineColor;
    // if (newChartData.length !== 0 && newChartData[0].close > newChartData[newChartData.length - 1].close) {
    //   newLineColor = RED;
    // } else {
    //   newLineColor = GREEN;
    // }

    // this.setState({
    //   chartData: newChartData
    // });

    // this.chartLineColor();
    // debugger
  }

  handleChangeRange(e) {
    let range = e.currentTarget.textContent;
    this.setState({
      activeRange: range
    });
    this.changeDate(range);
  }

  setRangeButtonStatus(range) {
    let res = "chart-range-btn";
    if (this.state.activeRange === range) {
      res = `chart-range-btn-active`;
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
      <div className="stock-show-chart-container">
        <div className="stock-show-chart-header">
          <div className="stock-show-name">
            {/* {stock.companyName} */}
          </div>
          <div className="stock-show-price">
            {/* {this.state.price} */} $54.38
          </div>
          <div className="stock-show-change">
            +$3.49 (+1.01%)
          </div>
        </div>
        <div>
          <ResponsiveContainer width={600} height={200} className="show-graph-chart-container">
            <LineChart data={this.props.portfolio} cursor="pointer">
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
          <div className="stock-show-chart-ranges">
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