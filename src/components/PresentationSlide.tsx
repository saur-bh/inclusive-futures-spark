import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PresentationSlideProps {
  children: ReactNode;
  className?: string;
  id?: string;
  'data-slide-index'?: string;
}

export const PresentationSlide = ({ children, className, id, 'data-slide-index': dataSlideIndex }: PresentationSlideProps) => {
  return (
    <section
      id={id}
      data-slide-index={dataSlideIndex}
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
