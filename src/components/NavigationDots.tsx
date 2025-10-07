import { cn } from '@/lib/utils';

interface NavigationDotsProps {
  totalSlides: number;
  currentSlide: number;
  onNavigate: (index: number) => void;
}

export const NavigationDots = ({ totalSlides, currentSlide, onNavigate }: NavigationDotsProps) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className={cn(
            "w-3 h-3 rounded-full transition-all duration-300 hover:scale-125",
            currentSlide === index 
              ? "bg-primary w-4 h-4" 
              : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};
