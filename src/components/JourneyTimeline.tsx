export const JourneyTimeline = () => {
  const milestones = [
    {
      year: "2019",
      items: [
        "Started with small setup",
        "3 therapists, 5 sessions/day"
      ]
    },
    {
      year: "2020",
      items: [
        "Scaled to 25 children and 6 therapists"
      ]
    },
    {
      year: "2021",
      items: [
        "After covid hit, expanded to online model",
        "Treated by one to one home sessions"
      ]
    },
    {
      year: "2022",
      items: [
        "Run pilot project in rural areas of Gorakhpur",
        "Collaborated with 2 schools",
        "Introduced mobile app for seamless interactions, session management and self execution of centre"
      ]
    },
    {
      year: "2023",
      items: [
        "Ran on fully automation mode",
        "30 sessions/day with 6 therapists",
        "Revenue 3 Lakh+"
      ]
    },
    {
      year: "2024",
      items: [
        "Registered as a NGO",
        "Collaborated with 9+ schools",
        "15+ doctors",
        "Serving 1500+ clients"
      ]
    }
  ];

  return (
    <div className="relative">
      {/* Winding Road SVG Path */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
      >
        <path
          d="M 50,550 Q 150,450 200,400 Q 250,350 300,350 Q 400,350 450,250 Q 500,150 600,150 Q 700,150 750,100"
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth="60"
          strokeDasharray="20 10"
          opacity="0.3"
        />
      </svg>

      {/* Timeline Content */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        {milestones.map((milestone, index) => (
          <div 
            key={milestone.year}
            className="relative animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Flag Marker */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-primary"></div>
            
            {/* Content Card */}
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-primary/20 shadow-soft hover:shadow-card transition-shadow">
              <h3 className="text-3xl font-bold text-primary mb-4">{milestone.year}</h3>
              <ul className="space-y-2">
                {milestone.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span className="text-foreground text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
