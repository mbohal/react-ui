import PropTypes from 'prop-types';
import React from 'react';
import styles from './Row.scss';

const RowEnd = ({ children }) => (
  <div className={styles.end}>
    {children}
  </div>
);

RowEnd.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RowEnd;
