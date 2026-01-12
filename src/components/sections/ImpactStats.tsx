import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Briefcase, Lightbulb, Award, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: 90,
    suffix: "%",
    label: "Serapan Kerja",
    description: "Lulusan langsung bekerja dalam 6 bulan",
    color: "from-emerald-400 to-emerald-600"
  },
  {
    icon: Briefcase,
    value: 500,
    suffix: "+",
    label: "Mitra Industri",
    description: "Perusahaan partner strategis",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: GraduationCap,
    value: 35,
    suffix: "",
    label: "Program Studi",
    description: "D3, D4, dan Pascasarjana",
    color: "from-violet-400 to-violet-600"
  },
  {
    icon: Lightbulb,
    value: 100,
    suffix: "+",
    label: "Paten & HAKI",
    description: "Inovasi terdaftar resmi",
    color: "from-amber-400 to-amber-600"
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section className="section-spacing bg-gradient-to-br from-primary via-polines-blue-dark to-[hsl(210,90%,18%)] relative overflow-hidden">
      {/* Enhanced Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-light/10 rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Award className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-white/90">Prestasi & Dampak</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 font-heading">
            Dampak Nyata{" "}
            <span className="text-gradient-gold">Polines</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Komitmen kami menghasilkan lulusan berkualitas tinggi yang siap 
            menjawab tantangan industri dan berkontribusi untuk kemajuan bangsa.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card Background with hover effect */}
              <div className="absolute inset-0 bg-white/[0.06] rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-500 group-hover:bg-white/[0.1] group-hover:border-white/20 group-hover:scale-[1.02]" />
              
              <div className="relative p-6 lg:p-8 text-center">
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Animated Number */}
                <div className="mb-3">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <h3 className="text-lg font-bold text-white mb-1.5 font-heading">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed">
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
