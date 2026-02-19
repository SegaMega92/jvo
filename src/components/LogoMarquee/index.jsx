import { useState } from 'react';
import styles from './LogoMarquee.module.css';
import PropTypes from 'prop-types';

// Import press logos
import izvestiaLogo from '../../assets/logos/press/izvestia.svg';
import rbkLogo from '../../assets/logos/press/rbk.svg';
import rgruLogo from '../../assets/logos/press/rgru.svg';
import cnewsLogo from '../../assets/logos/press/cnews.svg';
import forbesLogo from '../../assets/logos/press/forbes.svg';
import rusbaseLogo from '../../assets/logos/press/rusbase.svg';
import kommersantLogo from '../../assets/logos/press/kommersant.svg';

const defaultLogos = [
  { src: forbesLogo, alt: 'Forbes' },
  { src: rusbaseLogo, alt: 'Rusbase' },
  { src: kommersantLogo, alt: 'Коммерсантъ' },
  { src: izvestiaLogo, alt: 'Известия' },
  { src: rbkLogo, alt: 'РБК' },
  { src: rgruLogo, alt: 'Российская газета' },
  { src: cnewsLogo, alt: 'CNews' },
];

/**
 * LogoMarquee - Infinite scrolling logo ticker
 * Displays press/partner logos in a continuous loop
 */
export function LogoMarquee({
  logos = defaultLogos,
  speed = 10,
  direction = 'right',
}) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  const trackClasses = `${styles.marquee__track} ${isPaused ? styles['marquee__track--paused'] : ''}`;

  return (
    <div
      className={styles.marquee}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={trackClasses}
        style={{
          '--marquee-speed': `${speed}s`,
          '--marquee-direction': direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className={styles.marquee__item}>
            <img
              src={logo.src}
              alt={logo.alt}
              className={styles.marquee__logo}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

LogoMarquee.propTypes = {
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
  speed: PropTypes.number,
  direction: PropTypes.oneOf(['left', 'right']),
};

export default LogoMarquee;
