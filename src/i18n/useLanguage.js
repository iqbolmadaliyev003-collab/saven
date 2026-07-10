import { ref, watch } from "vue";
import translations from "./translations.json";

const lang = ref(localStorage.getItem("lang") || "uz");

watch(lang, (newLang) => {
  localStorage.setItem("lang", newLang);
});

function t(path) {
  const keys = path.split(".");
  let value = translations[lang.value];
  for (const key of keys) {
    value = value?.[key];
  }
  return value ?? path; 
}

export function useLanguage() {
  return { lang, setLang: (l) => (lang.value = l), t };
}