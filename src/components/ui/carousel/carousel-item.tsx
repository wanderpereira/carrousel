import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface CarouselItemProps {
  children: ReactNode;
  className?: string;
}

export function CarouselItem({ children, className }: CarouselItemProps) {
  return (
    <div className={cn(
      "flex-shrink-0 flex-grow-0 w-full h-full",
      className
    )}>
      {children}
    </div>
  );
}