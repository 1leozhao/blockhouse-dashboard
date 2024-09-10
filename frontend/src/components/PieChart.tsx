import React from 'react';
import { ResponsiveContainer, PieChart as RechartsPie, Pie, Tooltip } from 'recharts';
import { PieChartData } from '../types/chartTypes';

interface PieChartProps {
  data: PieChartData;
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  return (
    <div className="h-80 w-full">
      <h2 className="text-2xl font-bold mb-4">Pie Chart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPie>
          <Pie dataKey="value" data={data.data} fill="#8884d8" label />
          <Tooltip />
        </RechartsPie>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;