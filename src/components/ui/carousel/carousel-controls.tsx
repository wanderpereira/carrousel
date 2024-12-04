import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  className?: string;
}

export function CarouselControls({
  onPrevious,
  onNext,
  className,
}: CarouselControlsProps) {
  return (
    <div className={cn("absolute inset-0 flex items-center justify-between p-4", className)}>
      <button
        onClick={onPrevious}
        className="p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        className="p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}