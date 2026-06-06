"use client";

import Image from "next/image";
import CtaButton from "@/components/common/CtaButton";
import MotionSection from "@/components/common/MotionSection";
import { useLanguage } from "@/components/common/LanguageProvider";
import { ctaAvatars } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function FinalCtaSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative bg-white px-5 py-20 sm:px-8 lg:py-[112px] max-w-[1440px] mx-auto">
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
        {ctaAvatars.map((avatar, index) => (
          <Image
            key={avatar.src + index}
            src={avatar.src}
            alt={t("finalCta.avatarAlt")}
            width={72}
            height={72}
            className={cn(
              "absolute rounded-full object-cover shadow-soft",
              avatar.className,
              index % 2 === 0 ? "animate-float" : "animate-[float_6s_ease-in-out_infinite]",
            )}
          />
        ))}
      </div>

      <MotionSection className="relative z-10 mx-auto flex max-w-[880px] flex-col items-center text-center">
        <h2 className="text-[40px] font-normal leading-[1.15] tracking-[-0.04em] text-[#222222] sm:text-[58px] lg:text-[64px]">
          {t("finalCta.title")}
        </h2>
        <div className="mt-10">
          <CtaButton />
        </div>
      </MotionSection>
    </section>
  );
}
