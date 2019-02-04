import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import logoHorizontal from '../../images/logo-horizontal.png';
import logoHorizontal2x from '../../images/logo-horizontal@2x.png';
import logoVertical from '../../images/logo-vertical.png';

const LogoImage = styled.img`
  min-width: 100px;
  height: auto;
`;

const Logo = ({ horizontal, ...rest }) =>
  horizontal ? (
    <LogoImage
      src={logoHorizontal}
      srcSet={`${logoHorizontal}, ${logoHorizontal2x} 2x`}
      {...rest}
    />
  ) : (
    <LogoImage src={logoVertical} {...rest} />
  );
Logo.propTypes = {
  horizontal: PropTypes.bool,
};

export default Logo;
