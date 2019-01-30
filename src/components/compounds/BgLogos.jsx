import React from 'react';
import styled from '@emotion/styled';
import themeUtils from '../../lib/themeUtils';
import logo from '../../images/logo-big.png';

const BgLogo = styled.div`
  display: none;
  width: 100%;
  height: 22%;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center top;
  position: absolute;
  z-index: 0;

  &.bottom {
    display: block;
    bottom: 0;
    left: 0;
    background-size: cover;
  }
  @media (min-width: ${themeUtils.breakpoints.lg}px) {
    display: block;
    width: 100%;
    height: 100%;
    background-position: left center;
    position: absolute;
    top: 0;

    &.left {
      left: -450px;
    }
    &.right {
      right: -450px;
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      filter: FlipH;
      -ms-filter: 'FlipH';
    }
    &.bottom {
      display: none;
    }
  }
`;

const BgLogos = () => (
  <div
    css={{
      overflowX: 'hidden',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    }}
  >
    <BgLogo className="left" />
    <BgLogo className="right" />
    <BgLogo className="bottom" />
  </div>
);

export default BgLogos;
