import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const buttonColor = '#000000';
const buttonColorHover = '#808080';
const buttonWidth = '30px';
const buttonHeight = '26px';
const lineThickness = '4px';
const transitionSpeed = '.1s';
const transitionEasing = 'ease-in-out';

const MenuToggle = styled.button`
  position: relative;
  display: block;
  width: ${buttonWidth};
  height: ${buttonHeight};

  background: transparent;
  border-top: ${lineThickness} solid;
  border-bottom: ${lineThickness} solid;
  border-left: none;
  border-right: none;

  cursor: pointer;
  outline: none;
  color: ${buttonColor};
  font-size: 0;

  transition: all ${transitionSpeed} ${transitionEasing};

  &:before,
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: ${lineThickness};

    position: absolute;
    top: 50%;
    left: 50%;

    background: currentColor;

    transform: translate(-50%, -50%);
    transition: transform ${transitionSpeed} ${transitionEasing};
  }

  &:hover {
    color: ${buttonColorHover};
  }

  &.is-active {
    border-color: transparent;

    &:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`;

const MenuContent = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height ${transitionSpeed} ${transitionEasing};
  background-color: white;
  margin-top: 10px;

  &.is-active {
    max-height: ${p => (p.height ? p.height : '800')}px;
  }

  ul {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
`;

const MenuContainer = styled.div`
  position: relative;
`;

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    this.contentRef = React.createRef();
    this.toggle = this.toggle.bind(this);
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

  render() {
    const { right, children } = this.props;
    const className = this.state.active ? 'is-active' : '';
    const contentHeight = this.contentRef.current
      ? this.contentRef.current.scrollHeight
      : 0;
    return (
      <MenuContainer right={!!right}>
        <MenuToggle className={className} onClick={this.toggle}>
          Menu
        </MenuToggle>
        <MenuContent height={contentHeight} className={className} ref={this.contentRef}>
          {children}
        </MenuContent>
      </MenuContainer>
    );
  }
}

Menu.propTypes = {
  right: PropTypes.bool,
  children: PropTypes.any,
};

export default Menu;
