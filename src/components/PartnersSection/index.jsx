import styles from './PartnersSection.module.css';
import PropTypes from 'prop-types';

/**
 * JVO Partners Section - displays partner logos in a grid
 */
export function PartnersSection({
  title = 'Нам доверяют',
  partners = [],
}) {
  return (
    <section className={styles.partners}>
      <div className={styles.partners__container}>
        {title && <h2 className={styles.partners__title}>{title}</h2>}

        <div className={styles.partners__grid}>
          {partners.map((partner, index) => (
            <div key={index} className={styles.partners__item}>
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={styles.partners__logo}
                  loading="lazy"
                />
              ) : (
                <span className={styles.partners__name}>{partner.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

PartnersSection.propTypes = {
  title: PropTypes.string,
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string,
    })
  ),
};

export default PartnersSection;
