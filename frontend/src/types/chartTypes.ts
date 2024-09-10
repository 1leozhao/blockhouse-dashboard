// src/types/chartTypes.ts

export interface CandlestickDataPoint {
    x: string;
    open: number;
    high: number;
    low: number;
    close: number;
  }
  
  export interface CandlestickChartData {
    data: CandlestickDataPoint[];
  }
  
  export interface DataPoint {
    name: string;
    value: number;
  }
  
  export interface LineChartData {
    data: DataPoint[];
  }
  
  export interface BarChartData {
    data: DataPoint[];
  }
  
  export interface PieChartData {
    data: DataPoint[];
  }