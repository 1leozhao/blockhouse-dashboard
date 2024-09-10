import React from 'react';
import { ResponsiveContainer, LineChart as RechartsLine, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { LineChartData } from '../types/chartTypes';

interface LineChartProps {
  data: LineChartData;
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  return (
    <div className="h-80 w-full">
      <h2 className="text-2xl font-bold mb-4">Line Chart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLine data={data.data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </RechartsLine>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;