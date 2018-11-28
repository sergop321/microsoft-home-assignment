// @flow

import React from 'react';
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Brush,
	ReferenceLine,
} from 'recharts';
import ThresholdInput from './views/ThresholdInput';
import { formatDateTime } from '../../modules/time';


type Props = {
	stock: StockDataType[],
};

type State = {
	threshold: number,
};

export default class StockData extends React.Component<Props, State> {
	state = {
		threshold: 106.6,
	};

	_formatStockData(data) {
		return data.map((stock) => ({
			...stock,
			formattedTime: formatDateTime(stock.time),
		}));
	}

	_updateThreshold = (threshold: number) => {
		this.setState({
			threshold,
		});
	}

	render() {
		return (
			<>
				<ThresholdInput threshold={this.state.threshold} updateThreshold={this._updateThreshold} />
				<LineChart
					width={800}
					height={400}
					data={this._formatStockData(this.props.stock)}
				>
					<CartesianGrid strokeDasharray="3 3"/>
					<XAxis
						allowDataOverflow={true}
						dataKey="formattedTime"
					/>
					<YAxis
						allowDataOverflow={true}
						domain={['dataMax-2', 'dataMax+1']}
						type="number"
						yAxisId="1"
					/>
					<Tooltip/>
					<ReferenceLine y={this.state.threshold} label="Threshold" stroke="#960d0d" yAxisId="1" strokeDasharray="3 3"/>
					<Line yAxisId="1" type='natural' dataKey='low' stroke='#6592fe' animationDuration={300}/>
					<Line yAxisId="1" type='natural' dataKey='high' stroke='#8884d8' animationDuration={300}/>
					<Brush />
				</LineChart>
			</>
		);
	}
}