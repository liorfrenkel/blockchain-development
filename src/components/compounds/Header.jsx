import { Link } from 'gatsby';
import React from 'react';
import { Global, css } from '@emotion/core';
import { Logo } from './';
import { Container, SideSlideMenu as Menu } from '../blocks';
import themeUtils from '../../lib/themeUtils';

const menuBtn = {
  width: 18,
  height: 18,
};
const paddingsTop = ['12px'];
const headerHeights = [70];
const responsiveBodyPadding = themeUtils.mq({
  paddingTop: themeUtils.sizeToPx(headerHeights),
});
const responsiveMenuTop = themeUtils.mq({
  top: themeUtils.sizeToPx(headerHeights.map(x => x / 2 - menuBtn.height / 2)),
});

const Header = () => (
  <div
    className="Header"
    css={css`
      background: #ffffff;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 10;

      .SideSlideMenu .menu-toggle {
        width: ${menuBtn.width}px;
        height: ${menuBtn.height}px;
        ${responsiveMenuTop}
      }
    `}
  >
    <Global
      styles={css`
        body {
          ${responsiveBodyPadding}
        }
      `}
    />
    <Container
      className="Header--container"
      css={css`
        ${themeUtils.mq({
          paddingTop: paddingsTop,
          paddingBottom: paddingsTop,
        })}
        display: flex;
      `}
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
            height: '46px',
            display: 'block',
          })}
        />
      </Link>
    </Container>
    <Menu right menuPaddingTop={themeUtils.sizeToPx(headerHeights)}>
      <Link to="/" activeClassName="is-active">HOME</Link>
      <Link to="/team/" activeClassName="is-active">TEAM</Link>
    </Menu>
  </div>
);

export default Header;
