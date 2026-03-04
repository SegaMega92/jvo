import styles from './CTASection.module.css';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import ctaIcon from '../../assets/icons/cta-icon.svg';

/**
 * CTA Section — centered call-to-action with icon, heading, subtitle and button.
 */
export function CTASection({
  icon = ctaIcon,
  title = 'Узнайте, какой \nрезультат вы получите',
  subtitle = 'Проведём встречу и покажем, как работает платформа',
  buttonText = 'Узнать результат',
  buttonHref,
  onButtonClick,
}) {
  return (
    <section className={styles.cta} aria-labelledby="cta-title">
      <div className={styles.cta__container}>
        {icon && (
          <div className={styles.cta__icon} aria-hidden="true">
            <img src={icon} alt="" />
          </div>
        )}

        <h2 id="cta-title" className={styles.cta__title}>
          {title}
        </h2>

        <p className={styles.cta__subtitle}>{subtitle}</p>

        <Button
          variant="primary"
          size="medium"
          href={buttonHref}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
}

CTASection.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default CTASection;
