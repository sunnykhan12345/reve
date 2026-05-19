"use client";

import Image from "next/image";
import { useLanguage } from "@/components/common/LanguageProvider";
import { aboutAvatars } from "@/lib/data";

export default function ClientAvatars() {
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-5">
      <div className="flex -space-x-3">
        {aboutAvatars.map((avatar, index) => (
          <Image
            key={avatar}
            src={avatar}
            alt={t("about.clientAlt", { number: index + 1 })}
            width={60}
            height={60}
            className="h-[60px] w-[60px] rounded-full border-2 border-white object-cover shadow-sm"
          />
        ))}
      </div>
      <p className="text-2xl font-semibold tracking-[-0.03em] text-reve-black">
        {t("about.happyClients")}
      </p>
    </div>
  );
}
