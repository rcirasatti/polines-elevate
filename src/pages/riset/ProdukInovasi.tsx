import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Lightbulb, Search, Filter, ExternalLink, Award,
  Cpu, Zap, Leaf, Building2, ArrowRight
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
  { title: "HAKI & Paten", href: "/riset/haki" },
  { title: "Jurnal SIPMAS", href: "/riset/jurnal" },
  { title: "Produk Inovasi", href: "/riset/produk", active: true },
];

const categories = [
  { value: "all", label: "Semua Kategori" },
  { value: "teknologi", label: "Teknologi" },
  { value: "energi", label: "Energi" },
  { value: "lingkungan", label: "Lingkungan" },
  { value: "industri", label: "Industri" },
];

const products = [
  {
    id: 1,
    name: "SmartFarm IoT System",
    description: "Sistem monitoring pertanian cerdas berbasis IoT untuk optimalisasi irigasi dan pemupukan otomatis.",
    category: "teknologi",
    icon: Cpu,
    status: "commercialized",
    developer: "Tim Teknik Elektro",
    year: 2024,
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400",
  },
  {
    id: 2,
    name: "Solar Water Purifier",
    description: "Alat penyaring air tenaga surya untuk daerah terpencil tanpa akses listrik.",
    category: "energi",
    icon: Zap,
    status: "prototype",
    developer: "Tim Teknik Mesin",
    year: 2024,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400",
  },
  {
    id: 3,
    name: "Eco-Brick Machine",
    description: "Mesin pengolah sampah plastik menjadi material bata ramah lingkungan.",
    category: "lingkungan",
    icon: Leaf,
    status: "commercialized",
    developer: "Tim Teknik Sipil",
    year: 2023,
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400",
  },
  {
    id: 4,
    name: "Smart Quality Control",
    description: "Sistem deteksi cacat produk berbasis AI untuk lini produksi industri manufaktur.",
    category: "industri",
    icon: Building2,
    status: "development",
    developer: "Tim Teknik Informatika",
    year: 2024,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
  },
  {
    id: 5,
    name: "Portable Weather Station",
    description: "Stasiun cuaca portabel untuk prediksi cuaca lokal pada sektor pertanian.",
    category: "teknologi",
    icon: Cpu,
    status: "prototype",
    developer: "Tim Teknik Elektro",
    year: 2024,
    image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=400",
  },
  {
    id: 6,
    name: "Biogas Digester Mini",
    description: "Reaktor biogas skala rumah tangga untuk pengolahan limbah organik menjadi energi.",
    category: "energi",
    icon: Zap,
    status: "commercialized",
    developer: "Tim Teknik Mesin",
    year: 2023,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "commercialized": return "bg-green-500 text-white";
    case "prototype": return "bg-blue-500 text-white";
    case "development": return "bg-amber-500 text-white";
    default: return "bg-muted text-muted-foreground";
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case "commercialized": return "Dikomersilkan";
    case "prototype": return "Prototipe";
    case "development": return "Pengembangan";
    default: return status;
  }
};

export default function ProdukInovasi() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <SubPageLayout
      title="Produk Inovasi"
      subtitle="Hasil Karya Inovasi dan Teknologi Tepat Guna Polines"
      breadcrumbs={[
        { label: "Riset & Inovasi" },
        { label: "Produk Inovasi" },
      ]}
      sidebarTitle="Riset & Inovasi"
      sidebarLinks={sidebarLinks}
    >
      {/* Hero Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-2xl p-6 mb-8 border border-secondary/30"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-secondary/30 rounded-2xl flex items-center justify-center">
              <Lightbulb className="w-10 h-10 text-secondary" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Showcase Inovasi Polines
            </h2>
            <p className="text-muted-foreground">
              Produk-produk inovasi hasil riset dosen dan mahasiswa yang siap dikomersilkan 
              dan diterapkan untuk solusi masalah nyata di masyarakat.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">28</p>
              <p className="text-sm text-muted-foreground">Produk</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">12</p>
              <p className="text-sm text-muted-foreground">Dikomersilkan</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Search & Filter */}
      <div className="bg-card rounded-xl p-6 border border-border mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Cari produk inovasi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[180px]">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Kategori" />
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

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <Badge className={getStatusColor(product.status)}>
                  {getStatusLabel(product.status)}
                </Badge>
              </div>
              <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center">
                <product.icon className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {product.name}
              </h4>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground">
                  <p>{product.developer}</p>
                  <p>{product.year}</p>
                </div>
                <Button variant="ghost" size="sm" className="text-primary">
                  Detail
                  <ArrowRight className="w-4 h-4 ml-1" />
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
            <h3 className="text-xl font-bold mb-2">
              Tertarik dengan Produk Kami?
            </h3>
            <p className="opacity-90">
              Hubungi P3M Polines untuk informasi lebih lanjut tentang lisensi, 
              kerjasama produksi, atau pembelian produk inovasi.
            </p>
          </div>
          <Button variant="secondary" size="lg" className="whitespace-nowrap">
            <Award className="w-4 h-4 mr-2" />
            Hubungi P3M
          </Button>
        </div>
      </motion.div>
    </SubPageLayout>
  );
}
