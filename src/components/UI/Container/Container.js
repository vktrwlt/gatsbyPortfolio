import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
	max-width: 1000px;
	width: 100%;
	margin: 0 auto;
	padding: 0 50px;
`;

const Container = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

export default Container;
