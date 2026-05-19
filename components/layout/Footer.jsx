"use client";

import Link from "next/link";
import { useLanguage } from "@/components/common/LanguageProvider";
import { footerBrandText, socialLinks } from "@/lib/data";
import Image from "next/image";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#080808] px-5 py-9 text-white sm:px-8">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="flex flex-col items-center justify-between gap-8 border-b border-white/10 pb-9 sm:flex-row">
              <Link
                   href="#home"
                   aria-label={t("footer.brandAria")}
                 >
                 <Image src="/images/footerlogo.png" alt={t("footer.brandAria")} width={130} height={41} className="object-cover w-[130px] h-[41px]" />
                 </Link>

          <div className="flex items-center gap-3.5">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="grid h-12 w-12 place-items-center rounded-[40px] bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-reve-red"
                aria-label={t("footer.socialAria", { name: item.label })}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        <p className="pt-5 text-center text-base font-normal text-white">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
