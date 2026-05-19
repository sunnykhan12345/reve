// "use client";

// import IconSlot from "@/components/common/IconSlot";
// import MotionSection from "@/components/common/MotionSection";
// import SectionBadge from "@/components/common/SectionBadge";
// import { useLanguage } from "@/components/common/LanguageProvider";
// import { Card } from "@/components/ui/card";
// import { serviceCards } from "@/lib/data";

// export default function ServicesSection() {
//   const { t } = useLanguage();

//   return (
//     <section id="services" className="section-spacing bg-white">
//       <div className="site-container">
//         <MotionSection>
//           <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
//             <div>
//               <SectionBadge>{t("services.badge")}</SectionBadge>
//               <h2 className="mt-8 max-w-[430px] text-[42px] font-semibold leading-[1.08] tracking-[0.03em] text-black sm:text-[58px] lg:text-[64px]">
//                 {t("services.title")}
//               </h2>
//             </div>

//             <div className="flex h-full flex-col justify-between gap-8 pt-3 lg:pt-12">
//               <p className="body-copy max-w-[610px]">{t("services.description")}</p>
//               <div className="flex items-center gap-4 lg:justify-center">
//                 <button
//                   type="button"
//                   className="grid h-12 w-12 place-items-center rounded-full bg-[#F0F1F3] text-[28px] leading-none text-reve-black transition-all duration-300 hover:-translate-x-1 hover:bg-reve-red hover:text-white"
//                   aria-label={t("services.previous")}
//                 >
//                   ‹
//                 </button>
//                 <button
//                   type="button"
//                   className="grid h-12 w-12 place-items-center rounded-full bg-[#F0F1F3] text-[28px] leading-none text-reve-black transition-all duration-300 hover:translate-x-1 hover:bg-reve-red hover:text-white"
//                   aria-label={t("services.next")}
//                 >
//                   ›
//                 </button>
//               </div>
//             </div>
//           </div>
//         </MotionSection>

//         <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
//           {serviceCards.map((service, index) => (
//             <MotionSection key={service.titleKey} delay={index * 0.07}>
//               <Card className="group flex min-h-[325px] flex-col rounded-[16px] p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-soft">
//                 <IconSlot label={t("common.iconPlaceholder")} />
//                 <h3 className="mt-8 text-[20px] font-semibold tracking-[-0.03em] text-black">
//                   {t(service.titleKey)}
//                 </h3>
//                 <p className="mt-5 text-[15px] leading-[1.58] tracking-[-0.02em] text-reve-muted">
//                   {t(service.descriptionKey)}
//                 </p>
//               </Card>
//             </MotionSection>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
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

  return (
    <section
      id="services"
      className="overflow-hidden bg-white py-[80px] sm:py-[95px] lg:py-[120px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[96px]">
        <MotionSection>
          <div className="grid items-start gap-10 lg:grid-cols-[390px_1fr] lg:gap-[90px]">
            <div>
              <SectionBadge>{t("services.badge")}</SectionBadge>

              <h2 className="mt-9 max-w-[390px] text-[42px] font-bold leading-[1.08] tracking-[0.03em] text-black sm:text-[54px] lg:text-[58px]">
                {t("services.title")}
              </h2>
            </div>

            <div className="flex h-full flex-col justify-between pt-1 lg:pt-9">
              <p className="max-w-[620px] text-lg leading-[1.55] tracking-[-0.02em] text-reve-muted">
                {t("services.description")}
              </p>

              <div className="mt-10 flex items-center gap-4 lg:mt-14 lg:justify-center">
                <button
                  type="button"
                  onClick={() => handleSlide(-1)}
                  className="grid h-11 w-11 place-items-center rounded-full bg-[#F6F6F6] text-[26px] leading-none text-black transition-all duration-300 hover:-translate-x-1 hover:bg-reve-red hover:text-white"
                  aria-label={t("services.previous")}
                >
                  <CarusalLeftIcon />
                </button>

                <button
                  type="button"
                  onClick={() => handleSlide(1)}
                  className="grid h-11 w-11 place-items-center rounded-full bg-[#F6F6F6] text-[26px] leading-none text-black transition-all duration-300 hover:-translate-x-1 hover:bg-reve-red hover:text-white"
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
            className="hide-scrollbar flex flex-nowrap gap-6 overflow-x-auto scroll-smooth pb-4"
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
                className="w-full shrink-0 snap-start sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-72px)/4)]"
              >
                <Card className="group flex min-h-[375px] w-full flex-col rounded-[20px] border-0 bg-[#F6F6F6] p-5  transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-soft">
                  <IconSlot label={t("common.iconPlaceholder")} />

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
