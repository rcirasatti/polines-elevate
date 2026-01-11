import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Award, Shield, FileCheck, Search, Filter, 
  Calendar, User, ExternalLink, TrendingUp, Lightbulb
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
  { title: "Riset & Publikasi", href: "/riset/publikasi" },
  { title: "Pengabdian Masyarakat", href: "/riset/pengabdian" },
  { title: "HAKI & Paten", href: "/riset/haki", active: true },
  { title: "Jurnal SIPMAS", href: "/riset/jurnal" },
  { title: "Produk Inovasi", href: "/riset/produk" },
];

const stats = [
  { label: "Paten Terdaftar", value: "45", icon: Shield, color: "text-blue-500" },
  { label: "Hak Cipta", value: "128", icon: FileCheck, color: "text-green-500" },
  { label: "Desain Industri", value: "32", icon: Lightbulb, color: "text-amber-500" },
  { label: "Merek Dagang", value: "18", icon: Award, color: "text-purple-500" },
];

const categories = [
  { value: "all", label: "Semua Jenis" },
  { value: "paten", label: "Paten" },
  { value: "hakcipta", label: "Hak Cipta" },
  { value: "desain", label: "Desain Industri" },
  { value: "merek", label: "Merek Dagang" },
];

const hakiItems = [
  {
    id: 1,
    title: "Sistem Monitoring Kualitas Air Berbasis IoT",
    inventor: "Dr. Eko Prasetyo, M.Kom.",
    department: "Teknik Elektro",
    type: "paten",
    registrationNo: "IDP000078234",
    year: 2024,
    status: "granted",
  },
  {
    id: 2,
    title: "Aplikasi Mobile Pembelajaran Vokasi Interaktif",
    inventor: "Dr. Siti Rahayu, M.Pd.",
    department: "Teknik Informatika",
    type: "hakcipta",
    registrationNo: "EC00202385612",
    year: 2023,
    status: "granted",
  },
  {
    id: 3,
    title: "Alat Pengolah Limbah Plastik Skala Rumah Tangga",
    inventor: "Ir. Bambang Sutrisno, M.T.",
    department: "Teknik Mesin",
    type: "paten",
    registrationNo: "IDP000076891",
    year: 2023,
    status: "granted",
  },
  {
    id: 4,
    title: "Desain Kemasan Produk UMKM Ramah Lingkungan",
    inventor: "Dr. Dewi Lestari, M.Sn.",
    department: "Administrasi Bisnis",
    type: "desain",
    registrationNo: "IDD000045123",
    year: 2024,
    status: "pending",
  },
  {
    id: 5,
    title: "Modul Praktikum Sistem Kendali Otomatis",
    inventor: "Dr. Ahmad Fauzi, M.T.",
    department: "Teknik Elektro",
    type: "hakcipta",
    registrationNo: "EC00202478901",
    year: 2024,
    status: "granted",
  },
  {
    id: 6,
    title: "Smart Farming System untuk Hidroponik",
    inventor: "Ir. Wahyu Pratomo, M.Eng.",
    department: "Teknik Elektro",
    type: "paten",
    registrationNo: "IDP000079456",
    year: 2024,
    status: "pending",
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "paten": return "bg-blue-500 text-white";
    case "hakcipta": return "bg-green-500 text-white";
    case "desain": return "bg-amber-500 text-white";
    case "merek": return "bg-purple-500 text-white";
    default: return "bg-muted text-muted-foreground";
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case "paten": return "Paten";
    case "hakcipta": return "Hak Cipta";
    case "desain": return "Desain Industri";
    case "merek": return "Merek Dagang";
    default: return type;
  }
};

export default function HakiPaten() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems = hakiItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.inventor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <SubPageLayout
      title="HAKI & Paten"
      subtitle="Perlindungan Kekayaan Intelektual Hasil Inovasi Polines"
      breadcrumbs={[
        { label: "Riset & Inovasi" },
        { label: "HAKI & Paten" },
      ]}
      sidebarTitle="Riset & Inovasi"
      sidebarLinks={sidebarLinks}
    >
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-xl p-4 border border-border text-center"
          >
            <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-2`} />
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Trend Chart Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 mb-8 border border-primary/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-6 h-6 text-primary" />
          <h3 className="font-semibold text-foreground">Tren Pendaftaran HAKI</h3>
        </div>
        <div className="h-32 bg-card rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Grafik Tren Pendaftaran HAKI 2020-2024</p>
        </div>
      </motion.div>

      {/* Search & Filter */}
      <div className="bg-card rounded-xl p-6 border border-border mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Cari judul atau nama inventor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[180px]">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Jenis HAKI" />
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

      {/* HAKI List */}
      <div className="space-y-4 mb-8">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          Daftar HAKI Terdaftar ({filteredItems.length})
        </h3>
        
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge className={getTypeColor(item.type)}>
                    {getTypeLabel(item.type)}
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className={item.status === "granted" 
                      ? "border-green-500 text-green-600" 
                      : "border-amber-500 text-amber-600"
                    }
                  >
                    {item.status === "granted" ? "Terdaftar" : "Dalam Proses"}
                  </Badge>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {item.inventor}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {item.year}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2">
                <code className="text-xs bg-muted px-2 py-1 rounded font-mono">
                  {item.registrationNo}
                </code>
                <Button variant="outline" size="sm">
                  Lihat Sertifikat
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-8 text-primary-foreground"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Ingin Mendaftarkan HAKI?</h3>
            <p className="opacity-90">
              Hubungi Sentra HKI Polines untuk konsultasi dan pendampingan pendaftaran 
              Hak Kekayaan Intelektual hasil inovasi Anda.
            </p>
          </div>
          <Button variant="secondary" size="lg" className="whitespace-nowrap">
            Hubungi Sentra HKI
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </motion.div>
    </SubPageLayout>
  );
}
