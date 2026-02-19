import styles from './HowItWorksSection.module.css';
import PropTypes from 'prop-types';

/**
 * How it works section with steps
 */
export function HowItWorksSection({
  title = 'Как это работает',
  subtitle = 'Три простых шага для начала работы',
  steps = [],
  variant = 'horizontal',
}) {
  return (
    <section
      className={styles.howItWorks}
      aria-labelledby="how-it-works-title"
    >
      <div className={styles.howItWorks__container}>
        <header className={styles.howItWorks__header}>
          <h2 id="how-it-works-title" className={styles.howItWorks__title}>
            {title}
          </h2>
          <p className={styles.howItWorks__subtitle}>{subtitle}</p>
        </header>

        <ol className={`${styles.howItWorks__steps} ${styles[`howItWorks__steps--${variant}`]}`}>
          {steps.map((step, index) => (
            <li key={index} className={styles.howItWorks__step}>
              <div className={styles.howItWorks__stepNumber}>
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className={styles.howItWorks__stepContent}>
                <h3 className={styles.howItWorks__stepTitle}>{step.title}</h3>
                <p className={styles.howItWorks__stepDescription}>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className={styles.howItWorks__connector} aria-hidden="true"></div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

HowItWorksSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  variant: PropTypes.oneOf(['horizontal', 'vertical', 'timeline']),
};

export default HowItWorksSection;
