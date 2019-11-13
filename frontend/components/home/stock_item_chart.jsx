import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const RED = "#EB5333";
const GREEN = "#67CF9A";

class StockItemChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      intradayData: [],
      historicalData: [],
      activeRange: '1D',
      lineColor: GREEN,
      price: 0
    }
    // this.chartLineColor = this.chartLineColor.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.handleChangeRange = this.handleChangeRange.bind(this);
    this.setRangeButtonStatus = this.setRangeButtonStatus.bind(this);
  }

  componentDidMount() {
    if (this.state.intradayData.length === 0) {
      this.props.fetchStockIntradayData(this.props.stock.symbol)
        .then( result => this.setState({
          chartData: result.intradayData.chart,
          intradayData: result.intradayData.chart
        }));
    } else {
      this.setState({
        chartData: this.props.intradayData,
        intradayData: this.props.intradayData
      });
    };

    // this.setState({
    //   chartData: this.props.intradayData,
    //   intradayData: this.props.intradayData,
    //   historicalData: this.props.stock.historicalData
    // });

    // if (this.state.historicalData.length === 0) {
    //   this.props.fetch1YrHistoricalData(this.props.stock.symbol)
    //     .then(result => this.setState({
    //       // chartData: result.historicalData.chart,
    //       historicalData: result.historicalData.chart
    //     }))
    // } else {
    //   this.setState({
    //     historicalData: this.props.historicalData
    //   });
    // };
  };

  // componentDidUpdate() {
  //   if (!this.props.historicalData) {
  //     this.props.fetch1YrHistoricalData(this.props.stock.symbol)
  //       .then(result => this.setState({
  //         historicalData: result.historicalData.chart
  //       }))
  //   } else {
  //     this.setState({
  //       historicalData: this.props.historicalData
  //     });
  //   };
  // }

  changeDate(range) {
    let newChartData;
    let historicalDataLength = this.state.historicalData.length;
    if (range === "1D") {
      newChartData = this.state.intradayData;
    } else if (range === "1W") {  
      newChartData = this.state.historicalData.slice(historicalDataLength - 5, historicalDataLength);
    } else if (range === "1M") {
      newChartData = this.state.historicalData.slice(historicalDataLength - 21, historicalDataLength);
    } else if (range === "3M") {
      newChartData = this.state.historicalData.slice(historicalDataLength - 62, historicalDataLength);
    } else if (range === "1Y") {
      if (this.state.historicalData.length > 300) {
        newChartData = this.state.historicalData.slice(historicalDataLength - 251, historicalDatLength);
      } else {
        newChartData = this.state.historicalData;
      }
    };

    // this.setState({
    //   chartData: newChartData
    // });

    let newLineColor;
    if (newChartData.length !== 0 && newChartData[0].close > newChartData[newChartData.length - 1].close) {
      newLineColor = RED;
    } else {
      newLineColor = GREEN;
    }

    this.setState({
      chartData: newChartData,
      LineColor: newLineColor
    });
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

  render() {
    const { name, info } = this.props

    return (
      <div className="stock-show-chart-container">
        <div className="stock-show-chart-header">
          <div className="stock-show-name">
            {info.companyName}
          </div>
          <div className="stock-show-price">
            $274.42
                    </div>
          <div className="stock-show-change">
            +$3.49 (+1.01%)
                    </div>
        </div>
        <div className={name}>
          <ResponsiveContainer width='100%' height="100%" className="show-graph-chart-container">
            <LineChart data={this.state.chartData} cursor="pointer">
              <Line
                type="linear"
                dataKey="close"
                stroke={this.state.lineColor}
                // stroke={}
                strokeWidth={2}
                dot={false}
                connectNulls={true}
              />
              <Tooltip cursor={{ stroke: "lightgrey", strokeWidth: 2 }} />
              <XAxis hide={true} dataKey='label' />
              <YAxis domain={['dataMin', 'dataMax']} hide={true} />
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

export default StockItemChart;