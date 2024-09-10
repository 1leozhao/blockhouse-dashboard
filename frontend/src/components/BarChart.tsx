import React from 'react';
import { ResponsiveContainer, BarChart as RechartsBar, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { BarChartData } from '../types/chartTypes';

interface BarChartProps {
  data: BarChartData;
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  return (
    <div className="h-80 w-full">
      <h2 className="text-2xl font-bold mb-4">Bar Chart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBar data={data.data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </RechartsBar>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;