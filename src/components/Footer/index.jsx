import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

// Partner logos as inline SVGs
const ITCompanyLogo = () => (
  <svg width="43" height="47" viewBox="0 0 43 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M21.5 0L0 12.41V35.23L21.5 47L43 35.23V12.41L21.5 0ZM21.5 3.92L38.67 13.84V33.08L21.5 43.08L4.33 33.08V13.84L21.5 3.92Z" fill="white"/>
    <path d="M21.5 11.75L12 17.25V28.75L21.5 34.25L31 28.75V17.25L21.5 11.75Z" fill="white"/>
    <circle cx="21.5" cy="23.5" r="4" fill="#101010"/>
  </svg>
);

const OzonLogo = () => (
  <svg width="82" height="32" viewBox="0 0 82 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0C7.16 0 0 7.16 0 16C0 24.84 7.16 32 16 32C24.84 32 32 24.84 32 16C32 7.16 24.84 0 16 0ZM16 5.33C21.89 5.33 26.67 10.11 26.67 16C26.67 21.89 21.89 26.67 16 26.67C10.11 26.67 5.33 21.89 5.33 16C5.33 10.11 10.11 5.33 16 5.33Z" fill="#005BFF"/>
    <path d="M16 10.67C13.05 10.67 10.67 13.05 10.67 16C10.67 18.95 13.05 21.33 16 21.33C18.95 21.33 21.33 18.95 21.33 16C21.33 13.05 18.95 10.67 16 10.67Z" fill="#005BFF"/>
    <path d="M42.5 22.5V9.5H50.5V11.5H44.5V15H49.5V17H44.5V20.5H50.5V22.5H42.5Z" fill="white"/>
    <path d="M52 16C52 12.13 55.13 9 59 9C62.87 9 66 12.13 66 16C66 19.87 62.87 23 59 23C55.13 23 52 19.87 52 16ZM54 16C54 18.76 56.24 21 59 21C61.76 21 64 18.76 64 16C64 13.24 61.76 11 59 11C56.24 11 54 13.24 54 16Z" fill="white"/>
    <path d="M68 9.5H70L76 19V9.5H78V22.5H76L70 13V22.5H68V9.5Z" fill="white"/>
  </svg>
);

const MoscowClusterLogo = () => (
  <svg width="53" height="34" viewBox="0 0 53 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 17L13 0H26L13 17L26 34H13L0 17Z" fill="white"/>
    <path d="M27 17L40 0H53L40 17L53 34H40L27 17Z" fill="white"/>
  </svg>
);

const WildberriesLogo = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="38" height="38" rx="8" fill="#CB11AB"/>
    <path d="M8 11H11.5L14 20L16.5 13H19.5L22 20L24.5 11H28L23.5 27H20L17.5 19L15 27H11.5L7 11H8Z" fill="white"/>
    <path d="M29 11H31V14H29V11Z" fill="white"/>
  </svg>
);

const SkolkovoLogo = () => (
  <svg width="55" height="41" viewBox="0 0 55 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 8C0 3.58 3.58 0 8 0H47C51.42 0 55 3.58 55 8V33C55 37.42 51.42 41 47 41H8C3.58 41 0 37.42 0 33V8Z" fill="#4BA52C"/>
    <path d="M12 16C12 14.34 13.34 13 15 13H17C18.1 13 19 13.9 19 15C19 15.74 18.6 16.39 18 16.73V17C18.6 17.34 19 17.99 19 18.73C19 19.99 18.1 21 17 21H15C13.34 21 12 19.66 12 18V16ZM15 15V16.5H17V15H15ZM15 18.5V20H17V18.5H15Z" fill="white"/>
    <path d="M22 13H24V18L28 13H30.5L26 18.5L31 25H28.5L24 19V25H22V13Z" fill="white"/>
    <path d="M10 28H45V30H10V28Z" fill="white" fillOpacity="0.5"/>
  </svg>
);

// Social media icons
const YandexZenIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="#1A1A1A"/>
    <path d="M10 10H17V17H10V10ZM19 10H26V17H19V10ZM10 19H17V26H10V19ZM19 19H26V26H19V19Z" fill="white"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="#1A1A1A"/>
    <path d="M27.54 12.82C27.39 12.26 27.09 11.76 26.67 11.37C26.25 10.97 25.73 10.7 25.17 10.59C23.5 10.2 18 10.2 18 10.2C18 10.2 12.5 10.2 10.83 10.63C10.27 10.74 9.75 11.01 9.33 11.41C8.91 11.81 8.61 12.3 8.46 12.86C8.19 14.53 8.06 16.22 8.07 17.91C8.05 19.62 8.18 21.33 8.46 23.01C8.62 23.55 8.93 24.03 9.35 24.41C9.77 24.8 10.29 25.05 10.83 25.15C12.5 25.58 18 25.58 18 25.58C18 25.58 23.5 25.58 25.17 25.15C25.73 25.04 26.25 24.77 26.67 24.37C27.09 23.98 27.39 23.48 27.54 22.92C27.8 21.26 27.93 19.58 27.93 17.89C27.95 16.18 27.82 14.47 27.54 12.79V12.82ZM15.75 21.27V14.54L21.5 17.91L15.75 21.27Z" fill="white"/>
  </svg>
);

const DzenIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="#1A1A1A"/>
    <path d="M18 8C12.48 8 8 12.48 8 18C8 23.52 12.48 28 18 28C23.52 28 28 23.52 28 18C28 12.48 23.52 8 18 8ZM17.5 17.5H11V18.5H17.5V25H18.5V18.5H25V17.5H18.5V11H17.5V17.5Z" fill="white"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="#1A1A1A"/>
    <path d="M26.5 10.5L8.5 17.5C7.5 17.9 7.5 18.5 8.3 18.8L12.8 20.2L23.5 13C24 12.7 24.4 12.8 24 13.2L15 21.3L14.7 26C15.2 26 15.4 25.8 15.7 25.5L18.2 23.1L22.8 26.5C23.7 27 24.3 26.7 24.5 25.7L27.4 12C27.7 10.8 27 10.2 26.5 10.5Z" fill="white"/>
  </svg>
);

const VKIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="#1A1A1A"/>
    <path d="M27.5 13.5C27.7 12.8 27.5 12.3 26.5 12.3H24C23.2 12.3 22.8 12.7 22.6 13.2C22.6 13.2 21.3 16.3 19.5 18.3C18.8 19 18.5 19.2 18.1 19.2C17.9 19.2 17.6 19 17.6 18.3V13.5C17.6 12.7 17.4 12.3 16.7 12.3H12.8C12.3 12.3 12 12.6 12 12.9C12 13.7 13.2 13.9 13.3 16.1V19.3C13.3 20.3 13.1 20.5 12.7 20.5C11.7 20.5 9.3 17.3 8.1 13.6C7.8 12.7 7.5 12.3 6.7 12.3H4.2C3.3 12.3 3.1 12.7 3.1 13.2C3.1 14.1 4.2 17.4 7.5 21.7C9.7 24.7 12.7 26.3 15.4 26.3C17.1 26.3 17.3 25.9 17.3 25.1V22.9C17.3 22 17.6 21.8 18.2 21.8C18.6 21.8 19.3 22 20.9 23.5C22.7 25.3 23 26.3 24.2 26.3H26.7C27.6 26.3 28 25.9 27.8 25.1C27.5 24.3 26.4 23 25 21.5C24.3 20.7 23.3 19.8 23 19.3C22.6 18.8 22.7 18.5 23 18C23 18 26.2 13.5 26.5 12.5L27.5 13.5Z" fill="white"/>
  </svg>
);

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
    logo: <ITCompanyLogo />,
    text: ['Аккредитованная', 'IT-компания'],
  },
  {
    id: 'ozon',
    logo: <OzonLogo />,
    text: ['Технологический', 'партнёр'],
  },
  {
    id: 'moscow-cluster',
    logo: <MoscowClusterLogo />,
    text: ['Участник Московского', 'инновационного кластера'],
  },
  {
    id: 'wildberries',
    logo: <WildberriesLogo />,
    text: ['Авторизованный сервис', 'и сертифицированный партнёр'],
  },
  {
    id: 'skolkovo',
    logo: <SkolkovoLogo />,
    text: ['Деятельность осуществляется', 'при грантовой поддержке', 'Фонда «Сколково»'],
  },
];

/**
 * Footer - футер сайта
 * Содержит навигацию, форму подписки, партнёров и контакты
 */
export function Footer({ className = '' }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className={`${styles.footer} ${className}`}>
      {/* Decorative gradient blur */}
      <div className={styles.gradientBlur} aria-hidden="true" />

      <div className={styles.container}>
        {/* Top section: Navigation + Newsletter */}
        <div className={styles.topSection}>
          {/* Navigation columns */}
          <div className={styles.navColumns}>
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

          {/* Newsletter subscription */}
          <div className={styles.newsletter}>
            <h3 className={styles.newsletterTitle}>
              Делимся лучшими практиками e-commerce компаний
            </h3>
            <form className={styles.subscribeForm} onSubmit={handleSubmit}>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  placeholder="E–mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.emailInput}
                  required
                />
                <button type="submit" className={styles.subscribeButton}>
                  Подписаться
                </button>
              </div>
              <p className={styles.privacyNote}>
                Нажимая кнопку «Подписаться» вы соглашаетесь с Политикой обработки персональных данных
              </p>
            </form>
          </div>
        </div>

        {/* Partners section */}
        <div className={styles.partnersSection}>
          {partnerBadges.map((badge) => (
            <div key={badge.id} className={styles.partnerBadge}>
              <div className={styles.partnerLogo}>{badge.logo}</div>
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
              <span className={styles.paymentIcon}>VISA</span>
              <span className={styles.paymentIcon}>Mastercard</span>
              <span className={styles.paymentIcon}>МИР</span>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="Яндекс.Дзен">
              <YandexZenIcon />
            </a>
            <a href="#" className={styles.socialLink} aria-label="YouTube">
              <YouTubeIcon />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Дзен">
              <DzenIcon />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Telegram">
              <TelegramIcon />
            </a>
            <a href="#" className={styles.socialLink} aria-label="VK">
              <VKIcon />
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
