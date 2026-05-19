"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LanguageToggle from "@/components/common/LanguageToggle";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/common/LanguageProvider";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

function MenuGlyph({ open }) {
  return (
    <span className="relative block h-5 w-5" aria-hidden="true">
      <span
        className={cn(
          "absolute left-0 top-[4px] h-0.5 w-5 rounded-full bg-current transition-all duration-300",
          open && "top-1/2 rotate-45",
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-1/2 h-0.5 w-5 rounded-full bg-current transition-all duration-300",
          open && "opacity-0",
        )}
      />
      <span
        className={cn(
          "absolute bottom-[3px] left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300",
          open && "bottom-auto top-1/2 -rotate-45",
        )}
      />
    </span>
  );
}

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setIsFixed(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <header
      className={cn(
        "left-0 right-0 top-0 z-50 border-b border-black/5 transition-all duration-500 ease-out",
        isFixed
          ? "fixed translate-y-0 bg-white/95 shadow-header backdrop-blur-xl"
          : "absolute bg-transparent shadow-none",
      )}
    >
      <nav className="mx-auto flex h-[94px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 xl:px-20 rounded-md">
        <Link
          href="#home"
          aria-label={t("footer.brandAria")}
        >
        <Image src="/images/logo.png" alt={t("footer.brandAria")} width={130} height={41} className="object-cover w-[130px] h-[41px]" />
        </Link>

        <div className="hidden items-center gap-[30px] lg:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group relative text-base font-normal tracking-[-0.01em] transition-colors duration-300 hover:text-reve-red",
                index === 0 ? "text-reve-red" : "text-reve-black",
              )}
            >
              {t(link.labelKey)}
              <span
                className={cn(
                  "absolute -bottom-[38px] left-1/2 h-[5px] -translate-x-1/2 rounded-full bg-reve-red transition-all duration-300 group-hover:w-[92px]",
                  index === 0 ? "w-[92px]" : "w-0",
                )}
              />
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageToggle />
          <Button asChild variant="dark" size="base" className="min-w-[140px] h-14 rounded-[72px] text-base">
            <Link href="#contact">{t("common.bookCall")}</Link>
          </Button>
        </div>

        <button
          type="button"
          className="grid h-12 w-12 place-items-center rounded-full bg-reve-black text-white transition-transform duration-300 hover:scale-95 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? t("common.closeMenu") : t("common.openMenu")}
          aria-expanded={isOpen}
        >
          <MenuGlyph open={isOpen} />
        </button>
      </nav>

      <div
        className={cn(
          "absolute left-5 right-5 top-[112px] origin-top rounded-[28px] bg-white p-5 shadow-soft transition-all duration-300 lg:hidden",
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-4 scale-95 opacity-0",
        )}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-2xl px-5 py-4 text-base font-semibold text-reve-black transition-colors duration-300 hover:bg-reve-light hover:text-reve-red"
              onClick={() => setIsOpen(false)}
            >
              {t(link.labelKey)}
            </Link>
          ))}
          <div className="mt-3 flex items-center justify-between gap-3 px-1">
            <LanguageToggle />
            <Button className="min-w-[139px] !h-14 !rounded-[72px] ">
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                {t("common.bookCall")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
