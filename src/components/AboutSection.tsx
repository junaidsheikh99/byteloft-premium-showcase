import { useEffect, useRef, useState } from "react";
import { Building2, Cpu, Lightbulb, Users } from "lucide-react";

const stats = [
  { icon: Cpu, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "30+", label: "Expert Team Members" },
  { icon: Building2, value: "5+", label: "Years of Experience" },
  { icon: Lightbulb, value: "100%", label: "Client Satisfaction" },
];

const AboutSection = () => {
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
    <section id="about" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="section-container">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Driving Innovation Across <span className="gradient-text">Industries</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            ByteLoft Private Limited is an Indian technology and infrastructure company headquartered in Maharashtra.
            We provide scalable, reliable solutions across software development, building construction,
            electrical installations, and solar energy — empowering businesses and communities to thrive
            in a rapidly evolving world.
          </p>
        </div>

        <div className={`mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-card glow-border card-hover"
            >
              <stat.icon className="mx-auto text-primary mb-3" size={32} />
              <div className="text-3xl font-display font-bold text-foreground">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
