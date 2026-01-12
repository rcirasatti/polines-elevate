import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Search, ChevronDown, ExternalLink,
  GraduationCap, Building2, FlaskConical, Users, Briefcase,
  BookOpen, Award, Globe, Mail, Moon, Sun, Headphones, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const menuItems = [
  {
    title: "Profil",
    icon: Building2,
    submenu: [
      { title: "Tentang Polines", href: "/profil/tentang" },
      { title: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
      { title: "Staff & Dosen", href: "/profil/staff-dosen" },
      { title: "Rencana Strategis", href: "/profil/rencana-strategis" },
      { title: "Laporan Kinerja", href: "/profil/laporan-kinerja" },
      { title: "Fasilitas Kampus", href: "/profil/fasilitas" },
      { title: "Sumber Daya", href: "/profil/sumber-daya" },
      { title: "Peta Kampus", href: "/profil/peta-kampus" },
    ],
  },
  {
    title: "Akademik",
    icon: GraduationCap,
    submenu: [
      { title: "Program Studi", href: "/akademik/program-studi" },
      { title: "Beasiswa", href: "/akademik/beasiswa" },
      { title: "Kegiatan Kampus", href: "/akademik/kegiatan" },
      { title: "PERAK (Peraturan Akademik)", href: "/akademik/perak" },
      { title: "Kalender Akademik", href: "/akademik/kalender" },
      { title: "Pedoman Akademik", href: "/akademik/pedoman" },
    ],
  },
  {
    title: "Riset & Inovasi",
    icon: FlaskConical,
    submenu: [
      { title: "P3M", href: "https://p3m.polines.ac.id", external: true },
      { title: "Riset & Publikasi", href: "/riset/publikasi" },
      { title: "Pengabdian Masyarakat", href: "/riset/pengabdian" },
    ],
  },
  {
    title: "Kemahasiswaan",
    icon: Users,
    submenu: [
      { title: "Pusat Layanan", href: "/kemahasiswaan" },
      { title: "Organisasi Mahasiswa", href: "/kemahasiswaan/ormawa" },
      { title: "Unit Kegiatan Mahasiswa", href: "/kemahasiswaan/ukm" },
      { title: "Prestasi Mahasiswa", href: "/kemahasiswaan/prestasi" },
    ],
  },
  {
    title: "Kerjasama",
    icon: Briefcase,
    submenu: [
      { title: "Kerjasama Internasional", href: "/kerjasama/internasional" },
      { title: "Kerjasama Nasional", href: "/kerjasama/nasional" },
    ],
  },
  {
    title: "Layanan",
    icon: Headphones,
    submenu: [
      { title: "Semua Layanan", href: "/layanan" },
      { title: "Zona Integritas", href: "/layanan/zona-integritas" },
      { title: "Whistleblowing System", href: "/layanan/wbs" },
      { title: "Unit Layanan Terpadu", href: "/layanan/ult" },
      { title: "Informasi Publik (PPID)", href: "/layanan/ppid" },
      { title: "Layanan Sistem Informasi", href: "/layanan/sistem-informasi" },
      { title: "MikroTik Academy", href: "/layanan/mikrotik" },
      { title: "Verifikasi Ijazah", href: "/layanan/verifikasi-ijazah" },
    ],
  },
];

const utilityLinks = [
  { title: "SSO", href: "https://sso.polines.ac.id", external: true },
  { title: "El-Nino", href: "https://elnino.polines.ac.id", external: true },
  { title: "Webmail", href: "https://mail.polines.ac.id", external: true },
  { title: "Download", href: "/download" },
  { title: "Akreditasi", href: "/akreditasi" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar - More refined */}
      <div className="hidden lg:block bg-primary text-primary-foreground">
        <div className="section-container flex items-center justify-between h-10 text-sm">
          <div className="flex items-center gap-1">
            {utilityLinks.map((link, index) => (
              <span key={link.title} className="flex items-center">
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.title}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    {link.title}
                  </Link>
                )}
                {index < utilityLinks.length - 1 && (
                  <span className="w-px h-3 bg-white/20 mx-1" />
                )}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link 
              to="/penerimaan" 
              className="flex items-center gap-2 px-4 py-1 bg-secondary/90 hover:bg-secondary text-secondary-foreground rounded-full font-semibold text-xs transition-all duration-200 hover:scale-105"
            >
              <Award className="w-3.5 h-3.5" />
              PMB 2025
            </Link>
            <span className="w-px h-4 bg-white/20" />
            <a href="#" className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
              <Globe className="w-4 h-4" />
              <span>ID</span>
              <span className="text-white/40">|</span>
              <span className="text-white/60 hover:text-white">EN</span>
            </a>
            <a 
              href="mailto:info@polines.ac.id" 
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@polines.ac.id
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Enhanced */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/95 dark:bg-card/95 backdrop-blur-xl shadow-lg border-b border-border/50" 
            : "bg-white dark:bg-card border-b border-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo - Enhanced */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 flex items-center justify-center">
                <img 
                  src={`${import.meta.env.BASE_URL}logo.png`}
                  alt="POLINES Logo" 
                  className="w-full h-full object-contain rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-white shadow-md" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-lg text-primary leading-none font-heading tracking-tight">POLINES</h1>
                <p className="text-[11px] text-muted-foreground font-medium mt-0.5">Politeknik Negeri Semarang</p>
              </div>
            </Link>

            {/* Desktop Navigation - Enhanced */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {menuItems.map((item) => {
                const isActive = item.submenu?.some(sub => 
                  location.pathname.startsWith(sub.href.split('/').slice(0, 3).join('/'))
                ) || location.pathname.startsWith('/' + item.title.toLowerCase().split(' ')[0]);
                
                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => setActiveMenu(item.title)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <button className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all duration-200 font-medium text-[15px] ${
                      isActive 
                        ? 'text-primary bg-primary/8' 
                        : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                    }`}>
                      <item.icon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                      {item.title}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === item.title ? 'rotate-180' : ''} ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                    </button>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    <AnimatePresence>
                      {activeMenu === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                          className={`absolute top-full mt-2 bg-white dark:bg-card rounded-2xl border border-border/60 overflow-hidden max-h-[70vh] overflow-y-auto ${
                            item.title === 'Layanan' 
                              ? 'right-0 max-w-[calc(100vw-2rem)]' 
                              : 'left-1/2 -translate-x-1/2'
                          } ${
                            item.submenu.length > 6 ? 'min-w-[560px]' : 'min-w-[260px]'
                          }`}
                          style={{ boxShadow: '0 20px 40px -10px rgba(0,0,0,0.15), 0 10px 20px -10px rgba(0,0,0,0.1)' }}
                        >
                          <div className="p-4">
                            {/* Header */}
                            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-border/60">
                              <div className="p-2 bg-primary/10 rounded-lg">
                                <item.icon className="w-4 h-4 text-primary" />
                              </div>
                              <span className="font-semibold text-foreground font-heading">{item.title}</span>
                            </div>
                            
                            {/* Menu Items */}
                            <ul className={item.submenu.length > 6 ? "grid grid-cols-2 gap-1.5" : "space-y-1"}>
                              {item.submenu.map((subitem) => (
                                <li key={subitem.title}>
                                  {'external' in subitem && subitem.external ? (
                                    <a
                                      href={subitem.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 group ${
                                        item.submenu.length > 6 ? 'text-sm' : ''
                                      }`}
                                    >
                                      <span className="flex-1">{subitem.title}</span>
                                      <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                  ) : (
                                    <Link
                                      to={subitem.href}
                                      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                                        location.pathname === subitem.href 
                                          ? 'text-primary bg-primary/10 font-medium' 
                                          : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                                      } ${item.submenu.length > 6 ? 'text-sm' : ''}`}
                                    >
                                      <span className="flex-1">{subitem.title}</span>
                                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                                    </Link>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Right Actions - Enhanced */}
            <div className="flex items-center gap-1.5">
              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2.5 rounded-xl hover:bg-muted transition-all duration-200"
                  aria-label="Toggle dark mode"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-secondary" />
                  ) : (
                    <Moon className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
              )}

              {/* Search Toggle */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2.5 rounded-xl transition-all duration-200 ${
                  isSearchOpen ? 'bg-primary/10 text-primary' : 'hover:bg-muted text-muted-foreground'
                }`}
              >
                <Search className="w-5 h-5" />
              </button>

              {/* CTA Button */}
              <Button asChild variant="gold" size="default" className="hidden sm:flex ml-2 shadow-gold hover:shadow-xl">
                <Link to="/penerimaan">
                  <Award className="w-4 h-4" />
                  Daftar PMB
                </Link>
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2.5 rounded-xl hover:bg-muted transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay - Enhanced */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="border-t border-border/50 bg-white dark:bg-card"
            >
              <div className="section-container py-5">
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Cari informasi seputar Polines..."
                    className="input-search w-full text-base"
                    autoFocus
                  />
                  <kbd className="absolute right-5 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-mono text-muted-foreground bg-muted rounded-lg">
                    ESC
                  </kbd>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu - Enhanced */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden border-t border-border/50 bg-white dark:bg-card overflow-hidden"
            >
              <div className="section-container py-5 space-y-3 max-h-[75vh] overflow-y-auto">
                {menuItems.map((item) => (
                  <div key={item.title} className="space-y-1.5">
                    <div className="flex items-center gap-2.5 px-3 py-2 font-semibold text-foreground">
                      <div className="p-1.5 bg-primary/10 rounded-lg">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      {item.title}
                    </div>
                    <div className="ml-11 space-y-0.5">
                      {item.submenu.map((subitem) => (
                        'external' in subitem && subitem.external ? (
                          <a
                            key={subitem.title}
                            href={subitem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2.5 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200"
                          >
                            {subitem.title}
                            <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                          </a>
                        ) : (
                          <Link
                            key={subitem.title}
                            to={subitem.href}
                            className={`block px-3 py-2.5 rounded-xl transition-all duration-200 ${
                              location.pathname === subitem.href
                                ? 'text-primary bg-primary/10 font-medium'
                                : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                            }`}
                          >
                            {subitem.title}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t border-border/60">
                  <Button asChild variant="gold" className="w-full shadow-gold">
                    <Link to="/penerimaan">
                      <Award className="w-4 h-4" />
                      Daftar PMB 2025
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
