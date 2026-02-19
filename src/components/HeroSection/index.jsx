import styles from './HeroSection.module.css';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Aurora } from '../Aurora';

// Import logos from Figma
import jvoAgentLogo from '../../assets/logos/jvo-agent.svg';
import wbLogo from '../../assets/logos/wb-logo.svg';
import ozonLogo from '../../assets/logos/ozon-logo.svg';
import heroInterfaceImage from '../../assets/images/hero-interface.png';

/**
 * JVO Hero Section - based on Figma design
 * Light background with aurora gradient
 */
export function HeroSection({
  title = 'Продажи на маркетплейсах под контролем. Всегда.',
  subtitle = 'JVO Агент — ваш персональный AI-менеджер, который управляет ценами, отзывами, отвечает на вопросы и анализирует данные. Работает 24/7, не ошибается и не устаёт. Формирует стратегии сам — исходя из заданных вами правил.',
  buttonText = 'Оставить заявку на демо',
  buttonHref = '#demo',
  showBadge = true,
  showInterface = true,
  showAurora = true,
}) {
  return (
    <section className={styles.hero}>
      {/* Aurora background */}
      {showAurora && <Aurora />}

      <div className={styles.hero__container}>
        {/* Badge with JVO Agent logo + WB + Ozon */}
        {showBadge && (
          <div className={styles.hero__badge}>
            <img
              src={jvoAgentLogo}
              alt="JVO Агент"
              className={styles.hero__badgeJvo}
            />
            <span className={styles.hero__badgeSeparator}>×</span>
            <img
              src={wbLogo}
              alt="Wildberries"
              className={styles.hero__badgeIcon}
            />
            <img
              src={ozonLogo}
              alt="Ozon"
              className={styles.hero__badgeIcon}
            />
          </div>
        )}

        {/* Main heading */}
        <h1 className={styles.hero__title}>{title}</h1>

        {/* CTA Button */}
        <Button
          href={buttonHref}
          variant="secondary"
          size="large"
          className={styles.hero__button}
        >
          {buttonText}
        </Button>

        {/* Interface screenshot from Figma */}
        {showInterface && (
          <div className={styles.hero__interface}>
            <img
              src={heroInterfaceImage}
              alt="Интерфейс JVO Агента"
              className={styles.hero__interfaceImage}
              loading="lazy"
            />
          </div>
        )}

        {/* Subtitle */}
        <p className={styles.hero__subtitle}>{subtitle}</p>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
  showBadge: PropTypes.bool,
  showInterface: PropTypes.bool,
  showAurora: PropTypes.bool,
};

export default HeroSection;
