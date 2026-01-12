import { motion } from "framer-motion";
import { 
  Shield, CheckCircle2, Target, Users, FileText, 
  TrendingUp, Award, Clock, ArrowRight, Download
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { SubPageLayout } from "@/components/layout/SubPageLayout";

const sidebarLinks = [
  { title: "Semua Layanan", href: "/layanan" },
  { title: "Zona Integritas", href: "/layanan/zona-integritas", isActive: true },
  { title: "Whistleblowing System", href: "/layanan/wbs" },
  { title: "Unit Layanan Terpadu", href: "/layanan/ult" },
  { title: "Informasi Publik (PPID)", href: "/layanan/ppid" },
  { title: "Layanan SI", href: "/layanan/sistem-informasi" },
  { title: "MikroTik Academy", href: "/layanan/mikrotik" },
  { title: "Verifikasi Ijazah", href: "/layanan/verifikasi-ijazah" },
];

const areaPerubahan = [
  { 
    title: "Manajemen Perubahan", 
    progress: 95, 
    icon: TrendingUp,
    description: "Transformasi budaya kerja dan mindset organisasi"
  },
  { 
    title: "Penataan Tata Laksana", 
    progress: 90, 
    icon: FileText,
    description: "Penyederhanaan proses bisnis dan SOP"
  },
  { 
    title: "Penataan SDM", 
    progress: 88, 
    icon: Users,
    description: "Penguatan manajemen ASN berbasis merit"
  },
  { 
    title: "Penguatan Akuntabilitas", 
    progress: 92, 
    icon: Target,
    description: "Peningkatan kinerja dan pertanggungjawaban"
  },
  { 
    title: "Penguatan Pengawasan", 
    progress: 85, 
    icon: Shield,
    description: "Penerapan SPIP dan pengendalian gratifikasi"
  },
  { 
    title: "Peningkatan Kualitas Pelayanan Publik", 
    progress: 93, 
    icon: Award,
    description: "Inovasi dan standarisasi layanan prima"
  },
];

const documents = [
  { title: "SK Pembangunan ZI 2024", year: "2024" },
  { title: "Laporan Pembangunan ZI Triwulan I", year: "2024" },
  { title: "Maklumat Pelayanan", year: "2024" },
  { title: "Pakta Integritas", year: "2024" },
];

export default function ZonaIntegritas() {
  return (
    <SubPageLayout
      title="Zona Integritas"
      subtitle="Menuju Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi Bersih dan Melayani (WBBM)"
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Layanan", href: "/layanan" },
        { label: "Zona Integritas" }
      ]}
      sidebarTitle="Layanan"
      sidebarLinks={sidebarLinks}
    >
      {/* Main Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-8"
      >
        <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden">
          <CardContent className="p-8 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="p-6 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Shield className="w-16 h-16 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Zona Integritas Polines
                </h2>
                <p className="text-blue-100 mb-4">
                  Komitmen kami untuk mewujudkan birokrasi yang bersih, transparan, dan akuntabel
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <div className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                    <CheckCircle2 className="w-4 h-4 inline mr-1" />
                    Menuju WBK
                  </div>
                  <div className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                    <Award className="w-4 h-4 inline mr-1" />
                    Target WBBM
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* 6 Area Perubahan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" />
          6 Area Perubahan
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {areaPerubahan.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <area.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{area.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{area.description}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Capaian</span>
                      <span className="font-semibold text-primary">{area.progress}%</span>
                    </div>
                    <Progress value={area.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Maklumat Layanan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Maklumat Pelayanan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-6 bg-white dark:bg-background rounded-xl border-l-4 border-primary">
              <p className="text-muted-foreground italic leading-relaxed">
                "Dengan ini, kami menyatakan sanggup menyelenggarakan pelayanan sesuai standar 
                pelayanan yang telah ditetapkan dan apabila tidak menepati janji ini, kami siap 
                menerima sanksi sesuai peraturan perundang-undangan yang berlaku."
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="font-semibold">Direktur Politeknik Negeri Semarang</p>
                <p className="text-sm text-muted-foreground">Ditetapkan di Semarang</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Documents */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Download className="w-5 h-5 text-primary" />
          Dokumen Zona Integritas
        </h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="font-medium">{doc.title}</p>
                      <p className="text-sm text-muted-foreground">{doc.year}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-1" />
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
