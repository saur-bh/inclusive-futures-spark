import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PresentationSlideProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const PresentationSlide = ({ children, className, id }: PresentationSlideProps) => {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen w-full flex items-center justify-center p-8 md:p-16 scroll-mt-0 snap-start",
        className
      )}
    >
      <div className="max-w-7xl w-full">
        {children}
      </div>
    </section>
  );
};
