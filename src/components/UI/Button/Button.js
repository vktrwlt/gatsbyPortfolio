import React from 'react';
import styled from '@emotion/styled';
import { gradient } from '../../../utils/variables';

const Btn = styled.a`
	padding: 15px 25px;
	text-align: center;
	text-transform: uppercase;
	transition: 0.5s;
	background-size: 200% auto;
	color: white;
	text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
	display: inline-block;
	background-image: ${gradient};
	&:hover {
		background-position: right;
	}
	text-decoration: none;
`;

const Button = props => {
	return <Btn {...props}>{props.children}</Btn>;
};

export default Button;
