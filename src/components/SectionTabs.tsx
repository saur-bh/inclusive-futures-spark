import { cn } from '@/lib/utils';

interface SectionTabsProps {
  sections: { label: string; index: number }[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

export const SectionTabs = ({ sections, currentIndex, onSelect }: SectionTabsProps) => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-full border shadow-soft">
      {sections.map((s) => (
        <div
          key={s.index}
          role="button"
          tabIndex={0}
          onClick={() => onSelect(s.index)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onSelect(s.index);
          }}
          className={cn(
            "px-4 py-2 text-sm md:text-base rounded-full transition-all font-semibold cursor-pointer",
            s.index === currentIndex
              ? "bg-primary text-primary-foreground shadow-card"
              : "bg-muted hover:bg-card text-foreground"
          )}
          aria-label={`Open section ${s.label}`}
        >
          {s.label}
        </div>
      ))}
    </div>
  );
};