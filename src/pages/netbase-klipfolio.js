import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { withPrefix } from 'gatsby';
import Button from '../components/UI/Button/Button';
import ButtonList from '../components/ButtonList/ButtonList';
import Content from '../components/Content/Content';
import ProjectHero from '../components/ProjectHero/ProjectHero';

const Img = styled.img`
	width: 100%;
	max-width: 600px;
	height: auto;
`;

const nbklipfolio = () => (
	<Layout>
		<SEO title="NetBase Klipfolio Visualizations" keywords={[`NetBase`, `Klipfolio`, `Visualization`]} />
		<ProjectHero
			title="NetBase Klipfolio Visualizations"
			subtitle="Connecting NetBase API to Klipfolio and creating data visualizations"
			img={withPrefix('/images/dangfoods/dangfoods-header.png')}
		/>
		<Content>
			<h2>My Role</h2>
			<ul>
				<li> Front-End Developer / Happiness Engineer</li>
				<li> Connecting NetBase API to Klipfolio and creating data visualizations</li>
				<li> Developed a development environment to increase workflow efficiency</li>
				<li> Troubleshooting bugs and resolving client dashboards' issues </li>
			</ul>
			<h2>Tech Stack</h2>
			<ButtonList>
				<li>HTML5 / CSS3</li>
				<li>JavaScript</li>
				<li>jQuery</li>
				<li>D3.js</li>
				<li>Node.js</li>
				<li>Express.js</li>
			</ButtonList>

			<h2>About this project</h2>
			<p>
				Klipfolio is a data analytics cloud app for building and sharing real-time business dashboards and
				reports on web browsers, TV monitors and mobile devices. It allows you to connect various data sources
				in one platform and our goal is to add NetBase API as one of their data sources. In this project I
				worked on various custom visualizations that Klipfolio natively do not have. Since this is a new
				platform for NetBase, I had to go through a lot of hoops in order to create the custom visualizations
				that we needed.
				<br />
				<br />
				Even though Klipfolio allows you to build your own custom HTML/JS visualizations there wasn't a lot of
				examples or documentations that would help you get started. It also uses Require.js to import scripts,
				which added another step to the process when I transpose my local code to Klipfolio. Initially the
				workflow looked like this:
			</p>
			<ul>
				<li>Connect data source in Klipfolio platform</li>
				<li>Create visualization in Codepen with dummy data</li>
				<li>Copy and paste the code in Klipfolio's HTML and JavaScript section</li>
				<li>Save and check if the code works</li>
			</ul>

			<p>
				Debugging, copying, pasting and saving took a lot of my time, so in order to fix my workflow issue, I
				created a development environment that mimics the Klipfolio Editor. I used Node and Express to connect
				to NetBase API and created a route to store the data locally. On the front-end, I used AJAX to get the
				data and Require.js to import other libraries. If my code works locally then there is a good chance it
				will work on Klipfolio.
			</p>
		</Content>
	</Layout>
);

export default nbklipfolio;
