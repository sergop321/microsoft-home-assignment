// @flow

import React from 'react';
import styled from 'styled-components';
import type { ThemeProps } from '../../../type';


type Props = {
	threshold: number,
	updateThreshold: (threshold: number) => void,
};

const InputWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0 0 20px;
`;

const StyledLabel = styled.label`
	color: ${({ theme }: ThemeProps) => theme.colors.text};
	font-size: 0.925em;
	margin-right: 16px;
`;

export default class ThresholdInput extends React.PureComponent<Props> {
	_handleThesholdChange = (e: SyntheticEvent<HTMLElement>) => {
		window.a = e;
		this.props.updateThreshold(e.currentTarget.value);
	};

	render() {
		return (
			<InputWrapper>
				<StyledLabel>Threshold: </StyledLabel>
				<input type="number" value={this.props.threshold} onChange={this._handleThesholdChange} />
			</InputWrapper>
		);
	}
}