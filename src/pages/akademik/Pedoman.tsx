import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileText, Download, Search, Book, GraduationCap,
  Briefcase, Users, FolderOpen, ExternalLink, Filter
} from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

type DocumentCategory = "akademik" | "kemahasiswaan" | "magang" | "tugas-akhir" | "umum";

interface Document {
  id: string;
  title: string;
  category: DocumentCategory;
  size: string;
  format: string;
  year: string;
  description?: string;
}

const documents: Document[] = [
  // Akademik
  { id: "1", title: "Pedoman Akademik 2024/2025", category: "akademik", size: "2.5 MB", format: "PDF", year: "2024", description: "Panduan lengkap kegiatan akademik mahasiswa" },
  { id: "2", title: "Peraturan Akademik Polines", category: "akademik", size: "1.8 MB", format: "PDF", year: "2024", description: "Peraturan dan tata tertib akademik" },
  { id: "3", title: "Panduan Pengisian KRS Online", category: "akademik", size: "850 KB", format: "PDF", year: "2024", description: "Langkah-langkah pengisian KRS di SIAKAD" },
  { id: "4", title: "Prosedur Cuti Akademik", category: "akademik", size: "420 KB", format: "PDF", year: "2023", description: "Tata cara pengajuan cuti akademik" },
  
  // Kemahasiswaan
  { id: "5", title: "Pedoman Kemahasiswaan", category: "kemahasiswaan", size: "3.2 MB", format: "PDF", year: "2024", description: "Panduan kegiatan dan layanan kemahasiswaan" },
  { id: "6", title: "Panduan Organisasi Mahasiswa", category: "kemahasiswaan", size: "1.5 MB", format: "PDF", year: "2024", description: "Struktur dan mekanisme ormawa" },
  { id: "7", title: "Prosedur Pengajuan Beasiswa", category: "kemahasiswaan", size: "680 KB", format: "PDF", year: "2024", description: "Alur pendaftaran beasiswa" },
  { id: "8", title: "Kode Etik Mahasiswa", category: "kemahasiswaan", size: "320 KB", format: "PDF", year: "2023", description: "Norma dan etika mahasiswa Polines" },
  
  // Magang
  { id: "9", title: "Pedoman Praktik Kerja Lapangan (PKL)", category: "magang", size: "2.1 MB", format: "PDF", year: "2024", description: "Panduan lengkap pelaksanaan PKL" },
  { id: "10", title: "Template Laporan PKL", category: "magang", size: "450 KB", format: "DOCX", year: "2024", description: "Format penulisan laporan PKL" },
  { id: "11", title: "Form Penilaian PKL", category: "magang", size: "280 KB", format: "PDF", year: "2024", description: "Formulir penilaian dari industri" },
  { id: "12", title: "Daftar Mitra PKL", category: "magang", size: "1.2 MB", format: "PDF", year: "2024", description: "Daftar perusahaan mitra PKL" },
  
  // Tugas Akhir
  { id: "13", title: "Pedoman Tugas Akhir", category: "tugas-akhir", size: "2.8 MB", format: "PDF", year: "2024", description: "Panduan penyusunan tugas akhir" },
  { id: "14", title: "Template Proposal TA", category: "tugas-akhir", size: "380 KB", format: "DOCX", year: "2024", description: "Format penulisan proposal TA" },
  { id: "15", title: "Template Laporan TA", category: "tugas-akhir", size: "520 KB", format: "DOCX", year: "2024", description: "Format penulisan laporan TA" },
  { id: "16", title: "Prosedur Sidang TA", category: "tugas-akhir", size: "650 KB", format: "PDF", year: "2024", description: "Alur dan persyaratan sidang TA" },
  
  // Umum
  { id: "17", title: "Kalender Akademik 2024/2025", category: "umum", size: "1.2 MB", format: "PDF", year: "2024", description: "Jadwal kegiatan akademik" },
  { id: "18", title: "Standar Operasional Prosedur (SOP)", category: "umum", size: "4.5 MB", format: "PDF", year: "2024", description: "Kumpulan SOP layanan kampus" },
];

const categories = [
  { id: "all", label: "Semua", icon: FolderOpen },
  { id: "akademik", label: "Akademik", icon: GraduationCap },
  { id: "kemahasiswaan", label: "Kemahasiswaan", icon: Users },
  { id: "magang", label: "PKL/Magang", icon: Briefcase },
  { id: "tugas-akhir", label: "Tugas Akhir", icon: Book },
  { id: "umum", label: "Umum", icon: FileText },
];

const categoryColors: Record<DocumentCategory, string> = {
  akademik: "bg-blue-500",
  kemahasiswaan: "bg-green-500",
  magang: "bg-orange-500",
  "tugas-akhir": "bg-purple-500",
  umum: "bg-gray-500",
};

const sidebarLinks = [
  { title: "Program Studi", href: "/akademik/program-studi" },
  { title: "Beasiswa", href: "/akademik/beasiswa" },
  { title: "Kegiatan Kampus", href: "/akademik/kegiatan" },
  { title: "Perpustakaan (PERAK)", href: "/akademik/perpustakaan" },
  { title: "Kalender Akademik", href: "/akademik/kalender" },
  { title: "Akreditasi", href: "/akademik/akreditasi" },
  { title: "Pedoman Akademik", href: "/akademik/pedoman", active: true },
];

export default function Pedoman() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || doc.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getFormatIcon = (format: string) => {
    if (format === "PDF") {
      return <div className="w-10 h-12 bg-red-100 rounded flex items-center justify-center text-red-600 font-bold text-xs">PDF</div>;
    }
    if (format === "DOCX") {
      return <div className="w-10 h-12 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold text-xs">DOC</div>;
    }
    return <div className="w-10 h-12 bg-gray-100 rounded flex items-center justify-center text-gray-600 font-bold text-xs">{format}</div>;
  };

  return (
    <SubPageLayout
      title="Pedoman & Dokumen"
      subtitle="Kumpulan pedoman, panduan, dan dokumen akademik resmi"
      breadcrumbs={[
        { label: "Akademik", href: "/akademik" },
        { label: "Pedoman" },
      ]}
      sidebarTitle="Menu Akademik"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <motion.div
                key={cat.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={`cursor-pointer transition-all ${
                    isActive
                      ? "ring-2 ring-primary bg-primary text-primary-foreground"
                      : "hover:shadow-md"
                  }`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <CardContent className="p-4 text-center">
                    <cat.icon className={`w-6 h-6 mx-auto mb-2 ${isActive ? "" : "text-primary"}`} />
                    <p className={`text-sm font-medium ${isActive ? "" : "text-foreground"}`}>
                      {cat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Cari dokumen berdasarkan judul..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12"
          />
        </div>

        {/* Documents List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Daftar Dokumen
              <Badge variant="secondary">{filteredDocuments.length} dokumen</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredDocuments.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors"
                >
                  {getFormatIcon(doc.format)}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">
                      {doc.title}
                    </h3>
                    {doc.description && (
                      <p className="text-sm text-muted-foreground truncate">
                        {doc.description}
                      </p>
                    )}
                    <div className="flex items-center gap-3 mt-2">
                      <Badge
                        className={`${categoryColors[doc.category]} text-white text-xs`}
                      >
                        {categories.find((c) => c.id === doc.category)?.label}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {doc.size}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {doc.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <ExternalLink className="w-4 h-4" />
                      <span className="hidden sm:inline">Lihat</span>
                    </Button>
                    <Button size="sm" className="gap-1">
                      <Download className="w-4 h-4" />
                      <span className="hidden sm:inline">Unduh</span>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredDocuments.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Tidak ada dokumen yang ditemukan</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                >
                  Reset Filter
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="bg-muted/50">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-semibold text-foreground">Butuh Dokumen Lain?</h3>
                <p className="text-sm text-muted-foreground">
                  Hubungi Bagian Akademik jika dokumen yang Anda cari tidak tersedia
                </p>
              </div>
              <Button variant="outline" className="gap-2">
                Hubungi Akademik
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </SubPageLayout>
  );
}
