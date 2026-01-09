import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Eye,
  Target,
  Flag,
  Award,
  Building2,
  Users,
  Calendar,
  ChevronDown,
  ChevronUp,
  Star,
  Lightbulb,
  GraduationCap,
  Globe,
  Handshake,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AIAssistant } from "@/components/shared/AIAssistant";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-campus.jpg";

const quickLinks = [
  { label: "Sejarah", href: "#sejarah" },
  { label: "Visi & Misi", href: "#visi-misi" },
  { label: "Struktur Organisasi", href: "#struktur" },
  { label: "Akreditasi", href: "#akreditasi" },
];

const misiItems = [
  {
    icon: GraduationCap,
    text: "Menyelenggarakan pendidikan vokasi yang berkualitas dan relevan dengan kebutuhan industri.",
  },
  {
    icon: Lightbulb,
    text: "Mengembangkan penelitian terapan dan inovasi teknologi yang bermanfaat bagi masyarakat.",
  },
  {
    icon: Handshake,
    text: "Melaksanakan pengabdian kepada masyarakat melalui penerapan ilmu pengetahuan dan teknologi.",
  },
  {
    icon: Globe,
    text: "Membangun kerjasama strategis dengan industri dan institusi dalam negeri maupun luar negeri.",
  },
  {
    icon: Users,
    text: "Mengembangkan tata kelola institusi yang profesional, transparan, dan akuntabel.",
  },
];

const tujuanItems = [
  "Menghasilkan lulusan yang kompeten, profesional, dan berdaya saing tinggi di tingkat nasional dan internasional.",
  "Menghasilkan penelitian terapan dan karya inovasi yang berkontribusi pada pengembangan industri.",
  "Meningkatkan peran serta Polines dalam pemberdayaan masyarakat melalui kegiatan pengabdian.",
  "Memperluas jejaring kerjasama dengan berbagai pihak untuk meningkatkan kualitas pendidikan.",
  "Mewujudkan tata kelola institusi yang berbasis sistem informasi terintegrasi.",
];

const timelineData = [
  {
    year: "1982",
    title: "Pendirian",
    description: "Didirikan sebagai Politeknik Universitas Diponegoro dengan 3 jurusan pertama.",
  },
  {
    year: "1997",
    title: "Mandiri",
    description: "Resmi menjadi Politeknik Negeri Semarang yang mandiri berdasarkan SK Mendikbud.",
  },
  {
    year: "2005",
    title: "Ekspansi",
    description: "Penambahan jurusan baru dan pembangunan gedung kampus yang lebih modern.",
  },
  {
    year: "2015",
    title: "Akreditasi A",
    description: "Meraih akreditasi institusi A dari BAN-PT dan berbagai prestasi nasional.",
  },
  {
    year: "2020",
    title: "Transformasi Digital",
    description: "Implementasi sistem pembelajaran digital dan pengembangan program D4.",
  },
  {
    year: "Sekarang",
    title: "Era Baru",
    description: "Menjadi pusat unggulan pendidikan vokasi dengan 27 program studi dan 500+ mitra industri.",
  },
];

const akreditasiData = [
  { name: "Akreditasi Institusi", grade: "A", issuer: "BAN-PT", year: "2023" },
  { name: "ISO 9001:2015", grade: "Certified", issuer: "TÜV Rheinland", year: "2022" },
  { name: "ISO 21001:2018", grade: "Certified", issuer: "BSI", year: "2023" },
];

export default function TentangPolines() {
  const [expandedTujuan, setExpandedTujuan] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Mengenal Politeknik Negeri Semarang
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Institusi pendidikan vokasi unggulan yang mencetak talenta profesional 
              siap kerja untuk industri masa depan Indonesia.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Quick Navigation Sticky */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="section-container py-3">
          <nav className="flex items-center justify-center gap-2 md:gap-6 flex-wrap">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Intro Section */}
      <section className="section-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Politeknik Negeri Semarang (Polines) adalah institusi pendidikan tinggi vokasi 
            yang berdiri sejak tahun 1982. Sebagai salah satu politeknik negeri terbaik di 
            Indonesia, Polines berkomitmen untuk menghasilkan lulusan yang kompeten dan 
            siap menghadapi tantangan industri global.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Dengan 5 jurusan dan 27 program studi yang tersedia, Polines terus berinovasi 
            dalam kurikulum berbasis industri, didukung oleh fasilitas modern dan kerjasama 
            dengan lebih dari 500 mitra industri nasional dan internasional.
          </p>
        </motion.div>
      </section>

      {/* Visi Misi Section */}
      <section id="visi-misi" className="bg-muted/50 py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visi, Misi & Tujuan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Landasan yang mengarahkan langkah Polines menuju keunggulan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Visi Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-primary to-polines-blue-light text-white overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Eye className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold">Visi</h3>
                  </div>
                  <p className="text-lg leading-relaxed text-white/95">
                    "Menjadi Politeknik Unggulan yang Menghasilkan Sumber Daya Manusia 
                    Profesional, Berkarakter, dan Berdaya Saing Global pada Tahun 2025."
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Misi Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center">
                      <Target className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Misi</h3>
                  </div>
                  <div className="space-y-4">
                    {misiItems.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Tujuan Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8">
                <button
                  onClick={() => setExpandedTujuan(!expandedTujuan)}
                  className="w-full flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Flag className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Tujuan</h3>
                  </div>
                  {expandedTujuan ? (
                    <ChevronUp className="w-6 h-6 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-muted-foreground" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: expandedTujuan ? "auto" : 0, opacity: expandedTujuan ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 space-y-3">
                    {tujuanItems.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="sejarah" className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perjalanan Sejarah
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lebih dari 4 dekade mengukir prestasi dalam pendidikan vokasi Indonesia
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <Card className="inline-block">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-secondary mb-2">{item.year}</div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-primary rounded-full items-center justify-center z-10 flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/profil/sejarah">
              <Button variant="outline" className="gap-2">
                Lihat Sejarah Lengkap
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi Preview */}
      <section id="struktur" className="bg-muted/50 py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Struktur Organisasi
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kepemimpinan yang profesional dan berintegritas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Direktur", name: "Dr. Ir. Supriyadi, M.T.", icon: Star },
              { title: "Wakil Direktur I", name: "Drs. Ahmad Fauzi, M.M.", icon: Users },
              { title: "Wakil Direktur II", name: "Ir. Budi Santoso, M.Eng.", icon: Building2 },
              { title: "Wakil Direktur III", name: "Dr. Siti Aminah, M.Pd.", icon: GraduationCap },
            ].map((person, index) => (
              <motion.div
                key={person.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <person.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{person.title}</h3>
                    <p className="text-sm text-muted-foreground">{person.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/profil/struktur-organisasi">
              <Button className="gap-2">
                Lihat Struktur Lengkap
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Akreditasi Section */}
      <section id="akreditasi" className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Akreditasi & Sertifikasi
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bukti komitmen kami terhadap standar kualitas tertinggi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {akreditasiData.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-secondary">{item.grade}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{item.issuer}</p>
                    <p className="text-xs text-muted-foreground">Tahun {item.year}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {["BAN-PT", "ISO 9001", "ISO 21001", "ASIIN", "ABET", "AUN-QA"].map((logo, index) => (
              <div
                key={logo}
                className="bg-muted/50 rounded-xl p-4 flex items-center justify-center h-20"
              >
                <span className="font-bold text-muted-foreground">{logo}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
      <AIAssistant />
    </div>
  );
}
