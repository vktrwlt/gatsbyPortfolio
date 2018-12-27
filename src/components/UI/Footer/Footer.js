import React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { gradient, fallbackBG } from '../../../utils/variables';
const Wrapper = styled.div`
	padding: 20px 0;
	background: ${fallbackBG};
	background: ${gradient};
	margin-top: 100px;
`;
const Text = styled.h3`
	${tw`text-white font-sans m-0 text-center`};
	text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
	font-size: 16px;
	font-weight: 200;
`;

const IconList = styled.ul`
	margin: 15px 0;
	padding: 0;
	text-align: center;
	color: white;
	list-style: none;
	& a {
		color: white;
		text-decoration: none;
		display: block;
		padding: 10px;
	}
	& li {
		display: inline-block;
		margin: 0 20px;
		line-height: 0;
		border: 1px solid white;
	}
`;

const Footer = () => {
	return (
		<Wrapper>
			<IconList>
				<li>
					<a href="https://www.linkedin.com/in/victorwltsang/" target="_blank" rel="noopener noreferrer">
						<FaLinkedinIn />
					</a>
				</li>
				<li>
					<a href="https://github.com/victorwltsang" target="_blank" rel="noopener noreferrer">
						<FaGithub />
					</a>
				</li>
				<li>
					<a href="mailto:victorwltsang@gmail.com" rel="noopener noreferrer">
						<FaEnvelope />
					</a>
				</li>
			</IconList>

			<Text>Made by Victor Tsang &copy; {moment().format('YYYY')}</Text>
		</Wrapper>
	);
};

export default Footer;
