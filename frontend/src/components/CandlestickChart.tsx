import React from 'react';
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, Tooltip, Bar, Line } from 'recharts';
import { CandlestickChartData } from '../types/chartTypes';

interface CandlestickChartProps {
  data: CandlestickChartData;
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  return (
    <div className="h-80 w-full">
      <h2 className="text-2xl font-bold mb-4">Candlestick Chart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data.data}>
          <XAxis dataKey="x" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Bar dataKey="high" fill="#8884d8" />
          <Bar dataKey="low" fill="#82ca9d" />
          <Line type="monotone" dataKey="open" stroke="#8884d8" />
          <Line type="monotone" dataKey="close" stroke="#82ca9d" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CandlestickChart;