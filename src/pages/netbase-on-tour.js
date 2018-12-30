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

const nbontour = () => (
	<Layout>
		<SEO title="NetBase On-Tour" />
		<ProjectHero
			title="NetBase On-Tour"
			subtitle="Event microsite for NetBase On-Tour"
			img={withPrefix('/images/nbontour/nbontour-header.png')}
		/>
		<Content>
			<h2>My Role</h2>
			<ul>
				<li> Front-End Developer</li>
				<li> Optimized a site that loads fast and easy to manage content</li>
				<li> Developed an efficient workflow system that doesn't depend on WordPress</li>
			</ul>
			<h2>Tech Stack</h2>
			<ButtonList>
				<li>HTML5 / CSS3</li>
				<li>WordPress</li>
				<li>jQuery</li>
				<li>React</li>
				<li>Gatsby</li>
				<li>GraphQL</li>
				<li>Airtable CMS</li>
				<li>API</li>
				<li>Responsive Web Design</li>
				<li>Site Optimization</li>
			</ButtonList>

			<h2>About this project</h2>
			<p>
				The company required a website for their 2nd annual roadshow event that needs to display all the
				speakers information and cities they are visiting. The page need to be built fast and flexible enough
				for members of the marketing team to make changes to without heavily involving a developer.
				<br />
				<br />
				I built NetBase On Tour 2018 using WordPress and Divi theme. The visual builder gave easy access to
				layout components and made use of the framework that the company is using. At the cost of dymanic
				content for speed and flexiblity, the content were coded in static blocks, which means when a session
				title have changed, we will need to manually update the places that are mentioned.
				<br />
				<br />
				As the design was finalized for 2019, I recreated the front-end using Gatsby, React, and leveraged
				Airtable CMS as the back-end. Airtable CMS offered a "Google Sheets" experience, which everyone on the
				team is familar with, and the flexibility to allow us to define a schema that works well for us.
				<br />
				<br />
				This project now have a back-end that holds all the content, a static site generator that builds the
				site, and a Jenkin webhook that will rebuild and deploy the site when a change have been made. By
				recreating this website with Gatsby and Airtable CMS, I was able to increase the workflow efficiency and
				the loading speed of the site.
			</p>

			<div>
				<h3>Before</h3>
				<Img src={withPrefix('/images/nbontour/nbontour-before.png')} />
				<h3>After</h3>
				<Img src={withPrefix('/images/nbontour/nbontour-after.png')} />
			</div>

			<h2>Project link</h2>

			<Button href="https://www.netbase.com/on-tour/" target="_blank" rel="noopener noreferrer">
				View Online
			</Button>
		</Content>
		<ProjectNav />
	</Layout>
);

export default nbontour;
