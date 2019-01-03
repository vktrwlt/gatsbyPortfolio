import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { withPrefix } from 'gatsby';
import Button from '../components/UI/Button/Button';
import ButtonList from '../components/ButtonList/ButtonList';
import Content from '../components/Content/Content';
import ProjectHero from '../components/ProjectHero/ProjectHero';
import ProjectNav from '../components/ProjectNav/ProjectNav';

const Img = styled.img`
	width: 100%;
	max-width: 600px;
	height: auto;
`;

const dangfoods = () => (
	<Layout>
		<SEO title="Dangfoods" keywords={[`gatsby`, `application`, `react`]} />
		<ProjectHero
			title="Dangfoods"
			subtitle="Redesign e-Commerce site in WordPress"
			img={withPrefix('/images/dangfoods/dangfoods-header.png')}
		/>
		<Content>
			<h2>My Role</h2>
			<ul>
				<li> Front-End Developer</li>
				<li> Working as a team with another developer, developed the site based on mockups</li>
				<li> Implemented "Advanced Custom Fields" for end-users to upload products with ease</li>
			</ul>
			<h2>Tech Stack</h2>
			<ButtonList>
				<li>HTML5 / CSS3</li>
				<li>WordPress</li>
				<li>PHP</li>
				<li>jQuery</li>
				<li>Zurb Foundation</li>
				<li>Responsive Web Design</li>
				<li>Adobe Photoshop</li>
			</ButtonList>

			<h2>About this project</h2>
			<p>
				The client previously had a static website that they were manually updating, as their company grew so
				did their website. The client had a WordPress site in progress, but the developer left half-way. As a
				team of two developers, we took over the project and continued building the site based on their mockups.
				<br />
				<br />
				One feature that the client required is the ability to add and update products so I implemented
				"Advanced Custom Fields" and "Custom Post Types" to the WordPress site and created template pages that
				will display products based on categories. We completed the website in two weeks and the customer was
				happy that he could add and update products with ease.
			</p>

			<h2>Project link</h2>

			<Button href="https://dangfoods.com/" target="_blank" rel="noopener noreferrer">
				View Online
			</Button>
		</Content>
		<ProjectNav />
	</Layout>
);

export default dangfoods;
