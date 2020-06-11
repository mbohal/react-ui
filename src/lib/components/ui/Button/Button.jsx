import PropTypes from 'prop-types';
import React from 'react';
import transferProps from '../../../utils/transferProps';
import withForwardedRef from '../withForwardedRef';
import styles from './Button.scss';

export const Button = (props) => {
  let priorityClass = styles.priorityDefault;
  if (props.priority === 'outline') {
    priorityClass = styles.priorityOutline;
  } else if (props.priority === 'flat') {
    priorityClass = styles.priorityFlat;
  }

  let sizeClass = styles.sizeMedium;
  if (props.size === 'small') {
    sizeClass = styles.sizeSmall;
  } else if (props.size === 'large') {
    sizeClass = styles.sizeLarge;
  }

  let variantClass = styles.variantSecondary;
  if (props.variant === 'primary') {
    variantClass = styles.variantPrimary;
  } else if (props.variant === 'success') {
    variantClass = styles.variantSuccess;
  } else if (props.variant === 'warning') {
    variantClass = styles.variantWarning;
  } else if (props.variant === 'danger') {
    variantClass = styles.variantDanger;
  } else if (props.variant === 'dark') {
    variantClass = styles.variantDark;
  }

  let blockClass = '';
  if (props.block) {
    blockClass = styles.isRootBlock;
  }

  let groupedClass = '';
  if (props.grouped) {
    groupedClass = styles.isRootGrouped;
  }

  let labelVisibilityClass = '';
  if (props.labelVisibility === 'desktop') {
    labelVisibilityClass = styles.withLabelHiddenMobile;
  } else if (props.labelVisibility === 'none') {
    labelVisibilityClass = styles.withLabelHidden;
  }

  const propsToTransfer = transferProps(
    props,
    ['afterLabel', 'beforeLabel', 'block', 'clickHandler', 'disabled', 'endCorner', 'grouped', 'id',
      'label', 'labelVisibility', 'loadingIcon', 'priority', 'size', 'startCorner', 'type', 'variant'],
  );

  return (
    <button
      {...propsToTransfer}
      className={(`
        ${styles.root}
        ${priorityClass}
        ${sizeClass}
        ${variantClass}
        ${blockClass}
        ${groupedClass}
        ${labelVisibilityClass}
      `).trim()}
      disabled={props.disabled || !!props.loadingIcon}
      id={props.id}
      onClick={props.clickHandler}
      ref={props.forwardedRef}
      title={props.labelVisibility === 'all' ? null : props.label}
      type={props.type}
    >
      {props.startCorner && (
        <span className={styles.startCorner}>
          {props.startCorner}
        </span>
      )}
      {props.beforeLabel && (
        <span className={styles.beforeLabel}>
          {props.beforeLabel}
        </span>
      )}
      <span
        className={styles.label}
        {...(props.id && { id: `${props.id}__labelText` })}
      >
        {props.label}
      </span>
      {props.afterLabel && (
        <span className={styles.afterLabel}>
          {props.afterLabel}
        </span>
      )}
      {props.endCorner && (
        <span className={styles.endCorner}>
          {props.endCorner}
        </span>
      )}
      {props.loadingIcon && (
        <span className={styles.loadingIcon}>
          {props.loadingIcon}
        </span>
      )}
    </button>
  );
};

Button.defaultProps = {
  afterLabel: null,
  beforeLabel: null,
  block: false,
  clickHandler: null,
  disabled: false,
  endCorner: null,
  forwardedRef: undefined,
  grouped: false,
  id: undefined,
  labelVisibility: 'all',
  loadingIcon: null,
  priority: 'default',
  size: 'medium',
  startCorner: null,
  type: 'button',
  variant: 'primary',
};

Button.propTypes = {
  afterLabel: PropTypes.node,
  beforeLabel: PropTypes.node,
  block: PropTypes.bool,
  clickHandler: PropTypes.func,
  disabled: PropTypes.bool,
  endCorner: PropTypes.node,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  grouped: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelVisibility: PropTypes.oneOf(['all', 'desktop', 'none']),
  loadingIcon: PropTypes.node,
  priority: PropTypes.oneOf(['default', 'outline', 'flat']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  startCorner: PropTypes.node,
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'dark']),
};

export default withForwardedRef(Button);
