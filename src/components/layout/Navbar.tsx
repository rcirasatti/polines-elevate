import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Search, ChevronDown, ExternalLink,
  GraduationCap, Building2, FlaskConical, Users, Briefcase,
  BookOpen, Award, Globe, Mail, Moon, Sun
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const menuItems = [
  {
    title: "Profil",
    icon: Building2,
    submenu: [
      { title: "Sejarah", href: "#" },
      { title: "Visi & Misi", href: "#" },
      { title: "Struktur Organisasi", href: "#" },
      { title: "Direktur & Manajemen", href: "#" },
      { title: "Akreditasi Institusi", href: "#" },
      { title: "Fasilitas Kampus", href: "#" },
      { title: "Peta Kampus", href: "#" },
    ],
  },
  {
    title: "Akademik",
    icon: GraduationCap,
    submenu: [
      { title: "Jurusan Teknik Sipil", href: "#" },
      { title: "Jurusan Teknik Mesin", href: "#" },
      { title: "Jurusan Teknik Elektro", href: "#" },
      { title: "Jurusan Akuntansi", href: "#" },
      { title: "Jurusan Administrasi Bisnis", href: "#" },
      { title: "Kalender Akademik", href: "#" },
      { title: "Peraturan Akademik", href: "#" },
    ],
  },
  {
    title: "Riset & Inovasi",
    icon: FlaskConical,
    submenu: [
      { title: "Pusat Penelitian (P3M)", href: "#" },
      { title: "Jurnal SIPMAS", href: "#" },
      { title: "Produk Inovasi", href: "#" },
      { title: "HAKI & Paten", href: "#" },
    ],
  },
  {
    title: "Kemahasiswaan",
    icon: Users,
    submenu: [
      { title: "Organisasi Mahasiswa", href: "#" },
      { title: "Unit Kegiatan Mahasiswa", href: "#" },
      { title: "Prestasi Mahasiswa", href: "#" },
      { title: "Beasiswa", href: "#" },
    ],
  },
  {
    title: "Kerjasama",
    icon: Briefcase,
    submenu: [
      { title: "Hubungan Industri", href: "#" },
      { title: "Kerjasama Internasional", href: "#" },
      { title: "Career Development Center", href: "#" },
      { title: "Tracer Study", href: "#" },
      { title: "Ikatan Alumni", href: "#" },
    ],
  },
];

const utilityLinks = [
  { title: "SIAKAD", href: "#" },
  { title: "LMS", href: "#" },
  { title: "Webmail", href: "#" },
  { title: "Perpustakaan", href: "#" },
  { title: "PPID", href: "#" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="section-container flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            {utilityLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity"
              >
                <ExternalLink className="w-3 h-3" />
                {link.title}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-1 opacity-80 hover:opacity-100">
              <Globe className="w-4 h-4" />
              ID | EN
            </a>
            <a href="mailto:info@polines.ac.id" className="flex items-center gap-1 opacity-80 hover:opacity-100">
              <Mail className="w-4 h-4" />
              info@polines.ac.id
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">P</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-lg text-primary leading-tight">POLINES</h1>
                <p className="text-xs text-muted-foreground">Politeknik Negeri Semarang</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.title)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-foreground hover:text-primary transition-colors font-medium">
                    <item.icon className="w-4 h-4" />
                    {item.title}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === item.title ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {activeMenu === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 min-w-[280px] bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-border/50 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
                            <item.icon className="w-5 h-5 text-primary" />
                            <span className="font-semibold text-primary">{item.title}</span>
                          </div>
                          <ul className="space-y-1">
                            {item.submenu.map((subitem) => (
                              <li key={subitem.title}>
                                <a
                                  href={subitem.href}
                                  className="block px-3 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                                >
                                  {subitem.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Dark Mode Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-secondary" />
                  ) : (
                    <Moon className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
              )}

              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <Search className="w-5 h-5 text-muted-foreground" />
              </button>

              {/* CTA Button */}
              <Button variant="gold" className="hidden sm:flex">
                <Award className="w-4 h-4 mr-1" />
                Daftar PMB
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-border bg-white/95 backdrop-blur-xl"
            >
              <div className="section-container py-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Cari informasi seputar Polines..."
                    className="w-full pl-12 pr-4 py-3 bg-muted rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border bg-white/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="section-container py-4 space-y-2 max-h-[70vh] overflow-y-auto">
                {menuItems.map((item) => (
                  <div key={item.title} className="space-y-1">
                    <div className="flex items-center gap-2 px-3 py-2 font-semibold text-primary">
                      <item.icon className="w-5 h-5" />
                      {item.title}
                    </div>
                    <div className="ml-7 space-y-1">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.title}
                          href={subitem.href}
                          className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          {subitem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t border-border">
                  <Button variant="gold" className="w-full">
                    <Award className="w-4 h-4 mr-1" />
                    Daftar PMB
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
