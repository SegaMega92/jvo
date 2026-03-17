import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './FAQSection.module.css';

// Данные FAQ по умолчанию
const defaultFAQs = [
  {
    id: 1,
    question: 'Как Агент поймет специфику моего товара, если он технически сложный?',
    answer: 'Вы загружаете в промт текст объемом до 50 000 знаков: инструкции, составы, регламенты и даже скрипты общения. Агент обучается на этих данных и даёт технически точные ответы в тональности бренда.',
  },
  {
    id: 2,
    question: 'Не напишет ли Агент лишнего в автоответе на отзыв покупателю?',
    answer: 'Агент работает строго в рамках заданных инструкций и тональности бренда. Вы можете настроить модерацию ответов перед публикацией.',
  },
  {
    id: 3,
    question: 'Может ли ИИ предлагать товары, которых сейчас нет в наличии?',
    answer: 'Нет, Агент интегрирован с вашими складскими остатками и предлагает только товары в наличии.',
  },
  {
    id: 4,
    question: 'Можно ли настроить публикацию автоответов на вопросы и отзывы только после проверки менеджером?',
    answer: 'Да, вы можете включить режим модерации, при котором все ответы сначала проходят проверку менеджером.',
  },
  {
    id: 5,
    question: 'Умеет ли Агент анализировать вопросы, а не просто давать на них ответы?',
    answer: 'Да, Агент собирает аналитику по частым вопросам и выявляет паттерны, помогая улучшить карточки товаров.',
  },
  {
    id: 6,
    question: 'Может ли Агент сам написать приветственное сообщение покупателю в чате WB?',
    answer: 'Да, Агент может инициировать диалог с покупателем по заданным сценариям.',
  },
  {
    id: 7,
    question: 'Будет ли Агент отвечать на старые отзывы и вопросы, накопившиеся до подключения?',
    answer: 'Да, вы можете настроить обработку исторических отзывов и вопросов.',
  },
  {
    id: 8,
    question: 'Насколько безопасно давать доступ к кабинетам маркетплейсов?',
    answer: 'Мы используем API-ключи с ограниченными правами. Доступ только к отзывам и вопросам, без возможности изменения цен или остатков.',
  },
  {
    id: 9,
    question: 'Как Агент выстраивает приоритетность задач?',
    answer: 'Агент анализирует тональность, срочность и потенциальное влияние на репутацию, обрабатывая критичные отзывы в первую очередь.',
  },
];

/**
 * FAQSection - секция "Часто задаваемые вопросы"
 * Аккордеон с вопросами и ответами
 */
export function FAQSection({
  title = 'Часто задаваемые вопросы',
  icon,
  faqs = defaultFAQs,
  className = '',
}) {
  const [openId, setOpenId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Анимация появления при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={`${styles.section} ${className}`} ref={sectionRef}>
      {/* Заголовок с иконкой */}
      <div className={`${styles.header} ${styles.animateIn} ${isVisible ? styles.visible : ''}`}>
        {icon && (
          <div className={styles.iconWrapper}>
            <img src={icon} alt="" className={styles.icon} />
          </div>
        )}
        <h2 className={styles.title}>{title}</h2>
      </div>

      {/* FAQ аккордеон */}
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className={`${styles.faqItem} ${styles.animateIn} ${isVisible ? styles.visible : ''} ${openId === faq.id ? styles.faqItemOpen : ''}`}
            style={{ transitionDelay: isVisible ? `${(index + 1) * 0.05}s` : '0s' }}
          >
            <button
              className={styles.faqQuestion}
              onClick={() => toggleQuestion(faq.id)}
              aria-expanded={openId === faq.id}
            >
              <span className={styles.faqQuestionText}>
                {index + 1}. {faq.question}
              </span>
              <span className={styles.faqChevron}>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.chevronIcon}
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div className={styles.faqAnswer}>
              <p className={styles.faqAnswerText}>{faq.answer}</p>
            </div>
            {index < faqs.length - 1 && <div className={styles.faqDivider} />}
          </div>
        ))}
      </div>
    </section>
  );
}

FAQSection.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
};

export default FAQSection;
