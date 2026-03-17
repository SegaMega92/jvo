import PropTypes from 'prop-types';
import styles from './MonitoringSection.module.css';
import { SectionHeader } from '../SectionHeader';
import { FeatureCard } from '../FeatureCard';
import { IconButton } from '../IconButton';
import chevronRight from '../../../assets/chevron-right.svg';

/**
 * MonitoringSection - секция с двумя карточками и навигацией
 * Заголовок + подзаголовок + две FeatureCard со стрелкой между ними
 */
export function MonitoringSection({
  title,
  subtitle,
  cards = [],
  showNavigation = true,
  onNavigate,
  className = '',
}) {
  return (
    <section className={`${styles.section} ${className}`}>
      {/* Заголовок секции */}
      <SectionHeader
        title={title}
        subtitle={subtitle}
        titleSize="medium"
        as="h2"
        className={styles.header}
      />

      {/* Карточки с навигацией */}
      <div className={styles.cardsContainer}>
        <div className={styles.cardsWrapper}>
          {cards.map((card, index) => (
            <FeatureCard
              key={index}
              image={card.image}
              imageAlt={card.imageAlt}
              title={card.title}
              description={card.description}
            />
          ))}

          {/* Навигационная стрелка */}
          {showNavigation && cards.length >= 2 && (
            <div className={styles.navigation}>
              <IconButton
                icon={chevronRight}
                ariaLabel="Следующий слайд"
                variant="default"
                size="medium"
                onClick={onNavigate}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

MonitoringSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      imageAlt: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  showNavigation: PropTypes.bool,
  onNavigate: PropTypes.func,
  className: PropTypes.string,
};

export default MonitoringSection;
