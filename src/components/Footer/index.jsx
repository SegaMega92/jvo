import PropTypes from 'prop-types';
import styles from './Footer.module.css';

// Partner logos
import itCompanyLogo from '../../../assets/footer/Clip path group.svg';
import ozonLogo from '../../../assets/footer/Clip path group2.svg';
import moscowClusterLogo from '../../../assets/footer/московский кластер.svg';
import wbPartnerLogo from '../../../assets/footer/партнер вб.svg';
import skolkovoLogo from '../../../assets/footer/сколково.svg';

// Payment systems
import paymentSystemsLogo from '../../../assets/footer/платежные системы.svg';

// Social media icons
import vcRuIcon from '../../../assets/footer/Subtract.svg';
import youtubeIcon from '../../../assets/footer/Subtract-1.svg';
import dzenIcon from '../../../assets/footer/Subtract-2.svg';
import telegramIcon from '../../../assets/footer/Subtract-3.svg';
import vkIcon from '../../../assets/footer/Subtract-4.svg';

// Navigation links data
const navLinksColumn1 = [
  { label: 'О сервисе', href: '#' },
  { label: 'Личный кабинет', href: '#' },
  { label: 'SEO-оптимизация', href: '#' },
  { label: 'Справочник', href: '#' },
  { label: 'Вакансии', href: '#' },
  { label: 'Рассылки', href: '#' },
];

const navLinksColumn2 = [
  { label: 'Блог', href: '#' },
  { label: 'Блог на РБК', href: '#' },
  { label: 'Мероприятия', href: '#' },
  { label: 'Реферальная программа', href: '#' },
  { label: 'Контакты', href: '#' },
];

const navLinksColumn3 = [
  { label: 'Карта сайта', href: '#' },
  { label: 'Пользовательское соглашение', href: '#' },
  { label: 'Свидетельства о государственной регистрации ПО', href: '#' },
  { label: 'Политика конфиденциальности', href: '#' },
  { label: 'Реестер стартапов Московского инновационного кластера', href: '#' },
];

// Partner badges data
const partnerBadges = [
  {
    id: 'it-company',
    logo: itCompanyLogo,
    alt: 'Аккредитованная IT-компания',
    text: ['Аккредитованная', 'IT-компания'],
  },
  {
    id: 'ozon',
    logo: ozonLogo,
    alt: 'Ozon seller',
    text: ['Технологический', 'партнёр'],
  },
  {
    id: 'moscow-cluster',
    logo: moscowClusterLogo,
    alt: 'Московский инновационный кластер',
    text: ['Участник Московского', 'инновационного кластера'],
  },
  {
    id: 'wildberries',
    logo: wbPartnerLogo,
    alt: 'Партнёр Wildberries',
    text: ['Авторизованный сервис', 'и сертифицированный партнёр'],
  },
  {
    id: 'skolkovo',
    logo: skolkovoLogo,
    alt: 'Сколково',
    text: ['Деятельность осуществляется', 'при грантовой поддержке', 'Фонда «Сколково»'],
  },
];

/**
 * Footer - футер сайта
 * Содержит навигацию, партнёров и контакты
 */
export function Footer({ className = '' }) {
  return (
    <footer className={`${styles.footer} ${className}`}>
      {/* Decorative gradient blur */}
      <div className={styles.gradientBlur} aria-hidden="true" />

      <div className={styles.container}>
        {/* Navigation section */}
        <div className={styles.navSection}>
          <nav className={styles.navColumn}>
            {navLinksColumn1.map((link) => (
              <a key={link.label} href={link.href} className={styles.navLinkPrimary}>
                {link.label}
              </a>
            ))}
          </nav>

          <nav className={styles.navColumn}>
            {navLinksColumn2.map((link) => (
              <a key={link.label} href={link.href} className={styles.navLinkPrimary}>
                {link.label}
              </a>
            ))}
          </nav>

          <nav className={styles.navColumnSecondary}>
            {navLinksColumn3.map((link) => (
              <a key={link.label} href={link.href} className={styles.navLinkSecondary}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Partners section */}
        <div className={styles.partnersSection}>
          {partnerBadges.map((badge) => (
            <div key={badge.id} className={styles.partnerBadge}>
              <div className={styles.partnerLogo}>
                <img src={badge.logo} alt={badge.alt} />
              </div>
              <p className={styles.partnerText}>
                {badge.text.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < badge.text.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom section: Company info + Social */}
        <div className={styles.bottomSection}>
          <div className={styles.companyInfo}>
            <p className={styles.companyName}>ООО «ДЖИВИО»</p>
            <p className={styles.companyDetails}>
              ИНН 7730303699, ОРГН 1237700262172, 121087, г. Москва, ул, Барклая, д. 6, стр. 5 пом. 8H, hi@jvo.ru, +7 499 322-09-33
            </p>
            <div className={styles.paymentIcons}>
              <img src={paymentSystemsLogo} alt="VISA, Mastercard, МИР" />
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="vc.ru">
              <img src={vcRuIcon} alt="vc.ru" />
            </a>
            <a href="#" className={styles.socialLink} aria-label="YouTube">
              <img src={youtubeIcon} alt="YouTube" />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Дзен">
              <img src={dzenIcon} alt="Дзен" />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Telegram">
              <img src={telegramIcon} alt="Telegram" />
            </a>
            <a href="#" className={styles.socialLink} aria-label="VK">
              <img src={vkIcon} alt="VK" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
