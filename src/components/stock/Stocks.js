// @flow

import React from 'react';
import { getStockData } from '../../api/stock';
import type { StockData as StockDataType } from '../../type';
import Loading from '../base/Loading';
import StockPage from './views/StockPage';
import StockError from './views/StockError';
import StockData from './StockData';
import config from '../../config';


type State = {
	stock: StockDataType[],
	isLoading: boolean,
};

export default class Stocks extends React.Component<any, State> {
	isAlive = true;

	state = {
		stock: [],
		isLoading: true,
	};

	_handleUpdateStock = (stock: StockDataType[]) => {
		if (this.isAlive) {
			this.setState({
				stock,
				isLoading: false,
			});
		}
	}

	_handleStockFetchFail = () => {
		if (this.isAlive) {
			this.setState({
				stock: [],
				isLoading: false,
			});
		}
	};

	render() {
		return (
			<StockPage>
				{this.state.isLoading ? <Loading /> :
					(this.state.stock.length > 0 ? <StockData stock={this.state.stock} /> : <StockError />)
				}
			</StockPage>
		);
	}

	componentDidMount() {
		getStockData(config.microsoftStockSymbol)
			.then(this._handleUpdateStock)
			.catch(this._handleStockFetchFail);
	}

	componentWillUnmount() {
		this.isAlive = false;
	}
}