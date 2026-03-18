import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductsSlider.module.css';
import chevronLeft from '../../../assets/chevron-left.svg';
import chevronRight from '../../../assets/chevron-right.svg';

// Данные продуктов по умолчанию
const defaultProducts = [
  {
    id: 'pricing-agent',
    name: 'Агент ценообразования',
    description: 'Управление ценами на основе данных о воронке продаж, текущих остатках и динамике спроса',
    color: 'violet',
  },
  {
    id: 'reports-agent',
    name: 'Агент отчётов',
    description: 'Управление ценами на основе данных о воронке продаж, текущих остатках и динамике спроса',
    color: 'gray',
  },
  {
    id: 'seo-pro',
    name: 'SEO Pro',
    description: 'Управление ценами на основе данных о воронке продаж, текущих остатках и динамике спроса',
    color: 'gray',
  },
  {
    id: 'supply-planner',
    name: 'Планировщик поставок',
    description: 'Управление ценами на основе данных о воронке продаж, текущих остатках и динамике спроса',
    color: 'gray',
  },
];

/**
 * ProductsSlider - секция "Другие решения системы Дживио"
 * Горизонтальный слайдер с карточками продуктов (нативный скролл)
 */
export function ProductsSlider({
  title = 'Другие решения системы Дживио',
  subtitle = 'Для автоматизации бизнеса на маркетплейсах используйте наши ИИ-продукты:',
  products = defaultProducts,
  className = '',
}) {
  const trackRef = useRef(null);
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

  // Навигация кнопками
  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector(`.${styles.card}`);
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 20; // gap между карточками
    const scrollAmount = (cardWidth + gap) * direction;

    track.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  const goNext = () => scrollByCard(1);
  const goPrev = () => scrollByCard(-1);

  return (
    <section className={`${styles.section} ${className}`} ref={sectionRef}>
      {/* Заголовок */}
      <div className={`${styles.header} ${styles.animateIn}`}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      {/* Слайдер с нативным скроллом */}
      <div className={`${styles.sliderWrapper} ${styles.animateIn}`}>
        <div ref={trackRef} className={styles.track}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.cardContent}>
                <div className={`${styles.tag} ${product.color === 'violet' ? styles.tagViolet : styles.tagGray}`}>
                  <div className={`${styles.tagIcon} ${product.color === 'violet' ? styles.tagIconViolet : styles.tagIconGray}`}>
                    {product.icon && <img src={product.icon} alt="" className={styles.tagIconImg} />}
                  </div>
                  <span className={`${styles.tagText} ${product.color === 'violet' ? styles.tagTextViolet : styles.tagTextGray}`}>
                    {product.name}
                  </span>
                </div>
                <p className={styles.cardDescription}>{product.description}</p>
              </div>
              <div className={`${styles.cardImage} ${product.color === 'violet' ? styles.cardImageViolet : styles.cardImageGray}`}>
                {product.image && <img src={product.image} alt="" className={styles.cardImg} />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Навигация */}
      <div className={styles.navigation}>
        <button
          className={styles.navButton}
          onClick={goPrev}
          aria-label="Предыдущий"
        >
          <img src={chevronLeft} alt="" className={styles.arrowIcon} />
        </button>
        <button
          className={styles.navButton}
          onClick={goNext}
          aria-label="Следующий"
        >
          <img src={chevronRight} alt="" className={styles.arrowIcon} />
        </button>
      </div>
    </section>
  );
}

ProductsSlider.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      color: PropTypes.oneOf(['violet', 'gray']),
      icon: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  className: PropTypes.string,
};

export default ProductsSlider;
