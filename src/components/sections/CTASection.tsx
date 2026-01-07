import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Building2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Prospective Students */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-maroon-dark to-primary p-8 md:p-10"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-light/10 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
                <GraduationCap className="w-8 h-8 text-secondary" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Siap Bergabung dengan Polines?
              </h3>
              <p className="text-white/80 mb-8 max-w-md">
                Mulai perjalanan kariermu bersama kami. Daftarkan diri sebagai 
                calon mahasiswa baru dan raih masa depan yang cerah.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg">
                  <ArrowRight className="w-5 h-5" />
                  Daftar PMB Sekarang
                </Button>
                <Button variant="heroOutline" size="lg">
                  Info Jalur Masuk
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm text-white/60">
                  Pendaftaran Tahun Akademik 2025/2026 telah dibuka!
                </p>
              </div>
            </div>
          </motion.div>

          {/* For Industry Partners */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl bg-card border border-border p-8 md:p-10"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Kolaborasi dengan Industri
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md">
                Jadilah mitra strategis Polines dalam pengembangan SDM, riset terapan, 
                dan inovasi teknologi untuk kemajuan bersama.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="gold" size="lg">
                  <ArrowRight className="w-5 h-5" />
                  Ajukan Kerjasama
                </Button>
                <Button variant="outline" size="lg">
                  <MessageCircle className="w-5 h-5" />
                  Hubungi Kami
                </Button>
              </div>

              {/* Services */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Layanan Kerjasama:</p>
                <div className="flex flex-wrap gap-2">
                  {["Rekrutmen", "Magang", "Riset & Pengembangan", "Pelatihan", "Sertifikasi"].map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
