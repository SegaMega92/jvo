import PropTypes from 'prop-types';
import styles from './Spacer.module.css';

// Пресеты размеров
const PRESETS = {
  xs: 24,
  sm: 40,
  md: 60,
  lg: 80,
  xl: 120,
};

/**
 * Spacer - компонент для управляемых отступов между секциями
 *
 * Использование:
 *   <Spacer size={72} />        // кастомное значение в пикселях
 *   <Spacer size="lg" />        // пресет (80px)
 *   <Spacer size="xl" />        // пресет (120px)
 */
export function Spacer({ size = 'md' }) {
  const height = typeof size === 'number' ? size : PRESETS[size] || PRESETS.md;

  return (
    <div
      className={styles.spacer}
      style={{ '--spacer-height': `${height}px` }}
      aria-hidden="true"
    />
  );
}

Spacer.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  ]),
};

export default Spacer;
