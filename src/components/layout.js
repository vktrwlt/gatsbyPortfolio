import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'typeface-ubuntu';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import './layout.css';
import NavBar from './UI/NavBar/NavBar';
import Container from './UI/Container/Container';
import Footer from './UI/Footer/Footer';

const Body = styled.div`
	${tw`font-sans`};
`;
const Wrap = styled.div`
	min-height: calc(100vh - 141px);
	// border: 1px solid green;
	padding-bottom: 80px;

	overflow: auto;
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
					<Wrap>
						<Container>{children}</Container>
					</Wrap>

					<Footer />
				</Body>
			</>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
