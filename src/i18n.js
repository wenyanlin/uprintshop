import Cookies from 'js-cookie';
import { createI18n } from 'vue-i18n';
import en from './locales/en';
import zh from './locales/zh';
// const enModules = import.meta.glob('./locales/en/*.json', { eager: true });
// const zhModules = import.meta.glob('./locales/zh/*.json', { eager: true });

// function loadLocale(modules) {
//   const messages = {};
//   for (const path in modules) {
//     const key = path.match(/([^/]+)\.json$/)[1];
//     messages[key] = modules[path].default;
//   }
//   return messages;
// }

// const messages = {
//   en: loadLocale(enModules),
//   zh: loadLocale(zhModules),
// };

const defaultLocale = Cookies.get('SiteLanguage') || 'zh';

// const i18n = createI18n({
//   legacy: false,
//   locale: defaultLocale,
//   globalInjection: true,
//   fallbackLocale: 'zh',
//   messages,
//   silentTranslationWarn: true,
//   missingWarn: false,
//   silentFallbackWarn: true,
//   fallbackWarn: false,
// });

const messages = {
  en,
  zh,
};

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  messages,
  silentTranslationWarn: true,
  missingWarn: false,
  silentFallbackWarn: true,
  fallbackWarn: false,
});

export default i18n;
