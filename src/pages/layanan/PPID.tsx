import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileText, Search, Clock, Calendar, Folder,
  Download, Eye, ExternalLink, ArrowRight, Info
} from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SubPageLayout } from "@/components/layout/SubPageLayout";

const sidebarLinks = [
  { title: "Semua Layanan", href: "/layanan" },
  { title: "Zona Integritas", href: "/layanan/zona-integritas" },
  { title: "Whistleblowing System", href: "/layanan/wbs" },
  { title: "Unit Layanan Terpadu", href: "/layanan/ult" },
  { title: "Informasi Publik (PPID)", href: "/layanan/ppid", isActive: true },
  { title: "Layanan SI", href: "/layanan/sistem-informasi" },
  { title: "MikroTik Academy", href: "/layanan/mikrotik" },
  { title: "Verifikasi Ijazah", href: "/layanan/verifikasi-ijazah" },
];

const categories = [
  {
    id: "berkala",
    title: "Informasi Berkala",
    description: "Informasi yang wajib disediakan dan diumumkan secara berkala",
    icon: Calendar,
    documents: [
      { title: "Laporan Keuangan Tahunan 2023", date: "Jan 2024", type: "PDF" },
      { title: "Laporan Kinerja (LAKIN) 2023", date: "Mar 2024", type: "PDF" },
      { title: "Rencana Kerja Tahunan 2024", date: "Jan 2024", type: "PDF" },
    ]
  },
  {
    id: "sertamerta",
    title: "Informasi Serta Merta",
    description: "Informasi yang dapat mengancam hajat hidup orang banyak",
    icon: Clock,
    documents: [
      { title: "Pengumuman Libur Nasional", date: "Des 2024", type: "PDF" },
      { title: "Info Darurat Bencana", date: "Nov 2024", type: "PDF" },
    ]
  },
  {
    id: "tersedia",
    title: "Informasi Tersedia Setiap Saat",
    description: "Informasi yang wajib tersedia setiap saat",
    icon: Folder,
    documents: [
      { title: "Profil Polines", date: "2024", type: "PDF" },
      { title: "Struktur Organisasi", date: "2024", type: "PDF" },
      { title: "Standar Pelayanan Publik", date: "2024", type: "PDF" },
      { title: "SOP Pelayanan", date: "2024", type: "PDF" },
    ]
  }
];

export default function PPID() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SubPageLayout
      title="Informasi Publik (PPID)"
      subtitle="Pejabat Pengelola Informasi dan Dokumentasi - Keterbukaan Informasi Publik"
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Layanan", href: "/layanan" },
        { label: "PPID" }
      ]}
      sidebarTitle="Layanan"
      sidebarLinks={sidebarLinks}
    >
      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 border-teal-200 dark:border-teal-800">
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-2">
                Cari Informasi Publik
              </h2>
              <p className="text-sm text-teal-600 dark:text-teal-400">
                Temukan dokumen dan informasi yang Anda butuhkan
              </p>
            </div>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cari dokumen, laporan, atau informasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <Tabs defaultValue="berkala">
          <TabsList className="w-full justify-start mb-4 flex-wrap h-auto">
            {categories.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id} className="flex items-center gap-2">
                <cat.icon className="w-4 h-4" />
                {cat.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg">
                      <category.icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="divide-y">
                    {category.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-red-500" />
                          <div>
                            <p className="font-medium">{doc.title}</p>
                            <p className="text-sm text-muted-foreground">{doc.date} • {doc.type}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>

      {/* Request Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/20">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Info className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Permohonan Informasi</h3>
                  <p className="text-muted-foreground">
                    Tidak menemukan informasi yang dicari? Ajukan permohonan informasi
                  </p>
                </div>
              </div>
              <Button>
                Ajukan Permohonan <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SubPageLayout>
  );
}
