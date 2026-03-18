import { useState, useRef, useEffect, useCallback } from 'react';
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
 * Горизонтальный слайдер с карточками продуктов (бесконечный цикл)
 */
export function ProductsSlider({
  title = 'Другие решения системы Дживио',
  subtitle = 'Для автоматизации бизнеса на маркетплейсах используйте наши ИИ-продукты:',
  products = defaultProducts,
  className = '',
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardWidth, setCardWidth] = useState(560);
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  const touchStartX = useRef(0);

  const productsCount = products.length;
  const gap = 20;

  // Клонируем: добавляем копии по краям для бесшовного цикла
  // Нужно минимум 2-3 клона с каждой стороны чтобы заполнить viewport
  const extendedProducts = [
    { ...products[productsCount - 2], _key: 'clone-start-2' },
    { ...products[productsCount - 1], _key: 'clone-start-1' },
    ...products.map((p, i) => ({ ...p, _key: `original-${i}` })),
    { ...products[0], _key: 'clone-end-1' },
    { ...products[1], _key: 'clone-end-2' },
  ];

  // Измеряем ширину карточки
  useEffect(() => {
    const measureCard = () => {
      const card = trackRef.current?.querySelector(`.${styles.card}`);
      if (card) {
        setCardWidth(card.offsetWidth);
      }
    };

    measureCard();
    window.addEventListener('resize', measureCard);
    return () => window.removeEventListener('resize', measureCard);
  }, []);

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

  // Обработка окончания transition для бесшовного цикла
  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);

    // Если вышли за границы реальных элементов — прыгаем обратно
    if (currentIndex < 0 || currentIndex >= productsCount) {
      const track = trackRef.current;
      if (!track) return;

      // Вычисляем новый индекс (зацикливаем)
      let newIndex;
      if (currentIndex < 0) {
        newIndex = productsCount + currentIndex; // -1 -> productsCount - 1, -2 -> productsCount - 2
      } else {
        newIndex = currentIndex - productsCount; // productsCount -> 0, productsCount + 1 -> 1
      }

      const newOffset = -((newIndex + 2) * (cardWidth + gap));

      // Отключаем transition напрямую через DOM
      track.style.transition = 'none';
      track.style.transform = `translateX(${newOffset}px)`;

      // Форсируем reflow чтобы браузер применил изменения
      track.offsetHeight;

      // Включаем transition обратно
      track.style.transition = '';

      // Синхронизируем React state
      setCurrentIndex(newIndex);
    }
  }, [currentIndex, productsCount, cardWidth, gap]);

  // Навигация
  const goTo = useCallback((direction) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + direction);
  }, [isTransitioning]);

  const goNext = useCallback(() => goTo(1), [goTo]);
  const goPrev = useCallback(() => goTo(-1), [goTo]);

  // Touch/drag обработчики
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = touchStartX.current - endX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goNext();
      } else {
        goPrev();
      }
    }
  };

  // Вычисляем смещение трека
  // currentIndex 0 = первый реальный продукт (index 2 в extendedProducts, т.к. 2 клона в начале)
  const trackOffset = -((currentIndex + 2) * (cardWidth + gap));

  // Определяем нужна ли анимация
  const shouldAnimate = isTransitioning;

  return (
    <section className={`${styles.section} ${className}`} ref={sectionRef}>
      {/* Заголовок */}
      <div className={`${styles.header} ${styles.animateIn}`}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      {/* Слайдер */}
      <div className={`${styles.sliderWrapper} ${styles.animateIn}`}>
        <div className={styles.sliderViewport}>
          <div
            ref={trackRef}
            className={styles.track}
            style={{
              transform: `translateX(${trackOffset}px)`,
              transition: shouldAnimate ? 'transform 0.4s ease-out' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseUp={handleTouchEnd}
          >
            {extendedProducts.map((product) => (
              <div key={product._key} className={styles.card}>
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
