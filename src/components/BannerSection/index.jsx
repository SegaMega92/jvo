import styles from './BannerSection.module.css';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import chevronsImage from '../../assets/images/chevrons.png';

/**
 * Banner Section - CTA banner with title, subtitle, decorative chevrons and button
 */
export function BannerSection({
  title = 'Не знаете, какой продукт выбрать?',
  subtitle = 'Подскажем что подходит именно вам',
  buttonText = 'Получить консультацию',
  buttonHref,
  onButtonClick,
}) {
  return (
    <section className={styles.banner} aria-labelledby="banner-title">
      <div className={styles.banner__content}>
        <h2 id="banner-title" className={styles.banner__title}>
          {title}
        </h2>
        <p className={styles.banner__subtitle}>{subtitle}</p>
      </div>

      <div className={styles.banner__chevrons} aria-hidden="true">
        <img
          src={chevronsImage}
          alt=""
          className={styles.banner__chevron}
        />
        <img
          src={chevronsImage}
          alt=""
          className={styles.banner__chevron}
        />
        <img
          src={chevronsImage}
          alt=""
          className={styles.banner__chevron}
        />
      </div>

      <div className={styles.banner__action}>
        <Button
          variant="primary"
          size="medium"
          href={buttonHref}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
}

BannerSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default BannerSection;
