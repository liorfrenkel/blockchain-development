import { Link } from 'gatsby';
import React from 'react';
import { Global, css } from '@emotion/core';
import { Logo } from './';
import { Container } from '../blocks';
import themeUtils from '../../themes/themeUtils';

const responsiveBodyPadding = themeUtils.mq({
  paddingTop: ['80px', '102px'],
});

const Header = () => (
  <div
    css={{
      background: '#ffffff',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 10,
    }}
  >
    <Global
      styles={css`
        body {
          ${responsiveBodyPadding}
        }
      `}
    />
    <Container
      css={themeUtils.mq({
        paddingTop: ['15px', '21px'],
        paddingBottom: ['15px', '21px'],
      })}
    >
      <Link
        to="/"
        css={{
          textDecoration: 'none',
          display: 'block',
        }}
      >
        <Logo
          horizontal
          css={themeUtils.mq({
            maxHeight: ['50px', '60px'],
            display: 'block',
          })}
        />
      </Link>
    </Container>
  </div>
);

export default Header;
