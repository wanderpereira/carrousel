import { useCallback, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CarouselControls } from "./carousel-controls";
import { CarouselDots } from "./carousel-dots";

interface CarouselProps {
  children: ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export function Carousel({
  children,
  autoPlay = true,
  interval = 5000,
  className,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((current) =>
      current === children.length - 1 ? 0 : current + 1
    );
  }, [children.length]);

  const previous = useCallback(() => {
    setCurrentIndex((current) =>
      current === 0 ? children.length - 1 : current - 1
    );
  }, [children.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;

    const interval_id = setInterval(next, interval);
    return () => clearInterval(interval_id);
  }, [autoPlay, interval, next]);

  return (
    <div className={cn("relative overflow-hidden group", className)}>
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {children}
      </div>

      <CarouselControls
        onPrevious={previous}
        onNext={next}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      />

      <div className="absolute bottom-4 w-full">
        <CarouselDots
          total={children.length}
          current={currentIndex}
          onClick={goToSlide}
        />
      </div>
    </div>
  );
}