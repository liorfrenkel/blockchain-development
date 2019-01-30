import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const titleBaseStyle = css`
  font-family: industry;
  margin-top: 0;
`;

const Title1 = styled.h1`
  ${titleBaseStyle}
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Title2 = styled.h2`
  ${titleBaseStyle}
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const components = [Title1, Title2];
const getTitleComponent = size => {
  const index = Number(size) - 1;
  return index < 0
    ? components[0]
    : index >= components.length
    ? components[components.length - 1]
    : components[index];
};

const Title = ({ size, ...props }) => {
  const Component = getTitleComponent(size);
  return <Component {...props} />;
};

Title.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Title.defaultProps = {
  size: 1,
};

export default Title;
