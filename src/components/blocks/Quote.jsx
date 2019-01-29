import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ children }) => (
  <React.Fragment>
    <b>“</b>
    {children}
    <b>”</b>
  </React.Fragment>
);

Quote.propTypes = {
  children: PropTypes.any,
};

export default Quote;
