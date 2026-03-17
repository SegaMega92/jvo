import PropTypes from 'prop-types';
import styles from './FeatureBlock.module.css';
import { Button } from '../Button';

/**
 * FeatureBlock - блок с описанием функции
 * Карточка с буллетами слева + иллюстрация справа
 */
export function FeatureBlock({
  title,
  description,
  features = [],
  buttonText,
  buttonHref,
  buttonVariant = 'primary',
  image,
  imageAlt = '',
  reversed = false,
  className = '',
}) {
  return (
    <section className={`${styles.section} ${className}`}>
      <div className={`${styles.container} ${reversed ? styles.containerReversed : ''}`}>
        {/* Карточка с контентом */}
        <div className={styles.card}>
          <div className={styles.content}>
            {title && <h3 className={styles.title}>{title}</h3>}
            {description && <p className={styles.description}>{description}</p>}

            {/* Список фич */}
            {features.length > 0 && (
              <ul className={styles.features}>
                {features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <span className={styles.featureIcon}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M16.667 5L7.5 14.167L3.333 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.featureText}>{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Кнопка */}
            {buttonText && buttonHref && (
              <Button
                href={buttonHref}
                variant={buttonVariant}
                size="medium"
                className={styles.button}
              >
                {buttonText}
              </Button>
            )}
          </div>
        </div>

        {/* Иллюстрация */}
        <div className={styles.imageWrapper}>
          {image && (
            typeof image === 'string' ? (
              <img src={image} alt={imageAlt} className={styles.image} />
            ) : (
              image
            )
          )}
        </div>
      </div>
    </section>
  );
}

FeatureBlock.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
  buttonVariant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  imageAlt: PropTypes.string,
  reversed: PropTypes.bool,
  className: PropTypes.string,
};

export default FeatureBlock;
