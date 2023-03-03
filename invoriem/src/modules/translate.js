// language

export const languages = {
  en: {
    aboutus: 'About Us',
    letstalk: 'Let’s Talk',
    enru: 'En',
    we: 'We build dreams, not just walls',
    fulfill: 'Fulfill your international property developments with us',
    case: 'Case Studies',
    deliver:
      'We deliver a unique and truly bespoke approach to delivering international developments to market, with over 10 years success around the world.',
    moscow: 'Moscow',
    paris: 'Paris',
    london: 'London',
    italia: 'Italia',
    rome: 'Rome',
    minsk: 'Minsk',
    berlin: 'Berlin',
    invoriem: 'We are Invoriem',
    fulfill: 'We fulfill international property developments',
    copyright: 'Copyright © 2020 Invoriem',
    contacts: 'Contact',
    developer: 'Developer'
  },
  ru: {
    aboutus: 'О нас',
    letstalk: 'Обсудим',
    enru: 'Ru',
    we: 'Мы строим мечты, а не просто стены',
    fulfill: 'Реализуйте свой международный проект вместе с нами',
    case: 'Тематические исследования',
    deliver:
      'Мы предлагаем уникальный и по-настоящему индивидуальный подход квыводу на рынок международных разработок с более чем 10-летним успехом по всему миру.',
    moscow: 'Москва',
    paris: 'Париж',
    london: 'Лондон',
    rome: 'Рим',
    minsk: 'Минск',
    berlin: 'Берлин',
    invoriem: 'Мы Инворием',
    fulfill: ' Мы выполняем международные разработки недвижимости',
    copyright: 'Копирайт © 2023 Инворием',
    contacts: 'Контакты',
    developer: 'Сделано',
  },
};

export const language = document.querySelectorAll('.language');

export const setTexts = () => {
  const lang = localStorage.getItem('lang') || 'ru';
  const content = languages[lang];
  Object.entries(content).forEach(([key, value]) => {
    const items = document.querySelectorAll(`[data-text="${key}"]`);
    items.forEach((item) => (item.innerText = value));
  });
};

export const toggleLanguage = ({ target }) => {
  const { lang } = target.dataset;
  if (!lang) return;
  localStorage.setItem('lang', lang);
  setTexts();
};
setTexts();

language.forEach((lang) => lang.addEventListener('click', toggleLanguage));
setTexts();