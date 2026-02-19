import styles from './TestimonialsSection.module.css';
import PropTypes from 'prop-types';

/**
 * Testimonials section with customer reviews
 */
export function TestimonialsSection({
  title = 'Отзывы клиентов',
  subtitle = 'Что говорят о нас',
  testimonials = [],
  variant = 'cards',
}) {
  return (
    <section
      className={styles.testimonials}
      aria-labelledby="testimonials-title"
    >
      <div className={styles.testimonials__container}>
        <header className={styles.testimonials__header}>
          <h2 id="testimonials-title" className={styles.testimonials__title}>
            {title}
          </h2>
          <p className={styles.testimonials__subtitle}>{subtitle}</p>
        </header>

        <ul className={`${styles.testimonials__list} ${styles[`testimonials__list--${variant}`]}`}>
          {testimonials.map((testimonial, index) => (
            <li key={index} className={styles.testimonials__item}>
              <blockquote className={styles.testimonials__card}>
                <div className={styles.testimonials__quote} aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M10 8C5.58 8 2 11.58 2 16V24H10V16H6C6 13.79 7.79 12 10 12V8ZM24 8C19.58 8 16 11.58 16 16V24H24V16H20C20 13.79 21.79 12 24 12V8Z"/>
                  </svg>
                </div>

                <p className={styles.testimonials__text}>{testimonial.text}</p>

                <footer className={styles.testimonials__author}>
                  {testimonial.avatar && (
                    <img
                      src={testimonial.avatar}
                      alt=""
                      className={styles.testimonials__avatar}
                      loading="lazy"
                    />
                  )}
                  {!testimonial.avatar && (
                    <div className={styles.testimonials__avatarPlaceholder}>
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div className={styles.testimonials__authorInfo}>
                    <cite className={styles.testimonials__name}>{testimonial.name}</cite>
                    {testimonial.role && (
                      <span className={styles.testimonials__role}>{testimonial.role}</span>
                    )}
                    {testimonial.company && (
                      <span className={styles.testimonials__company}>{testimonial.company}</span>
                    )}
                  </div>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

TestimonialsSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string,
      company: PropTypes.string,
      avatar: PropTypes.string,
    })
  ),
  variant: PropTypes.oneOf(['cards', 'minimal', 'highlight']),
};

export default TestimonialsSection;
