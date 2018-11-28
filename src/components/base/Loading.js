// @flow

import React from 'react';
import styled from 'styled-components';
import LoadingDots from './LoadingDots';


type Props = {

};

const LoadingWrapper = styled.div`
	width: 100%;
	flex: 1 1 auto;
	justify-content: center;
	margin: 80px 0;
`;

export default function Loading(props: Props) {
	return (
		<LoadingWrapper><LoadingDots /></LoadingWrapper>
	);
}