import styles from './AwardsSection.module.css';
import PropTypes from 'prop-types';

// Import badge images
import startechBadge from '../../assets/awards/startech.png';
import oborotBadge from '../../assets/awards/oborot.png';

const defaultAwards = [
  {
    source: 'Startech.Base',
    description: 'Победители премии «Startech/awards 2025»',
    badge: '1 место',
    icon: startechBadge,
  },
  {
    source: 'Oborot.ru',
    description: 'Победители премии «Startech/awards 2025»',
    badge: '1 место',
    icon: oborotBadge,
  },
  {
    source: 'РБК 2025',
    description: 'Участник рейтинга работодателей',
    badge: 'Участник',
  },
  {
    source: 'RUSSIAN BUISENESS',
    description: 'Самые перспективные компании',
    badge: 'ТОП-100',
    uppercase: true,
  },
  {
    source: 'МойСклад',
    description: 'Лучшие сервисы для e-com',
    badge: 'ТОП-30',
  },
  {
    source: 'GDEKURS',
    description: 'Лучшие сервисы для e-com',
    badge: 'ТОП-5',
  },
  {
    source: 'Hight time media',
    description: 'B2B SaaS сервисов и продуктовых компаний России',
    badge: 'ТОП-93',
  },
  {
    source: 'ФИНАНСЫ KP.RU',
    description: 'Лучших сервисов аналитики маркетплейсов в 2025 году',
    badge: 'ТОП-11',
    uppercase: true,
  },
];

/**
 * AwardsSection - Displays company awards and rankings
 *
 * Each award can have an optional `icon` property - path to image file
 */
export function AwardsSection({
  title = 'Награды и премии',
  awards = defaultAwards,
}) {
  return (
    <section className={styles.awards}>
      <div className={styles.awards__container}>
        <h2 className={styles.awards__title}>{title}</h2>

        <div className={styles.awards__grid}>
          {awards.map((award, index) => (
            <div
              key={index}
              className={`${styles.awards__card} ${award.icon ? styles['awards__card--withIcon'] : ''}`}
            >
              <div className={styles.awards__cardLeft}>
                {award.icon && (
                  <div className={styles.awards__icon}>
                    <img
                      src={award.icon}
                      alt={award.source}
                      className={styles.awards__iconImage}
                    />
                  </div>
                )}
                <div className={styles.awards__content}>
                  <p className={`${styles.awards__source} ${award.uppercase ? styles['awards__source--uppercase'] : ''}`}>
                    {award.source}
                  </p>
                  <p className={styles.awards__description}>
                    {award.description}
                  </p>
                </div>
              </div>
              <span className={styles.awards__badge}>
                {award.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

AwardsSection.propTypes = {
  title: PropTypes.string,
  awards: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      badge: PropTypes.string.isRequired,
      icon: PropTypes.string,
      uppercase: PropTypes.bool,
    })
  ),
};

export default AwardsSection;
