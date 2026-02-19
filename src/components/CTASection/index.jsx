import styles from './CTASection.module.css';
import PropTypes from 'prop-types';
import { Button } from '../Button';

/**
 * Call to Action section
 */
export function CTASection({
  title = 'Готовы начать?',
  subtitle = 'Попробуйте JVO бесплатно и убедитесь в эффективности AI-автоматизации',
  primaryButtonText = 'Начать бесплатно',
  secondaryButtonText = 'Запросить демо',
  onPrimaryClick,
  onSecondaryClick,
  showSecondaryButton = true,
  variant = 'default',
}) {
  return (
    <section
      className={`${styles.cta} ${styles[`cta--${variant}`]}`}
      aria-labelledby="cta-title"
    >
      <div className={styles.cta__container}>
        <div className={styles.cta__content}>
          <h2 id="cta-title" className={styles.cta__title}>
            {title}
          </h2>
          <p className={styles.cta__subtitle}>{subtitle}</p>

          <div className={styles.cta__actions}>
            <Button
              variant="primary"
              size="large"
              onClick={onPrimaryClick}
            >
              {primaryButtonText}
            </Button>
            {showSecondaryButton && (
              <Button
                variant="outline"
                size="large"
                onClick={onSecondaryClick}
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>

        {variant === 'default' && (
          <div className={styles.cta__decoration} aria-hidden="true">
            <div className={styles.cta__glowOrb}></div>
            <div className={styles.cta__glowOrb}></div>
          </div>
        )}
      </div>
    </section>
  );
}

CTASection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  primaryButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  onPrimaryClick: PropTypes.func,
  onSecondaryClick: PropTypes.func,
  showSecondaryButton: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'minimal', 'gradient']),
};

export default CTASection;
