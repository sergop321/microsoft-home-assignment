// @flow
// From https://medium.com/@chrisburgin95/using-react-and-styled-components-to-make-a-simple-loading-animation-df1330c652cb

import React from "react";
import styled, { keyframes, withTheme } from "styled-components";


const BounceAnimation = keyframes`
	0% { margin-bottom: 0; }
	50% { margin-bottom: 15px }
	100% { margin-bottom: 0 }
`;

const DotWrapper = styled.div`
	display: flex;
	align-items: flex-end;
	margin: auto;
	justify-content: center;
`;

const Dot = styled.div`
	background-color: ${({ color }) => color};
	border-radius: 50%;
	width: 10px;
	height: 10px;
	margin: 0 5px;
	/* Animation */
	animation: ${BounceAnimation} 0.5s linear infinite;
	animation-delay: ${props => props.delay};
`;

class LoadingDots extends React.Component<any> {
	render() {
		return (
			<DotWrapper>
				<Dot delay="0s" color={this.props.theme.colors.main} />
				<Dot delay=".1s" color={this.props.theme.colors.secondary} />
				<Dot delay=".2s" color={this.props.theme.colors.complemantry} />
			</DotWrapper>
		)
	}
}

export default withTheme(LoadingDots);