import './index.css';
import {
  Header,
  HeroSection,
  FeaturesSection,
  BenefitsSection,
  HowItWorksSection,
  PricingSection,
  TestimonialsSection,
  CTASection,
  Footer,
} from './components';

const menuItems = [
  { label: 'Инструменты', href: '/tools', hasSubmenu: true },
  { label: 'Компания', href: '/company', hasSubmenu: true },
  { label: 'Журнал', href: '/journal', hasSubmenu: true },
  { label: 'Экспресс-доставка', href: '/delivery', hasSubmenu: false },
  { label: 'Услуги продвижения', href: '/promotion', hasSubmenu: false },
];

const features = [
  {
    icon: '🤖',
    title: 'AI-автоматизация',
    description: 'Автоматическое управление ценами, остатками и контентом на основе машинного обучения',
  },
  {
    icon: '📊',
    title: 'Аналитика продаж',
    description: 'Детальные отчёты по продажам, конверсии и эффективности рекламных кампаний',
  },
  {
    icon: '🚀',
    title: 'Быстрый старт',
    description: 'Интеграция с маркетплейсами за 5 минут без помощи разработчиков',
  },
  {
    icon: '🔔',
    title: 'Умные уведомления',
    description: 'Мгновенные оповещения о важных событиях: изменение цен конкурентов, отзывы, заказы',
  },
  {
    icon: '📦',
    title: 'Управление логистикой',
    description: 'Оптимизация поставок на склады и отслеживание остатков в реальном времени',
  },
  {
    icon: '💰',
    title: 'Финансовый контроль',
    description: 'Учёт комиссий, себестоимости и маржинальности каждого товара',
  },
];

const stats = [
  { value: '500+', label: 'Активных клиентов' },
  { value: '15М+', label: 'Товаров под управлением' },
  { value: '30%', label: 'Рост продаж в среднем' },
  { value: '24/7', label: 'Мониторинг и поддержка' },
];

const benefits = [
  { title: 'Экономия времени до 80%', description: 'Автоматизация рутинных операций' },
  { title: 'Снижение ошибок на 95%', description: 'AI исключает человеческий фактор' },
  { title: 'Рост маржинальности', description: 'Умное ценообразование' },
  { title: 'Масштабирование без затрат', description: 'Управление тысячами SKU' },
];

const steps = [
  { title: 'Подключите маркетплейс', description: 'Интеграция за 5 минут через API' },
  { title: 'Настройте правила', description: 'Укажите стратегию ценообразования' },
  { title: 'Получайте результат', description: 'AI работает 24/7' },
];

const plans = [
  {
    name: 'Старт',
    description: 'Для начинающих продавцов',
    price: '2 990 ₽',
    period: 'месяц',
    features: ['До 100 товаров', '1 магазин', 'Базовая аналитика', 'Email поддержка'],
    buttonText: 'Начать бесплатно',
  },
  {
    name: 'Бизнес',
    description: 'Для растущего бизнеса',
    price: '9 990 ₽',
    period: 'месяц',
    features: ['До 1000 товаров', '5 магазинов', 'AI-ценообразование', 'Приоритетная поддержка', 'API доступ'],
    buttonText: 'Выбрать план',
    featured: true,
    badge: 'Популярный',
  },
  {
    name: 'Энтерпрайз',
    description: 'Для крупных компаний',
    price: 'По запросу',
    features: ['Безлимит товаров', 'Персональный менеджер', 'SLA гарантии', 'Кастомные интеграции'],
    buttonText: 'Связаться',
  },
];

const testimonials = [
  {
    text: 'JVO полностью изменил наш подход к работе с маркетплейсами. Экономим 8 часов в день.',
    name: 'Алексей Петров',
    role: 'Директор по e-commerce',
    company: 'TechGadgets',
  },
  {
    text: 'За 3 месяца увеличили маржинальность на 23%. AI работает лучше ручных расчётов.',
    name: 'Мария Иванова',
    role: 'Владелец магазина',
    company: 'BeautyShop',
  },
  {
    text: 'Отличная поддержка и постоянные обновления. Команда реально слышит пользователей.',
    name: 'Дмитрий Сидоров',
    role: 'Менеджер по продажам',
    company: 'SportEquip',
  },
];

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

function App() {
  return (
    <>
      <Header menuItems={menuItems} />
      <main>
        <HeroSection />
        <FeaturesSection features={features} />
        <BenefitsSection stats={stats} benefits={benefits} />
        <HowItWorksSection steps={steps} />
        <PricingSection plans={plans} />
        <TestimonialsSection testimonials={testimonials} />
        <CTASection />
      </main>
      <Footer columns={footerColumns} />
    </>
  );
}

export default App;
