import { cn } from '@/lib/utils';

interface SectionTabsProps {
  sections: { label: string; index: number }[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

export const SectionTabs = ({ sections, currentIndex, onSelect }: SectionTabsProps) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-stretch gap-2 bg-transparent px-0 py-0">
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
            "px-3 py-2 text-sm md:text-base rounded-full transition-all font-semibold cursor-pointer",
            s.index === currentIndex
              ? "border-2 border-primary text-foreground"
              : "border border-border text-foreground hover:bg-muted/20"
          )}
          aria-label={`Open section ${s.label}`}
        >
          {s.label}
        </div>
      ))}
    </div>
  );
};