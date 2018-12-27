import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Project from '../components/Project/Project';
import ContentHeader from '../components/Content/ContentHeader';
import { primaryColor } from '../utils/variables';
const ProjectGrid = styled.div`
	display: grid;
	grid-gap: 30px;
	@media screen and (min-width: 600px) {
		grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
	}
`;

const Content = styled.div`
	margin: 0 auto;
`;

const ContentBody = styled.div`
	& h2 {
		${tw`font-normal`}
	}
	& p {
		${tw` text-lg font-normal`}
	}
	${tw`leading-normal`};
`;

const ContentDetails = styled.div``;

const ButtonList = styled.ul`
	@media screen and (min-width: 600px) {
		margin: 0;
		padding: 0;
		list-style: none;
		${tw`flex flex-wrap`};

		& li {
			display: inline-block;
			padding: 10px 15px;
			margin: 10px;
			border: 1.5px solid ${primaryColor};
		}
	}
`;

const ContentText = styled.div``;

const nbontour = () => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

		<Content>
			<ContentHeader />
			<ContentBody>
				<ContentDetails>
					<h2>
						Role: <span style={{ display: 'inline-block' }}>Front-End Developer</span>
					</h2>
					<h2>Tech Stack</h2>
					<ButtonList>
						<li>HTML5 / CSS3</li>
						<li>WordPress</li>
						<li>jQuery</li>
						<li>React</li>
						<li>Gatsby</li>
						<li>GraphQL</li>
						<li>API</li>
						<li>Responsive Web Design</li>
						<li>Site Optimization</li>
					</ButtonList>
					<h2>Project link</h2>
				</ContentDetails>
				<ContentText>
					<h2>About this project</h2>
					<p>
						The company required a landing page for their 2nd annual roadshow event that needs to display
						all the speakers information and cities they are visiting. The page need to be built fast and
						flexible enough for members of the marketing team to make changes to without heavily involving
						the developer to make changes. I built NetBase On Tour 2018 using WordPress and Divi theme. The
						visual builder gave easy access to layout components and made use of the framework that the
						company is using. At the cost of speed and flexiblity (along with the trade-off of using Divi
						theme), the content were coded in static blocks, which means when a session title have changed,
						we will need to manually update the places that are mentioned.
						<br />
						<br />
						As the design was finalized for 2019, I recreated the front-end using Gatsby, React, and
						leveraged Airtable CMS as our back-end. Airtable CMS offered a "Google Sheets" experience, which
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
