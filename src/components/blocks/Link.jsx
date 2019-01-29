import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import themeUtils from '../../themes/themeUtils';

const linkCss = p => css`
  text-decoration: none;
  color: ${themeUtils.getTheme(p.theme).colors.text};
`;

const Link = props => {
  const { target } = props;
  const rel = target === '_blank' ? 'rel="noopener noreferrer"' : '';

  return (
    <a css={linkCss(props)} rel={rel} {...props}>
      {props.children}
    </a>
  );
};
Link.propTypes = {
  target: PropTypes.string,
  children: PropTypes.any,
};

export default Link;
