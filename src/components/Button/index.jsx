import styles from './Button.module.css';
import PropTypes from 'prop-types';

/**
 * Button component with multiple variants and sizes
 * Supports rendering as button or link (polymorphic)
 */
export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  ariaLabel,
  className = '',
  as,
  href,
  ...props
}) {
  const classNames = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    fullWidth ? styles['button--fullWidth'] : '',
    className
  ].filter(Boolean).join(' ');

  // Determine which element to render
  const Component = as || (href ? 'a' : 'button');

  // Common props for all elements
  const commonProps = {
    className: classNames,
    'aria-label': ariaLabel,
    ...props
  };

  // Render as link
  if (Component === 'a') {
    return (
      <a
        href={href}
        {...commonProps}
      >
        {children}
      </a>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...commonProps}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  as: PropTypes.elementType,
  href: PropTypes.string,
};

export default Button;
