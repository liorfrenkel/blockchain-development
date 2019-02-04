import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/pro-light-svg-icons';
import cx from 'classnames';
import themeUtils from '../../lib/themeUtils';

const { getTheme } = themeUtils;
const paddingHorizontal = props => getTheme(props).padding.container;
const responsiveHorizontal = props =>
  themeUtils.mq({
    right: props.right ? paddingHorizontal(props) : 'auto',
    left: props.right ? 'auto' : paddingHorizontal(props),
  });
const responsiveHorizontalPadding = props =>
  themeUtils.mq({
    paddingRight: paddingHorizontal(props),
    paddingLeft: paddingHorizontal(props),
  });
const responsiveTopPadding = props =>
  themeUtils.mq({
    paddingTop: props.menuPaddingTop ? props.menuPaddingTop : '120px',
  });

const responsiveMenuWidth = themeUtils.mq({
  width: ['200px'],
});

const SideSlideMenuWrapper = styled.div`
  /* Hide the plugin icon */
  .bm-burger-button {
    display: none;
  }

  /* Hide the inner close */
  .bm-cross-button {
    display: none;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
    ${responsiveMenuWidth}
  }

  /* General sidebar styles */
  .bm-menu {
    background: ${p => getTheme(p).colors.bg1};
    ${p => responsiveTopPadding(p)}
    padding-bottom: 0;
    ${p => responsiveHorizontalPadding(p)}
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    padding: 0;
    padding-top: 20px;
  }

  /* Individual item */
  .bm-item {
    display: block;
    outline: none;
    font-family: 'industry';
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    text-align: ${p => (p.right ? 'right' : 'left')};
    margin-bottom: ${p => getTheme(p).spacings.horizontal[1]};
    color: ${p => getTheme(p).colors.menu.normal};

    &:hover {
      color: ${p => getTheme(p).colors.menu.hover};
    }
    &.is-active {
      color: ${p => getTheme(p).colors.menu.active};
    }
  }
`;

const menuInnerStyles = {
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.1)',
    top: 0,
    left: 0,
  },
  bmItemList: {
    height: 'auto',
  },
};
const transitionSpeed = '.1s';
const transitionEasing = 'ease-in-out';

const MenuToggleWrapper = styled.div`
  z-index: 1200;
  position: fixed;
  top: 36px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  ${p => responsiveHorizontal(p)}

  .menu-icon {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    transform: rotate(90deg);
    transition: all ${transitionSpeed} ${transitionEasing};

    &.is-active {
      transform: rotate(0deg);
      opacity: 1;
    }
  }
`;

class SideSlideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    this.toggle = this.toggle.bind(this);
    this.setOpenState = this.setOpenState.bind(this);
  }

  toggle() {
    if (this.state.active) {
      this.close();
    } else {
      this.open();
    }
  }

  close() {
    this.setState({ active: false });
  }

  open() {
    this.setState({ active: true });
  }

  setOpenState(state) {
    this.setState({ active: state.isOpen });
  }

  render() {
    const { active } = this.state;
    return (
      <SideSlideMenuWrapper className="SideSlideMenu" {...this.props}>
        <MenuToggleWrapper
          className="menu-toggle"
          {...this.props}
          onClick={this.toggle}
        >
          <FontAwesomeIcon icon={faBars} className={cx('menu-icon', { 'is-active': !active })}  />
          <FontAwesomeIcon icon={faTimes} className={cx('menu-icon', { 'is-active': active })}  />
        </MenuToggleWrapper>
        <Menu
          width={''}
          styles={menuInnerStyles}
          {...this.props}
          isOpen={active}
          onStateChange={this.setOpenState}
        />
      </SideSlideMenuWrapper>
    );
  }
}

export default SideSlideMenu;
