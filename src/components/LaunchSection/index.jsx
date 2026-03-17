import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './LaunchSection.module.css';

// Данные карточек по умолчанию
const defaultCards = [
  {
    id: 'helper',
    title: 'Помощь агента-внедренца',
    description: 'Внутри системы вам доступен онлайн-помощник, который заботится о последовательности действий, помогает сориентироваться в настройках и подсказывает каждый следующий шаг.',
  },
  {
    id: 'workshops',
    title: 'Практические воркшопы',
    description: 'Вы получаете доступ к обучающим сессиям, где в удобном формате можно разобрать типовые сценарии и освоить лучшие практики управления Агентами.',
  },
  {
    id: 'knowledge',
    title: 'База знаний и инструкции',
    description: 'В вашем распоряжении подробные обучающие материалы и инструкции, которые помогут команде быстро разобраться в инструментах и без лишних усилий начать работу',
  },
  {
    id: 'strategy',
    title: 'Стратегия под ваши задачи',
    description: 'В зависимости от выбранного тарифа вам доступен определённый объём экспертной поддержки для разработки стратегий, что помогает быстрее запустить нужные сценарии под цели вашего бизнеса.',
  },
];

/**
 * LaunchSection - секция "Запуск и внедрение системы Дживио"
 * 4 карточки с иллюстрациями и нижний блок с тегом
 */
export function LaunchSection({
  title = 'Запуск и внедрение системы Дживио',
  subtitle = 'Все необходимые инструменты и поддержка для комфортного старта и эффективной работы команды',
  cards = defaultCards,
  tagText = 'Индивидуальный формат внедрения',
  bottomText = 'Если требуется более плотное сопровождение, вы можете воспользоваться услугой персонального запуска',
  className = '',
}) {
  const sectionRef = useRef(null);

  // Анимация появления при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animateIn}`);
    elements?.forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.section} ${className}`} ref={sectionRef}>
      {/* Заголовок */}
      <div className={`${styles.header} ${styles.animateIn}`}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      {/* Карточки */}
      <div className={styles.cards}>
        {cards.map((card) => (
          <div key={card.id} className={`${styles.card} ${styles.animateIn}`}>
            <div className={styles.cardImage}>
              {card.image ? (
                <img src={card.image} alt="" className={styles.cardImg} />
              ) : null}
            </div>
            <div className={styles.cardText}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Нижний блок */}
      <div className={`${styles.bottomBlock} ${styles.animateIn}`}>
        <div className={styles.tag}>
          <span className={styles.tagIcon}>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5L5 9L13 1" stroke="#C16FFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className={styles.tagText}>{tagText}</span>
        </div>
        <p className={styles.bottomText}>{bottomText}</p>
      </div>
    </section>
  );
}

LaunchSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ),
  tagText: PropTypes.string,
  bottomText: PropTypes.string,
  className: PropTypes.string,
};

export default LaunchSection;
