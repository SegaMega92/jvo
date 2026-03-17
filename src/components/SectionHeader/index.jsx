import PropTypes from 'prop-types';
import styles from './SectionHeader.module.css';
import { Button } from '../Button';

/**
 * SectionHeader - универсальная заголовочная секция
 * Тег + заголовок + подзаголовок + опционально кнопка/контент
 */
export function SectionHeader({
  tag,
  tagIcon,
  title,
  subtitle,
  buttonText,
  buttonHref,
  buttonVariant = 'primary',
  children,
  centered = true,
  as: HeadingTag = 'h1',
  className = '',
}) {
  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        {/* Тег с иконкой */}
        {tag && (
          <div className={`${styles.tag} ${!tagIcon ? styles.tagNoIcon : ''}`}>
            {tagIcon && (
              <img src={tagIcon} alt="" className={styles.tagIcon} />
            )}
            <span className={styles.tagText}>{tag}</span>
          </div>
        )}

        {/* Текстовый блок */}
        <div className={`${styles.content} ${centered ? styles.contentCentered : ''}`}>
          <HeadingTag className={styles.title}>{title}</HeadingTag>
          {subtitle && (
            <p className={styles.subtitle}>{subtitle}</p>
          )}
        </div>

        {/* Кнопка */}
        {buttonText && buttonHref && (
          <Button
            href={buttonHref}
            variant={buttonVariant}
            size="medium"
            className={styles.button}
          >
            {buttonText}
          </Button>
        )}

        {/* Слот для дополнительного контента */}
        {children && (
          <div className={styles.slot}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

SectionHeader.propTypes = {
  tag: PropTypes.string,
  tagIcon: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
  buttonVariant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  children: PropTypes.node,
  centered: PropTypes.bool,
  as: PropTypes.oneOf(['h1', 'h2', 'h3']),
  className: PropTypes.string,
};

export default SectionHeader;
