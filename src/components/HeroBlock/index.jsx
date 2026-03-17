import PropTypes from 'prop-types';
import styles from './HeroBlock.module.css';
import { Button } from '../Button';
import defaultCheckIcon from '../../../assets/check-icon-gradient.svg';

/**
 * HeroBlock - блок с карточкой фич и иллюстрацией
 * Градиентный фон, белая карточка слева, картинка справа
 */
export function HeroBlock({
  features = [],
  buttonText = 'Подключить',
  buttonHref = '#demo',
  checkIcon = defaultCheckIcon,
  illustration,
  illustrationAlt = '',
  backgroundImage,
  className = '',
}) {
  return (
    <div
      className={`${styles.block} ${className}`}
      style={backgroundImage ? { '--bg-image': `url(${backgroundImage})` } : undefined}
    >
      {/* Белая карточка с фичами */}
      <div className={styles.card}>
        {features.length > 0 && (
          <ul className={styles.features}>
            {features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <img src={checkIcon} alt="" className={styles.featureIcon} />
                <span className={styles.featureText}>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {buttonText && buttonHref && (
          <Button
            href={buttonHref}
            variant="primary"
            size="medium"
            className={styles.button}
          >
            {buttonText}
          </Button>
        )}
      </div>

      {/* Иллюстрация */}
      <div className={styles.illustrationWrapper}>
        {illustration && (
          typeof illustration === 'string' ? (
            <img
              src={illustration}
              alt={illustrationAlt}
              className={styles.illustration}
            />
          ) : (
            illustration
          )
        )}
      </div>
    </div>
  );
}

HeroBlock.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
  checkIcon: PropTypes.string,
  illustration: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  illustrationAlt: PropTypes.string,
  backgroundImage: PropTypes.string,
  className: PropTypes.string,
};

export default HeroBlock;
