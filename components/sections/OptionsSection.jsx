"use client";

import Image from "next/image";
import MotionSection from "@/components/common/MotionSection";
import SectionBadge from "@/components/common/SectionBadge";
import { useLanguage } from "@/components/common/LanguageProvider";
import { optionCards } from "@/lib/data";

export default function OptionsSection() {
  const { t, tList } = useLanguage();

  return (
    <section
      id="options"
      className="section-spacing bg-white mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[96px]"
    >
      <div className="site-container">
        <MotionSection className="text-center">
          <SectionBadge>{t("options.badge")}</SectionBadge>

          <h2 className="mx-auto mt-6 max-w-[980px] text-[42px] font-bold leading-[1.12] tracking-[-0.03em] text-black sm:text-[56px] lg:text-[58px]">
            {t("options.title")}
          </h2>
        </MotionSection>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-12">
          {optionCards.map((option, optionIndex) => (
            <MotionSection key={option.titleKey} delay={optionIndex * 0.08}>
              <article className="relative overflow-hidden rounded-[32px] bg-[#F6F6F6] px-7 pt-7 transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_100%,rgba(255,0,0,0.12)_0%,rgba(255,236,236,0.75)_28%,rgba(246,246,246,0)_68%)] before:opacity-0 before:transition-opacity before:duration-500  hover:before:opacity-100">
                <div className="relative z-10">
                  <h3 className="text-[32px] font-bold leading-none tracking-[-0.04em] text-black sm:text-[38px]">
                    {t(option.titleKey)}
                  </h3>

                  <div className="mt-14 space-y-5">
                    {tList(option.pointsKey).map((point, index) => (
                      <div
                        key={`${option.titleKey}-${index}`}
                        className="flex min-h-[70px] items-center gap-5 rounded-[12px] bg-white p-4 text-base font-medium leading-[1.45] tracking-[-0.02em]"
                      >
                        <span className="text-[22px] font-semibold tracking-[-0.04em] text-[#8B8E94]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-16 h-[320px] overflow-hidden rounded-tl-[24px] rounded-tr-[24px] sm:h-[357px]">
                  <Image
                    src={option.image}
                    alt={t(option.imageAltKey)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="image-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </article>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
