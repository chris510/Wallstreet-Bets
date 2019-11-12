// import React from 'react';
// import { Link } from 'react-router-dom';
// import { LineChart, Line, YAxis, XAxis, ResponsiveContainer, Tooltip } from 'recharts';

// const RED = "#EB5333";
// const GREEN = "#67CF9A";
// // const LIGHTGREY = "#252427"

// class StockShowChart extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.chartLineColor = this.bind.chartLineColor(this);
//   };


//   // chartLineColor() {
//   //   if (this.props.intradayData) {
//   //     let startingPrice = this.props.intradayData[0].close;
//   //     let endingPrice = this.props.intradayData[this.props.intradayData.length - 1].close;

//   //     if (startingPrice > endingPrice) return RED
//   //     return GREEN;
//   //   }
//   // }

//   render() {

//     const { stock } = this.props;

//     return (
//       <div className="stock-show-chart">
//         <ResponsiveContainer width='100%' height="100%">
//         <LineChart data={stock.intradayData} cursor="pointer">
//           <Line 
//             type="linear" 
//             dataKey="close" 
//             // stroke={this.chartLineColor()}
//             stroke={GREEN}
//             strokeWidth={2}
//             dot={false} 
//             connectNulls={true}
//           />
//           <Tooltip cursor={{ stroke: "lightgrey" , strokeWidth: 2 }} />
//           <YAxis domain={['dataMin', 'dataMax']} hide={true} />
//         </LineChart>
//       </ResponsiveContainer>
//       </div>
//     )
//   }
// }

// export default StockShowChart;