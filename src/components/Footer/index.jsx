import styles from './Footer.module.css';
import PropTypes from 'prop-types';

/**
 * Footer component with navigation and contacts
 */
export function Footer({
  logoText = 'JVO',
  description = 'AI-платформа для автоматизации e-commerce',
  columns = [],
  socialLinks = [],
  copyright = `© ${new Date().getFullYear()} JVO. Все права защищены.`,
  variant = 'default',
}) {
  return (
    <footer className={`${styles.footer} ${styles[`footer--${variant}`]}`}>
      <div className={styles.footer__container}>
        <div className={styles.footer__main}>
          <div className={styles.footer__brand}>
            <a href="/" className={styles.footer__logo} aria-label="JVO - На главную">
              <span className={styles.footer__logoText}>{logoText}</span>
            </a>
            <p className={styles.footer__description}>{description}</p>

            {socialLinks.length > 0 && (
              <nav className={styles.footer__social} aria-label="Социальные сети">
                <ul className={styles.footer__socialList}>
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className={styles.footer__socialLink}
                        aria-label={link.label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          <div className={styles.footer__columns}>
            {columns.map((column, index) => (
              <nav key={index} className={styles.footer__column} aria-label={column.title}>
                <h3 className={styles.footer__columnTitle}>{column.title}</h3>
                <ul className={styles.footer__links}>
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className={styles.footer__link}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <p className={styles.footer__copyright}>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  logoText: PropTypes.string,
  description: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ),
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  copyright: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'minimal', 'centered']),
};

export default Footer;
