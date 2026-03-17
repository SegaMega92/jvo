import PropTypes from 'prop-types';
import styles from './LandingPage.module.css';

// Import all sections
import { Header } from '../../components/Header';
import { SectionHeader } from '../../components/SectionHeader';
import { HeroBlock } from '../../components/HeroBlock';
import { MonitoringSection } from '../../components/MonitoringSection';
import { FeatureSliderGroup } from '../../components/FeatureSliderGroup';
import { ComparisonSlider } from '../../components/ComparisonSlider';
import { BentoGrid } from '../../components/BentoGrid';
import { AudienceSection } from '../../components/AudienceSection';
import { LaunchSection } from '../../components/LaunchSection';
import { ProductsSlider } from '../../components/ProductsSlider';
import { FAQSection } from '../../components/FAQSection';
import { AgentChatDemo } from '../../components/Illustrations/AgentChatDemo';
import illustrationCommunication from '../../../assets/illustration_commenication_1.svg';

// Assets for HeroBlock
import heroIllustration from '../../../assets/hero-illustration-agent.png';
import heroGradient from '../../../assets/hero-gradient.png';
import tagIconAgent from '../../../assets/tag-icon-agent.svg';

// Assets for FeatureSlider slides
import slideAutoresponse1 from '../../../assets/slide/Работа тональности.png';
import slideAutoresponse2 from '../../../assets/slide/Работа тональности2.png';
import slideAutoresponse3 from '../../../assets/slide/Работа тональности3.png';
import slideAutoresponse4 from '../../../assets/slide/Работа тональности4.png';
import slideCrossSell1 from '../../../assets/slide/Умные кросс-продажи.png';
import slideCrossSell2 from '../../../assets/slide/Умные кросс-продажи2.png';
import slideCrossSell3 from '../../../assets/slide/Умные кросс-продажи3.png';
import slideAnalytics from '../../../assets/slide/Аналитические отчеты.png';
import gradientViolet from '../../../assets/slide/grdaient1.svg';
import gradientPink from '../../../assets/slide/gradient2.svg';
import gradientMagenta from '../../../assets/slide/gradient3.svg';

// Обёртка для левой иллюстрации с градиентом
const LeftIllustration = () => (
  <div className={styles.illustrationWrapper}>
    <div className={styles.dotsPattern} />
    <img
      src={illustrationCommunication}
      alt="Приоритезация алертов"
      className={styles.illustrationImg}
    />
  </div>
);

// Обёртка для правой иллюстрации с градиентом и интерактивным AgentChatDemo
const RightIllustration = () => (
  <div className={styles.illustrationWrapperRight}>
    <div className={styles.dotsPattern} />
    <AgentChatDemo />
  </div>
);

// Данные для MonitoringSection
const monitoringCards = [
  {
    image: <LeftIllustration />,
    imageAlt: 'Приоритезация алертов',
    title: 'Приоритезация алертов',
    description: 'система распределяет найденные отклонения по уровням критичности — от рекомендованных до важных и критических — для фокусировки на задачах, требующих решения в первую очередь.',
  },
  {
    image: <RightIllustration />,
    imageAlt: 'Мгновенная автоматизация',
    title: 'Мгновенная автоматизация',
    description: 'Часть созданных задач в один клик передаётся в работу профильным Агентам для исполнения — от управления ценами до подготовки ответов на отзывы',
  },
];

// Компонент для отображения картинки слайда
const SlideImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className={styles.slideImage}
  />
);

SlideImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

// Данные для FeatureSliderGroup — 3 секции с полным набором слайдов
const featureSliderSections = [
  {
    tabTitle: 'Автоответы',
    sectionTitle: 'Автоответы на вопросы и отзывы на маркетплейсах',
    sectionDescription: 'Агент обеспечивает экспертную коммуникацию на основе полных технических данных о товаре',
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    slides: [
      {
        title: 'Работа с тональностью',
        description: 'Распознаёт контекст и специфику обращений, подбирая точную реакцию без использования универсальных фраз',
        media: <SlideImage src={slideAutoresponse1} alt="Работа с тональностью" />,
        background: gradientViolet,
      },
      {
        title: 'Корректировка рейтинга',
        description: 'Определяет несоответствие содержания отзыва и поставленной оценки, предлагая клиенту скорректировать оценку',
        media: <SlideImage src={slideAutoresponse2} alt="Корректировка рейтинга" />,
        background: gradientViolet,
      },
      {
        title: 'Отработка возражений',
        description: 'Формирует ответы на основе реальных характеристик, описания карточки и заданных правил и ограничений',
        media: <SlideImage src={slideAutoresponse3} alt="Отработка возражений" />,
        background: gradientViolet,
      },
      {
        title: 'Ответы на вопросы',
        description: 'Оперативно отвечает на вопросы покупателей, используя данные карточки товара и базу знаний бренда',
        media: <SlideImage src={slideAutoresponse4} alt="Ответы на вопросы" />,
        background: gradientViolet,
      },
    ],
  },
  {
    tabTitle: 'Кросс-продажи',
    sectionTitle: 'Умные кросс-продажи',
    sectionDescription: 'Автоматические рекомендации релевантных товаров в ответах с учётом остатков на складах',
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    slides: [
      {
        title: 'Рекомендация до 5 артикулов',
        description: 'Агент анализирует покупку, контекст отзыва и предлагает дополняющие товары, которые действительно интересны покупателю.',
        media: <SlideImage src={slideCrossSell1} alt="Рекомендация до 5 артикулов" />,
        background: gradientPink,
      },
      {
        title: 'Проверка остатков',
        description: 'Автоматически проверяет наличие товаров на складах и исключает из рекомендаций позиции, которых нет в наличии',
        media: <SlideImage src={slideCrossSell2} alt="Проверка остатков" />,
        background: gradientPink,
      },
      {
        title: 'Персонализация',
        description: 'Учитывает историю покупок и предпочтения клиента для формирования наиболее релевантных предложений',
        media: <SlideImage src={slideCrossSell3} alt="Персонализация" />,
        background: gradientPink,
      },
    ],
  },
  {
    tabTitle: 'Аналитика',
    sectionTitle: 'Аналитические отчёты',
    sectionDescription: 'Готовые решения и рекомендации по улучшению продукта на основе обратной связи от покупателей',
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    slides: [
      {
        title: 'Для развития продукта',
        description: 'Детализирует повторяющиеся запросы и фиксирует незакрытые потребности покупателей для доработки ассортимента и поиска новых точек роста.',
        media: <SlideImage src={slideAnalytics} alt="Для развития продукта" />,
        background: gradientMagenta,
      },
      {
        title: 'Для производства',
        description: 'Систематизирует данные по причинам брака, критическим замечаниям к характеристикам и повторяющимся дефектам товара',
        media: <SlideImage src={slideAnalytics} alt="Для производства" />,
        background: gradientMagenta,
      },
      {
        title: 'Для маркетинга',
        description: 'Выявляет ключевые преимущества продукта по мнению покупателей и формирует рекомендации для позиционирования',
        media: <SlideImage src={slideAnalytics} alt="Для маркетинга" />,
        background: gradientMagenta,
      },
      {
        title: 'Для логистики',
        description: 'Анализирует отзывы о доставке и упаковке, выявляя проблемные зоны в цепочке поставок',
        media: <SlideImage src={slideAnalytics} alt="Для логистики" />,
        background: gradientMagenta,
      },
    ],
  },
];

/**
 * LandingPage - полная страница лендинга "Агент Коммуникаций"
 */
export function LandingPage({ className = '' }) {
  return (
    <div className={`${styles.page} ${className}`}>
      <Header />

      <main className={styles.main}>
        {/* Hero: SectionHeader + HeroBlock */}
        <SectionHeader
          tag="Агент коммуникаций"
          tagIcon={tagIconAgent}
          title="Ответы на отзывы, вопросы и кросс-продажи"
          subtitle="Автоматизируйте общение с покупателями, превращайте отзывы в повторные продажи и получайте готовую аналитику для бизнеса"
        />
        <div className={styles.heroBlockWrapper}>
          <HeroBlock
            features={[
              'Оплата только за результат — от 1,3 ₽ за действие',
              'Кросс-продажи до 5 артикулов с проверкой остатков',
              'Готовые отчёты для производства, логистики и маркетинга',
            ]}
            buttonText="Подключить ИИ-агента"
            buttonHref="#demo"
            illustration={heroIllustration}
            illustrationAlt="Автоматические ответы на отзывы"
            backgroundImage={heroGradient}
          />
        </div>

        <MonitoringSection
          title="Мониторинг и аналитика – центр управления и главный движок системы Дживио"
          subtitle="Система ежедневно проводит аудит воронки продаж, выявляет отклонения и формирует готовые задачи для автоматизации через ИИ-Агентов"
          cards={monitoringCards}
        />

        <FeatureSliderGroup sections={featureSliderSections} />

        <ComparisonSlider
          title="Преимущества Агента перед конкурентами"
          subtitle="Сравните возможности нашего Агента с типовыми решениями на рынке"
        />

        <BentoGrid />

        <AudienceSection
          title="Кому необходим Агент коммуникаций"
        />

        <LaunchSection
          title="Запуск и внедрение системы Дживио"
          subtitle="Все необходимые инструменты и поддержка для комфортного старта и эффективной работы команды"
        />

        <ProductsSlider
          title="Другие решения системы Дживио"
          subtitle="Для автоматизации бизнеса на маркетплейсах используйте наши ИИ-продукты:"
        />

        <FAQSection
          title="Часто задаваемые вопросы"
        />
      </main>
    </div>
  );
}

LandingPage.propTypes = {
  className: PropTypes.string,
};

export default LandingPage;
