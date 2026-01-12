import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, BookOpen, FileText, Database, ShieldCheck,
  Download, ExternalLink, Clock, Book, Bookmark
} from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  color: string;
}

interface NewBook {
  id: string;
  title: string;
  author: string;
  category: string;
  year: string;
}

const services: ServiceItem[] = [
  {
    id: "1",
    title: "E-Journal",
    description: "Akses ribuan jurnal ilmiah nasional dan internasional",
    icon: FileText,
    href: "#",
    color: "bg-blue-500",
  },
  {
    id: "2",
    title: "Repositori",
    description: "Koleksi skripsi, tesis, dan karya ilmiah mahasiswa",
    icon: Database,
    href: "#",
    color: "bg-green-500",
  },
  {
    id: "3",
    title: "Cek Plagiarisme",
    description: "Layanan pengecekan keaslian karya tulis dengan Turnitin",
    icon: ShieldCheck,
    href: "#",
    color: "bg-purple-500",
  },
  {
    id: "4",
    title: "Bebas Pustaka",
    description: "Pengajuan surat keterangan bebas pustaka online",
    icon: BookOpen,
    href: "#",
    color: "bg-orange-500",
  },
];

const newBooks: NewBook[] = [
  {
    id: "1",
    title: "Pemrograman Python untuk Data Science",
    author: "Dr. Ahmad Fauzi, M.Kom",
    category: "Teknologi Informasi",
    year: "2024",
  },
  {
    id: "2",
    title: "Manajemen Keuangan Modern",
    author: "Prof. Siti Rahayu, MBA",
    category: "Bisnis & Ekonomi",
    year: "2024",
  },
  {
    id: "3",
    title: "Teknik Konstruksi Bangunan Tahan Gempa",
    author: "Ir. Budi Santoso, MT",
    category: "Teknik Sipil",
    year: "2024",
  },
  {
    id: "4",
    title: "Internet of Things: Konsep dan Implementasi",
    author: "Dr. Hendra Wijaya",
    category: "Elektronika",
    year: "2024",
  },
  {
    id: "5",
    title: "Akuntansi Syariah Kontemporer",
    author: "Dra. Nurul Hidayah, M.Ak",
    category: "Akuntansi",
    year: "2024",
  },
];

const quickStats = [
  { label: "Koleksi Buku", value: "45.000+", icon: Book },
  { label: "E-Journal", value: "12.000+", icon: FileText },
  { label: "Karya Ilmiah", value: "8.500+", icon: Bookmark },
  { label: "Pengunjung/Bulan", value: "5.000+", icon: Clock },
];

const sidebarLinks = [
  { title: "Program Studi", href: "/akademik/program-studi" },
  { title: "Beasiswa", href: "/akademik/beasiswa" },
  { title: "Kegiatan Kampus", href: "/akademik/kegiatan" },
  { title: "Perpustakaan (PERAK)", href: "/akademik/perpustakaan", active: true },
  { title: "Kalender Akademik", href: "/akademik/kalender" },
  { title: "Akreditasi", href: "/akademik/akreditasi" },
  { title: "Pedoman Akademik", href: "/akademik/pedoman" },
];

export default function Perpustakaan() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SubPageLayout
      title="Perpustakaan & Arsip (PERAK)"
      subtitle="Pusat sumber belajar dan informasi Politeknik Negeri Semarang"
      breadcrumbs={[
        { label: "Akademik", href: "/akademik" },
        { label: "Perpustakaan" },
      ]}
    >
      <div className="space-y-8">
        {/* Main Search Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold">Cari Koleksi Perpustakaan</h2>
            <p className="text-primary-foreground/80">
              Telusuri katalog buku, jurnal, dan karya ilmiah Polines
            </p>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
              <Input
                placeholder="Ketik judul buku, penulis, atau kata kunci..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg bg-white text-foreground rounded-xl border-0"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Cari
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="bg-white/20 text-primary-foreground cursor-pointer hover:bg-white/30">
                Teknik Elektro
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-primary-foreground cursor-pointer hover:bg-white/30">
                Akuntansi
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-primary-foreground cursor-pointer hover:bg-white/30">
                Manajemen
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-primary-foreground cursor-pointer hover:bg-white/30">
                Konstruksi
              </Badge>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center">
                <CardContent className="p-4">
                  <stat.icon className="w-8 h-8 mx-auto text-primary mb-2" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Layanan Perpustakaan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all cursor-pointer group h-full">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${service.color} text-white flex-shrink-0`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {service.description}
                      </p>
                      <Button
                        variant="link"
                        className="p-0 h-auto mt-2 text-primary"
                      >
                        Akses Layanan
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* New Arrivals */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-secondary" />
              Buku Terbaru
            </h2>
            <Button variant="outline" size="sm">
              Lihat Semua
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {newBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-16 bg-gradient-to-br from-primary to-secondary rounded flex items-center justify-center flex-shrink-0">
                      <Book className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate">
                        {book.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{book.author}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {book.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{book.year}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Operating Hours & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="w-5 h-5 text-primary" />
                Jam Operasional
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Senin - Kamis</span>
                <span className="font-medium">07.30 - 16.00 WIB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Jumat</span>
                <span className="font-medium">07.30 - 16.30 WIB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sabtu - Minggu</span>
                <span className="font-medium text-red-500">Tutup</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BookOpen className="w-5 h-5 text-primary" />
                Kontak Perpustakaan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email</span>
                <span className="font-medium">perpustakaan@polines.ac.id</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Telepon</span>
                <span className="font-medium">(024) 7473417 ext. 212</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Lokasi</span>
                <span className="font-medium">Gedung AD Lt. 1</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SubPageLayout>
  );
}
