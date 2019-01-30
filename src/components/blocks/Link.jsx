import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import themeUtils from '../../lib/themeUtils';

const StyledLink = styled.a`
  text-decoration: none;
  color: ${p => themeUtils.getTheme(p).colors.text};
`;

const Link = ({children, ...props}) => {
  const { target } = props;
  const rel = target === '_blank' ? 'rel="noopener noreferrer"' : '';

  return (
    <StyledLink rel={rel} {...props}>
      {children}
    </StyledLink>
  );
};
Link.propTypes = {
  target: PropTypes.string,
  children: PropTypes.any,
};

export default Link;
