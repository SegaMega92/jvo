import styles from './PricingSection.module.css';
import PropTypes from 'prop-types';
import { Button } from '../Button';

/**
 * Pricing section with plan cards
 */
export function PricingSection({
  title = 'Тарифы',
  subtitle = 'Выберите план под ваши задачи',
  plans = [],
  billingPeriod = 'monthly',
  onPlanSelect,
}) {
  return (
    <section
      className={styles.pricing}
      aria-labelledby="pricing-title"
    >
      <div className={styles.pricing__container}>
        <header className={styles.pricing__header}>
          <h2 id="pricing-title" className={styles.pricing__title}>
            {title}
          </h2>
          <p className={styles.pricing__subtitle}>{subtitle}</p>
        </header>

        <ul className={styles.pricing__plans}>
          {plans.map((plan, index) => (
            <li key={index} className={styles.pricing__planWrapper}>
              <article
                className={`${styles.pricing__plan} ${plan.featured ? styles['pricing__plan--featured'] : ''}`}
              >
                {plan.badge && (
                  <span className={styles.pricing__badge}>{plan.badge}</span>
                )}

                <h3 className={styles.pricing__planName}>{plan.name}</h3>
                <p className={styles.pricing__planDescription}>{plan.description}</p>

                <div className={styles.pricing__priceBlock}>
                  <span className={styles.pricing__price}>{plan.price}</span>
                  {plan.period && (
                    <span className={styles.pricing__period}>/{plan.period}</span>
                  )}
                </div>

                <ul className={styles.pricing__features}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.pricing__feature}>
                      <svg
                        className={styles.pricing__featureIcon}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 10L9 13L14 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.featured ? 'primary' : 'outline'}
                  size="medium"
                  fullWidth
                  onClick={() => onPlanSelect?.(plan)}
                >
                  {plan.buttonText || 'Выбрать план'}
                </Button>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

PricingSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      price: PropTypes.string.isRequired,
      period: PropTypes.string,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      buttonText: PropTypes.string,
      featured: PropTypes.bool,
      badge: PropTypes.string,
    })
  ),
  billingPeriod: PropTypes.oneOf(['monthly', 'yearly']),
  onPlanSelect: PropTypes.func,
};

export default PricingSection;
