import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero/Hero';
import Project from '../components/Project/Project';
import { withPrefix } from 'gatsby';
const ProjectGrid = styled.div`
	
display:-ms-flexbox;
display:flex;
-ms-flex-pack:justify;
	justify-content:space-between;
-ms-flex-wrap:wrap;
	flex-wrap:wrap;
	> div{
		width:48%;
		margin-bottom:3%;
		@media screen and (max-width: 980px) {
			width:100%;
			margin-bottom:30px;
			}
		}
	}

`;

const IndexPage = () => (
	<Layout>
		<SEO title="My Work" keywords={[`Victor Tsang`, `Full Stack Developer`, `Front End Developer`]} />
		<Hero />
		<ProjectGrid>
			<Project
				title="NetBase On-Tour"
				link="/netbase-on-tour"
				thumbnail={withPrefix('/images/nbontour/nbontour-thumbnail.png')}
			>
				Event microsite for NetBase On-Tour
			</Project>
			<Project
				title="NetBase Pro"
				link="/netbase-pro"
				thumbnail={withPrefix('/images/nbpro/nbpro-thumbnail.png')}
			>
				Social media analytics app redesign
			</Project>
			<Project
				title="Dangfoods"
				link="/dangfoods"
				thumbnail={withPrefix('/images/dangfoods/dangfoods-thumbnail.png')}
			>
				Redesign e-Commerce site in WordPress
			</Project>
			<Project
				title="NetBase Klipfolio Visualizations"
				link="/netbase-klipfolio"
				thumbnail={withPrefix('/images/klipfolio/klipfolio-thumbnail.png')}
			>
				Connecting NetBase API to Klipfolio and creating data visualizations
			</Project>
		</ProjectGrid>
	</Layout>
);

export default IndexPage;
