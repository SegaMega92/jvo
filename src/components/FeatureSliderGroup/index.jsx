import { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './FeatureSliderGroup.module.css';
import { FeatureSlider } from '../FeatureSlider';

/**
 * FeatureSliderGroup - обёртка для нескольких FeatureSlider секций
 * При 1 секции: просто рендерит FeatureSlider
 * При нескольких: sticky табы слева + scroll sync + intro анимация
 */
export function FeatureSliderGroup({
  sections = [],
  autoplayInterval = 6000,
  introDelay = 1500, // Задержка перед разблокировкой скролла
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [visibleTabs, setVisibleTabs] = useState([]);
  const groupRef = useRef(null);
  const sectionRefs = useRef([]);
  const isScrolling = useRef(false);
  const hasTriggeredIntro = useRef(false);

  const sectionsCount = sections.length;

  // Intersection Observer для запуска intro-анимации
  useEffect(() => {
    if (sectionsCount <= 1 || !groupRef.current) return;

    const triggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Когда нижняя граница секции появляется в viewport
          if (entry.isIntersecting && !hasTriggeredIntro.current) {
            hasTriggeredIntro.current = true;

            // Анимируем появление точек по очереди
            sections.forEach((_, index) => {
              setTimeout(() => {
                setVisibleTabs((prev) => [...prev, index]);
              }, index * 200); // Каждая точка появляется с задержкой 200ms
            });

            // Разблокируем скролл после introDelay
            setTimeout(() => {
              setIsIntroComplete(true);
            }, introDelay);
          }
        });
      },
      {
        threshold: 0.1, // Срабатывает когда 10% секции видно
        rootMargin: '0px 0px -10% 0px', // Немного раньше чем полностью видно
      }
    );

    triggerObserver.observe(groupRef.current);

    return () => triggerObserver.disconnect();
  }, [sectionsCount, introDelay, sections]);

  // Intersection Observer для отслеживания видимой секции (после intro)
  useEffect(() => {
    if (sectionsCount <= 1 || !groupRef.current || !isIntroComplete) return;

    const observerOptions = {
      root: groupRef.current,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      if (isScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [sectionsCount, isIntroComplete]);

  // Клик по табу — скролл к секции
  const handleTabClick = useCallback((index) => {
    if (!isIntroComplete) return; // Блокируем клики во время intro

    const section = sectionRefs.current[index];
    if (!section) return;

    isScrolling.current = true;
    setActiveIndex(index);

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  }, [isIntroComplete]);

  // Сохраняем ref секции
  const setSectionRef = useCallback((index) => (el) => {
    sectionRefs.current[index] = el;
  }, []);

  if (sectionsCount === 0) return null;

  // Если 1 секция — просто FeatureSlider без табов
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

  // Несколько секций — sticky табы слева + scroll snap + intro
  return (
    <div
      ref={groupRef}
      className={`${styles.group} ${!isIntroComplete ? styles.locked : ''}`}
    >
      {/* Sticky табы слева с анимацией появления */}
      <nav className={styles.tabs}>
        <div className={styles.tabsInner}>
          {sections.map((section, index) => (
            <button
              key={index}
              type="button"
              className={`
                ${styles.tab}
                ${index === activeIndex ? styles.tabActive : ''}
                ${visibleTabs.includes(index) ? styles.tabVisible : ''}
              `}
              onClick={() => handleTabClick(index)}
              aria-label={section.tabTitle}
              disabled={!isIntroComplete}
            />
          ))}
        </div>
      </nav>

      {/* Секции */}
      <div className={styles.sections}>
        {sections.map((section, index) => (
          <div
            key={index}
            ref={setSectionRef(index)}
            className={styles.sectionWrapper}
          >
            <FeatureSlider
              sectionTitle={section.sectionTitle}
              sectionDescription={section.sectionDescription}
              buttonText={section.buttonText}
              buttonHref={section.buttonHref}
              slides={section.slides}
              autoplayInterval={autoplayInterval}
            />
          </div>
        ))}
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
    })
  ).isRequired,
  autoplayInterval: PropTypes.number,
  introDelay: PropTypes.number,
};

export default FeatureSliderGroup;
