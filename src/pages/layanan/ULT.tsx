import { motion } from "framer-motion";
import { 
  Headphones, Users, GraduationCap, Briefcase, Building2,
  Clock, MapPin, Phone, Mail, MessageCircle, ArrowRight,
  CheckCircle2, Star
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SubPageLayout } from "@/components/layout/SubPageLayout";

const sidebarLinks = [
  { title: "Semua Layanan", href: "/layanan" },
  { title: "Zona Integritas", href: "/layanan/zona-integritas" },
  { title: "Whistleblowing System", href: "/layanan/wbs" },
  { title: "Unit Layanan Terpadu", href: "/layanan/ult", isActive: true },
  { title: "Informasi Publik (PPID)", href: "/layanan/ppid" },
  { title: "Layanan SI", href: "/layanan/sistem-informasi" },
  { title: "MikroTik Academy", href: "/layanan/mikrotik" },
  { title: "Verifikasi Ijazah", href: "/layanan/verifikasi-ijazah" },
];

const serviceCategories = [
  {
    icon: GraduationCap,
    title: "Layanan Mahasiswa",
    description: "Administrasi akademik, surat keterangan, dan layanan kemahasiswaan",
    services: ["Surat Keterangan Aktif", "Legalisir Dokumen", "Pengajuan Cuti", "Konsultasi Akademik"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Briefcase,
    title: "Layanan Alumni",
    description: "Verifikasi ijazah, tracer study, dan jaringan alumni",
    services: ["Verifikasi Ijazah", "Legalisir Transkrip", "Surat Rekomendasi", "Career Center"],
    color: "from-green-500 to-green-600"
  },
  {
    icon: Building2,
    title: "Layanan Umum",
    description: "Informasi publik, kerjasama, dan layanan masyarakat",
    services: ["Informasi Pendaftaran", "Kunjungan Kampus", "Kerjasama Industri", "Permohonan Data"],
    color: "from-orange-500 to-orange-600"
  }
];

const operationalHours = [
  { day: "Senin - Kamis", hours: "08:00 - 16:00 WIB" },
  { day: "Jumat", hours: "08:00 - 16:30 WIB" },
  { day: "Sabtu - Minggu", hours: "Tutup" }
];

export default function ULT() {
  return (
    <SubPageLayout
      title="Unit Layanan Terpadu (ULT)"
      subtitle="Pusat layanan satu pintu untuk mahasiswa, alumni, dan masyarakat"
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Layanan", href: "/layanan" },
        { label: "Unit Layanan Terpadu" }
      ]}
      sidebarTitle="Layanan"
      sidebarLinks={sidebarLinks}
    >
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Card className="bg-gradient-to-br from-green-600 to-teal-600 text-white overflow-hidden">
          <CardContent className="p-8 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="p-6 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Headphones className="w-16 h-16 text-white" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Selamat Datang di ULT Polines
                </h2>
                <p className="text-green-100 mb-4 max-w-lg">
                  Kami siap membantu Anda dengan berbagai layanan administrasi 
                  dan informasi yang Anda butuhkan.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Live Chat
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Buat Tiket Bantuan
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Service Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <h2 className="text-xl font-bold mb-4">Kategori Layanan</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${category.color} p-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.services.map((service, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          {service}
                        </li>
                      ))}
                    </ul>
                    <Button variant="link" className="mt-4 p-0">
                      Lihat Semua <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact & Hours */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Operating Hours */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Jam Operasional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {operationalHours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                    <span className="font-medium">{item.day}</span>
                    <Badge variant={item.hours === "Tutup" ? "secondary" : "default"}>
                      {item.hours}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Kontak ULT
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Lokasi</p>
                  <p className="text-sm text-muted-foreground">
                    Gedung Administrasi Lt. 1, Kampus Polines
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Telepon</p>
                  <p className="text-sm text-muted-foreground">(024) 7473417</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">ult@polines.ac.id</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SubPageLayout>
  );
}
