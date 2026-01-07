import { motion } from "framer-motion";
import { Play, ArrowRight, Award, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCampus from "@/assets/hero-campus.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroCampus}
          alt="Polines Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/95 via-primary/85 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/50 to-transparent" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gold-light/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="section-container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
            >
              <Award className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Akreditasi A • Perguruan Tinggi Vokasi Unggulan</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Mencetak{" "}
              <span className="text-gradient-gold">Talenta Vokasi</span>{" "}
              Unggul untuk Industri Masa Depan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl"
            >
              Politeknik Negeri Semarang menghasilkan lulusan terampil yang siap berkontribusi 
              di dunia industri dengan kompetensi teknologi terkini dan karakter profesional.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="xl">
                <ArrowRight className="w-5 h-5" />
                Daftar Sekarang
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Virtual Tour
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">15,000+</p>
                  <p className="text-sm text-white/60">Mahasiswa Aktif</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">35+</p>
                  <p className="text-sm text-white/60">Program Studi</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Building className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-sm text-white/60">Mitra Industri</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Can add 3D model or illustration later */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            {/* Glassmorphism Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/30 to-gold-light/30 rounded-3xl blur-2xl" />
              <div className="relative glass-card rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Pendaftaran Mahasiswa Baru 2025</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Jalur SNBP</span>
                    <span className="text-primary font-semibold">Dibuka</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Jalur SNBT</span>
                    <span className="text-primary font-semibold">Dibuka</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Jalur Mandiri</span>
                    <span className="text-secondary font-semibold">Segera</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-muted-foreground">Jalur RPL</span>
                    <span className="text-secondary font-semibold">Segera</span>
                  </div>
                </div>
                <Button variant="gold" className="w-full mt-6">
                  Lihat Semua Jalur Masuk
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
