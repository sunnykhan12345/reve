import { cn } from "@/lib/utils";

export default function SectionBadge({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[60px] h-[51px] bg-[#F6F6F6] px-5 py-3 text-lg font-semibold leading-none tracking-[-0.02em] text-reve-black",
        className,
      )}
    >
      {children}
    </span>
  );
}
