import { useState } from 'react';
import styles from './Header.module.css';
import PropTypes from 'prop-types';

// JVO Logo SVG inline (black for light header)
const Logo = () => (
  <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60.0453 24H59.5658C52.9523 24 47.5787 18.6283 47.5787 12.0171C47.5787 5.40582 52.9523 0.0341682 59.5658 0.0341682H60.0453C66.6588 0.0341682 72.0324 5.40582 72.0324 12.0171C72.0158 18.6283 66.6423 24 60.0453 24ZM59.5658 6.79418C56.6724 6.79418 54.3246 9.14118 54.3246 12.0336C54.3246 14.926 56.6724 17.273 59.5658 17.273H60.0288C62.9222 17.273 65.27 14.926 65.27 12.0336C65.27 9.14118 62.9222 6.79418 60.0288 6.79418H59.5658Z" fill="#101010"/>
    <path d="M79.3165 0H72.4219V6.89224H79.3165V0Z" fill="#101010"/>
    <path d="M13.409 0H0V6.89224H13.409V0Z" fill="#101010"/>
    <path d="M13.4261 6.89273V13.8346C13.4261 15.7353 11.8719 17.2889 9.97049 17.2889C8.0691 17.2889 6.51491 15.7353 6.51491 13.8346H0.0170898C0.0170898 19.3219 4.48124 23.801 9.98703 23.801C15.4763 23.801 19.957 19.3384 19.957 13.8346V6.89273H13.4261Z" fill="#101010"/>
    <path d="M41.9442 0.0158024L34.3882 16.7588L26.8322 0.0158024H22.3185V6.87499L29.9902 23.8494H38.7862L46.458 6.87499V0.0158024H41.9442Z" fill="#101010"/>
  </svg>
);

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Default navigation structure from jvo.ru
const defaultNavItems = [
  {
    label: 'Решения',
    href: '#',
    dropdown: [
      { label: 'Агент', href: 'https://jvo.ru/agent' },
      { label: 'Дашборд', href: 'https://jvo.ru/dashboard' },
      { label: 'SEO Pro', href: 'https://jvo.ru/seopro' },
      { label: 'Логистика', href: 'https://jvo.ru/logistics' },
      { label: 'Аналитика Ozon', href: 'https://jvo.ru/ozon' },
      { label: 'Финансы', href: 'https://jvo.ru/finance' },
    ],
  },
  {
    label: 'Реферальная программа',
    href: 'https://jvo.ru/referral',
  },
  {
    label: 'Журнал',
    href: '#',
    dropdown: [
      { label: 'События', href: 'https://jvo.ru/events' },
      { label: 'Рейтинг', href: 'https://jvo.ru/rating' },
    ],
  },
  {
    label: 'Компания',
    href: '#',
    dropdown: [
      { label: 'О нас', href: 'https://jvo.ru/about' },
      { label: 'Контакты', href: 'https://jvo.ru/contacts' },
    ],
  },
];

/**
 * JVO Header component - light theme with dropdowns
 * Based on Figma design and jvo.ru
 */
export function Header({
  navItems = defaultNavItems,
  phone = '+7 499 322-09-33',
  email = 'hi@jvo.ru',
  ctaText = 'Подключить',
  ctaHref = 'https://jvo.ru/requestdemo',
  loginText = 'Войти',
  loginHref = 'https://lk.jvo.ru/',
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        {/* Left: Logo + Navigation */}
        <div className={styles.header__left}>
          <a href="https://jvo.ru/" className={styles.header__logo} aria-label="JVO - На главную">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className={styles.header__nav} aria-label="Главная навигация">
          <ul className={styles.header__navList}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.header__navItem}>
                <a href={item.href} className={styles.header__navLink}>
                  {item.label}
                  {item.dropdown && (
                    <span className={styles.header__navArrow}>
                      <ChevronDown />
                    </span>
                  )}
                </a>
                {item.dropdown && (
                  <div className={styles.header__dropdown}>
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className={styles.header__dropdownLink}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        </div>

        {/* Right section */}
        <div className={styles.header__right}>
          <a href={`tel:${phone.replace(/\s/g, '')}`} className={styles.header__phone}>
            {phone}
          </a>
          <div className={styles.header__buttons}>
            <a href={ctaHref} className={styles.header__buttonPrimary}>
              {ctaText}
            </a>
            <a href={loginHref} className={styles.header__buttonSecondary}>
              {loginText}
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className={styles.header__menuButton}
          aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={mobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className={styles.header__menuIcon} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.header__mobileMenu} ${mobileMenuOpen ? styles['header__mobileMenu--open'] : ''}`}>
        <ul className={styles.header__mobileNavList}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.header__mobileNavItem}>
              {item.dropdown ? (
                <>
                  <button
                    className={styles.header__mobileNavLink}
                    onClick={() => toggleMobileDropdown(index)}
                  >
                    {item.label}
                    <span className={`${styles.header__navArrow} ${openDropdown === index ? styles['header__navArrow--open'] : ''}`}>
                      <ChevronDown />
                    </span>
                  </button>
                  {openDropdown === index && (
                    <div className={styles.header__mobileDropdown}>
                      {item.dropdown.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className={styles.header__mobileDropdownLink}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={item.href} className={styles.header__mobileNavLink}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className={styles.header__mobileButtons}>
          <a href={ctaHref} className={styles.header__buttonPrimary}>
            {ctaText}
          </a>
          <a href={loginHref} className={styles.header__buttonSecondary}>
            {loginText}
          </a>
        </div>

        {/* Contact info */}
        <div className={styles.header__mobileContacts}>
          <a href={`tel:${phone.replace(/\s/g, '')}`} className={styles.header__mobilePhone}>
            {phone}
          </a>
          <a href={`mailto:${email}`} className={styles.header__mobileEmail}>
            {email}
          </a>
        </div>

      </div>
    </header>
  );
}

Header.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      dropdown: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        })
      ),
    })
  ),
  phone: PropTypes.string,
  email: PropTypes.string,
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
  loginText: PropTypes.string,
  loginHref: PropTypes.string,
};

export default Header;
