export const JourneyTimeline = () => {
  const milestones = [
    {
      year: "2019",
      items: ["Started with small setup", "3 therapists, 5 sessions/day"],
    },
    { year: "2020", items: ["Scaled to 25 children and 6 therapists"] },
    {
      year: "2021",
      items: ["After covid hit, expanded to online model", "Treated by one to one home sessions"],
    },
    {
      year: "2022",
      items: [
        "Run pilot project in rural areas of Gorakhpur",
        "Collaborated with 2 schools",
        "Introduced mobile app for seamless interactions, session management and self execution of centre",
      ],
    },
    {
      year: "2023",
      items: ["Ran on fully automation mode", "30 sessions/day with 6 therapists", "Revenue 3 Lakh+"],
    },
    {
      year: "2024",
      items: ["Registered as a NGO", "Collaborated with 9+ schools", "15+ doctors", "Serving 1500+ clients"],
    },
  ];

  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Vertical timeline rail */}
      <div className="relative pl-6 md:pl-8">
        <div className="absolute left-3 md:left-4 top-0 bottom-0 w-0.5 bg-muted" />

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Node */}
              <div className="absolute -left-[7px] md:-left-[9px] top-3 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-primary ring-4 ring-primary/20" />

              {/* Card */}
              <div className="bg-card/80 backdrop-blur-sm p-5 md:p-6 rounded-2xl border-2 border-primary/20 shadow-soft hover:shadow-card transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center rounded-full bg-primary/15 text-primary w-12 h-12 font-bold">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">Milestones</h3>
                </div>
                <ul className="space-y-2">
                  {milestone.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                      <span className="text-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
