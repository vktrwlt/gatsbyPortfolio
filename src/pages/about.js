import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Content from '../components/Content/Content';

const about = () => (
	<Layout>
		<SEO title="About Me" />
		<Content noHero>
			<p>
				Hi! My name is Victor and I am currently working as a Front-End Developer at NetBase, a social analytics
				software company. At NetBase I manage the company's public facing sites and have worked on several
				projects where I contributed to the front-end UI of their apps.
			</p>
			<p>
				In my free time, I like to improve my skills in web development and how I can leverage them in my
				personal and works projects. After learning Gatsby.js from a JAMStack Hackathon, I fell in love with the
				framework and I rebuilt my portfolio using the React static site generator.
			</p>
			<p>
				I am currently looking for a role where I can develop modern websites and applications using React and
				grow as an Engineer.
			</p>
		</Content>
	</Layout>
);

export default about;
