import styles from './Card.module.css';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a contained box
 */
export function Card({
  children,
  variant = 'default',
  padding = 'medium',
  hoverable = false,
  onClick,
  className = '',
  as: Component = 'div',
  ...props
}) {
  const classNames = [
    styles.card,
    styles[`card--${variant}`],
    styles[`card--${padding}`],
    hoverable ? styles['card--hoverable'] : '',
    onClick ? styles['card--clickable'] : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component
      className={classNames}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'outlined', 'elevated', 'gradient']),
  padding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  hoverable: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  as: PropTypes.elementType,
};

export default Card;
