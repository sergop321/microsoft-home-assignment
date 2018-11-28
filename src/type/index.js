// @flow

export type StockData = {
	index: number,
	time: string,
	high: number,
	low: number,
	open: number,
	close: number,
	volume: number,
};

export type Theme = {
	colors: {
		text: string,
		textLight: string,
		textSecondary: string,
		main: string,
		secondary: string,
		complemantry: string,
		negative: string,
	},
};

export type ThemeProps = {
	theme: Theme,
};