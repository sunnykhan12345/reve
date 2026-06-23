"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import IconSlot from "@/components/common/IconSlot";
import MotionSection from "@/components/common/MotionSection";
import SectionBadge from "@/components/common/SectionBadge";
import { useLanguage } from "@/components/common/LanguageProvider";
import { Card } from "@/components/ui/card";
import { serviceCards } from "@/lib/data";
import { CarusalLeftIcon, CarusalRightIcon } from "@/public/icons/icon";

export default function ServicesSection() {
  const { t } = useLanguage();
  const sliderRef = useRef(null);

  const handleSlide = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector("[data-service-card]");
    if (!card) return;

    const gap = 24;
    const scrollAmount = card.offsetWidth + gap;

    slider.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };

  const handleWheel = (event) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const canScrollLeft = slider.scrollLeft > 0;
    const canScrollRight =
      slider.scrollLeft + slider.clientWidth < slider.scrollWidth - 1;

    const scrollingDown = event.deltaY > 0;
    const scrollingUp = event.deltaY < 0;

    if ((scrollingDown && canScrollRight) || (scrollingUp && canScrollLeft)) {
      event.preventDefault();

      slider.scrollBy({
        left: event.deltaY,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="overflow-hidden bg-white section-spacing">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[58px]">
        <MotionSection>
          <div className="grid items-start gap-10 lg:grid-cols-[360px_1fr] lg:gap-[72px]">
            <div>
              <SectionBadge>{t("services.badge")}</SectionBadge>

              <h2 className="mt-9 max-w-[390px] text-[42px] font-bold leading-[1.08] tracking-[0.03em] text-black sm:text-[54px] lg:text-[56px]">
                {t("services.title")}
              </h2>
            </div>

            <div className="flex h-full flex-col justify-between pt-1 lg:pt-9">
              <p className="max-w-[650px] font-medium text-lg leading-[1.55] tracking-[-0.02em] text-reve-muted">
                {t("services.description")}
              </p>

              <div className="mt-10 flex items-center justify-end gap-4 lg:mt-[66px]">
                <button
                  type="button"
                  onClick={() => handleSlide(-1)}
                  className="grid h-11 w-11 place-items-center rounded-full bg-[#F6F6F6] text-black transition-all duration-300 hover:-translate-x-1 hover:bg-reve-red hover:text-white"
                  aria-label={t("services.previous")}
                >
                  <CarusalLeftIcon />
                </button>

                <button
                  type="button"
                  onClick={() => handleSlide(1)}
                  className="grid h-11 w-11 place-items-center rounded-full bg-[#F6F6F6] text-black transition-all duration-300 hover:translate-x-1 hover:bg-reve-red hover:text-white"
                  aria-label={t("services.next")}
                >
                  <CarusalRightIcon />
                </button>
              </div>
            </div>
          </div>
        </MotionSection>

        <div className="mt-16 overflow-hidden">
          <div
            ref={sliderRef}
            onWheel={handleWheel}
            className="hide-scrollbar flex flex-nowrap items-stretch gap-6 overflow-x-auto overflow-y-hidden scroll-smooth pb-4 overscroll-x-contain"
          >
            {serviceCards.map((service, index) => (
              <motion.div
                key={`${service.titleKey}-${index}`}
                data-service-card
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex w-full shrink-0 snap-start sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-72px)/4)]"
              >
                <Card className="group flex h-full min-h-[383px] w-full flex-col rounded-[20px] border-0 bg-[#F6F6F6] p-5">
                  <div className="[&>div]:transition-all [&>div]:duration-300 group-hover:[&>div]:bg-[#FFECEC] group-hover:[&_svg]:text-reve-red group-hover:[&_svg_path]:stroke-reve-red">
                    <IconSlot
                      label={t("common.iconPlaceholder")}
                      Icon={service.icon}
                    />
                  </div>

                  <h3 className="mt-6 text-[20px] font-semibold leading-[1.25] tracking-[-0.03em] text-black">
                    {t(service.titleKey)}
                  </h3>

                  <p className="mt-6 text-lg leading-[1.58] tracking-[-0.02em] text-reve-muted">
                    {t(service.descriptionKey)}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
