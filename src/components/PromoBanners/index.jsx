import styles from './PromoBanners.module.css';
import PropTypes from 'prop-types';

import decorCombined from '../../assets/promo-banners/decor-combined.svg';
import bannerApiBg from '../../assets/promo-banners/banner-api-bg.png';

/**
 * PromoBanner — a single promotional strip banner.
 * Variants: "green" (lime gradient + 2026 decor) or "lavender" (pink/lavender image bg).
 */
export function PromoBanner({
  text,
  buttonText = 'Подробнее',
  buttonHref,
  onButtonClick,
  variant = 'green',
  fullWidth = false,
}) {
  const isGreen = variant === 'green';

  return (
    <div className={`${styles.banner} ${styles[`banner--${variant}`]} ${fullWidth ? styles['banner--fullWidth'] : ''}`}>
      {/* Background layer */}
      {isGreen ? (
        <div className={styles.banner__bgGreen} aria-hidden="true" />
      ) : (
        <img
          className={styles.banner__bgImage}
          src={bannerApiBg}
          alt=""
          aria-hidden="true"
        />
      )}

      {/* Decoration (green variant only) */}
      {isGreen && (
        <img
          className={styles.banner__decor}
          src={decorCombined}
          alt=""
          aria-hidden="true"
        />
      )}

      {/* Text */}
      <p className={`${styles.banner__text} ${isGreen ? '' : styles['banner__text--purple']}`}>
        {text}
      </p>

      {/* Button */}
      {buttonHref ? (
        <a className={styles.banner__button} href={buttonHref}>
          {buttonText}
        </a>
      ) : (
        <button className={styles.banner__button} type="button" onClick={onButtonClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
}

PromoBanner.propTypes = {
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
  onButtonClick: PropTypes.func,
  variant: PropTypes.oneOf(['green', 'lavender']),
  /** true — на всю ширину окна (без скруглений), false — контентная ширина */
  fullWidth: PropTypes.bool,
};

/**
 * PromoBanners — two promo banners stacked.
 */
export function PromoBanners({
  banners = [
    {
      text: 'До 6 месяцев в подарок, при подключении платформы',
      variant: 'green',
    },
    {
      text: 'Прямая интеграция по API, подключайтесь к JVO и автоматизируйте обмен данными',
      variant: 'lavender',
    },
  ],
  buttonText = 'Подробнее',
}) {
  return (
    <div className={styles.banners}>
      {banners.map((banner, i) => (
        <PromoBanner
          key={i}
          text={banner.text}
          buttonText={banner.buttonText || buttonText}
          buttonHref={banner.buttonHref}
          onButtonClick={banner.onButtonClick}
          variant={banner.variant}
          fullWidth={banner.fullWidth}
        />
      ))}
    </div>
  );
}

PromoBanners.propTypes = {
  banners: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      buttonText: PropTypes.string,
      buttonHref: PropTypes.string,
      onButtonClick: PropTypes.func,
      variant: PropTypes.oneOf(['green', 'lavender']),
      fullWidth: PropTypes.bool,
    })
  ),
  buttonText: PropTypes.string,
};

export default PromoBanners;
