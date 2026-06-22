"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageToggle from "@/components/common/LanguageToggle";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/common/LanguageProvider";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import BookCallModal from "../common/BookCallModal";
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
  const [activeSection, setActiveSection] = useState("#home");
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  // const { t } = useLanguage();
  const language = useLanguage();
  const { t } = language;
  const locale =
    language.locale || language.currentLocale || language.language || "en";
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

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(`#${visibleSection.target.id}`);
        }
      },
      {
        root: null,
        threshold: 0.35,
        rootMargin: "-120px 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "left-0 right-0 top-0 z-50 border-b border-black/5 transition-all duration-500 ease-out",
        isFixed
          ? "fixed translate-y-0 bg-white/95 shadow-header backdrop-blur-xl"
          : "absolute bg-transparent shadow-none",
      )}
    >
      <nav className="mx-auto flex h-[94px] w-full max-w-[1440px] items-center justify-between rounded-md px-5 sm:px-8 xl:px-20">
        <Link href="#home" aria-label={t("footer.brandAria")}>
          <Image
            src="/images/logo.png"
            alt={t("footer.brandAria")}
            width={130}
            height={41}
            className="h-[41px] w-[130px] object-cover"
          />
        </Link>

        <div className="hidden items-center gap-[30px] lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative text-base font-normal tracking-[-0.01em] transition-colors duration-300 hover:text-reve-red",
                  isActive ? "text-reve-red font-semibold" : "text-reve-black",
                )}
              >
                {t(link.labelKey)}

                <span
                  className={cn(
                    "absolute -bottom-[38px] left-1/2 h-[5px] -translate-x-1/2 rounded-full bg-reve-red transition-all duration-300 group-hover:w-[92px]",
                    isActive ? "w-[92px]" : "w-0",
                  )}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          {/* <LanguageToggle /> */}
          <Button
            type="button"
            onClick={() => {
              setIsOpen(false);
              setIsBookModalOpen(true);
            }}
            className="h-14 w-full min-w-[139px] cursor-pointer bg-black! overflow-hidden truncate rounded-[72px] px-6 py-2.5 text-base"
          >
            {t("common.bookCall")}
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
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-2xl px-5 py-4 text-base font-semibold transition-colors duration-300 hover:bg-reve-light hover:text-reve-red",
                  isActive ? "bg-reve-light text-reve-red" : "text-reve-black",
                )}
                onClick={() => setIsOpen(false)}
              >
                {t(link.labelKey)}
              </Link>
            );
          })}

          <div className="mt-3 flex items-center justify-between gap-3 px-1">
            <LanguageToggle />

            <Button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setIsBookModalOpen(true);
              }}
              className="min-w-[139px] !h-14 !rounded-[72px]"
            >
              {t("common.bookCall")}
            </Button>
          </div>
        </div>
      </div>
      <BookCallModal
        open={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        locale={locale}
      />
    </header>
  );
}
