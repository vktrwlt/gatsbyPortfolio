import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled.div`
	${tw`leading-normal`};
	& h2 {
		${tw`font-normal`}
	}

	& h3 {
		${tw`font-normal`}
	}
	& p {
		${tw` text-lg font-normal`}
	}

	& li {
		${tw` text-lg font-normal`}
	}
	${props => (props.noHero ? `margin-top:100px` : null)};
`;

const Content = props => {
	return <Wrapper {...props}>{props.children}</Wrapper>;
};

Content.propTypes = {
	noHero: PropTypes.bool
};

export default Content;
