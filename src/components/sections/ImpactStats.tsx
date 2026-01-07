import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Briefcase, Lightbulb, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: 90,
    suffix: "%",
    label: "Serapan Kerja",
    description: "Lulusan langsung bekerja",
  },
  {
    icon: Briefcase,
    value: 500,
    suffix: "+",
    label: "Mitra Industri",
    description: "Perusahaan partner strategis",
  },
  {
    icon: Award,
    value: 27,
    suffix: "",
    label: "Program Studi",
    description: "D3, D4, dan Pascasarjana",
  },
  {
    icon: Lightbulb,
    value: 100,
    suffix: "+",
    label: "Paten & HAKI",
    description: "Inovasi terdaftar resmi",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="stat-number">
      {count}{suffix}
    </span>
  );
}

export function ImpactStats() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-maroon-dark to-primary relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dampak Nyata{" "}
            <span className="text-gradient-gold">Polines</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Komitmen kami menghasilkan lulusan berkualitas tinggi yang siap 
            menjawab tantangan industri dan berkontribusi untuk kemajuan bangsa.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20" />
              
              <div className="relative p-6 lg:p-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 bg-secondary/20 rounded-xl">
                  <stat.icon className="w-7 h-7 text-secondary" />
                </div>
                
                <div className="mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-white/60">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
