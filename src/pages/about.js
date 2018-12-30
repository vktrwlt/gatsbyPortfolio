import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Content from '../components/Content/Content';

const about = () => (
	<Layout>
		<SEO title="About Me" />
		<Content noHero={true}>
			<p>
				Hi! My name is Victor Tsang and I am currently working as a Front-End Developer at NetBase, a social
				analytics software company. As the sole developer on the design team, I work cross-functionally between
				Marketing, Product, and Engineering. At NetBase I have worked on various projects including:
			</p>
			<ul>
				<li>WordPress theme development</li>
				<li>Creating new marketing pages in WordPress</li>
				<li>Coding and QA Email templates</li>
				<li>Creating microsites for various NetBase events</li>
				<li>Dashboards and chart visualizations</li>
				<li>Improving NetBase Pro with mobile responsive code</li>
				<li>React prototype for NetBase Customer Experience Analytics Dashboard</li>
			</ul>
			<p>
				In my free time, I like to learn about the lastest technologies and how I can leverage them in my
				projects. After being exposed to Gatsby.js, which is how this portfolio is made, from a JAMStack
				Hack-a-ton, I fell in love with the framework and started incorporating Gatsby to my personal and work
				projects.
			</p>
			<p>I am currently searching for a role where I can grow as a Front-End Engineer.</p>
		</Content>
	</Layout>
);

export default about;
