import './index.css';
import {
  Header,
  HeroSection,
  LogoMarquee,
  FeatureSection,
  BannerSection,
  ImageListCards,
  AwardsSection,
  CTASection,
  Footer,
} from './components';
import { PromoBanner } from './components/PromoBanners';

import featurePricingBg from './assets/features/feature-pricing-bg.png';

/* ============================
   Header menu
   ============================ */
const menuItems = [
  { label: 'Инструменты', href: '/tools', hasSubmenu: true },
  { label: 'Компания', href: '/company', hasSubmenu: true },
  { label: 'Журнал', href: '/journal', hasSubmenu: true },
  { label: 'Экспресс-доставка', href: '/delivery', hasSubmenu: false },
  { label: 'Услуги продвижения', href: '/promotion', hasSubmenu: false },
];

/* ============================
   Footer columns
   ============================ */
const footerColumns = [
  {
    title: 'Продукт',
    links: [
      { label: 'Возможности', href: '/features' },
      { label: 'Тарифы', href: '/pricing' },
      { label: 'Интеграции', href: '/integrations' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { label: 'О нас', href: '/about' },
      { label: 'Вакансии', href: '/careers' },
      { label: 'Контакты', href: '/contacts' },
    ],
  },
  {
    title: 'Поддержка',
    links: [
      { label: 'Документация', href: '/docs' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Связаться', href: '/support' },
    ],
  },
];

/* ============================
   Page
   ============================ */
function App() {
  return (
    <>
      <Header menuItems={menuItems} />

      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 3. Логотипы прессы */}
        <LogoMarquee />

        {/* 4. Фичи с медиа */}
        <div style={{ maxWidth: 'var(--container-max-width)', margin: '0 auto', padding: '0 var(--container-padding)' }}>
          <FeatureSection
            title="Автоматическое заполнение карточек"
            description="Загрузите изображения или артикулы конкурентов — агент создаст продающую карточку за минуты"
            bullets={[
              'Анализ конкурентов и автозаполнение',
              'SEO-оптимизация описаний',
              'Генерация продающих текстов',
            ]}
            video="https://kinescope.io/fiCG9ns1ZgH9jMX5gGEvgm"
            buttonText="Попробовать"
            buttonHref="#demo"
          />

          <FeatureSection
            title="Умное управление ценами"
            description="Агент управляет ценами опираясь на события, конкурентов и маржинальность"
            bullets={[
              'Автоматическое отслеживание конкурентов',
              'Динамическое ценообразование',
              'Контроль маржинальности',
            ]}
            image={featurePricingBg}
            imageAlt="Управление ценами"
            reversed
            buttonText="Подробнее"
            buttonHref="#demo"
          />
        </div>

        {/* 5. Баннер CTA */}
        <div style={{ maxWidth: 'var(--container-max-width)', margin: '0 auto', padding: '0 var(--container-padding)' }}>
          <BannerSection />
        </div>

        {/* 6. Карточки: обучение + менеджер */}
        <div style={{ maxWidth: 'var(--container-max-width)', margin: '80px auto', padding: '0 var(--container-padding)' }}>
          <ImageListCards />
        </div>

        {/* 7. Награды */}
        <AwardsSection />

        {/* 8. API баннер */}
        <div style={{ maxWidth: 'var(--container-max-width)', margin: '0 auto', padding: '0 var(--container-padding)' }}>
          <PromoBanner
            text="Прямая интеграция по API, подключайтесь к JVO и автоматизируйте обмен данными"
            variant="lavender"
          />
        </div>

        {/* 9. CTA */}
        <CTASection />
      </main>

      <Footer columns={footerColumns} />
    </>
  );
}

export default App;
