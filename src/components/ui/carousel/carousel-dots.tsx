import { cn } from "@/lib/utils";

interface CarouselDotsProps {
  total: number;
  current: number;
  onClick: (index: number) => void;
  className?: string;
}

export function CarouselDots({
  total,
  current,
  onClick,
  className,
}: CarouselDotsProps) {
  return (
    <div className={cn("flex gap-2 justify-center", className)}>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={cn(
            "w-2 h-2 rounded-full transition-all duration-300",
            current === index
              ? "bg-white w-4"
              : "bg-white/50 hover:bg-white/80"
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}