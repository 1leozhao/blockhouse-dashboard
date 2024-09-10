'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { CandlestickChartData, LineChartData, BarChartData, PieChartData } from '../types/chartTypes';

const CandlestickChart = dynamic(() => import('../components/CandlestickChart'), { ssr: false });
const LineChart = dynamic(() => import('../components/LineChart'), { ssr: false });
const BarChart = dynamic(() => import('../components/BarChart'), { ssr: false });
const PieChart = dynamic(() => import('../components/PieChart'), { ssr: false });

export default function Home() {
  const [candlestickData, setCandlestickData] = useState<CandlestickChartData | null>(null);
  const [lineChartData, setLineChartData] = useState<LineChartData | null>(null);
  const [barChartData, setBarChartData] = useState<BarChartData | null>(null);
  const [pieChartData, setPieChartData] = useState<PieChartData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [candlestick, lineChart, barChart, pieChart] = await Promise.all([
          fetch('http://localhost:8000/api/candlestick-data/').then(res => res.json()),
          fetch('http://localhost:8000/api/line-chart-data/').then(res => res.json()),
          fetch('http://localhost:8000/api/bar-chart-data/').then(res => res.json()),
          fetch('http://localhost:8000/api/pie-chart-data/').then(res => res.json())
        ]);

        setCandlestickData(candlestick);
        setLineChartData(lineChart);
        setBarChartData(barChart);
        setPieChartData(pieChart);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-2 gap-8 w-full">
        {candlestickData && <CandlestickChart data={candlestickData} />}
        {lineChartData && <LineChart data={lineChartData} />}
        {barChartData && <BarChart data={barChartData} />}
        {pieChartData && <PieChart data={pieChartData} />}
      </div>
    </main>
  );
}