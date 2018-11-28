// @flow

import React from 'react';
import styled from 'styled-components';
import Container from '../../base/Container';
import type { ThemeProps } from '../../../type';
import type { Node } from 'react';


type Props = {
	children: Node,
};

const Page = styled.div`
`;

const Title = styled.h1`
	font-size: 2.8em;
	font-weight: 600;
	margin: 40px 20px;
	color: ${({ theme }: ThemeProps) => theme.colors.text};
`;

const BodyWrapper = styled.div`
	margin: 0 20px;
`;

export default function StockPage(props: Props) {
	return (
		<Page>
			<Container>
				<Title>
					Microsoft Stock
				</Title>
				<BodyWrapper>
					{props.children}
				</BodyWrapper>
			</Container>
		</Page>
	);
}