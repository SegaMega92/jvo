import PropTypes from 'prop-types';
import styles from './FeatureCard.module.css';

/**
 * FeatureCard - карточка с изображением, заголовком и описанием
 * Используется для отображения фич/функций продукта
 */
export function FeatureCard({
  image,
  imageAlt = '',
  title,
  description,
  className = '',
}) {
  return (
    <article className={`${styles.card} ${className}`}>
      {/* Изображение */}
      <div className={styles.imageWrapper}>
        {typeof image === 'string' ? (
          <img src={image} alt={imageAlt} className={styles.image} />
        ) : (
          image
        )}
      </div>

      {/* Текстовый блок */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}

FeatureCard.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  imageAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default FeatureCard;
