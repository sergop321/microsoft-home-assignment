// @flow

import React from 'react';
import styled from 'styled-components';
import type { ThemeProps } from '../../../type';


type Props = {
};

const NullstateWrapper = styled.div`
	display: flex;
	text-align: center
`;

const Nullstate = styled.h2`
	font-size: 1.5em;
	font-weight: 600;
	margin: 40px auto;
	color: ${({ theme }: ThemeProps) => theme.colors.textLight};
`;

export default function StockError(props: Props) {
	return (
		<NullstateWrapper>
			<Nullstate>
				Error loading stock data.
			</Nullstate>
		</NullstateWrapper>
	);
}