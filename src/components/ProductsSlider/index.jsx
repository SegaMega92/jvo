import { useState, useRef, useEffect } from 'react';
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
    color: 'violet', // violet или gray
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
 * Горизонтальный слайдер с карточками продуктов
 */
export function ProductsSlider({
  title = 'Другие решения системы Дживио',
  subtitle = 'Для автоматизации бизнеса на маркетплейсах используйте наши ИИ-продукты:',
  products = defaultProducts,
  className = '',
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);

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

  // Обновление состояния кнопок навигации
  const updateScrollState = () => {
    if (!sliderRef.current) return;

    const { scrollLeft: sl, scrollWidth, clientWidth } = sliderRef.current;
    setScrollPosition(sl);
    setCanScrollLeft(sl > 0);
    setCanScrollRight(sl < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener('scroll', updateScrollState);
    updateScrollState();

    return () => slider.removeEventListener('scroll', updateScrollState);
  }, []);

  // Скролл на одну карточку
  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const cardWidth = 560; // ширина карточки + gap
    const newPosition = scrollPosition + (direction === 'left' ? -cardWidth : cardWidth);

    sliderRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth',
    });
  };

  // Drag-обработчики
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeftRef.current = sliderRef.current.scrollLeft;
    sliderRef.current.classList.add(styles.dragging);
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    sliderRef.current?.classList.remove(styles.dragging);
  };

  const handleMouseLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      sliderRef.current?.classList.remove(styles.dragging);
    }
  };

  // Touch-обработчики
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].pageX;
    scrollLeftRef.current = sliderRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX;
    const walk = (startX.current - x) * 1.5;
    sliderRef.current.scrollLeft = scrollLeftRef.current + walk;
  };

  return (
    <section className={`${styles.section} ${className}`} ref={sectionRef}>
      {/* Заголовок */}
      <div className={`${styles.header} ${styles.animateIn}`}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      {/* Слайдер */}
      <div className={`${styles.sliderWrapper} ${styles.animateIn}`}>
        <div
          className={`${styles.slider} ${
            !canScrollLeft && canScrollRight ? styles.fadeRight :
            canScrollLeft && canScrollRight ? styles.fadeBoth :
            canScrollLeft && !canScrollRight ? styles.fadeLeft : ''
          }`}
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
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
          className={`${styles.navButton} ${!canScrollLeft ? styles.navButtonDisabled : ''}`}
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          aria-label="Предыдущий"
        >
          <img src={chevronLeft} alt="" className={styles.arrowIcon} />
        </button>
        <button
          className={`${styles.navButton} ${!canScrollRight ? styles.navButtonDisabled : ''}`}
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
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
