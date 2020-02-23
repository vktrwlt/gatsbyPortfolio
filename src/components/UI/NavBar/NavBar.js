import React, { Component } from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import { Link } from 'gatsby';
import { gradient, primaryColor, fallbackBG } from '../../../utils/variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const NavStrip = styled.div`
	height: 3px;
	background: ${fallbackBG};
	background: ${gradient};
`;

const Bar = styled.div`
	position: fixed;

	height: 85px;
	top: 0;
	width: 100%;
	z-index: 999;
	@media screen and (max-width: 1400px) {
		background-color: ${props => (props.mobileMenu ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.97)')};
		border-bottom: 1px solid #ddd;
	}
`;

const Nav = styled.div`
	${tw`flex justify-between items-center`}
	padding:5px 50px;
	color: #434345;
	position: relative;
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
	@media screen and (min-width: 600px) {
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
	}
	display: none;
`;

const Hamburger = css`
	@media screen and (min-width: 600px) {
		display: none;
	}

	color: ${primaryColor};
	font-size: 24px;
	cursor: pointer;
`;

const MobileNav = styled.div`
	${tw`text-xl flex flex-col  `}

	background: white;
	margin-top: 7px;
	& a {
		display: block;
		margin: 0;
		padding: 0;
		color: inherit;
		text-decoration: none;
		padding: 10px 50px;
		border-top: 1px solid #ddd;
		&:last-child {
			border-bottom: 1px solid #ddd;
		}
		&.active {
			color: ${primaryColor};
			font-weight: 500;
		}
	}
	transition: opacity 0.3s ease-out;
	${props => {
		if (props.mobileMenu) {
			return ` opacity: 1;
    				 height: auto;`;
		} else {
			return `  opacity: 0; 
    				  height: 0;
    				  overflow: hidden;`;
		}
	}};
`;

class NavBar extends Component {
	state = {
		mobileMenu: false
	};

	componentDidMount() {
		this.setState({ mobileMenu: false });
		window.addEventListener('resize', this.updateDimensions);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}
	toggleMenu = () => {
		this.setState({ mobileMenu: !this.state.mobileMenu });
	};
	updateDimensions = () => {
		if (window.innerWidth > 600) {
			this.setState({ mobileMenu: false });
		}
	};
	render() {
		const isActive = ({ isCurrent }) => {
			return isCurrent ? { className: 'active' } : null;
		};

		return (
			<Bar mobileMenu={this.state.mobileMenu}>
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
					<FontAwesomeIcon icon={faBars} css={Hamburger} onClick={this.toggleMenu} />
				</Nav>
				<MobileNav mobileMenu={this.state.mobileMenu}>
					<Link getProps={isActive} to="/">
						Work
					</Link>
					<Link getProps={isActive} to="/about">
						About
					</Link>
				</MobileNav>
			</Bar>
		);
	}
}

export default NavBar;
