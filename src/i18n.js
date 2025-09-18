import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        sideText:"Making Your Vision",
        brand: "Lanka Layouts.",
        heroTitle: "Your Projects, Perfectly Documented",
        heroDesc:
          "We specialize in creating technically correct drawings and professionally written letters for your architectural and engineering projects in Sri Lanka.",
        services: "Our Services",
        contact: "Contact Us Today",
      },
    },
    si: {
      translation: {
        sideText:"ඔබේ දැක්ම සෑදීම",
        brand: "ලංකා ලේඛන.",
        heroTitle: "ඔබේ ව්‍යාපෘති සම්පූර්ණ වාර්තාගත කිරීම",
        heroDesc:
          "ශ්‍රී ලංකාවේ ඔබේ ගෘහ නිර්මාණ හා ඉංජිනේරු ව්‍යාපෘති සඳහා නිවැරදි ඇඳුම් සහ වෘත්තීය ලිපි සකස් කරමු.",
        services: "අපගේ සේවාවන්",
        contact: "අපව අදම සම්බන්ධ කරගන්න",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
