import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, MapPin, Calendar, Users, Heart, Camera,
  ArrowRight, Filter, ExternalLink, Target
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
  { title: "Pengabdian Masyarakat", href: "/riset/pengabdian", active: true },
  { title: "HAKI & Paten", href: "/riset/haki" },
  { title: "Jurnal SIPMAS", href: "/riset/jurnal" },
  { title: "Produk Inovasi", href: "/riset/produk" },
];

const impactStats = [
  { label: "Desa Mitra", value: "85+", icon: MapPin },
  { label: "Program Aktif", value: "42", icon: Target },
  { label: "Penerima Manfaat", value: "15.000+", icon: Users },
  { label: "Dosen Terlibat", value: "180", icon: Heart },
];

const categories = [
  { value: "all", label: "Semua Bidang" },
  { value: "teknologi", label: "Teknologi Tepat Guna" },
  { value: "ekonomi", label: "Pemberdayaan Ekonomi" },
  { value: "pendidikan", label: "Pendidikan & Pelatihan" },
  { value: "lingkungan", label: "Lingkungan & Kesehatan" },
];

const programs = [
  {
    id: 1,
    title: "Pelatihan Digital Marketing untuk UMKM Batik Pekalongan",
    location: "Kab. Pekalongan, Jawa Tengah",
    year: 2024,
    category: "ekonomi",
    beneficiaries: 150,
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400",
    description: "Program pemberdayaan pelaku UMKM batik dalam memasarkan produk secara online melalui platform marketplace dan media sosial.",
  },
  {
    id: 2,
    title: "Instalasi Panel Surya untuk Pesantren di Demak",
    location: "Kab. Demak, Jawa Tengah",
    year: 2024,
    category: "teknologi",
    beneficiaries: 500,
    status: "completed",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400",
    description: "Pemasangan sistem energi terbarukan untuk membantu pesantren menghemat biaya listrik dan ramah lingkungan.",
  },
  {
    id: 3,
    title: "Workshop Robotika untuk Siswa SMA/SMK Semarang",
    location: "Kota Semarang, Jawa Tengah",
    year: 2024,
    category: "pendidikan",
    beneficiaries: 300,
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
    description: "Pelatihan dasar robotika dan pemrograman untuk mempersiapkan generasi muda menghadapi era industri 4.0.",
  },
  {
    id: 4,
    title: "Pengelolaan Sampah Terpadu di Kelurahan Tembalang",
    location: "Kota Semarang, Jawa Tengah",
    year: 2023,
    category: "lingkungan",
    beneficiaries: 2000,
    status: "completed",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400",
    description: "Program pengelolaan sampah berbasis komunitas dengan sistem bank sampah dan daur ulang.",
  },
  {
    id: 5,
    title: "Pendampingan Akuntansi untuk Koperasi Nelayan",
    location: "Kab. Kendal, Jawa Tengah",
    year: 2024,
    category: "ekonomi",
    beneficiaries: 75,
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
    description: "Pelatihan pencatatan keuangan dan pengelolaan koperasi untuk kelompok nelayan.",
  },
  {
    id: 6,
    title: "Smart Farming untuk Petani Sayur Bandungan",
    location: "Kab. Semarang, Jawa Tengah",
    year: 2023,
    category: "teknologi",
    beneficiaries: 120,
    status: "completed",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400",
    description: "Implementasi teknologi IoT untuk monitoring kelembaban tanah dan irigasi otomatis.",
  },
];

const getStatusColor = (status: string) => {
  return status === "ongoing" 
    ? "bg-green-500 text-white" 
    : "bg-muted text-muted-foreground";
};

const getStatusLabel = (status: string) => {
  return status === "ongoing" ? "Sedang Berjalan" : "Selesai";
};

export default function PengabdianMasyarakat() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || program.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <SubPageLayout
      title="Pengabdian Masyarakat"
      subtitle="Kontribusi Nyata Polines untuk Masyarakat"
      breadcrumbs={[
        { label: "Riset & Inovasi" },
        { label: "Pengabdian Masyarakat" },
      ]}
    >
      {/* Hero Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-2xl overflow-hidden mb-8 h-64"
      >
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200"
          alt="Pengabdian Masyarakat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
          <div className="p-8 text-primary-foreground max-w-xl">
            <h2 className="text-2xl font-bold mb-2">Impact Gallery</h2>
            <p className="opacity-90">
              Melalui program pengabdian masyarakat, Polines berkomitmen memberikan dampak 
              positif bagi masyarakat sekitar dengan memanfaatkan keahlian akademik dan teknologi.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Impact Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {impactStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-xl p-4 border border-border text-center"
          >
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <stat.icon className="w-6 h-6 text-secondary" />
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
              placeholder="Cari program atau lokasi..."
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

      {/* Programs Grid */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <Camera className="w-5 h-5 text-primary" />
          Galeri Program ({filteredPrograms.length})
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={getStatusColor(program.status)}>
                    {getStatusLabel(program.status)}
                  </Badge>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {program.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {program.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {program.year}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    <Users className="w-3 h-3 mr-1" />
                    {program.beneficiaries} Penerima
                  </Badge>
                  <Button variant="ghost" size="sm" className="text-primary">
                    Detail
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-xl p-8 border border-secondary/30"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Ajukan Kerjasama Pengabdian
            </h3>
            <p className="text-muted-foreground">
              Apakah komunitas atau instansi Anda membutuhkan pendampingan dari tim Polines? 
              Hubungi kami untuk program kerjasama pengabdian masyarakat.
            </p>
          </div>
          <Button variant="gold" size="lg" className="whitespace-nowrap">
            Ajukan Kerjasama
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </motion.div>
    </SubPageLayout>
  );
}
