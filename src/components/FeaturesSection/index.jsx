import styles from './FeaturesSection.module.css';
import PropTypes from 'prop-types';

/**
 * Features section displaying product capabilities
 */
export function FeaturesSection({
  title = 'Возможности',
  subtitle = 'Всё, что нужно для автоматизации',
  features = [],
  columns = 3,
  variant = 'cards',
}) {
  return (
    <section
      className={styles.features}
      aria-labelledby="features-title"
    >
      <div className={styles.features__container}>
        <header className={styles.features__header}>
          <h2 id="features-title" className={styles.features__title}>
            {title}
          </h2>
          <p className={styles.features__subtitle}>{subtitle}</p>
        </header>

        <ul
          className={`${styles.features__grid} ${styles[`features__grid--${columns}cols`]} ${styles[`features__grid--${variant}`]}`}
        >
          {features.map((feature, index) => (
            <li key={index} className={styles.features__item}>
              <article className={styles.features__card}>
                {feature.icon && (
                  <div className={styles.features__icon} aria-hidden="true">
                    {feature.icon}
                  </div>
                )}
                <h3 className={styles.features__cardTitle}>
                  {feature.title}
                </h3>
                <p className={styles.features__cardDescription}>
                  {feature.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

FeaturesSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  columns: PropTypes.oneOf([2, 3, 4]),
  variant: PropTypes.oneOf(['cards', 'minimal', 'bordered']),
};

export default FeaturesSection;
