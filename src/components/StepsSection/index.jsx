import styles from './StepsSection.module.css';
import PropTypes from 'prop-types';

/**
 * JVO Steps Section - "Три шага до первой автоматизации"
 * Based on Figma design - light background
 */
export function StepsSection({
  title = 'Три шага до первой автоматизации',
  steps = [],
}) {
  return (
    <section className={styles.steps}>
      <div className={styles.steps__container}>
        <h2 className={styles.steps__title}>{title}</h2>

        <div className={styles.steps__grid}>
          {steps.map((step, index) => (
            <article key={index} className={styles.steps__card}>
              <h3 className={styles.steps__cardTitle}>
                Шаг {index + 1}: {step.title}
              </h3>
              <p className={styles.steps__cardDescription}>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

StepsSection.propTypes = {
  title: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default StepsSection;
