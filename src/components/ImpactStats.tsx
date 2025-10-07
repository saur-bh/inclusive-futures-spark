import { Users, GraduationCap, Heart, School } from 'lucide-react';

export const ImpactStats = () => {
  const stats = [
    {
      icon: <Users className="w-10 h-10" />,
      number: "1,500+",
      label: "Children Helped",
      color: "primary"
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      number: "200+",
      label: "School Ready Kids",
      color: "secondary"
    },
    {
      icon: <School className="w-10 h-10" />,
      number: "9+",
      label: "School Partnerships",
      color: "accent"
    },
    {
      icon: <Heart className="w-10 h-10" />,
      number: "15+",
      label: "Medical Professionals",
      color: "primary"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-primary/10 shadow-soft text-center hover:scale-105 transition-transform animate-scale-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className={`inline-flex items-center justify-center mb-3 text-${stat.color}`}>
            {stat.icon}
          </div>
          <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
            {stat.number}
          </div>
          <div className="text-sm text-muted-foreground font-semibold">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};
