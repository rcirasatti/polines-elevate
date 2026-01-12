import { motion } from "framer-motion";
import { 
  Monitor, GraduationCap, BookOpen, Mail, Users,
  FileText, Calendar, Briefcase, Globe, ExternalLink,
  Database, Shield, Wifi
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SubPageLayout } from "@/components/layout/SubPageLayout";

const sidebarLinks = [
  { title: "Semua Layanan", href: "/layanan" },
  { title: "Zona Integritas", href: "/layanan/zona-integritas" },
  { title: "Whistleblowing System", href: "/layanan/wbs" },
  { title: "Unit Layanan Terpadu", href: "/layanan/ult" },
  { title: "Informasi Publik (PPID)", href: "/layanan/ppid" },
  { title: "Layanan SI", href: "/layanan/sistem-informasi", isActive: true },
  { title: "MikroTik Academy", href: "/layanan/mikrotik" },
  { title: "Verifikasi Ijazah", href: "/layanan/verifikasi-ijazah" },
];

const systems = [
  {
    icon: GraduationCap,
    title: "SIAKAD",
    description: "Sistem Informasi Akademik untuk mahasiswa dan dosen",
    url: "https://siakad.polines.ac.id",
    color: "bg-blue-500",
    category: "Akademik"
  },
  {
    icon: Users,
    title: "SIPADU",
    description: "Sistem Informasi Pelayanan Administrasi Terpadu",
    url: "https://sipadu.polines.ac.id",
    color: "bg-green-500",
    category: "Administrasi"
  },
  {
    icon: BookOpen,
    title: "E-Learning (LMS)",
    description: "Platform pembelajaran daring dan materi kuliah",
    url: "https://lms.polines.ac.id",
    color: "bg-purple-500",
    category: "Akademik"
  },
  {
    icon: Mail,
    title: "Webmail",
    description: "Email resmi sivitas akademika Polines",
    url: "https://mail.polines.ac.id",
    color: "bg-red-500",
    category: "Komunikasi"
  },
  {
    icon: FileText,
    title: "Digital Library",
    description: "Perpustakaan digital dan repositori institusi",
    url: "https://lib.polines.ac.id",
    color: "bg-amber-500",
    category: "Perpustakaan"
  },
  {
    icon: Calendar,
    title: "SISTER",
    description: "Sistem Informasi Sumber Daya Terintegrasi",
    url: "https://sister.kemdikbud.go.id",
    color: "bg-indigo-500",
    category: "SDM"
  },
  {
    icon: Briefcase,
    title: "SIPP",
    description: "Sistem Informasi Pengadaan Pemerintah",
    url: "https://lpse.polines.ac.id",
    color: "bg-teal-500",
    category: "Pengadaan"
  },
  {
    icon: Database,
    title: "PDDikti",
    description: "Pangkalan Data Pendidikan Tinggi",
    url: "https://pddikti.kemdikbud.go.id",
    color: "bg-orange-500",
    category: "Data Nasional"
  },
  {
    icon: Shield,
    title: "SINTA",
    description: "Science and Technology Index untuk publikasi",
    url: "https://sinta.kemdikbud.go.id",
    color: "bg-pink-500",
    category: "Riset"
  }
];

export default function SistemInformasi() {
  return (
    <SubPageLayout
      title="Layanan Sistem Informasi"
      subtitle="Akses ke berbagai sistem informasi kampus Politeknik Negeri Semarang"
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Layanan", href: "/layanan" },
        { label: "Sistem Informasi" }
      ]}
      sidebarTitle="Layanan"
      sidebarLinks={sidebarLinks}
    >
      {/* System Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {systems.map((system, index) => (
          <motion.a
            key={system.title}
            href={system.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="block"
          >
            <Card className="h-full hover:shadow-lg transition-all group cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${system.color} rounded-xl flex-shrink-0`}>
                    <system.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold group-hover:text-primary transition-colors">
                        {system.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{system.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {system.category}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </motion.div>

      {/* Network Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500 rounded-xl">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Akses Jaringan Kampus</h3>
                <p className="text-muted-foreground mb-3">
                  Untuk mengakses beberapa sistem internal, pastikan Anda terhubung ke jaringan kampus 
                  atau menggunakan VPN Polines.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>WiFi: POLINES</Badge>
                  <Badge variant="outline">Bandwidth: 1 Gbps</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SubPageLayout>
  );
}
