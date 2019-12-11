import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { parseFloatToDollars, parseFloatToPosNegDollars, parseFloatToPostNegPercent } from '../../util/numbers.util';
import Odometer from 'react-odometerjs';

const RED = "#EB5333";
const GREEN = "#67CF9A";

class StockItemChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      intradayData: this.props.intradayData,
      historicalData: [],
      fiveYearData: [],
      activeRange: '1D',
      lineColor: GREEN,
      currentPrice: 0,
      flux: 0,
      fluxPercent: 0,
      hoverPrice: 0,
      time: ''
    }
    // this.chartLineColor = this.chartLineColor.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.handleChangeRange = this.handleChangeRange.bind(this);
    this.setRangeButtonStatus = this.setRangeButtonStatus.bind(this);
    this.chartLineColor = this.chartLineColor.bind(this);
    this.calculateBalance = this.calculateBalance.bind(this);
    this.calculateFlux = this.calculateFlux.bind(this);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.resetHoverPrice = this.resetHoverPrice.bind(this);
    this.calculateInitialFlux = this.calculateInitialFlux.bind(this);
    // this.renderTimeStamp = this.renderTimeStamp.bind(this);
    // this.renderLatestPrice = this.renderLatestPrice.bind(this);
  }

  componentDidMount() {
    if (!this.state.intradayData) {
      this.props.fetchStockIntradayData(this.props.stock.symbol)
        .then( result => this.setState({
          chartData: result.intradayData.chart,
          intradayData: result.intradayData.chart,
          hoverPrice: result.intradayData.chart[result.intradayData.chart.length - 1].close
        }))
        .then(() => this.calculateInitialFlux(this.state.intradayData));
      this.chartLineColor();
      // this.calculateFlux(this.state.intradayData[0]);
    } else {
      this.setState({
        chartData: this.props.intradayData,
        intradayData: this.props.intradayData,
        hoverPrice: this.props.intradayData[this.props.intradayData.length - 1].close
      })
      this.calculateInitialFlux(this.state.intradayData);
      this.chartLineColor();
    };

    this.setState({
      chartData: this.props.intradayData,
      intradayData: this.props.intradayData,
      historicalData: this.props.stock.historicalData
    });

    if (this.state.historicalData.length === 0) {
      this.props.fetch1YrHistoricalData(this.props.stock.symbol)
        .then(result => this.setState({
          chartData: result.historicalData.chart,
          historicalData: result.historicalData.chart
        }))
    } else {
      this.setState({
        historicalData: this.props.historicalData
      });
    };
  };

  calculateInitialFlux(data) {
    let newFlux = 0;
    let newFluxPercent = 0;
    if (data) {
      let firstData = data[0];
      let lastData = data[data.length - 1];
      
      newFlux = lastData.close - firstData.close
      newFluxPercent = (1 - firstData.close / lastData.close) * 100;
    }
    return this.setState({
      flux: newFlux,
      fluxPercent: newFluxPercent
    });
  }

  calculateBalance() {
    let price = 0
    if (this.props.intradayData) {
      price = this.props.intradayData[this.props.intradayData.length - 1].close
      return this.setState({
        currentPrice: parseFloatToDollars(price)
      })
    } else {
      return this.setState({
        currentPrice: parseFloatToDollars(price)
      })
    }
  }


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
        newChartData = this.state.historicalData.slice(historicalDataLength - 100, historicalDatLength);
      } else {
        newChartData = this.state.historicalData;
      }
    } ;
    // else if (range === "5Y") {
    //   this.props.fetch5YrData(this.props.stock.symbol)
    //     .then( result => (this.setState({
    //       fiveYearData: result.fiveYearData.chart
    //     })), 
    //       newChartData = this.state.fiveYearData
    //     )
    //     debugger 
    // }

    // this.setState({
    //   chartData: newChartData
    // });

    // let newLineColor;
    // if (newChartData.length !== 0 && newChartData[0].close > newChartData[newChartData.length - 1].close) {
    //   newLineColor = RED;
    // } else {
    //   newLineColor = GREEN;
    // }
    this.setState({
      chartData: newChartData
    });

    this.chartLineColor();
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

  calculateFlux(dataPoint) {
    let newFlux = 0;
    let newFluxPercent = 0;

    if (dataPoint) {
      let firstData = this.state.chartData[0];
      let lastData = dataPoint;
      
      newFlux = lastData.close - firstData.close
      newFluxPercent = (1 - firstData.close / lastData.close) * 100;
    }
    return this.setState({
      flux: newFlux,
      fluxPercent: newFluxPercent
    });
  }

  handleMouseHover(e) {
    if (e.activePayload) {
      let price = e.activePayload[0].payload.close;
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
    return this.setState({ hoverPrice: this.state.currentPrice })
  }

  // renderTimeStamp() {
  //   return (
  //     <div className="timestamp">{this.state.time}</div>
  //   )
  // }

  render() {
    const renderTimeStamp = () => (<div className="timestamp">{this.state.time}</div>)
    const { stock, name } = this.props

    return (
      <div className="stock-show-chart-container">
        <div className="stock-show-chart-header">
          <div className="stock-show-name">
            {stock.companyName}
          </div>
          <div className="stock-show-price">
            $<Odometer
              value={this.state.hoverPrice}
            />
          </div>
          <div className="stock-show-change">
            {parseFloatToPosNegDollars(this.state.flux)} ({parseFloatToPostNegPercent(this.state.fluxPercent)})
          </div>
        </div>
        <div className={name}>
          <ResponsiveContainer width='90%' height="100%" className="show-graph-chart-container">
            <LineChart data={this.state.chartData} cursor="pointer" onMouseMove={this.handleMouseHover} onTouchStart={this.handleMouseHover} cursor="pointer">
              <Line
                type="linear"
                dataKey="close"
                stroke={this.state.lineColor}
                strokeWidth={2}
                dot={false}
                connectNulls={true}
              />
              <Tooltip cursor={{ stroke: "lightgrey", strokeWidth: 2 }} content={renderTimeStamp} />
              <XAxis hide={true} dataKey='label' />
              <YAxis domain={['dataMin', 'dataMax']} hide={true} tickLine={false} type='number' />
            </LineChart>
          </ResponsiveContainer>
          <div className="stock-show-chart-ranges">
            <li className={this.setRangeButtonStatus("1D")} onClick={this.handleChangeRange}>1D</li>
            <li className={this.setRangeButtonStatus("1W")} onClick={this.handleChangeRange}>1W</li>
            <li className={this.setRangeButtonStatus("1M")} onClick={this.handleChangeRange}>1M</li>
            <li className={this.setRangeButtonStatus("3M")} onClick={this.handleChangeRange}>3M</li>
            <li className={this.setRangeButtonStatus("1Y")} onClick={this.handleChangeRange}>1Y</li>
            {/* <li className={this.setRangeButtonStatus("5Y")} onClick={this.handleChangeRange}>5Y</li> */}
          </div>
        </div>
      </div>
    )
  }
};

export default StockItemChart;