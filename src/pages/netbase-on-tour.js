import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Project from '../components/Project/Project';
import ContentHeader from '../components/Content/ContentHeader';
const ProjectGrid = styled.div`
	display: grid;
	grid-gap: 30px;
	@media screen and (min-width: 600px) {
		grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
	}
`;

const Content = styled.div`
	max-width: 950px;
	margin: 0 auto;
`;

const ContentBody = styled.div`
	& h2 {
		${tw`font-normal`}
	}
	& p {
		${tw` text-lg font-normal`}
	}
`;

const ContentDetails = styled.div``;

const ContentText = styled.div``;

const nbontour = () => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

		<Content>
			<ContentHeader />
			<ContentBody>
				<ContentDetails>
					<h2>
						Role: <span style={{ fontWeight: '400' }}>Front-End Developer</span>
					</h2>
					<h2>Tech Stack</h2>
					<ul>
						<li>HTML5 / CSS3</li>
						<li>WordPress</li>
						<li>jQuery</li>
						<li>React</li>
						<li>Gatsby</li>
						<li>Graphql</li>
						<li>API</li>
						<li>Responsive Web Design</li>
						<li>Site Optimization</li>
					</ul>
				</ContentDetails>
				<ContentText>
					<h2>About this project</h2>
					<p>
						The company was hosting its 2nd annual roadshow events and required a landing page that held all
						the speakers information for each city they are touring. Due to a short time frame and a design
						that was ever changing, there was a need for a page that can be built fast and flexible enough
						for a designer to make changes to. I built NetBase On Tour 2018 using WordPress and Divi theme.
						The visual builder gave easy access to layout components without heavily involving the developer
						to make changes. At the cost of speed and flexiblity, the content were coded in static blocks,
						which means when a session title have changed, we will need to manually update the places that
						are mentioned.
						<br />
						<br />
						As the design was finalized for 2019, I recreated the front-end using Gatsby, React, and
						leveraged Airtable CMS as our back-end. I have tried out a few other headless CMS APIs, but I
						liked Airtable the most for this project because it offered a 'Google Sheets' experience, which
						everyone on the team is familar with, and it also let us define a schema that works well for us.
						<br />
						<br />
						The updated site now have a back-end that holds all the content and a static site generator that
						will update the page when a change have been made. By recreating this page with Gatsby and
						Airtable CMS, I was able to increase our workflow efficiency and the loading speed of our page.
					</p>
				</ContentText>
			</ContentBody>
		</Content>
	</Layout>
);

export default nbontour;
