import React from 'react';
import styled from '@emotion/styled';
import { withPrefix } from 'gatsby';

const Wrapper = styled.div`
	margin: 100px auto 30px;
`;

const Title = styled.h2`
	${tw` text-3xl mb-2 font-normal text-center`}
	color:#333;
`;

const Subtitle = styled.h3`
	${tw` text-xl font-normal m-0 text-center`}
	color:#333;
`;

const Img = styled.img`
	width: 100%;
	margin-top: 30px;
`;

const ProjectHero = ({ title, subtitle, img, ...props }) => {
	return (
		<Wrapper {...props}>
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
			<Img src={img} alt={title} />
		</Wrapper>
	);
};

export default ProjectHero;
