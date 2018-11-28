// @flow

import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Stocks from '../stock/Stocks';
import theme from '../../theme';


class App extends React.Component<any> {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<>
					<GlobalStyle />
					<Stocks />
				</>
			</ThemeProvider>
		);
	}
}

export default App;
