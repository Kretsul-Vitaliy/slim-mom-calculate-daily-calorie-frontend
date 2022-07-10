import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from './messages/ru.json'
import ua from './messages/ua.json'
import en from './messages/en.json'

const resources = {
    ru: {
        translation: ru
    },
    ua: {
        translation: ua
    },
    en: {
        translation: en
    },
};

i18n
  .use(initReactI18next) 
  .use(Backend)
  .use(LanguageDetector)
  .init({
    resources,
    lng: localStorage.getItem('locale') || 'en',
    fallbackLng: ['ru', 'ua', 'en'],
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;