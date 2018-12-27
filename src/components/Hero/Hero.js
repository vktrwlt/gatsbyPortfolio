import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
	padding: 120px 0;

	@media screen and (max-width: 768px) {
		padding: 60px 0;
		margin-top: 50px;
	}
`;

const Text = styled.h2`
	max-width: 950px;
	${tw` text-3xl font-normal`}
	color:#333;
`;

const Highlight = styled.span`
	color: #0856c1;
`;

const Hero = () => {
	return (
		<Wrapper>
			<Text>
				<Highlight>Hello!</Highlight> I’m Victor Tsang – a full-stack developer passionate about front-end
				development and creating attractive digital experiences
			</Text>
		</Wrapper>
	);
};

export default Hero;
