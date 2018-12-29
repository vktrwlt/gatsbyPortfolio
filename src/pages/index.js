import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero/Hero';
import Fade from 'react-reveal/Fade';
import Project from '../components/Project/Project';
import { withPrefix } from 'gatsby';
const ProjectGrid = styled.div`
	display: grid;
	grid-gap: 30px;
	@media screen and (min-width: 600px) {
		grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
	}
`;

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

		<Hero />

		<ProjectGrid>
			<Project
				title="NetBase On-Tour"
				link="/netbase-on-tour"
				thumbnail={withPrefix('/images/nbontour/nbontour-thumbnail.png')}
			>
				Breakfast seminar event page for NetBase
			</Project>
			<Project title="NetBase Pro" link="/" thumbnail={withPrefix('/images/nbpro/nbpro-thumbnail.png')}>
				Social media analytic app
			</Project>
			<Project
				title="Dangfoods"
				link="dangfoods"
				thumbnail={withPrefix('/images/dangfoods/dangfoods-thumbnail.png')}
			>
				Redesign e-Commerce site in WordPress
			</Project>
			<Project
				title="NetBase Klipfolio Visualizations"
				link="netbase-klipfolio"
				thumbnail={withPrefix('/images/dangfoods/dangfoods-thumbnail.png')}
			>
				Connecting NetBase API to Klipfolio and creating data visualizations
			</Project>
		</ProjectGrid>
	</Layout>
);

export default IndexPage;
