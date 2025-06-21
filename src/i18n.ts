import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enResources from "./locales/en.json";
import plResources from "./locales/pl.json";

const getLanguageFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");
  console.log(lang);

  return lang && ["en", "pl"].includes(lang) ? lang : null;
};

const selectedLanguage = getLanguageFromURL() || "en";

const resources = {
  en: { translation: enResources },
  pl: { translation: plResources },
};

i18n.use(initReactI18next).init({
  resources,
  lng: selectedLanguage,
  supportedLngs: ["en", "pl"],
  fallbackLng: ["en"],
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
