import React from 'react';
import styled from '@emotion/styled';
import { primaryColor } from '../../utils/variables';
import { Link } from 'gatsby';
const Wrapper = styled.div`
	margin-top: 50px;
	& h2 {
		${tw`font-normal`}
	}

	& h3 {
		${tw`font-normal`}
	}
	& p {
		${tw` text-lg font-normal`}
	}
	& a {
		color: ${primaryColor};
	}
`;
const ProjectNav = props => {
	return (
		<Wrapper>
			<h2>Thanks for reading!</h2>
			<Link to="/">View all projects</Link>
		</Wrapper>
	);
};

export default ProjectNav;
