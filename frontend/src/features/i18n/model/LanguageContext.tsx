import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import pl from "@/features/i18n/locales/pl.json";
import en from "@/features/i18n/locales/en.json";

export type Language = "pl" | "en";
type Translations = Record<string, string>;

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const LS_KEY = "seller-dashboard.language";

const resources: Record<Language, Translations> = { pl, en };

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pl");

  useEffect(() => {
    const saved = localStorage.getItem(LS_KEY) as Language | null;
    if (saved === "pl" || saved === "en") setLanguage(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, language);
  }, [language]);

  const t = useMemo(() => {
    const dict = resources[language];
    return (key: string) => dict[key] ?? key;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}