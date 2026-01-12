import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, Users, Award, FileText, GraduationCap, BookOpen,
  Calendar, ExternalLink, Bell, Trophy, Heart, Briefcase,
  ClipboardList, Building2, Globe, Mail
} from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SubPageLayout } from "@/components/layout/SubPageLayout";

const sidebarLinks = [
  { title: "Pusat Layanan", href: "/kemahasiswaan", isActive: true },
  { title: "Organisasi Mahasiswa", href: "/kemahasiswaan/ormawa" },
  { title: "Unit Kegiatan Mahasiswa", href: "/kemahasiswaan/ukm" },
  { title: "Prestasi Mahasiswa", href: "/kemahasiswaan/prestasi" },
];

const akademikServices = [
  {
    icon: Calendar,
    title: "Kalender Akademik",
    description: "Jadwal kegiatan akademik semester ini",
    href: "/akademik/kalender",
    color: "bg-blue-500"
  },
  {
    icon: BookOpen,
    title: "Kurikulum & Prodi",
    description: "Informasi program studi dan kurikulum",
    href: "/akademik/program-studi",
    color: "bg-indigo-500"
  },
  {
    icon: GraduationCap,
    title: "Prosedur Wisuda",
    description: "Panduan dan persyaratan wisuda",
    href: "/akademik/pedoman",
    color: "bg-purple-500"
  },
  {
    icon: FileText,
    title: "Verifikasi Ijazah",
    description: "Layanan verifikasi dokumen ijazah",
    href: "/layanan/verifikasi-ijazah",
    color: "bg-pink-500"
  }
];

const kemahasiswaanServices = [
  {
    icon: Award,
    title: "Beasiswa",
    description: "Informasi dan pendaftaran beasiswa",
    href: "/akademik/beasiswa",
    color: "bg-amber-500"
  },
  {
    icon: Users,
    title: "Organisasi & UKM",
    description: "Daftar organisasi dan kegiatan mahasiswa",
    href: "/kemahasiswaan/ormawa",
    color: "bg-green-500"
  },
  {
    icon: Trophy,
    title: "Prestasi Mahasiswa",
    description: "Galeri prestasi dan penghargaan",
    href: "/kemahasiswaan/prestasi",
    color: "bg-orange-500"
  },
  {
    icon: ClipboardList,
    title: "Pengajuan SKPI",
    description: "Surat Keterangan Pendamping Ijazah",
    href: "/layanan/skpi",
    color: "bg-teal-500"
  }
];

const quickLinks = [
  {
    title: "SIAKAD",
    description: "Sistem Informasi Akademik",
    href: "https://siakad.polines.ac.id",
    icon: Building2,
    external: true
  },
  {
    title: "SIPADU",
    description: "Sistem Informasi Terpadu",
    href: "https://sipadu.polines.ac.id",
    icon: Globe,
    external: true
  },
  {
    title: "Email Mahasiswa",
    description: "Webmail Polines",
    href: "https://mail.polines.ac.id",
    icon: Mail,
    external: true
  }
];

const announcements = [
  {
    title: "Pendaftaran Wisuda Periode Oktober 2024",
    date: "25 September 2024",
    priority: "high"
  },
  {
    title: "Batas Akhir Pengisian KRS Semester Ganjil",
    date: "20 September 2024",
    priority: "high"
  },
  {
    title: "Pembukaan Pendaftaran Beasiswa Unggulan",
    date: "15 September 2024",
    priority: "medium"
  }
];

const documents = [
  { title: "Buku Pedoman Akademik 2024", type: "PDF", size: "2.5 MB" },
  { title: "Formulir Cuti Akademik", type: "PDF", size: "150 KB" },
  { title: "Panduan Pengisian KRS", type: "PDF", size: "500 KB" },
  { title: "Formulir Pengajuan SKPI", type: "PDF", size: "200 KB" }
];

export default function KemahasiswaanIndex() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SubPageLayout
      title="Pusat Layanan Akademik & Kemahasiswaan"
      subtitle="Akses layanan akademik dan kemahasiswaan Politeknik Negeri Semarang"
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Kemahasiswaan" }
      ]}
      sidebarTitle="Kemahasiswaan"
      sidebarLinks={sidebarLinks}
    >
      {/* Search Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Cari Layanan, Pedoman, atau Info Beasiswa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 py-6 text-lg bg-muted/50"
          />
        </div>
      </motion.div>

      {/* Announcement Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Bell className="w-5 h-5 text-primary mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-primary mb-2">Pengumuman Terbaru</h3>
                <div className="space-y-2">
                  {announcements.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {item.priority === "high" && (
                          <Badge variant="destructive" className="text-xs">Penting</Badge>
                        )}
                        <span className="text-sm">{item.title}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Dual Category Layout */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Akademik Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader className="bg-blue-50 dark:bg-blue-950/30 border-b">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-blue-700 dark:text-blue-400">Akademik</CardTitle>
                  <CardDescription>Administrasi & Perkuliahan</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-3">
                {akademikServices.map((service, index) => (
                  <Link key={index} to={service.href}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-3 rounded-lg border hover:border-blue-300 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all group"
                    >
                      <div className={`w-10 h-10 ${service.color} rounded-lg flex items-center justify-center mb-2`}>
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-medium text-sm group-hover:text-blue-600 transition-colors">{service.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{service.description}</p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Kemahasiswaan Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="h-full">
            <CardHeader className="bg-amber-50 dark:bg-amber-950/30 border-b">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500 rounded-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-amber-700 dark:text-amber-400">Kemahasiswaan</CardTitle>
                  <CardDescription>Karakter & Organisasi</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-3">
                {kemahasiswaanServices.map((service, index) => (
                  <Link key={index} to={service.href}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-3 rounded-lg border hover:border-amber-300 hover:bg-amber-50/50 dark:hover:bg-amber-950/20 transition-all group"
                    >
                      <div className={`w-10 h-10 ${service.color} rounded-lg flex items-center justify-center mb-2`}>
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-medium text-sm group-hover:text-amber-600 transition-colors">{service.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{service.description}</p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <ExternalLink className="w-5 h-5 text-primary" />
          Akses Cepat Sistem
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-4 rounded-xl border bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold flex items-center gap-1">
                      {link.title}
                      {link.external && <ExternalLink className="w-3 h-3" />}
                    </h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Documents Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          Dokumen & Pedoman
        </h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 dark:bg-red-950/50 rounded">
                      <FileText className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">{doc.title}</h4>
                      <p className="text-xs text-muted-foreground">{doc.type} • {doc.size}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Unduh
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SubPageLayout>
  );
}
