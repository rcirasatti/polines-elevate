import { motion } from "framer-motion";
import { 
  BookOpen, ExternalLink, Download, Calendar, Users,
  FileText, Award, TrendingUp, Search
} from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const sidebarLinks = [
  { title: "Riset & Publikasi", href: "/riset/publikasi" },
  { title: "Pengabdian Masyarakat", href: "/riset/pengabdian" },
  { title: "HAKI & Paten", href: "/riset/haki" },
  { title: "Jurnal SIPMAS", href: "/riset/jurnal", active: true },
  { title: "Produk Inovasi", href: "/riset/produk" },
];

const journalInfo = {
  name: "SIPMAS: Jurnal Pengabdian Masyarakat",
  issn: "2XXX-XXXX (Online)",
  publisher: "P3M Politeknik Negeri Semarang",
  frequency: "2 kali setahun (Juni & Desember)",
  accreditation: "SINTA 4",
  editor: "Dr. Ir. Hadi Susanto, M.T.",
};

const latestEditions = [
  {
    id: 1,
    volume: "Vol. 8 No. 2",
    month: "Desember 2024",
    articles: 12,
    downloads: 1240,
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200",
  },
  {
    id: 2,
    volume: "Vol. 8 No. 1",
    month: "Juni 2024",
    articles: 10,
    downloads: 2150,
    cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200",
  },
  {
    id: 3,
    volume: "Vol. 7 No. 2",
    month: "Desember 2023",
    articles: 11,
    downloads: 3420,
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200",
  },
];

const featuredArticles = [
  {
    id: 1,
    title: "Implementasi Program Desa Wisata Berbasis Komunitas di Kabupaten Semarang",
    authors: ["Dr. Siti Aminah, M.Pd.", "Ir. Bambang Santoso"],
    volume: "Vol. 8 No. 2 (2024)",
    downloads: 156,
    citations: 8,
  },
  {
    id: 2,
    title: "Pelatihan Keterampilan Digital untuk Pelaku UMKM Batik",
    authors: ["Dr. Ahmad Fauzi, M.Kom.", "Dra. Ratna Sari, M.M."],
    volume: "Vol. 8 No. 2 (2024)",
    downloads: 142,
    citations: 5,
  },
  {
    id: 3,
    title: "Pendampingan Pengelolaan Keuangan Koperasi Nelayan",
    authors: ["Dr. Wahyu Pratomo, M.Ak."],
    volume: "Vol. 8 No. 1 (2024)",
    downloads: 198,
    citations: 12,
  },
];

const stats = [
  { label: "Total Artikel", value: "245", icon: FileText },
  { label: "Total Unduhan", value: "45.2K", icon: Download },
  { label: "Total Sitasi", value: "1.2K", icon: TrendingUp },
  { label: "Penulis Aktif", value: "180+", icon: Users },
];

export default function JurnalSipmas() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SubPageLayout
      title="Jurnal SIPMAS"
      subtitle="Jurnal Pengabdian Masyarakat Politeknik Negeri Semarang"
      breadcrumbs={[
        { label: "Riset & Inovasi" },
        { label: "Jurnal SIPMAS" },
      ]}
      sidebarTitle="Riset & Inovasi"
      sidebarLinks={sidebarLinks}
    >
      {/* Journal Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 mb-8 border border-primary/20"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <div className="w-32 h-40 bg-card rounded-lg shadow-lg flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-primary" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-xl font-bold text-foreground">{journalInfo.name}</h2>
              <Badge className="bg-green-500 text-white">{journalInfo.accreditation}</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
              <p><strong>ISSN:</strong> {journalInfo.issn}</p>
              <p><strong>Penerbit:</strong> {journalInfo.publisher}</p>
              <p><strong>Frekuensi:</strong> {journalInfo.frequency}</p>
              <p><strong>Editor:</strong> {journalInfo.editor}</p>
            </div>
            <div className="flex gap-3">
              <Button variant="default">
                <ExternalLink className="w-4 h-4 mr-2" />
                Kunjungi Jurnal
              </Button>
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Panduan Penulis
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-xl p-4 border border-border text-center"
          >
            <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Latest Editions */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-primary" />
          Edisi Terbaru
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {latestEditions.map((edition, index) => (
            <motion.div
              key={edition.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-primary/50" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {edition.volume}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">{edition.month}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{edition.articles} Artikel</span>
                  <span className="flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    {edition.downloads}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Cari artikel berdasarkan judul atau penulis..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Featured Articles */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-primary" />
          Artikel Populer
        </h3>
        <div className="space-y-4">
          {featuredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all"
            >
              <h4 className="font-semibold text-foreground mb-2 hover:text-primary cursor-pointer transition-colors">
                {article.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {article.authors.join(", ")}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <Badge variant="outline">{article.volume}</Badge>
                <span className="flex items-center gap-1">
                  <Download className="w-3 h-3" />
                  {article.downloads} unduhan
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3" />
                  {article.citations} sitasi
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Submit CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-xl p-8 border border-secondary/30"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Submit Artikel Anda
            </h3>
            <p className="text-muted-foreground">
              Jurnal SIPMAS menerima artikel hasil pengabdian masyarakat dari 
              seluruh civitas akademika. Submission terbuka sepanjang tahun.
            </p>
          </div>
          <Button variant="gold" size="lg" className="whitespace-nowrap">
            Submit Artikel
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </motion.div>
    </SubPageLayout>
  );
}
