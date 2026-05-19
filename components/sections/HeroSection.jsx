"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CtaButton from "@/components/common/CtaButton";
import { useLanguage } from "@/components/common/LanguageProvider";
import { heroImages } from "@/lib/data";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(112deg,#ffffff_0%,#ffffff_72%,#ffe4e4_100%)] pb-14 pt-[145px] sm:pb-16 sm:pt-[160px] lg:pb-[58px] lg:pt-[176px]"
    >
      <div className="mx-auto w-full max-w-[1440px] ">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[1190px] px-5 text-center sm:px-8"
        >
          <h1 className="text-[42px] font-bold leading-[1.14] tracking-[0.02em] text-reve-ink sm:text-[58px] lg:text-[68px] xl:text-[70px]">
            {t("hero.title")}
          </h1>
          <div className="mt-14 flex justify-center sm:mt-10 lg:mt-11">
            <CtaButton />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 px-5 sm:mt-10 sm:px-8 lg:px-0"
        >
          <div className="relative h-[320px] overflow-hidden rounded-[28px] sm:h-[400px] lg:hidden">
            <Image
              src={heroImages.center}
              alt={t("hero.centerAlt")}
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 790px"
              className="image-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="relative hidden h-[430px] lg:block">
            <div className="absolute bottom-0 left-0 h-[430px] w-[304px] overflow-hidden rounded-r-[30px] xl:w-[315px]">
              <Image
                src={heroImages.left}
                alt={t("hero.leftAlt")}
                fill
                priority
                sizes="315px"
                className="image-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute bottom-0 left-1/2 h-[390px] w-[760px] -translate-x-1/2 overflow-hidden rounded-[30px] xl:w-[790px]">
              <Image
                src={heroImages.center}
                alt={t("hero.centerAlt")}
                fill
                priority
                sizes="790px"
                className="image-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute bottom-0 right-0 h-[430px] w-[304px] overflow-hidden rounded-l-[30px] xl:w-[315px]">
              <Image
                src={heroImages.right}
                alt={t("hero.rightAlt")}
                fill
                priority
                sizes="315px"
                className="image-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
