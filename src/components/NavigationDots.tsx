import { cn } from '@/lib/utils';

interface NavigationDotsProps {
  totalSlides: number;
  currentSlide: number;
  onNavigate: (index: number) => void;
}

export const NavigationDots = ({ totalSlides, currentSlide, onNavigate }: NavigationDotsProps) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-background/70 backdrop-blur-sm px-4 py-2 rounded-full border shadow-soft">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className={cn(
            "w-4 h-4 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary",
            currentSlide === index
              ? "bg-primary w-5 h-5"
              : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};
