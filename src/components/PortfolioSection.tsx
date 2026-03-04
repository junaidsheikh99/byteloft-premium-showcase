import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    category: "Software",
    title: "Enterprise Resource Planning System",
    description: "Built a scalable ERP for a manufacturing firm handling inventory, HR, and financials across 12 locations.",
    gradient: "from-primary to-electric",
  },
  {
    category: "Infrastructure",
    title: "Commercial Complex — Pune",
    description: "Managed end-to-end construction of a 50,000 sq ft commercial complex with modern amenities and green certification.",
    gradient: "from-electric to-glow",
  },
  {
    category: "Electrical",
    title: "Industrial Wiring — Nashik Plant",
    description: "Complete electrical infrastructure for an automotive manufacturing plant, including high-voltage distribution systems.",
    gradient: "from-glow to-primary",
  },
  {
    category: "Solar",
    title: "100kW Rooftop Solar Installation",
    description: "Designed and installed a 100kW rooftop solar system for a textile mill, reducing energy costs by 40%.",
    gradient: "from-primary to-glow",
  },
];

const PortfolioSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={ref} className="py-24 md:py-32 section-dark">
      <div className="section-container">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Work</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className={`mt-16 grid sm:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-navy-light/50 border border-primary-foreground/10 card-hover hover:border-primary/40"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <div className="p-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {project.category}
                </span>
                <h3 className="mt-3 text-xl font-display font-semibold flex items-center gap-2">
                  {project.title}
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </h3>
                <p className="mt-3 text-primary-foreground/60 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
