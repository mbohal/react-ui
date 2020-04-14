import PropTypes from 'prop-types';
import React from 'react';
import styles from './Card.scss';

export const Card = (props) => {
  const {
    children,
    dense,
    disabled,
    id,
    inList,
    raised,
    type,
  } = props;

  let typeClass = styles.isTypeFlat;
  if (type === 'warning') {
    typeClass = styles.isTypeWarning;
  } else if (type === 'error') {
    typeClass = styles.isTypeError;
  } else if (type === 'bordered') {
    typeClass = styles.isTypeBordered;
  }

  let denseClass = '';
  if (dense) {
    denseClass = styles.isDense;
  }

  let disabledClass = '';
  if (disabled) {
    disabledClass = styles.isDisabled;
  }

  let inListClass = '';
  if (inList) {
    inListClass = styles.isInList;
  }

  let raisedClass = '';
  if (raised) {
    raisedClass = styles.isRaised;
  }

  return (
    <div
      className={(`
        ${styles.root}
        ${typeClass}
        ${denseClass}
        ${disabledClass}
        ${inListClass}
        ${raisedClass}
      `).trim()}
      id={id}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  dense: false,
  disabled: false,
  id: undefined,
  inList: false,
  raised: false,
  type: 'flat',
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  dense: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  inList: PropTypes.bool,
  raised: PropTypes.bool,
  type: PropTypes.oneOf(['flat', 'bordered', 'warning', 'error']),
};

export default Card;
