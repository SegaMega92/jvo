import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './AgentChatDemo.module.css';

/**
 * AgentChatDemo - интерактивная иллюстрация с анимацией чата агента
 *
 * Последовательность анимации:
 * 1. Кнопка "Автоматизировать" по центру
 * 2. Клик → появляется чат-пузырь с эффектом печатания
 * 3. Появляется второе сообщение
 * 4. Появляются кнопки ответа
 */
export function AgentChatDemo({
  autoPlay = false,
  autoPlayDelay = 2000,
  typingSpeed = 30,
  className = '',
  onComplete,
}) {
  // Состояния анимации: 'idle' | 'typing1' | 'typing2' | 'complete'
  const [stage, setStage] = useState('idle');
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedBullets, setDisplayedBullets] = useState([]);
  const [displayedText2, setDisplayedText2] = useState('');
  const [showButtons, setShowButtons] = useState(false);

  const fullText1 = 'Начинаем автоматизацию ответов на отзывы и вопросы. Для начала определим тон ответа:';
  const bullets = [
    'Вежливый, дружелюбный, без фамильярности',
    'Без шаблонности и «роботизированности»',
    'Естественный русский язык',
  ];
  const fullText2 = 'Здесь всё верно, можем переходить к структуре ответа?';

  // Сброс состояния
  const reset = useCallback(() => {
    setStage('idle');
    setDisplayedText1('');
    setDisplayedBullets([]);
    setDisplayedText2('');
    setShowButtons(false);
  }, []);

  // Запуск анимации
  const startAnimation = useCallback(() => {
    if (stage !== 'idle') return;
    setStage('typing1');
  }, [stage]);

  // Эффект печатания первого сообщения
  useEffect(() => {
    if (stage !== 'typing1') return;

    let charIndex = 0;
    let bulletIndex = 0;
    let bulletCharIndex = 0;
    let phase = 'text'; // 'text' | 'bullets'

    const interval = setInterval(() => {
      if (phase === 'text') {
        if (charIndex < fullText1.length) {
          setDisplayedText1(fullText1.slice(0, charIndex + 1));
          charIndex++;
        } else {
          phase = 'bullets';
        }
      } else if (phase === 'bullets') {
        if (bulletIndex < bullets.length) {
          const currentBullet = bullets[bulletIndex];
          if (bulletCharIndex < currentBullet.length) {
            setDisplayedBullets(prev => {
              const newBullets = [...prev];
              newBullets[bulletIndex] = currentBullet.slice(0, bulletCharIndex + 1);
              return newBullets;
            });
            bulletCharIndex++;
          } else {
            bulletIndex++;
            bulletCharIndex = 0;
          }
        } else {
          clearInterval(interval);
          setTimeout(() => setStage('typing2'), 500);
        }
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [stage, typingSpeed]);

  // Эффект печатания второго сообщения
  useEffect(() => {
    if (stage !== 'typing2') return;

    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex < fullText2.length) {
        setDisplayedText2(fullText2.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowButtons(true);
          setStage('complete');
          onComplete?.();
        }, 300);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [stage, typingSpeed, onComplete]);

  // AutoPlay
  useEffect(() => {
    if (autoPlay && stage === 'idle') {
      const timeout = setTimeout(startAnimation, autoPlayDelay);
      return () => clearTimeout(timeout);
    }
  }, [autoPlay, autoPlayDelay, stage, startAnimation]);

  const isAnimating = stage !== 'idle' && stage !== 'complete';

  return (
    <div className={`${styles.container} ${className}`}>
      {/* Градиентный фон */}
      <div className={styles.background} />

      {/* Кнопка "Автоматизировать" */}
      <button
        className={`${styles.automateButton} ${stage !== 'idle' ? styles.automateButtonHidden : ''}`}
        onClick={startAnimation}
        disabled={stage !== 'idle'}
      >
        <span className={styles.automateIcon}>
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="rotate(-45 14.5 14.5)">
              <ellipse cx="14.5" cy="14.5" rx="4" ry="7" stroke="white" strokeWidth="2" fill="none" />
              <ellipse cx="14.5" cy="14.5" rx="7" ry="11" stroke="white" strokeWidth="2" fill="none" opacity="0.7" />
              <ellipse cx="14.5" cy="14.5" rx="10" ry="14" stroke="white" strokeWidth="2" fill="none" opacity="0.4" />
            </g>
          </svg>
        </span>
        <span className={styles.automateText}>Автоматизировать</span>
      </button>

      {/* Чат-пузырь 1 */}
      <div className={`${styles.chatBubble} ${styles.chatBubble1} ${stage !== 'idle' ? styles.chatBubbleVisible : ''}`}>
        <div className={styles.agentTag}>
          <span className={styles.agentDot} />
          <span className={styles.agentName}>Агент коммуникаций</span>
        </div>
        <div className={styles.chatText}>
          <p>{displayedText1}<span className={`${styles.cursor} ${isAnimating && stage === 'typing1' && displayedBullets.length === 0 ? styles.cursorVisible : ''}`} /></p>
          {displayedBullets.length > 0 && (
            <ul className={styles.bulletList}>
              {displayedBullets.map((bullet, index) => (
                <li key={index}>
                  {bullet}
                  {stage === 'typing1' && index === displayedBullets.length - 1 && index < bullets.length - 1 && (
                    <span className={`${styles.cursor} ${styles.cursorVisible}`} />
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Чат-пузырь 2 */}
      <div className={`${styles.chatBubble} ${styles.chatBubble2} ${stage === 'typing2' || stage === 'complete' ? styles.chatBubbleVisible : ''}`}>
        <p className={styles.chatText}>
          {displayedText2}
          <span className={`${styles.cursor} ${stage === 'typing2' ? styles.cursorVisible : ''}`} />
        </p>
      </div>

      {/* Кнопки ответа */}
      <div className={`${styles.responseButtons} ${showButtons ? styles.responseButtonsVisible : ''}`}>
        <button className={styles.responseButton} onClick={reset}>
          Все хорошо
        </button>
        <button className={styles.responseButton} onClick={reset}>
          Хочу внести корректировки
        </button>
      </div>
    </div>
  );
}

AgentChatDemo.propTypes = {
  autoPlay: PropTypes.bool,
  autoPlayDelay: PropTypes.number,
  typingSpeed: PropTypes.number,
  className: PropTypes.string,
  onComplete: PropTypes.func,
};

export default AgentChatDemo;
