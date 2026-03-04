import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />
      </div>

      {/* Content */}
      <div className="relative section-container py-32 md:py-40">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              Technology · Infrastructure · Innovation
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] tracking-tight text-primary-foreground">
            Building Technology{" "}
            <span className="gradient-text">&amp; Infrastructure</span>{" "}
            for the Future
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 text-lg sm:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
            ByteLoft delivers end-to-end solutions spanning custom software development,
            construction projects, electrical infrastructure, and solar energy —
            powering India's growth with innovation and reliability.
          </p>

          <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold btn-glow hover:opacity-90 transition-opacity"
            >
              Get a Quote <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-primary-foreground/20 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
        style={{ animation: "float 2s ease-in-out infinite" }}
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};

export default HeroSection;
