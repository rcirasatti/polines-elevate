import { motion } from "framer-motion";
import { 
  Award, CheckCircle2, Users, Calendar, ArrowRight,
  BookOpen, Trophy, Target, Laptop
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SubPageLayout } from "@/components/layout/SubPageLayout";

const sidebarLinks = [
  { title: "Semua Layanan", href: "/layanan" },
  { title: "Zona Integritas", href: "/layanan/zona-integritas" },
  { title: "Whistleblowing System", href: "/layanan/wbs" },
  { title: "Unit Layanan Terpadu", href: "/layanan/ult" },
  { title: "Informasi Publik (PPID)", href: "/layanan/ppid" },
  { title: "Layanan SI", href: "/layanan/sistem-informasi" },
  { title: "MikroTik Academy", href: "/layanan/mikrotik", isActive: true },
  { title: "Verifikasi Ijazah", href: "/layanan/verifikasi-ijazah" },
];

const certifications = [
  {
    title: "MTCNA",
    fullName: "MikroTik Certified Network Associate",
    level: "Basic",
    duration: "3 Hari",
    price: "Rp 1.500.000"
  },
  {
    title: "MTCRE",
    fullName: "MikroTik Certified Routing Engineer",
    level: "Advanced",
    duration: "2 Hari",
    price: "Rp 2.000.000"
  },
  {
    title: "MTCWE",
    fullName: "MikroTik Certified Wireless Engineer",
    level: "Advanced",
    duration: "2 Hari",
    price: "Rp 2.000.000"
  },
  {
    title: "MTCTCE",
    fullName: "MikroTik Certified Traffic Control Engineer",
    level: "Advanced",
    duration: "2 Hari",
    price: "Rp 2.000.000"
  }
];

const benefits = [
  "Sertifikat resmi dari MikroTik Latvia",
  "Trainer bersertifikat internasional",
  "Hands-on lab dengan perangkat asli",
  "Akses ke komunitas alumni",
  "Materi pelatihan terbaru",
  "Konsultasi gratis pasca pelatihan"
];

const steps = [
  { step: 1, title: "Pilih Sertifikasi", description: "Pilih program sertifikasi sesuai kebutuhan" },
  { step: 2, title: "Daftar Online", description: "Isi formulir pendaftaran dan lakukan pembayaran" },
  { step: 3, title: "Ikuti Pelatihan", description: "Ikuti pelatihan intensif di kampus Polines" },
  { step: 4, title: "Ujian & Sertifikasi", description: "Ujian online langsung dari MikroTik" }
];

export default function MikroTik() {
  return (
    <SubPageLayout
      title="MikroTik Academy Polines"
      subtitle="Pusat sertifikasi jaringan MikroTik resmi di Politeknik Negeri Semarang"
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Layanan", href: "/layanan" },
        { label: "MikroTik Academy" }
      ]}
    >
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white overflow-hidden">
          <CardContent className="p-8 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="p-6 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Award className="w-16 h-16 text-white" />
              </div>
              <div className="text-center md:text-left flex-1">
                <Badge className="bg-white/20 text-white mb-2">Official Training Center</Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  MikroTik Academy
                </h2>
                <p className="text-orange-100 mb-4 max-w-lg">
                  Tingkatkan kompetensi jaringan Anda dengan sertifikasi MikroTik yang diakui secara internasional
                </p>
                <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                  Daftar Sekarang <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-primary" />
          Program Sertifikasi
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">{cert.fullName}</p>
                    </div>
                    <Badge variant={cert.level === "Basic" ? "default" : "secondary"}>
                      {cert.level}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        {cert.duration}
                      </span>
                    </div>
                    <span className="font-bold text-primary">{cert.price}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" />
          Keuntungan Bergabung
        </h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          Cara Pendaftaran
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((item, index) => (
            <Card key={item.step} className="text-center">
              <CardContent className="p-4">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </SubPageLayout>
  );
}
