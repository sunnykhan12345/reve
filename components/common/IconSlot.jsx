import { cn } from "@/lib/utils";

export default function IconSlot({
  label = "Icon placeholder",
  className = "",
  Icon,
}) {
  return (
    <div
      className={cn(
        "grid h-16 w-16 place-items-center rounded-[16px] bg-[#EEEEEE] transition-colors duration-300 group-hover:bg-white",
        className,
      )}
      aria-label={label}
    >
      {Icon && <Icon />}
    </div>
  );
}
