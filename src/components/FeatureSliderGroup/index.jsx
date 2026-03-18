import { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styles from './FeatureSliderGroup.module.css';
import { FeatureSlider } from '../FeatureSlider';

// Регистрируем плагины
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/**
 * FeatureSliderGroup - обёртка для нескольких FeatureSlider секций
 * Использует GSAP ScrollTrigger для "прикрепления" секции к viewport
 * При скролле страницы переключаются табы/секции
 */
export function FeatureSliderGroup({
  sections = [],
  autoplayInterval = 6000,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef(null);
  const pinWrapperRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  const sectionsCount = sections.length;

  // Инициализация GSAP ScrollTrigger (только для десктопа)
  useEffect(() => {
    if (sectionsCount <= 1 || !containerRef.current || !pinWrapperRef.current) return;

    // На мобильных (< 960px) не используем пининг
    const isMobile = window.matchMedia('(max-width: 960px)').matches;
    if (isMobile) {
      setIsReady(true);
      return;
    }

    // Небольшая задержка для корректного расчёта размеров
    const timer = setTimeout(() => {
      // Создаём ScrollTrigger с пинингом
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: containerRef.current,
        pin: pinWrapperRef.current,
        pinSpacing: true,
        start: 'top top',
        // Длина скролла = (количество секций - 1) * 100vh
        end: `+=${(sectionsCount - 1) * 100}%`,
        scrub: 0.5, // Плавность привязки к скроллу
        onUpdate: (self) => {
          // Вычисляем активный индекс на основе прогресса скролла
          const progress = self.progress;
          const newIndex = Math.min(
            Math.floor(progress * sectionsCount),
            sectionsCount - 1
          );
          setActiveIndex(newIndex);
        },
        onEnter: () => setIsReady(true),
        onLeaveBack: () => setIsReady(false),
      });

      setIsReady(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, [sectionsCount]);

  // Обновляем ScrollTrigger при изменении размеров окна
  useEffect(() => {
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const isMobile = window.matchMedia('(max-width: 960px)').matches;

        if (isMobile && scrollTriggerRef.current) {
          // Переход на мобильную версию — убиваем ScrollTrigger
          scrollTriggerRef.current.kill();
          scrollTriggerRef.current = null;
        } else if (!isMobile) {
          // Обновляем ScrollTrigger
          ScrollTrigger.refresh();
        }
      }, 200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Клик по табу — скролл к соответствующей позиции
  const handleTabClick = useCallback((index) => {
    if (!scrollTriggerRef.current) return;

    const trigger = scrollTriggerRef.current;
    const targetProgress = index / (sectionsCount - 1 || 1);
    const targetScroll = trigger.start + (trigger.end - trigger.start) * targetProgress;

    gsap.to(window, {
      scrollTo: targetScroll,
      duration: 0.8,
      ease: 'power2.inOut',
    });
  }, [sectionsCount]);

  if (sectionsCount === 0) return null;

  // Если 1 секция — просто FeatureSlider без табов и пининга
  if (sectionsCount === 1) {
    const section = sections[0];
    return (
      <FeatureSlider
        sectionTitle={section.sectionTitle}
        sectionDescription={section.sectionDescription}
        buttonText={section.buttonText}
        buttonHref={section.buttonHref}
        slides={section.slides}
        autoplayInterval={autoplayInterval}
      />
    );
  }

  // Несколько секций — GSAP ScrollTrigger с пинингом
  return (
    <div ref={containerRef} className={styles.container}>
      <div ref={pinWrapperRef} className={styles.pinWrapper}>
        {/* Sticky табы слева */}
        <nav className={styles.tabs} aria-label="Навигация по секциям">
          <div className={styles.tabsInner}>
            {sections.map((section, index) => (
              <button
                key={index}
                type="button"
                className={`
                  ${styles.tab}
                  ${isReady ? styles.tabVisible : ''}
                  ${index === activeIndex ? styles.tabActive : ''}
                `}
                onClick={() => handleTabClick(index)}
                aria-label={section.tabTitle}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>
        </nav>

        {/* Секции — показываем только активную */}
        <div className={styles.sectionsContainer}>
          {sections.map((section, index) => (
            <div
              key={index}
              className={`
                ${styles.section}
                ${index === activeIndex ? styles.sectionActive : ''}
              `}
              aria-hidden={index !== activeIndex}
            >
              <FeatureSlider
                sectionTitle={section.sectionTitle}
                sectionDescription={section.sectionDescription}
                buttonText={section.buttonText}
                buttonHref={section.buttonHref}
                slides={section.slides}
                autoplayInterval={autoplayInterval}
                isActive={index === activeIndex}
                compact
                panelBackground={section.panelBackground}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

FeatureSliderGroup.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      tabTitle: PropTypes.string.isRequired,
      sectionTitle: PropTypes.string.isRequired,
      sectionDescription: PropTypes.string.isRequired,
      buttonText: PropTypes.string,
      buttonHref: PropTypes.string,
      slides: PropTypes.array.isRequired,
      panelBackground: PropTypes.string,
    })
  ).isRequired,
  autoplayInterval: PropTypes.number,
};

export default FeatureSliderGroup;
