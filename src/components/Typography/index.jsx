import styles from './Typography.module.css';
import PropTypes from 'prop-types';

/**
 * Typography component for consistent text styling
 * Based on JVO Figma design system
 */
export function Typography({
  children,
  variant = 'body',
  as,
  secondary = false,
  center = false,
  maxWidth,
  className = '',
  ...props
}) {
  // Default HTML element for each variant
  const defaultElements = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    subtitle: 'p',
    bodyLarge: 'p',
    body: 'p',
    bodySmall: 'p',
    caption: 'span',
  };

  const Component = as || defaultElements[variant] || 'p';

  const classNames = [
    styles[variant],
    secondary && styles.secondary,
    center && styles.center,
    maxWidth && styles[`maxWidth--${maxWidth}`],
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'subtitle',
    'bodyLarge',
    'body',
    'bodySmall',
    'caption',
  ]),
  as: PropTypes.elementType,
  secondary: PropTypes.bool,
  center: PropTypes.bool,
  maxWidth: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default Typography;
