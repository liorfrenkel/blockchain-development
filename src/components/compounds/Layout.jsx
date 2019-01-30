import React from 'react';
import PropTypes from 'prop-types';
import { Global, css, jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import emotionNormalize from 'emotion-normalize';
import themeUtils from '../../lib/themeUtils';
import { Container } from '../blocks';
import styles from '../../styles';
import './Layout.css';

import { Header } from './';

const { h100 } = styles.generic;

const Layout = ({ children }) => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <div css={h100}>
      <Global
        styles={css`
          ${emotionNormalize}
          html {
            font-size: 16px;
          }

          html,
          body {
            padding: 0;
            margin: 0;
            background: #f2f2f2;
            height: 100%;
            font-family: 'Lato';
            color: #4d4d4d;
          }

          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          a {
            display: inline-block;
          }

          #___gatsby,
          #___gatsby > * {
            height: 100%;
          }
        `}
      />
      <Header />
      <div css={theme => css`
        ${h100}
        padding-top: ${themeUtils.getTheme({theme}).spacings.vertical[4]};
      `}>
        <Container css={h100}>{children}</Container>
      </div>
    </div>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
