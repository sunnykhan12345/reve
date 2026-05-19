import { cn } from "@/lib/utils";
import { BusniessIcon } from "@/public/icons/icon";

export default function IconSlot({ label = "Icon placeholder", className = "" }) {
  return (
    <div
      className={cn(
        "grid h-16 w-16 place-items-center rounded-[16px] bg-[#EEEEEE] transition-colors duration-300 group-hover:bg-white",
        className,
      )}
      aria-label={label}
    >
   <BusniessIcon />
    </div>
  );
}
