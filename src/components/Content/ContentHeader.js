import React from 'react';
import styled from '@emotion/styled';
import { withPrefix } from 'gatsby';

const Wrapper = styled.div`
	padding: 120px 0 40px;
	margin: 0 auto;
	@media screen and (max-width: 768px) {
		padding: 60px 0;
		margin-top: 50px;
	}
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

const ContentHeader = () => {
	return (
		<Wrapper>
			<Title>NetBase On-Tour</Title>
			<Subtitle> Breakfast seminar event page for NetBase</Subtitle>
			<Img src={withPrefix('/images/nbontour/nbontour-header.png')} />
		</Wrapper>
	);
};

export default ContentHeader;
