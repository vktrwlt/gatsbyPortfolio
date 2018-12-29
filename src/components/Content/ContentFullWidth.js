import React from 'react';
import styled from '@emotion/styled';
const Wrapper = styled.div`
	width: 100vw;
	position: relative;
	left: 50%;
	right: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
	background: #e9e9e9;
	height: auto;
	padding: 0;
	${tw`flex justify-center`};
`;
const Inner = styled.div`
	max-width: 900px;

	margin: 0 auto;
	width: 100%;
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
`;

const ContentFullWidth = ({ children }) => {
	return (
		<Wrapper>
			<Inner>{children}</Inner>
		</Wrapper>
	);
};

export default ContentFullWidth;
