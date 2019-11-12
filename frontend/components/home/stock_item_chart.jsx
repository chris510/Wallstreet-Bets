import React from 'react';
import { LineChart, Line, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

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
      price: 0
    }
    // this.chartLineColor = this.chartLineColor.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.handleChangeRange = this.handleChangeRange.bind(this);
  }

  componentDidMount() {
    if (!this.props.intradayData) {
      this.props.fetchStockIntradayData(this.props.stock.symbol)
        .then( result => this.setState({
          intradayData: result.intradayData.chart
        }));
    } else {
      this.setState({
        chartData: this.props.intradayData,
        intradayData: this.props.intradayData
      });
    };

    if (!this.props.historicalData) {
      this.props.fetch1YrHistoricalData(this.props.stock.symbol)
        .then(result => this.setState({
          historicalData: result.historicalData.chart
        }))
    } else {
      this.setState({
        historicalData: this.props.historicalData
      });
    };
    debugger
  };

  changeDate(range) {
    let newChartData;
    let historicalDataLength = this.state.historicalData.length;
    if (range === '1D') {
      this.setState({
        chartData: this.state.intradayData
      })
    } else if (range === '1W') {  
      newChartData = this.state.historicalData.slice(historicalDataLength - 5, historicalData.length);
    } else if (range === '1M') {
      newChartData = this.state.historicalData.slice(historicalDataLength - 21, historicalData.length);
    } else if (range === '3M') {
      newChartData = this.state.historicalData.slice(historicalDataLength - 62, historicalData.length);
    } else if (range === '1Y') {
      if (this.state.historicalData.length > 300) {
        newChartData = this.state.historicalData.slice(historicalDataLength - 251, historicalDataLength);
      } else {
        newChartData = this.state.historicalData;
      }
    };

    this.setState({
      chartData: newChartData
    });
    debugger
  }

  handleChangeRange(e) {
    debugger
    let range = e.currentTarget.textContent;
    this.setState({
      activeRange: range
    });
    this.changeDate(range);
  }


  // chartLineColor() {
  //   // debugger
  //   if (this.props.intradayData) {
  //     let startingPrice = this.props.intradayData[0].close;
  //     let endingPrice = this.props.intradayData[this.props.intradayData.length - 1].close;
  //     if (startingPrice > endingPrice) return RED
  //     return GREEN;
  //   }
  // };

  render() {
    const { name } = this.props

    return (
      <div className={name}>
        <ResponsiveContainer width='100%' height="100%">
          <LineChart data={this.state.chartData} cursor="pointer">
            <Line
              type="linear"
              dataKey="close"
              // stroke={this.chartLineColor()}
              stroke={GREEN}
              strokeWidth={2}
              dot={false}
              connectNulls={true}
            />
            <Tooltip cursor={{ stroke: "lightgrey", strokeWidth: 2 }} />
            <YAxis domain={['dataMin', 'dataMax']} hide={true} />
          </LineChart>
        </ResponsiveContainer>
        <div className="stock-show-chart-ranges">
          <li onClick={this.handleChangeRange}>1D</li>
          <li onClick={this.handleChangeRange}>1W</li>
          <li onClick={this.handleChangeRange}>1M</li>
          <li onClick={this.handleChangeRange}>3M</li>
          <li onClick={this.handleChangeRange}>1Y</li>
          <li onClick={this.handleChangeRange}>5Y</li>
        </div>
      </div>
    )
  }

}

// const StockItemChart = ( { intradayData, name }) => {

//   const chartLineColor = () => {
//     if (intradayData) {
//       let startingPrice = intradayData[0].close;
//       let endingPrice = intradayData[intradayData.length - 1].close;

//       if (startingPrice > endingPrice) return RED
//         return GREEN;
//     }
//   }

//   return (
//     <div className={name}>
//       <ResponsiveContainer width='100%' height="100%">
//         <LineChart data={intradayData} cursor="pointer">
//           <Line 
//             type="linear" z
//             dataKey="close" 
//             stroke={chartLineColor()}
//             strokeWidth={2}
//             dot={false} 
//             connectNulls={true}
//           />
//           <Tooltip cursor={{ stroke: "lightgrey", strokeWidth: 2 }} />
//           <YAxis domain={['dataMin', 'dataMax']} hide={true} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   )
// }

export default StockItemChart;