"use client";

import { useLanguage } from "@/components/common/LanguageProvider";
import { cn } from "@/lib/utils";

export default function LanguageToggle({ className = "" }) {
  const { locale, locales, setLocale, t } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-reve-light p-1",
        className,
      )}
      aria-label={t("common.chooseLanguage")}
    >
      {locales.map((item) => {
        const active = item.code === locale;

        return (
          <button
            key={item.code}
            type="button"
            className={cn(
              "h-10 rounded-full px-4 text-xs font-semibold tracking-[-0.01em] transition-all duration-300 cursor-pointer",
              active
                ? "bg-reve-black text-white shadow-sm"
                : "text-reve-muted hover:bg-white hover:text-reve-black",
            )}
            onClick={() => setLocale(item.code)}
            aria-pressed={active}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
