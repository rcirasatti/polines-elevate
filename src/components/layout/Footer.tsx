import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  MapPin, Phone, Mail, Clock, 
  Facebook, Instagram, Youtube, Linkedin, Twitter,
  ExternalLink, ChevronRight, ArrowUpRight, Send
} from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { title: "Tentang Polines", href: "/profil/tentang" },
  { title: "Penerimaan Mahasiswa Baru", href: "/penerimaan" },
  { title: "Kalender Akademik", href: "/akademik/kalender" },
  { title: "Beasiswa", href: "/akademik/beasiswa" },
  { title: "Tracer Study", href: "/kerjasama/tracer-study" },
  { title: "Karir & Lowongan", href: "/kerjasama/cdc" },
];

const academicLinks = [
  { title: "Jurusan Teknik Sipil", href: "/akademik/jurusan/teknik-sipil" },
  { title: "Jurusan Teknik Mesin", href: "/akademik/jurusan/teknik-mesin" },
  { title: "Jurusan Teknik Elektro", href: "/akademik/jurusan/teknik-elektro" },
  { title: "Jurusan Akuntansi", href: "/akademik/jurusan/akuntansi" },
  { title: "Jurusan Administrasi Bisnis", href: "/akademik/jurusan/administrasi-bisnis" },
  { title: "Program Studi", href: "/akademik/program-studi" },
];

const serviceLinks = [
  { title: "SIAKAD", href: "https://siakad.polines.ac.id", external: true },
  { title: "E-Learning", href: "https://lms.polines.ac.id", external: true },
  { title: "Webmail", href: "https://mail.polines.ac.id", external: true },
  { title: "Perpustakaan", href: "https://lib.polines.ac.id", external: true },
  { title: "Repository", href: "https://repository.polines.ac.id", external: true },
  { title: "PPID", href: "/layanan/ppid", external: false },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/poloines.semarang", label: "Facebook", color: "hover:bg-[#1877F2]" },
  { icon: Instagram, href: "https://instagram.com/polines_smg", label: "Instagram", color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]" },
  { icon: Youtube, href: "https://youtube.com/@polines", label: "YouTube", color: "hover:bg-[#FF0000]" },
  { icon: Twitter, href: "https://twitter.com/polines_smg", label: "Twitter", color: "hover:bg-[#1DA1F2]" },
  { icon: Linkedin, href: "https://linkedin.com/school/politeknik-negeri-semarang", label: "LinkedIn", color: "hover:bg-[#0A66C2]" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-polines-blue-dark to-[hsl(210,90%,18%)]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-light/5 rounded-full blur-2xl" />
      
      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="section-container py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white font-heading mb-2">
                Tetap Terhubung dengan Polines
              </h3>
              <p className="text-white/70 max-w-md">
                Dapatkan informasi terbaru seputar akademik, beasiswa, dan kegiatan kampus.
              </p>
            </div>
            <div className="flex gap-3 w-full max-w-md">
              <input 
                type="email" 
                placeholder="Masukkan email Anda"
                className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-secondary focus:bg-white/15 transition-all duration-200"
              />
              <Button variant="gold" size="lg" className="shrink-0 shadow-gold">
                <Send className="w-4 h-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* About Column - Wider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-primary font-bold text-xl font-heading">P</span>
              </div>
              <div>
                <h3 className="font-bold text-xl text-white font-heading">POLINES</h3>
                <p className="text-xs text-white/60">Politeknik Negeri Semarang</p>
              </div>
            </div>
            
            <p className="text-white/75 text-sm mb-6 leading-relaxed max-w-sm">
              Perguruan tinggi vokasi negeri yang menghasilkan lulusan kompeten, 
              profesional, dan siap berkontribusi untuk kemajuan industri Indonesia.
            </p>

            {/* Social Links - Enhanced */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 bg-white/10 rounded-xl text-white/80 hover:text-white transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="font-bold text-base mb-5 text-white font-heading flex items-center gap-2">
              <div className="w-1 h-5 bg-secondary rounded-full" />
              Tautan Cepat
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-secondary transition-all duration-200 text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-secondary" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Academic Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="font-bold text-base mb-5 text-white font-heading flex items-center gap-2">
              <div className="w-1 h-5 bg-secondary rounded-full" />
              Akademik
            </h4>
            <ul className="space-y-2.5">
              {academicLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-secondary transition-all duration-200 text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-secondary" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <h4 className="font-bold text-base mb-5 text-white font-heading flex items-center gap-2">
              <div className="w-1 h-5 bg-secondary rounded-full" />
              Hubungi Kami
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                <p className="text-sm text-white/75 leading-relaxed">
                  Jl. Prof. H. Soedarto, S.H., Tembalang,<br />
                  Semarang 50275, Jawa Tengah
                </p>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <a href="tel:+622474747317" className="text-sm text-white/75 hover:text-secondary transition-colors">
                  (024) 7473417
                </a>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Mail className="w-4 h-4 text-secondary" />
                </div>
                <a href="mailto:sekretariat@polines.ac.id" className="text-sm text-white/75 hover:text-secondary transition-colors">
                  sekretariat@polines.ac.id
                </a>
              </div>
              
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Clock className="w-4 h-4 text-secondary" />
                </div>
                <p className="text-sm text-white/75">
                  Senin - Jumat<br />
                  08:00 - 16:00 WIB
                </p>
              </div>
            </div>

            {/* Service Links - Enhanced Chips */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <h5 className="font-semibold text-sm mb-3 text-white/90">Layanan Digital</h5>
              <div className="flex flex-wrap gap-2">
                {serviceLinks.map((link) => (
                  link.external ? (
                    <a
                      key={link.title}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-secondary hover:text-secondary-foreground rounded-lg text-xs text-white/80 transition-all duration-200"
                    >
                      {link.title}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      key={link.title}
                      to={link.href}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-secondary hover:text-secondary-foreground rounded-lg text-xs text-white/80 transition-all duration-200"
                    >
                      {link.title}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar - Enhanced */}
      <div className="relative border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50 text-center md:text-left">
              © {new Date().getFullYear()} Politeknik Negeri Semarang. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              <Link to="/kebijakan-privasi" className="px-3 py-1.5 text-sm text-white/50 hover:text-secondary hover:bg-white/5 rounded-lg transition-all duration-200">
                Kebijakan Privasi
              </Link>
              <span className="text-white/20">•</span>
              <Link to="/syarat-ketentuan" className="px-3 py-1.5 text-sm text-white/50 hover:text-secondary hover:bg-white/5 rounded-lg transition-all duration-200">
                Syarat & Ketentuan
              </Link>
              <span className="text-white/20">•</span>
              <Link to="/peta-situs" className="px-3 py-1.5 text-sm text-white/50 hover:text-secondary hover:bg-white/5 rounded-lg transition-all duration-200">
                Peta Situs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
