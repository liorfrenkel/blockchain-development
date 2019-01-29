import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import logoHorizontal from '../../images/logo-horizontal.png';
import logoVertical from '../../images/logo-vertical.png';

const LogoImage = styled.img`
  min-width: 100px;
  height: auto;
`;

const Logo = ({ horizontal, ...rest }) => (
  <LogoImage src={horizontal ? logoHorizontal : logoVertical} {...rest} />
);
Logo.propTypes = {
  horizontal: PropTypes.bool,
};

export default Logo;
