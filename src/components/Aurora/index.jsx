import styles from './Aurora.module.css';
import PropTypes from 'prop-types';

/**
 * Aurora background effect component
 * Reusable gradient blur effect from JVO design
 */
export function Aurora({ className = '' }) {
  return (
    <div className={`${styles.aurora} ${className}`} aria-hidden="true">
      {/* Main radial gradient */}
      <div className={styles.aurora__gradient} />

      {/* Blur circles */}
      <div className={`${styles.aurora__circle} ${styles['aurora__circle--cyan']}`} />
      <div className={`${styles.aurora__circle} ${styles['aurora__circle--darkPurple']}`} />
      <div className={`${styles.aurora__circle} ${styles['aurora__circle--bluePurple']}`} />
    </div>
  );
}

Aurora.propTypes = {
  className: PropTypes.string,
};

export default Aurora;
