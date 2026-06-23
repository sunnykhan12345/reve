"use client";

import MotionSection from "@/components/common/MotionSection";
import SectionBadge from "@/components/common/SectionBadge";
import { useLanguage } from "@/components/common/LanguageProvider";
import { processSteps } from "@/lib/data";

export default function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      className="section-spacin bg-white mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[96px]"
    >
      <div className="site-container">
        <MotionSection className="text-center">
          <SectionBadge>{t("process.badge")}</SectionBadge>
          <h2 className="mx-auto mt-9 max-w-[1200px] text-[42px] font-bold leading-[1.12] tracking-[-0.03em] text-black sm:text-[58px] lg:text-[58px]">
            {t("process.title")}
          </h2>
        </MotionSection>

        <MotionSection delay={0.12} className="mt-16">
          <div className="relative hidden lg:block">
            <div className="absolute left-0 right-0 top-[11px] h-px bg-reve-line" />

            <div className="grid grid-cols-4 gap-10">
              {processSteps.map((step) => (
                <div key={step.number} className="group relative pt-20">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[2px] z-10 grid h-5 w-5 place-items-center rounded-full border-2 border-reve-red bg-white"
                  >
                    <span className="h-[6px] w-[6px] rounded-full bg-reve-red" />
                  </span>

                  <div className="text-[100px] font-bold leading-none tracking-[-0.06em] text-[#E5E7EB] transition-colors duration-300 group-hover:text-reve-red">
                    {step.number}
                  </div>

                  <h3 className="mt-6 max-w-[190px] text-2xl font-semibold leading-[1.12] tracking-[-0.04em] text-black">
                    {t(step.titleKey)}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 lg:hidden">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="flex items-center gap-5 rounded-[24px] bg-reve-light p-5"
              >
                <span className="text-[54px] font-semibold leading-none tracking-[-0.06em] text-[#DDE0E5]">
                  {step.number}
                </span>
                <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.04em] text-black">
                  {t(step.titleKey)}
                </h3>
              </div>
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
