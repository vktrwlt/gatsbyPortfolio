import React from 'react';
import styled from '@emotion/styled';
import { primaryColor } from '../../utils/variables';

const Wrapper = styled.ul`
	@media screen and (min-width: 600px) {
		margin: 0;
		padding: 0 0 0 15px;
		list-style: none;
		${tw`flex flex-wrap`};

		& li {
			display: inline-block;
			padding: 10px 15px;
			margin: 0 8px 16px;
			border: 1.5px solid ${primaryColor};
		}
	}
`;
const ButtonList = props => {
	return <Wrapper {...props}>{props.children}</Wrapper>;
};

export default ButtonList;
