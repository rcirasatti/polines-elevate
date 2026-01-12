import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Shield, Eye, FileText, AlertTriangle, Headphones, Globe,
  Monitor, Award, ClipboardCheck, MessageSquare, Search,
  Lock, Users, CheckCircle2, ArrowRight, ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SubPageLayout } from "@/components/layout/SubPageLayout";

const sidebarLinks = [
  { title: "Semua Layanan", href: "/layanan", isActive: true },
  { title: "Zona Integritas", href: "/layanan/zona-integritas" },
  { title: "Whistleblowing System", href: "/layanan/wbs" },
  { title: "Unit Layanan Terpadu", href: "/layanan/ult" },
  { title: "Informasi Publik (PPID)", href: "/layanan/ppid" },
  { title: "Layanan SI", href: "/layanan/sistem-informasi" },
  { title: "MikroTik Academy", href: "/layanan/mikrotik" },
  { title: "Verifikasi Ijazah", href: "/layanan/verifikasi-ijazah" },
  { title: "Survei Website", href: "/layanan/survei" },
];

const integrityServices = [
  {
    icon: Shield,
    title: "Zona Integritas",
    description: "Wilayah Bebas Korupsi (WBK) dan Wilayah Birokrasi Bersih Melayani (WBBM)",
    href: "/layanan/zona-integritas",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Eye,
    title: "Maklumat Layanan",
    description: "Janji dan komitmen pelayanan publik Polines",
    href: "/layanan/maklumat",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: AlertTriangle,
    title: "Whistleblowing System",
    description: "Sistem pelaporan pelanggaran dengan perlindungan pelapor",
    href: "/layanan/wbs",
    color: "from-red-500 to-red-600"
  }
];

const publicServices = [
  {
    icon: Headphones,
    title: "Unit Layanan Terpadu",
    description: "Pusat layanan satu pintu untuk mahasiswa, alumni, dan masyarakat",
    href: "/layanan/ult",
    color: "from-green-500 to-green-600"
  },
  {
    icon: FileText,
    title: "Informasi Publik (PPID)",
    description: "Portal keterbukaan informasi publik sesuai UU KIP",
    href: "/layanan/ppid",
    color: "from-teal-500 to-teal-600"
  }
];

const technicalServices = [
  {
    icon: Monitor,
    title: "Layanan Sistem Informasi",
    description: "Akses ke berbagai sistem informasi kampus (SIAKAD, SIPADU, dll)",
    href: "/layanan/sistem-informasi",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Award,
    title: "MikroTik Academy",
    description: "Program sertifikasi jaringan MikroTik resmi",
    href: "/layanan/mikrotik",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: ClipboardCheck,
    title: "Verifikasi Ijazah",
    description: "Layanan verifikasi keaslian ijazah dan transkrip",
    href: "/layanan/verifikasi-ijazah",
    color: "from-pink-500 to-pink-600"
  }
];

export default function LayananIndex() {
  const [searchQuery, setSearchQuery] = useState("");

  const ServiceCard = ({ service, index }: { service: typeof integrityServices[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={service.href}>
        <Card className="h-full hover:shadow-lg transition-all group overflow-hidden">
          <CardContent className="p-0">
            <div className={`bg-gradient-to-r ${service.color} p-4`}>
              <service.icon className="w-8 h-8 text-white" />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
              <div className="mt-3 flex items-center text-primary text-sm font-medium">
                Selengkapnya <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );

  return (
    <SubPageLayout
      title="Layanan Polines"
      subtitle="Pusat layanan publik dan sistem informasi Politeknik Negeri Semarang"
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Layanan" }
      ]}
    >
      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Cari layanan yang Anda butuhkan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 py-6 text-lg bg-muted/50"
          />
        </div>
      </motion.div>

      {/* Transparency & Integrity Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-bold">Transparansi & Integritas</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {integrityServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Public Services Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-6 h-6 text-green-600" />
          <h2 className="text-xl font-bold">Pusat Layanan</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {publicServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Technical Services Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-4">
          <Monitor className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold">Sistem & Teknis</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {technicalServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Survey Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Survei Kepuasan Layanan</h3>
                  <p className="text-muted-foreground">Bantu kami meningkatkan kualitas layanan dengan mengisi survei singkat</p>
                </div>
              </div>
              <Button asChild>
                <Link to="/layanan/survei">
                  Isi Survei <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SubPageLayout>
  );
}
