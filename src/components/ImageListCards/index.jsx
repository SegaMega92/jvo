import styles from './ImageListCards.module.css';
import PropTypes from 'prop-types';

import iconGuide from '../../assets/image-list-cards/icon-guide.svg';
import iconSupport from '../../assets/image-list-cards/icon-support.svg';
import iconCheckLight from '../../assets/image-list-cards/icon-check-light.svg';
import iconCheckDark from '../../assets/image-list-cards/icon-check-dark.svg';
import cardLeftBg from '../../assets/image-list-cards/card-left-bg.png';
import cardLeftOverlay from '../../assets/image-list-cards/card-left-overlay.png';
import person1 from '../../assets/image-list-cards/person-1.png';
import person2 from '../../assets/image-list-cards/person-2.png';
import person3 from '../../assets/image-list-cards/person-3.png';
import person4 from '../../assets/image-list-cards/person-4.png';

const defaultLeftCard = {
  icon: iconGuide,
  title: 'Обучающий курс \nс сертификацией',
  items: [
    'Дадим доступ к базе знаний',
    'Проведем сертификацию специалистов по итогам курса',
    'Обучим эффективно использовать систему',
    'Объясним работу алгоритмов роста на маркетплейсах',
  ],
};

const defaultRightCard = {
  icon: iconSupport,
  title: 'Персональный менеджер',
  items: [
    'Проведёт подробнее обучение ваших сотрудников',
    'Презентует первые результаты и замеры эффективности',
    'Внедрит систему в рабочие процессы',
    'Всегда поддержит вас в рабочее время по оставшимся вопросам',
  ],
};

/**
 * ImageListCards — Two cards with image headers and bullet lists.
 * Left card: light theme with interface screenshot.
 * Right card: dark theme with people photos collage.
 */
export function ImageListCards({
  leftCard = defaultLeftCard,
  rightCard = defaultRightCard,
}) {
  return (
    <section className={styles.section}>
      {/* Left card — light */}
      <div className={styles.card}>
        <div className={styles.card__image}>
          <img
            className={styles.card__imageBg}
            src={cardLeftBg}
            alt=""
          />
          <img
            className={styles.card__imageOverlay}
            src={cardLeftOverlay}
            alt=""
          />
        </div>

        <div className={styles.card__body}>
          <div className={styles.card__header}>
            <div className={`${styles.card__icon} ${styles['card__icon--light']}`}>
              <img src={leftCard.icon} alt="" />
            </div>
            <h3 className={styles.card__title}>{leftCard.title}</h3>
          </div>

          <ul className={styles.card__list}>
            {leftCard.items.map((item, i) => (
              <li key={i} className={styles.card__listItem}>
                <img
                  className={styles.card__checkIcon}
                  src={iconCheckLight}
                  alt=""
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right card — dark */}
      <div className={`${styles.card} ${styles['card--dark']}`}>
        <div className={styles.card__image}>
          <div className={styles.collage}>
            <img className={styles.collage__photo1} src={person2} alt="" />
            <img className={styles.collage__photo2} src={person3} alt="" />
            <img className={styles.collage__photo3} src={person4} alt="" />
            <img className={styles.collage__photo4} src={person1} alt="" />
            <div className={styles.collage__badge}>
              <span className={styles.collage__badgeDot} />
              <span className={styles.collage__badgeText}>Всегда онлайн</span>
            </div>
          </div>
        </div>

        <div className={styles.card__body}>
          <div className={styles.card__header}>
            <div className={`${styles.card__icon} ${styles['card__icon--dark']}`}>
              <img src={rightCard.icon} alt="" />
            </div>
            <h3 className={`${styles.card__title} ${styles['card__title--dark']}`}>
              {rightCard.title}
            </h3>
          </div>

          <ul className={styles.card__list}>
            {rightCard.items.map((item, i) => (
              <li key={i} className={`${styles.card__listItem} ${styles['card__listItem--dark']}`}>
                <img
                  className={styles.card__checkIcon}
                  src={iconCheckDark}
                  alt=""
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

ImageListCards.propTypes = {
  leftCard: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
  }),
  rightCard: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ImageListCards;
