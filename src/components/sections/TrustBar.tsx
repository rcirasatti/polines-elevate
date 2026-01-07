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
];

export function TrustBar() {
  return (
    <section className="py-12 bg-card border-y border-border/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest font-medium">
            Dipercaya oleh Industri Terkemuka Indonesia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="px-6 py-3 bg-muted/50 rounded-xl border border-border/50 transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
                  <span className="text-lg font-bold text-muted-foreground transition-colors group-hover:text-primary-foreground">
                    {partner.logo}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient overlays for scroll effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
