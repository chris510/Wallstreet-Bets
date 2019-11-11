import React from 'react';
import { LineChart, Line, YAxis, ResponsiveContainer } from 'recharts';

const RED = "#EB5333";
const GREEN = "#67CF9A";

const StockIndexItemChart = ( { intradayData }) => {

  const chartLineColor = () => {
    if (intradayData) {
      let startingPrice = intradayData[0].close;
      let endingPrice = intradayData[intradayData.length - 1].close;
      if (startingPrice > endingPrice) return RED
        return GREEN;
    }
  }

  return (
    <div className="stock-mini-chart">
      <ResponsiveContainer width='100%' height="100%">
        <LineChart data={intradayData} cursor="pointer">
          <Line 
            type="linear" 
            dataKey="close" 
            stroke={chartLineColor()}
            // stroke={RED}
            strokeWidth={2}
            dot={false} 
          />
          <YAxis domain={['dataMin', 'dataMax']} hide={true} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default StockIndexItemChart;