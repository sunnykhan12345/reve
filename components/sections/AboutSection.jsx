"use client";

import Image from "next/image";
import ClientAvatars from "@/components/common/ClientAvatars";
import MotionSection from "@/components/common/MotionSection";
import SectionBadge from "@/components/common/SectionBadge";
import { useLanguage } from "@/components/common/LanguageProvider";
import { aboutImage } from "@/lib/data";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="section-spacing bg-white mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[96px]"
    >
      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[88px]">
          <MotionSection className="max-w-[540px]">
            <SectionBadge>{t("about.badge")}</SectionBadge>
            <h2 className="mt-8 text-[42px] font-bold leading-[1.14] tracking-[0.01em] text-black sm:text-[56px] lg:text-[58px]">
              {t("about.title")}
            </h2>
            <p className="body-copy text-lg font-medium mt-14 max-w-[520px]">
              {t("about.description")}
            </p>
            <div className="mt-14 overflow-hidden">
              <div className="flex w-max animate-marque gap-10 pr-10 hover:[animation-play-state:paused]">
                <ClientAvatars />
                {/* <ClientAvatars /> */}
              </div>
            </div>
          </MotionSection>

          <MotionSection delay={0.12}>
            <div className="relative h-[420px] overflow-hidden rounded-[28px] sm:h-[560px] lg:h-[764px]">
              <Image
                src={aboutImage}
                alt={t("about.imageAlt")}
                fill
                sizes="(max-width: 1024px) 100vw, 620px"
                className="image-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
