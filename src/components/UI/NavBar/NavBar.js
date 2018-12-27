import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { gradient, primaryColor, fallbackBG } from '../../../utils/variables';

const NavStrip = styled.div`
	height: 3px;
	background: ${fallbackBG};
	background: ${gradient};
`;

const Bar = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 999;
	@media screen and (max-width: 1400px) {
		background-color: rgba(255, 255, 255, 0.8);
		border-bottom: 1px solid #ddd;
	}
`;

const Nav = styled.div`
	${tw`flex justify-between`}
	padding:5px 50px;
	color: #434345;
`;

const NavBrand = styled.p`
	${tw`text-xl `}
	font-weight:500;
	& a {
		display: block;
		margin: 0;
		padding: 0;
		color: inherit;
		text-decoration: none;
	}
`;

const NavItems = styled.div`
	${tw`text-xl flex items-center `}
	& a {
		display: block;
		margin: 0;
		padding: 0;
		color: inherit;
		text-decoration: none;
		margin-left: 25px;
		&:first-of-type {
			margin-left: 0;
		}
		&.active {
			color: ${primaryColor};
			font-weight: 500;
		}
	}
`;

const NavBar = () => {
	const isActive = ({ isCurrent }) => {
		return isCurrent ? { className: 'active' } : null;
	};

	return (
		<Bar>
			<NavStrip />
			<Nav>
				<NavBrand>
					<Link to="/">Victor Tsang</Link>
				</NavBrand>
				<NavItems>
					<Link getProps={isActive} to="/">
						Work
					</Link>
					<Link getProps={isActive} to="/about">
						About
					</Link>
				</NavItems>
			</Nav>
		</Bar>
	);
};

export default NavBar;
