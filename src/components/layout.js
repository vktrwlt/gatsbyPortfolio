import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'typeface-ubuntu';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import './layout.css';
import NavBar from './UI/NavBar/NavBar';
import Container from './UI/Container/Container';
import Footer from './UI/Footer/Footer';

const Body = styled.div`
	${tw`font-sans`};
`;

const FlexContainer = styled.div`
	${tw`flex flex-col justify-between`};
	height: 100vh;
`;

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<Helmet
					title={data.site.siteMetadata.title}
					meta={[
						{ name: 'description', content: 'Sample' },
						{ name: 'keywords', content: 'sample, something' }
					]}
				>
					<html lang="en" />
				</Helmet>

				<Body>
					<NavBar />
					<FlexContainer>
						<Container>{children}</Container>
						<Footer />
					</FlexContainer>
				</Body>
			</>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
