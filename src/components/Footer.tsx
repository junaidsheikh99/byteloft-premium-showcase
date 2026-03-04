const footerLinks = {
  Services: ["Software Development", "Web & Mobile Apps", "Construction", "Electrical", "Solar Solutions"],
  Company: ["About Us", "Portfolio", "Careers", "Blog"],
  Support: ["Contact", "FAQ", "Privacy Policy", "Terms"],
};

const Footer = () => {
  return (
    <footer className="section-dark border-t border-primary-foreground/10">
      <div className="section-container py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="#" className="font-display text-2xl font-bold">
              Byte<span className="gradient-text">Loft</span>
            </a>
            <p className="mt-4 text-primary-foreground/50 text-sm leading-relaxed">
              Building Technology & Infrastructure for the Future. An Indian company delivering innovation across software, construction, and energy.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display font-semibold text-sm uppercase tracking-widest mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-primary-foreground/50 hover:text-primary text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} ByteLoft Private Limited. All rights reserved.
          </p>
          <p className="text-primary-foreground/40 text-xs">
            Made in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
