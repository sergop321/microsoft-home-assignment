// @flow

import { executeApiCall } from './index';
import type { StockData } from '../type';


const _formatStockData = (serverRes): StockData[] => {
	const stockRawData = serverRes['Time Series (5min)'];
	return Object.keys(stockRawData).map((time) => ({
		time,
		high: window.parseFloat(stockRawData[time]['2. high'], 10),
		low: window.parseFloat(stockRawData[time]['3. low'], 10),
		open: window.parseFloat(stockRawData[time]['1. open'], 10),
		close: window.parseFloat(stockRawData[time]['4. close'], 10),
		volume: window.parseFloat(stockRawData[time]['5. volume'], 10),
	})).sort(function(a,b){
		return new Date(a.time) - new Date(b.time);
	}).map((data, index) => ({
		...data,
		index: index + 1,
	}));
};

const getStockData = (symbol: string): Promise<StockData[]> => {
	return executeApiCall(`function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min`)
		.then(_formatStockData);
};

export {
	getStockData,
};