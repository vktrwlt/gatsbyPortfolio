import React from 'react';
import styled from '@emotion/styled';
import { gradient, fallbackBG } from '../../utils/variables';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
const ProjectCard = styled.div`
	position: relative;
	overflow: hidden;

	img {
		width: 100%;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	span:hover {
		opacity: 1;
	}
	&:after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: ${fallbackBG};
		background: ${gradient};
		opacity: 0;
		transform: translateX(-100%);
		transition: transform 0.25s ease-in-out, opacity 0.35s ease-in-out;
	}
	&:hover:after {
		opacity: 0.95;
		transform: translateX(0);
	}
`;

const ProjectDetail = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	padding: 30px 30px;
	z-index: 200;
	height: 100%;
	width: 100%;
	${tw`flex flex-col justify-between leading-normal`};
	& h3 {
		margin: 0 0 10px;
	}

	& span {
		opacity: 0;
	}
	&:hover {
		color: white;
		& span {
			opacity: 1;
			transition: opacity 0.5s ease-in-out;
		}
	}
`;

const ViewMore = styled.span`
	svg {
		padding-top: 2px;
		margin-left: 5px;
	}
`;

const Project = ({ title, link, thumbnail, children }) => {
	return (
		<ProjectCard>
			<Link to={link}>
				<ProjectDetail>
					<div>
						<h3>{title}</h3>
						<span>{children}</span>
					</div>
					<ViewMore>
						View More <FontAwesomeIcon icon={faLongArrowAltRight} />
					</ViewMore>
				</ProjectDetail>
				<img src={thumbnail} alt={title} />
			</Link>
		</ProjectCard>
	);
};

export default Project;
