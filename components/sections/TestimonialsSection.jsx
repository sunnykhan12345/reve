"use client";

import Image from "next/image";
import MotionSection from "@/components/common/MotionSection";
import SectionBadge from "@/components/common/SectionBadge";
import { useLanguage } from "@/components/common/LanguageProvider";
import { testimonials } from "@/lib/data";

function TestimonialCard({ item }) {
  const { t } = useLanguage();

  return (
    <article className="break-inside-avoid rounded-[16px] bg-[#F6F6F6] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft">
      <div className="flex items-center gap-2.5">
        <Image
          src={item.image}
          alt={item.name}
          width={48}
          height={48}
          className="h-[48px] w-[48px] rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-medium leading-none tracking-[-0.03em] text-black">
            {item.name}
          </h3>
          <p className="mt-1 text-xs font-normal text-[#50565D]">
            {t(item.roleKey)}
          </p>
        </div>
      </div>
      <div
        className="mt-5 flex items-center gap-1 text-reve-gold"
        aria-label={t("reviews.rating")}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className="text-xl leading-none" aria-hidden="true">
            ★
          </span>
        ))}
      </div>
      <p className="mt-5 text-base leading-[1.55] tracking-[-0.02em] text-black">
        {t(item.textKey)}
      </p>
    </article>
  );
}

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="section-spacin bg-white section-spacing">
      <div className="site-container max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[96px]">
        <MotionSection className="text-center">
          <SectionBadge>{t("reviews.badge")}</SectionBadge>
          <h2 className="mx-auto mt-7 max-w-[1200px] text-[38px] font-bold leading-[1.15] tracking-[0.02em] text-black sm:text-[50px] lg:text-[58px]">
            {t("reviews.title")}
          </h2>
        </MotionSection>

        <MotionSection
          delay={0.1}
          className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              item={testimonial}
            />
          ))}
        </MotionSection>
      </div>
    </section>
  );
}
