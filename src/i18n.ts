import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n.use(Backend)
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .init({
        debug: (window as any).DEV,
        returnNull: false,
        fallbackLng: "fr",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
