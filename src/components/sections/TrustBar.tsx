import { motion } from "framer-motion";

const partners = [
  { name: "Astra International", logo: "ASTRA" },
  { name: "PLN", logo: "PLN" },
  { name: "Telkom Indonesia", logo: "TELKOM" },
  { name: "Pertamina", logo: "PERTAMINA" },
  { name: "Bank BNI", logo: "BNI" },
  { name: "Toyota", logo: "TOYOTA" },
  { name: "Daihatsu", logo: "DAIHATSU" },
  { name: "Wilmar", logo: "WILMAR" },
  { name: "Honda", logo: "HONDA" },
  { name: "Semen Indonesia", logo: "SEMEN ID" },
];

export function TrustBar() {
  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-10 bg-card border-y border-border/50 overflow-hidden">
      <div className="section-container mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest font-medium">
            Mitra Industri Strategis
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent pointer-events-none z-10" />
        
        {/* Scrolling marquee */}
        <div className="marquee-container">
          <motion.div
            className="flex gap-8 items-center"
            animate={{ x: [0, -50 * partners.length] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 px-8 py-4 bg-muted/50 rounded-xl border border-border/50 transition-all duration-300 hover:bg-primary hover:border-primary group cursor-pointer"
              >
                <span className="text-lg font-bold text-muted-foreground transition-colors group-hover:text-primary-foreground whitespace-nowrap">
                  {partner.logo}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
