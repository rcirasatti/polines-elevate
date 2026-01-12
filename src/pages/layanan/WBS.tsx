import { motion } from "framer-motion";
import { 
  AlertTriangle, Shield, Lock, Eye, ArrowRight, 
  CheckCircle2, FileText, Phone, Mail, MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SubPageLayout } from "@/components/layout/SubPageLayout";

const sidebarLinks = [
  { title: "Semua Layanan", href: "/layanan" },
  { title: "Zona Integritas", href: "/layanan/zona-integritas" },
  { title: "Whistleblowing System", href: "/layanan/wbs", isActive: true },
  { title: "Unit Layanan Terpadu", href: "/layanan/ult" },
  { title: "Informasi Publik (PPID)", href: "/layanan/ppid" },
  { title: "Layanan SI", href: "/layanan/sistem-informasi" },
  { title: "MikroTik Academy", href: "/layanan/mikrotik" },
  { title: "Verifikasi Ijazah", href: "/layanan/verifikasi-ijazah" },
];

const steps = [
  {
    step: 1,
    title: "Lapor",
    description: "Sampaikan laporan pelanggaran melalui formulir yang tersedia",
    icon: MessageSquare
  },
  {
    step: 2,
    title: "Verifikasi",
    description: "Tim akan memverifikasi dan menindaklanjuti laporan Anda",
    icon: Eye
  },
  {
    step: 3,
    title: "Investigasi",
    description: "Proses investigasi dilakukan secara rahasia dan profesional",
    icon: FileText
  },
  {
    step: 4,
    title: "Tindak Lanjut",
    description: "Hasil penanganan akan diinformasikan kepada pelapor",
    icon: CheckCircle2
  }
];

const guarantees = [
  {
    icon: Lock,
    title: "Kerahasiaan Terjamin",
    description: "Identitas pelapor dijaga kerahasiaannya sesuai peraturan"
  },
  {
    icon: Shield,
    title: "Perlindungan Pelapor",
    description: "Pelapor dilindungi dari segala bentuk intimidasi dan pembalasan"
  },
  {
    icon: Eye,
    title: "Transparansi Proses",
    description: "Status penanganan laporan dapat dipantau oleh pelapor"
  }
];

export default function WBS() {
  return (
    <SubPageLayout
      title="Whistleblowing System (WBS)"
      subtitle="Sistem pelaporan pelanggaran dengan perlindungan identitas pelapor"
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Layanan", href: "/layanan" },
        { label: "Whistleblowing System" }
      ]}
      sidebarTitle="Layanan"
      sidebarLinks={sidebarLinks}
    >
      {/* Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Card className="bg-gradient-to-br from-red-600 to-orange-600 text-white overflow-hidden">
          <CardContent className="p-8 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="p-6 bg-white/20 rounded-2xl backdrop-blur-sm">
                <AlertTriangle className="w-16 h-16 text-white" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Laporkan Pelanggaran
                </h2>
                <p className="text-red-100 mb-4 max-w-lg">
                  Jika Anda mengetahui adanya dugaan pelanggaran, korupsi, atau 
                  penyalahgunaan wewenang di lingkungan Polines, laporkan kepada kami.
                </p>
                <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-red-50">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Buat Laporan Sekarang
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Alur Pelaporan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <h2 className="text-xl font-bold mb-4">Alur Pelaporan</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="relative"
            >
              <Card className="h-full">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-xs text-primary font-semibold mb-1">Langkah {step.step}</div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-muted-foreground -translate-y-1/2 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Guarantees */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <h2 className="text-xl font-bold mb-4">Jaminan Keamanan</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {guarantees.map((item, index) => (
            <Card key={index} className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-500 rounded-lg">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800 dark:text-green-200">{item.title}</h3>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Contact Alternatives */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Kontak Alternatif</CardTitle>
            <CardDescription>Anda juga dapat menyampaikan laporan melalui:</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">wbs@polines.ac.id</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Hotline</p>
                <p className="text-sm text-muted-foreground">(024) 7473417 ext. 123</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SubPageLayout>
  );
}
