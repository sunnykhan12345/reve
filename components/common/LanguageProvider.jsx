"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultLocale, getByPath, supportedLocales, translations } from "@/lib/translations";

const STORAGE_KEY = "reve-locale";

const LanguageContext = createContext(null);

function formatText(value, variables = {}) {
  if (typeof value !== "string") return value;

  return Object.entries(variables).reduce(
    (text, [key, replacement]) => text.replaceAll(`{${key}}`, String(replacement)),
    value,
  );
}

function getInitialLocale() {
  if (typeof window === "undefined") return defaultLocale;

  const storedLocale = window.localStorage.getItem(STORAGE_KEY);
  if (supportedLocales.some((item) => item.code === storedLocale)) {
    return storedLocale;
  }

  const browserLocale = window.navigator.language?.toLowerCase() || "";
  return browserLocale.startsWith("fr") ? "fr" : defaultLocale;
}

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(defaultLocale);

  useEffect(() => {
    setLocaleState(getInitialLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const value = useMemo(() => {
    const dictionary = translations[locale] || translations[defaultLocale];
    const fallbackDictionary = translations[defaultLocale];

    const t = (path, variables) => {
      const translated = getByPath(dictionary, path);
      const fallback = getByPath(fallbackDictionary, path);
      return formatText(translated ?? fallback ?? path, variables);
    };

    const tList = (path) => {
      const translated = getByPath(dictionary, path);
      const fallback = getByPath(fallbackDictionary, path);
      const valueList = Array.isArray(translated) ? translated : fallback;
      return Array.isArray(valueList) ? valueList : [];
    };

    const setLocale = (nextLocale) => {
      if (supportedLocales.some((item) => item.code === nextLocale)) {
        setLocaleState(nextLocale);
      }
    };

    return {
      locale,
      locales: supportedLocales,
      setLocale,
      t,
      tList,
    };
  }, [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
