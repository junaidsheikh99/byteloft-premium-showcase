import { useEffect, useRef, useState } from "react";
import { Code2, Smartphone, HardHat, Zap, Sun, Globe } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom enterprise software, ERP systems, and cloud-native applications built with cutting-edge technologies for maximum performance.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Applications",
    description: "Responsive web platforms and cross-platform mobile apps designed for seamless user experiences and scalability.",
  },
  {
    icon: HardHat,
    title: "Building Construction",
    description: "End-to-end construction project management for commercial, residential, and industrial infrastructure across India.",
  },
  {
    icon: Zap,
    title: "Electrical Infrastructure",
    description: "Complete electrical installations, power distribution systems, and industrial wiring solutions with safety-first engineering.",
  },
  {
    icon: Sun,
    title: "Solar Power Solutions",
    description: "Rooftop and ground-mounted solar installations for businesses and residential properties, reducing costs and carbon footprint.",
  },
  {
    icon: Globe,
    title: "IT Consulting",
    description: "Strategic technology consulting to help businesses modernize operations, adopt cloud solutions, and drive digital transformation.",
  },
];

const ServicesSection = () => {
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
    <section id="services" ref={ref} className="py-24 md:py-32 section-dark">
      <div className="section-container">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 text-primary-foreground/60 text-lg">
            From code to concrete, we deliver comprehensive solutions that build the future.
          </p>
        </div>

        <div className={`mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-navy-light/50 border border-primary-foreground/10 card-hover hover:border-primary/40 transition-colors"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
