import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import EN from './EN/en.json';
import FR from './FR/fr.json';
export const availableLanguages = Object.keys({ EN, FR });

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: EN,
      },
      fr: {
        translations: FR,
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
export function changeLanguage() {
  i18n.changeLanguage();
}

export default i18n;
