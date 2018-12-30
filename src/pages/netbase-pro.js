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

const nbpro = () => (
	<Layout>
		<SEO title="NetBase Pro" />
		<ProjectHero
			title="NetBase Pro"
			subtitle="Social media analytics app redesign"
			img={withPrefix('/images/nbpro/nbpro-header.png')}
		/>
		<Content>
			<h2>My Role</h2>
			<ul>
				<li> Front-End Developer</li>
				<li> Rewrote the front end with mobile responsive code</li>
				<li> Prototyped new features in Highcharts</li>
			</ul>
			<h2>Tech Stack</h2>
			<ButtonList>
				<li>HTML5 / CSS3</li>
				<li>SCSS</li>
				<li>Handlebars</li>
				<li>Bootstrap</li>
				<li>Gulp</li>
				<li>Highcharts</li>
				<li>Responsive Web Design</li>
			</ButtonList>

			<h2>About this project</h2>
			<p>
				Before the redesign, NetBase Pro was not user-friendly and was not mobile responsive. We wanted an
				application that was friendly for non-analyst users, so we decided to rewrite the 90% of the front-end.
				As the Front-End Developer on this project, I worked with designers and project managers to iterate
				through various designs before passing my code to the engineering team. Using HTML5, CSS3, Bootstrap,
				SCSS, and JavaScript, I reskinned the company's app, the only code that remained the same was the cards
				and card grid. I also worked on improving the look and feel of the charts and also prototyped new charts
				in Highcharts.
			</p>
		</Content>
		<ProjectNav />
	</Layout>
);

export default nbpro;
