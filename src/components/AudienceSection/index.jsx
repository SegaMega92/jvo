import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './AudienceSection.module.css';
import avatarPhoto from '../../../assets/influencer_04v2.jpg';

// Placeholder для фото (на случай если нет реального фото)
const placeholderAvatar = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"%3E%3Crect width="72" height="72" rx="8" fill="%23E9EBF0"/%3E%3Ccircle cx="36" cy="28" r="12" fill="%23C4C4C4"/%3E%3Cellipse cx="36" cy="56" rx="18" ry="14" fill="%23C4C4C4"/%3E%3C/svg%3E';

// Данные табов (контент для каждой аудитории)
const defaultTabs = [
  {
    id: 'supplier-medium',
    label: 'Среднему поставщику',
    description: 'Помогает систематизировать работу с отзывами и вопросами. Автоматизация рутины освобождает время для развития бизнеса и работы над ассортиментом.',
    testimonial: {
      avatar: avatarPhoto,
      name: 'Михаил. Владелец интернет-магазина.',
      text: '«Раньше тратил по 3 часа в день на ответы. Теперь агент делает это за минуты, а я занимаюсь стратегией развития»',
    },
  },
  {
    id: 'supplier-large',
    label: 'Крупному поставщику',
    description: 'Масштабирует обработку тысяч отзывов без потери качества. Единый стандарт коммуникации для всех брендов и категорий товаров.',
    testimonial: {
      avatar: avatarPhoto,
      name: 'Дмитрий. Директор по продажам.',
      text: '«У нас 50 000 SKU и сотни отзывов ежедневно. Агент справляется там, где раньше нужна была целая команда»',
    },
  },
  {
    id: 'monobrand',
    label: 'Собственнику монобренда',
    description: 'Сохраняет уникальный голос бренда в каждом ответе. Выстраивает долгосрочные отношения с клиентами через персонализированную коммуникацию.',
    testimonial: {
      avatar: avatarPhoto,
      name: 'Елена. Основатель бренда косметики.',
      text: '«Агент понимает наш tone of voice лучше, чем некоторые сотрудники. Клиенты чувствуют заботу в каждом ответе»',
    },
  },
  {
    id: 'ecom-head',
    label: 'Руководителю e-com',
    description: 'Возвращает роль стратега при управлении тысячами SKU. Система сама находит проблемы в воронке и даёт инструменты для их мгновенного исправления.',
    testimonial: {
      avatar: avatarPhoto,
      name: 'Анна. Руководитель ecom-направления.',
      text: '«Круто, что агент не просто пишет шаблонное „спасибо", а реально продаёт. Самое ценное — он видит остатки. Если сапог нет в наличии, он их не предложит в пару к пальто, а подберёт подходящий товар исходя из контекста отзыва и остатков на складах»',
    },
  },
  {
    id: 'mp-manager',
    label: 'Менеджеру маркетплейсов',
    description: 'Снимает рутину по обработке отзывов и вопросов. Позволяет сфокусироваться на аналитике, ценообразовании и развитии карточек товаров.',
    testimonial: {
      avatar: avatarPhoto,
      name: 'Сергей. Менеджер маркетплейсов.',
      text: '«Теперь я не трачу полдня на ответы. Агент работает ночью, а утром я вижу готовые ответы — остаётся только проверить»',
    },
  },
  {
    id: 'marketing',
    label: 'Маркетингу и производству',
    description: 'Собирает инсайты из отзывов для улучшения продукта. Выявляет повторяющиеся проблемы и передаёт структурированную обратную связь.',
    testimonial: {
      avatar: avatarPhoto,
      name: 'Ольга. Продуктовый маркетолог.',
      text: '«Агент не только отвечает, но и собирает данные. Мы увидели, что клиенты жалуются на упаковку — исправили и снизили возвраты на 15%»',
    },
  },
];

/**
 * AudienceSection - секция "Кому необходим Агент"
 * Табы слева, контент справа, отзыв внизу
 */
export function AudienceSection({
  title = 'Кому необходим Агент коммуникаций',
  tabs = defaultTabs,
  tagText = 'Системное управление и кратный рост без расширения штата',
  bottomText = 'Агент позволяет увеличить количество и скорость обрабатываемых артикулов без потери качества и необходимости найма новых сотрудников',
  className = '',
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

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

  // Смена таба с анимацией
  const handleTabChange = (index) => {
    if (index === activeTab || isAnimating) return;

    setIsAnimating(true);
    contentRef.current?.classList.add(styles.fadeOut);

    setTimeout(() => {
      setActiveTab(index);
      contentRef.current?.classList.remove(styles.fadeOut);
      contentRef.current?.classList.add(styles.fadeIn);

      setTimeout(() => {
        contentRef.current?.classList.remove(styles.fadeIn);
        setIsAnimating(false);
      }, 300);
    }, 200);
  };

  const currentTab = tabs[activeTab];

  return (
    <section className={`${styles.section} ${className}`} ref={sectionRef}>
      {/* Заголовок */}
      <h2 className={`${styles.title} ${styles.animateIn}`}>{title}</h2>

      {/* Основной блок с табами */}
      <div className={`${styles.mainBlock} ${styles.animateIn}`}>
        {/* Меню табов */}
        <div className={styles.tabsMenu}>
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${index === activeTab ? styles.tabButtonActive : ''}`}
              onClick={() => handleTabChange(index)}
            >
              {index === activeTab && <span className={styles.tabArrow}>→ </span>}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Контент */}
        <div className={styles.content} ref={contentRef}>
          <p className={styles.contentDescription}>{currentTab.description}</p>

          {/* Отзыв */}
          <div className={styles.testimonial}>
            <img
              src={currentTab.testimonial.avatar}
              alt=""
              className={styles.testimonialAvatar}
            />
            <div className={styles.testimonialText}>
              <p className={styles.testimonialName}>{currentTab.testimonial.name}</p>
              <p className={styles.testimonialQuote}>{currentTab.testimonial.text}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Нижний блок с тегом */}
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

AudienceSection.propTypes = {
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      testimonial: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    })
  ),
  tagText: PropTypes.string,
  bottomText: PropTypes.string,
  className: PropTypes.string,
};

export default AudienceSection;
