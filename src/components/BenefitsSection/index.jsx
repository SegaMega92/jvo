import styles from './BenefitsSection.module.css';
import PropTypes from 'prop-types';

/**
 * Benefits section with statistics and key advantages
 */
export function BenefitsSection({
  title = 'Результаты наших клиентов',
  subtitle = 'Проверенная эффективность на реальных кейсах',
  stats = [],
  benefits = [],
  layout = 'split',
}) {
  return (
    <section
      className={styles.benefits}
      aria-labelledby="benefits-title"
    >
      <div className={styles.benefits__container}>
        <header className={styles.benefits__header}>
          <h2 id="benefits-title" className={styles.benefits__title}>
            {title}
          </h2>
          <p className={styles.benefits__subtitle}>{subtitle}</p>
        </header>

        {stats.length > 0 && (
          <ul className={styles.benefits__stats}>
            {stats.map((stat, index) => (
              <li key={index} className={styles.benefits__statItem}>
                <span className={styles.benefits__statValue}>{stat.value}</span>
                <span className={styles.benefits__statLabel}>{stat.label}</span>
              </li>
            ))}
          </ul>
        )}

        {benefits.length > 0 && (
          <ul className={`${styles.benefits__list} ${styles[`benefits__list--${layout}`]}`}>
            {benefits.map((benefit, index) => (
              <li key={index} className={styles.benefits__item}>
                <div className={styles.benefits__itemIcon} aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.benefits__itemContent}>
                  <h3 className={styles.benefits__itemTitle}>{benefit.title}</h3>
                  {benefit.description && (
                    <p className={styles.benefits__itemDescription}>{benefit.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

BenefitsSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
  layout: PropTypes.oneOf(['split', 'grid', 'list']),
};

export default BenefitsSection;
