import PropTypes from 'prop-types';
import styles from './IconButton.module.css';

/**
 * IconButton - круглая кнопка с иконкой
 * Используется для навигации, закрытия и других действий
 */
export function IconButton({
  icon,
  ariaLabel,
  onClick,
  href,
  variant = 'default',
  size = 'medium',
  className = '',
  ...props
}) {
  const classNames = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className,
  ].filter(Boolean).join(' ');

  const content = typeof icon === 'string' ? (
    <img src={icon} alt="" className={styles.icon} />
  ) : (
    icon
  );

  if (href) {
    return (
      <a
        href={href}
        className={classNames}
        aria-label={ariaLabel}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classNames}
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}

IconButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'primary', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};

export default IconButton;
