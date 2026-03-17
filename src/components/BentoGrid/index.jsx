import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './BentoGrid.module.css';

// Placeholder icons - replace with actual exports from Figma
import iconScenarios from '../../../assets/bento-icon-scenarios.svg';
import iconStrategies from '../../../assets/bento-icon-strategies.svg';
import iconControl from '../../../assets/bento-icon-control.svg';
import iconSettings from '../../../assets/bento-icon-settings.svg';
import iconMultibrand from '../../../assets/bento-icon-multibrand.svg';

/**
 * BentoGrid - сетка фич в стиле bento
 * 7 блоков в сетке 3x3 с различными span'ами
 */
export function BentoGrid({ className = '' }) {
  const gridRef = useRef(null);

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

    const blocks = gridRef.current?.querySelectorAll(`.${styles.block}`);
    blocks?.forEach((block, index) => {
      block.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(block);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.grid} ref={gridRef}>
        {/* Block 1: Лёгкий старт (row 1, col 1-2) */}
        <div className={`${styles.block} ${styles.block1}`}>
          <div className={styles.illustrationLarge}>
            <img src={iconScenarios} alt="" className={styles.illustrationImg} />
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.title}>Лёгкий старт с готовыми сценариями</h3>
            <p className={styles.description}>
              запускайте Агента в пару кликов, используя проверенную библиотеку промптов и сценариев от лидеров рынка
            </p>
          </div>
        </div>

        {/* Block 2: Мультистратегии (row 1, col 3) */}
        <div className={`${styles.block} ${styles.block2}`}>
          <div className={styles.iconWrapper}>
            <img src={iconStrategies} alt="" className={styles.icon} />
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.title}>Уникальные мультистратегии</h3>
            <p className={styles.description}>
              настраивайте собственные сценарии любой сложности, комбинируя правила и условия под задачи своего бренда
            </p>
          </div>
        </div>

        {/* Block 3: Два режима контроля (row 2, col 1) */}
        <div className={`${styles.block} ${styles.block3}`}>
          <div className={styles.illustrationControl}>
            <img src={iconControl} alt="" className={styles.illustrationImg} />
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.title}>Два режима контроля</h3>
            <p className={styles.description}>
              используйте «Автопилот» для полной автоматизации или «Полуавтомат» для подтверждения действий Агента
            </p>
          </div>
        </div>

        {/* Block 4: Центральный заголовок (row 2, col 2) */}
        <div className={`${styles.block} ${styles.blockCenter}`}>
          <h2 className={styles.centerTitle}>
            Гибкость<br />и безопасность управления
          </h2>
        </div>

        {/* Block 5: 50К знаков (row 2, col 3) */}
        <div className={`${styles.block} ${styles.block5}`}>
          <div className={styles.badge50k}>
            <span className={styles.badge50kText}>50К знаков</span>
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.title}>Промт до 50 000 знаков</h3>
            <p className={styles.description}>
              прописывайте в промте все технические нюансы и спецификации, чтобы Агент отвечал на уровне эксперта
            </p>
          </div>
        </div>

        {/* Block 6: Мгновенная настройка (row 3, col 1) */}
        <div className={`${styles.block} ${styles.block6}`}>
          <div className={styles.iconWrapper}>
            <img src={iconSettings} alt="" className={styles.icon} />
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.title}>Мгновенная настройка</h3>
            <p className={styles.description}>
              меняйте логику работы простыми промтами, Агент сразу применит изменения к выбранным товарам
            </p>
          </div>
        </div>

        {/* Block 7: Мультибрендовость (row 3, col 2-3) */}
        <div className={`${styles.block} ${styles.block7}`}>
          <div className={styles.textContent}>
            <h3 className={styles.title}>Мультибрендовость</h3>
            <p className={styles.description}>
              работайте с несколькими брендами одновременно, Агент автоматически определяет бренд при коммуникации
            </p>
          </div>
          <div className={styles.illustrationMultibrand}>
            <img src={iconMultibrand} alt="" className={styles.illustrationImg} />
          </div>
        </div>
      </div>
    </section>
  );
}

BentoGrid.propTypes = {
  className: PropTypes.string,
};

export default BentoGrid;
