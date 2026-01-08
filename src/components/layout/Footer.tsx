import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  MapPin, Phone, Mail, Clock, 
  Facebook, Instagram, Youtube, Linkedin,
  ExternalLink, ChevronRight
} from "lucide-react";

const quickLinks = [
  { title: "Tentang Polines", href: "/profil/sejarah" },
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
  { title: "E-Learning (LMS)", href: "https://lms.polines.ac.id", external: true },
  { title: "Webmail", href: "https://mail.polines.ac.id", external: true },
  { title: "Perpustakaan", href: "https://lib.polines.ac.id", external: true },
  { title: "Repository", href: "https://repository.polines.ac.id", external: true },
  { title: "PPID", href: "/layanan/ppid", external: false },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">POLINES</h3>
                <p className="text-xs text-white/70">Politeknik Negeri Semarang</p>
              </div>
            </div>
            
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Perguruan tinggi vokasi negeri yang menghasilkan lulusan kompeten, 
              profesional, dan siap berkontribusi untuk kemajuan industri Indonesia.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-white/10 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors"
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
          >
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-secondary" />
              Tautan Cepat
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-secondary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary/50 rounded-full group-hover:bg-secondary transition-colors" />
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
          >
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-secondary" />
              Akademik
            </h4>
            <ul className="space-y-3">
              {academicLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-secondary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary/50 rounded-full group-hover:bg-secondary transition-colors" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-secondary" />
              Kontak
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/80">
                  Jl. Prof. H. Soedarto, S.H., Tembalang,<br />
                  Semarang 50275, Jawa Tengah
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <p className="text-sm text-white/80">(024) 7473417</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:sekretariat@polines.ac.id" className="text-sm text-white/80 hover:text-secondary transition-colors">
                  sekretariat@polines.ac.id
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/80">
                  Senin - Jumat<br />
                  08:00 - 16:00 WIB
                </p>
              </div>
            </div>

            {/* Service Links */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h5 className="font-semibold text-sm mb-3">Layanan Digital</h5>
              <div className="flex flex-wrap gap-2">
                {serviceLinks.map((link) => (
                  link.external ? (
                    <a
                      key={link.title}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full text-xs hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    >
                      {link.title}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      key={link.title}
                      to={link.href}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full text-xs hover:bg-secondary hover:text-secondary-foreground transition-colors"
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

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60 text-center md:text-left">
              © {new Date().getFullYear()} Politeknik Negeri Semarang. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/kebijakan-privasi" className="text-sm text-white/60 hover:text-secondary transition-colors">
                Kebijakan Privasi
              </Link>
              <Link to="/syarat-ketentuan" className="text-sm text-white/60 hover:text-secondary transition-colors">
                Syarat & Ketentuan
              </Link>
              <Link to="/peta-situs" className="text-sm text-white/60 hover:text-secondary transition-colors">
                Peta Situs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
