"use client";

import Link from "next/link";
import { useLanguage } from "@/components/common/LanguageProvider";
import { cn } from "@/lib/utils";
import { BackIcon } from "@/public/icons/icon";

export default function CtaButton({
  href = "#contact",
  children,
  className = "",
}) {
  const { t } = useLanguage();
  const label = children || t("common.bookCall");

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex h-14 min-w-[240px] items-center justify-between gap-5 rounded-[72px] bg-reve-red px-6 py-2.5 text-base font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#dd2523] hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reve-red focus-visible:ring-offset-2",
        className,
      )}
    >
      <span>{label}</span>
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-lg leading-none text-reve-red transition-transform duration-300 group-hover:translate-x-1">
        <BackIcon />
      </span>
    </Link>
  );
}
