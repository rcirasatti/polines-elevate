import { motion } from "framer-motion";
import { Play, ArrowRight, Award, Users, Building, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroCampus from "@/assets/hero-campus.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroCampus}
          alt="Kampus Polines"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,90%,15%)] via-primary/90 to-primary/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,90%,12%)] via-transparent to-transparent" />
        {/* Noise texture overlay for premium feel */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
      </div>

      {/* Floating Decorative Elements - More subtle */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-32 left-10 w-60 h-60 bg-gold-light/10 rounded-full blur-[80px] animate-float animation-delay-2000" />
      <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-white/5 rounded-full blur-[60px] animate-float animation-delay-1000" />

      {/* Content */}
      <div className="section-container relative z-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content - Takes more space */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-white lg:col-span-7"
          >
            {/* Badge - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
            >
              <span className="flex items-center justify-center w-6 h-6 bg-secondary/20 rounded-full">
                <Award className="w-3.5 h-3.5 text-secondary" />
              </span>
              <span className="text-sm font-medium text-white/90">Akreditasi Unggul • Perguruan Tinggi Vokasi Terbaik</span>
            </motion.div>

            {/* Headline - Better typography */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold leading-[1.1] mb-6 font-heading tracking-tight"
            >
              Mencetak{" "}
              <span className="relative inline-block">
                <span className="text-gradient-gold">Talenta Vokasi</span>
                <Sparkles className="absolute -top-2 -right-6 w-5 h-5 text-secondary animate-pulse" />
              </span>{" "}
              <br className="hidden sm:block" />
              Unggul untuk Industri
            </motion.h1>

            {/* Subheadline - Improved readability */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl leading-relaxed"
            >
              Politeknik Negeri Semarang menghasilkan lulusan terampil yang siap berkontribusi 
              di dunia industri dengan kompetensi teknologi terkini dan karakter profesional.
            </motion.p>

            {/* CTA Buttons - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild variant="hero" size="xl">
                <Link to="/penerimaan">
                  <ArrowRight className="w-5 h-5" />
                  Daftar Sekarang
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Virtual Tour
              </Button>
            </motion.div>

            {/* Quick Stats - Redesigned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-6 sm:gap-10 mt-14 pt-10 border-t border-white/15"
            >
              {[
                { icon: Users, value: "15,000+", label: "Mahasiswa Aktif" },
                { icon: Award, value: "35+", label: "Program Studi" },
                { icon: Building, value: "500+", label: "Mitra Industri" },
              ].map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                    <stat.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-white font-heading">{stat.value}</p>
                    <p className="text-sm text-white/60">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - PMB Card - Enhanced */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="hidden lg:block lg:col-span-5"
          >
            {/* Glow Effect */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 via-gold-light/20 to-secondary/20 rounded-3xl blur-2xl opacity-60" />
              
              {/* Card */}
              <div className="relative bg-white/95 dark:bg-card/95 backdrop-blur-xl rounded-2xl p-7 border border-white/50 shadow-2xl">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-primary/10 rounded-xl">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground font-heading">PMB 2025</h3>
                    <p className="text-xs text-muted-foreground">Pendaftaran Mahasiswa Baru</p>
                  </div>
                </div>
                
                {/* Timeline Items */}
                <div className="space-y-1">
                  {[
                    { jalur: "Jalur SNBP", status: "Dibuka", active: true },
                    { jalur: "Jalur SNBT", status: "Dibuka", active: true },
                    { jalur: "Jalur Mandiri", status: "Segera", active: false },
                    { jalur: "Jalur RPL", status: "Segera", active: false },
                  ].map((item, index) => (
                    <div 
                      key={item.jalur}
                      className={`flex justify-between items-center px-4 py-3.5 rounded-xl transition-all duration-200 ${
                        item.active ? 'bg-primary/5 border border-primary/10' : 'hover:bg-muted/50'
                      }`}
                    >
                      <span className={`text-sm ${item.active ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                        {item.jalur}
                      </span>
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        item.active 
                          ? 'bg-success/10 text-success' 
                          : 'bg-secondary/10 text-secondary'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* CTA */}
                <Button asChild variant="gold" className="w-full mt-6 shadow-gold">
                  <Link to="/penerimaan">
                    Lihat Semua Jalur Masuk
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
                
                {/* Footer Note */}
                <p className="text-center text-xs text-muted-foreground mt-4">
                  💡 Kuota terbatas, daftar sekarang!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave - Smoother */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
