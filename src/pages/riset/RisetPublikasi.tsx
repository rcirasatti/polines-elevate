import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, Filter, BookOpen, Award, FileText, ExternalLink,
  TrendingUp, Users, Globe, Download, Eye, Calendar
} from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sidebarLinks = [
  { title: "Riset & Publikasi", href: "/riset/publikasi", active: true },
  { title: "Pengabdian Masyarakat", href: "/riset/pengabdian" },
  { title: "HAKI & Paten", href: "/riset/haki" },
  { title: "Jurnal SIPMAS", href: "/riset/jurnal" },
  { title: "Produk Inovasi", href: "/riset/produk" },
];

const statistics = [
  { label: "Publikasi Scopus", value: "156", icon: Globe, trend: "+23%" },
  { label: "Artikel SINTA", value: "892", icon: BookOpen, trend: "+45%" },
  { label: "HAKI Terdaftar", value: "78", icon: Award, trend: "+12%" },
  { label: "Peneliti Aktif", value: "245", icon: Users, trend: "+8%" },
];

const categories = [
  { value: "all", label: "Semua Bidang" },
  { value: "teknologi", label: "Teknologi & Rekayasa" },
  { value: "bisnis", label: "Bisnis & Manajemen" },
  { value: "sosial", label: "Sosial Humaniora" },
  { value: "terapan", label: "Ilmu Terapan" },
];

const publications = [
  {
    id: 1,
    title: "Implementasi IoT untuk Smart Agriculture pada Lahan Pertanian Padi",
    authors: ["Dr. Ahmad Fauzi, M.T.", "Ir. Bambang Sudarsono"],
    journal: "Journal of Applied Technology",
    year: 2024,
    category: "teknologi",
    indexing: "Scopus Q2",
    citations: 15,
    downloads: 234,
  },
  {
    id: 2,
    title: "Analisis Kinerja Keuangan UMKM Pasca Pandemi di Jawa Tengah",
    authors: ["Dr. Siti Nurhaliza, M.Ak.", "Drs. Wahyu Pratomo"],
    journal: "Indonesian Accounting Review",
    year: 2024,
    category: "bisnis",
    indexing: "SINTA 2",
    citations: 8,
    downloads: 156,
  },
  {
    id: 3,
    title: "Pengembangan Sistem Monitoring Kualitas Air Berbasis Machine Learning",
    authors: ["Dr. Eko Prasetyo, M.Kom.", "Ir. Dewi Lestari"],
    journal: "International Journal of Environmental Engineering",
    year: 2023,
    category: "teknologi",
    indexing: "Scopus Q1",
    citations: 28,
    downloads: 412,
  },
  {
    id: 4,
    title: "Model Pembelajaran Vokasi Berbasis Industri 4.0",
    authors: ["Prof. Dr. Hadi Susanto, M.Pd.", "Dr. Ratna Sari"],
    journal: "Jurnal Pendidikan Vokasi",
    year: 2024,
    category: "sosial",
    indexing: "SINTA 1",
    citations: 12,
    downloads: 189,
  },
  {
    id: 5,
    title: "Optimasi Proses Produksi dengan Metode Lean Manufacturing",
    authors: ["Dr. Ir. Joko Widodo, M.Eng."],
    journal: "Manufacturing Technology Review",
    year: 2023,
    category: "terapan",
    indexing: "Scopus Q3",
    citations: 6,
    downloads: 98,
  },
];

const getIndexingColor = (indexing: string) => {
  if (indexing.includes("Scopus Q1")) return "bg-amber-500 text-white";
  if (indexing.includes("Scopus Q2")) return "bg-blue-500 text-white";
  if (indexing.includes("Scopus")) return "bg-green-500 text-white";
  if (indexing.includes("SINTA 1")) return "bg-purple-500 text-white";
  if (indexing.includes("SINTA 2")) return "bg-indigo-500 text-white";
  return "bg-muted text-muted-foreground";
};

export default function RisetPublikasi() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || pub.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <SubPageLayout
      title="Riset & Publikasi"
      subtitle="Portal Jurnal Ilmiah dan Inovasi Polines"
      breadcrumbs={[
        { label: "Riset & Inovasi" },
        { label: "Riset & Publikasi" },
      ]}
    >
      {/* Statistics Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statistics.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20"
          >
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-8 h-8 text-primary" />
              <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50">
                <TrendingUp className="w-3 h-3 mr-1" />
                {stat.trend}
              </Badge>
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="bg-card rounded-xl p-6 border border-border mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Cari judul penelitian atau nama peneliti..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[200px]">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Pilih Bidang" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          Publikasi Terbaru ({filteredPublications.length})
        </h3>
        
        {filteredPublications.map((pub, index) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge className={getIndexingColor(pub.indexing)}>
                    {pub.indexing}
                  </Badge>
                  <Badge variant="outline">
                    <Calendar className="w-3 h-3 mr-1" />
                    {pub.year}
                  </Badge>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 hover:text-primary cursor-pointer transition-colors">
                  {pub.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {pub.authors.join(", ")}
                </p>
                <p className="text-sm text-primary font-medium">
                  {pub.journal}
                </p>
              </div>
              
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {pub.citations} Sitasi
                  </span>
                  <span className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    {pub.downloads}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-1" />
                    Lihat
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    DOI
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 bg-gradient-to-r from-primary to-primary/80 rounded-xl p-8 text-primary-foreground"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Ingin Berkolaborasi?</h3>
            <p className="opacity-90">
              Hubungi P3M Polines untuk peluang kerjasama penelitian dan pengabdian masyarakat.
            </p>
          </div>
          <Button variant="secondary" size="lg" className="whitespace-nowrap">
            Hubungi P3M
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </motion.div>
    </SubPageLayout>
  );
}
