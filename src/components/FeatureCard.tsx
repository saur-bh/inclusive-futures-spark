import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export const FeatureCard = ({ icon, title, description, variant = 'primary' }: FeatureCardProps) => {
  const variantStyles = {
    primary: 'bg-primary/10 border-primary/20',
    secondary: 'bg-secondary/10 border-secondary/20',
    accent: 'bg-accent/10 border-accent/20',
  };

  return (
    <div
      className={cn(
        "p-6 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-card",
        variantStyles[variant]
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 text-3xl">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
