import PropTypes from 'prop-types';
import React from 'react';
import styles from './List.scss';

const List = (props) => {
  const {
    align,
    autoWidth,
    children,
  } = props;

  if (!props.children) {
    return null;
  }

  let alignClass = '';

  if (align === 'start') {
    alignClass = styles.alignStart;
  } else if (align === 'end') {
    alignClass = styles.alignEnd;
  }

  let autoWidthClass = '';

  if (autoWidth) {
    autoWidthClass = styles.isAutoWidth;
  }

  return (
    <div
      className={`
        ${styles.root}
        ${autoWidthClass}
      `.trim()}
    >
      <ul
        className={`
          ${styles.list}
          ${alignClass}
        `.trim()}
      >
        {children}
      </ul>
    </div>
  );
};

List.defaultProps = {
  align: 'start',
  autoWidth: false,
  children: null,
};

List.propTypes = {
  align: PropTypes.oneOf(['start', 'end']),
  autoWidth: PropTypes.bool,
  children: PropTypes.node,
};

export default List;
