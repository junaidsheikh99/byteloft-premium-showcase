import { useEffect, useRef, useState } from "react";
import { Award, Rocket, Shield, Workflow } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Experienced Team",
    description: "Our multidisciplinary team brings decades of combined expertise across software, construction, and energy sectors.",
  },
  {
    icon: Rocket,
    title: "Innovative Technology",
    description: "We leverage the latest tools, frameworks, and methodologies to deliver future-ready solutions that scale.",
  },
  {
    icon: Shield,
    title: "Reliable Execution",
    description: "On-time delivery, transparent communication, and rigorous quality control define every project we undertake.",
  },
  {
    icon: Workflow,
    title: "End-to-End Solutions",
    description: "From ideation to deployment and maintenance — we manage the entire lifecycle so you can focus on growth.",
  },
];

const WhyChooseUsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="section-container">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why ByteLoft</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose <span className="gradient-text">Us</span>
          </h2>
        </div>

        <div className={`mt-16 grid sm:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="flex gap-5 p-6 rounded-2xl bg-card glow-border card-hover"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
