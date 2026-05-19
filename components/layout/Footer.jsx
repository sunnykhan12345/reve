"use client";

import Link from "next/link";
import { useLanguage } from "@/components/common/LanguageProvider";
import { footerBrandText, socialLinks } from "@/lib/data";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#080808] px-5 py-9 text-white sm:px-8">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="flex flex-col items-center justify-between gap-8 border-b border-white/10 pb-9 sm:flex-row">
          <Link
            href="#home"
            className="text-[40px] font-bold leading-none tracking-[-0.06em] text-white transition-opacity duration-300 hover:opacity-80"
            aria-label={t("footer.brandAria")}
          >
            {footerBrandText.slice(0, -1)}
            <span className="text-reve-red">.</span>
          </Link>

          <div className="flex items-center gap-4">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-reve-red"
                aria-label={t("footer.socialAria", { name: item.label })}
              >
                <span className="h-3.5 w-3.5 rounded-full border border-white/70" />
              </Link>
            ))}
          </div>
        </div>

        <p className="pt-5 text-center text-xs font-normal text-white/70">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
