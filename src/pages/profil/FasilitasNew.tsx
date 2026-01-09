import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  ArrowRight,
  FlaskConical,
  MonitorPlay,
  Dumbbell,
  Building,
  Coffee,
  BookOpen,
  Wifi,
  Zap,
  Users,
  ChevronRight,
  Map,
  Camera,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Facility {
  id: number;
  name: string;
  category: string;
  location: string;
  description: string;
  capacity?: string;
  features?: string[];
  icon: React.ElementType;
}

const categories = [
  { id: "all", label: "Semua", icon: Building },
  { id: "lab", label: "Laboratorium", icon: FlaskConical },
  { id: "class", label: "Ruang Kelas", icon: MonitorPlay },
  { id: "sport", label: "Olahraga", icon: Dumbbell },
  { id: "general", label: "Umum", icon: Coffee },
];

const facilities: Facility[] = [
  {
    id: 1,
    name: "Laboratorium Komputer Terpadu",
    category: "lab",
    location: "Gedung C, Lantai 1-2",
    description: "Laboratorium komputer modern dengan 200+ workstation untuk praktikum pemrograman, jaringan, dan multimedia.",
    capacity: "200 mahasiswa",
    features: ["PC High-End", "Dual Monitor", "AC Central", "Internet 1 Gbps"],
    icon: MonitorPlay,
  },
  {
    id: 2,
    name: "Laboratorium Elektronika",
    category: "lab",
    location: "Gedung D, Lantai 1",
    description: "Lab lengkap untuk praktikum elektronika analog dan digital dengan peralatan standar industri.",
    capacity: "40 mahasiswa",
    features: ["Oscilloscope Digital", "Function Generator", "Multimeter", "Power Supply"],
    icon: Zap,
  },
  {
    id: 3,
    name: "Bengkel Mesin CNC",
    category: "lab",
    location: "Gedung E, Lantai 1",
    description: "Bengkel produksi dengan mesin CNC untuk pelatihan manufaktur presisi tinggi.",
    capacity: "30 mahasiswa",
    features: ["CNC Milling", "CNC Lathe", "CAM Software", "3D Scanner"],
    icon: FlaskConical,
  },
  {
    id: 4,
    name: "Perpustakaan Digital",
    category: "general",
    location: "Gedung A, Lantai 2-3",
    description: "Perpustakaan modern dengan koleksi 50.000+ buku dan akses e-journal internasional.",
    capacity: "500 pengunjung",
    features: ["E-Library", "Ruang Diskusi", "Self-Service", "Hotspot WiFi"],
    icon: BookOpen,
  },
  {
    id: 5,
    name: "Gedung Serba Guna",
    category: "general",
    location: "Area Tengah Kampus",
    description: "Aula besar untuk wisuda, seminar nasional, dan kegiatan kemahasiswaan.",
    capacity: "2.000 orang",
    features: ["Sound System Pro", "LED Screen", "AC Central", "Backstage"],
    icon: Users,
  },
  {
    id: 6,
    name: "Masjid Al-Hikmah",
    category: "general",
    location: "Sisi Barat Kampus",
    description: "Masjid kampus yang megah untuk kegiatan ibadah civitas akademika.",
    capacity: "1.000 jamaah",
    features: ["AC Central", "Tempat Wudhu Luas", "Perpustakaan Islam", "Ruang Kajian"],
    icon: Building,
  },
  {
    id: 7,
    name: "Lapangan Olahraga Terpadu",
    category: "sport",
    location: "Area Luar Kampus",
    description: "Kompleks olahraga dengan lapangan basket, voli, futsal, dan track lari.",
    capacity: "1.000 orang",
    features: ["Lapangan Basket", "Lapangan Voli", "Track Lari", "Tribune"],
    icon: Dumbbell,
  },
  {
    id: 8,
    name: "Wall Climbing",
    category: "sport",
    location: "Gedung Olahraga",
    description: "Arena panjat tebing standar nasional untuk latihan dan kompetisi.",
    capacity: "50 orang",
    features: ["Dinding 15m", "Auto Belay", "Bouldering Area", "Alat Safety"],
    icon: Dumbbell,
  },
  {
    id: 9,
    name: "Student Center",
    category: "general",
    location: "Gedung B, Lantai 1",
    description: "Pusat kegiatan mahasiswa dengan ruang organisasi dan co-working space.",
    capacity: "200 orang",
    features: ["Co-Working", "Meeting Room", "Pantry", "Locker"],
    icon: Coffee,
  },
  {
    id: 10,
    name: "Smart Classroom",
    category: "class",
    location: "Gedung A, Lantai 3",
    description: "Ruang kelas cerdas dengan teknologi pembelajaran interaktif.",
    capacity: "50 mahasiswa",
    features: ["Interactive Board", "Video Conference", "E-Learning", "Recording"],
    icon: MonitorPlay,
  },
  {
    id: 11,
    name: "Ruang Kelas Teori",
    category: "class",
    location: "Gedung A, B, C",
    description: "Ruang kuliah reguler dengan AC dan proyektor LCD.",
    capacity: "40-60 mahasiswa",
    features: ["AC", "Proyektor", "Whiteboard", "WiFi"],
    icon: MonitorPlay,
  },
  {
    id: 12,
    name: "Hotspot Area",
    category: "general",
    location: "Seluruh Kampus",
    description: "Area WiFi gratis untuk mahasiswa di seluruh kampus.",
    capacity: "Unlimited",
    features: ["Free WiFi", "1 Gbps Speed", "24/7 Access", "Indoor & Outdoor"],
    icon: Wifi,
  },
];

const sidebarLinks = [
  { title: "Tentang Polines", href: "/profil/tentang", active: false },
  { title: "Struktur Organisasi", href: "/profil/struktur-organisasi", active: false },
  { title: "Rencana Strategis", href: "/profil/rencana-strategis", active: false },
  { title: "Laporan Kinerja", href: "/profil/laporan-kinerja", active: false },
  { title: "Fasilitas", href: "/profil/fasilitas", active: true },
  { title: "Sumber Daya Bagian", href: "/profil/sumber-daya", active: false },
  { title: "Peta Kampus", href: "/profil/peta-kampus", active: false },
];

export default function FasilitasNew() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  const filteredFacilities = facilities.filter((facility) => {
    const matchesCategory = activeCategory === "all" || facility.category === activeCategory;
    const matchesSearch =
      facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      facility.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <SubPageLayout
      title="Fasilitas Kampus"
      subtitle="Infrastruktur Modern untuk Pembelajaran Berkualitas"
      breadcrumbs={[
        { label: "Profil", href: "/profil/tentang" },
        { label: "Fasilitas" },
      ]}
      sidebarTitle="Menu Profil"
      sidebarLinks={sidebarLinks}
    >
      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Cari fasilitas atau lokasi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8 overflow-x-auto pb-2">
        <div className="flex gap-2 min-w-max">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="gap-2"
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {filteredFacilities.map((facility, index) => (
          <motion.div
            key={facility.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card
              className="h-full cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 group overflow-hidden"
              onClick={() => setSelectedFacility(facility)}
            >
              {/* Image Placeholder */}
              <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <facility.icon className="w-16 h-16 text-primary/30" />
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-xs bg-white/90 text-primary font-medium px-2 py-1 rounded-full">
                    {categories.find((c) => c.id === facility.category)?.label}
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <CardContent className="p-5">
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {facility.name}
                </h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  {facility.location}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {facility.description}
                </p>
                <div className="flex items-center justify-between">
                  {facility.capacity && (
                    <span className="text-xs text-muted-foreground">
                      Kapasitas: {facility.capacity}
                    </span>
                  )}
                  <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredFacilities.length === 0 && (
        <div className="text-center py-12">
          <Building className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Tidak ada fasilitas yang ditemukan.</p>
        </div>
      )}

      {/* Map Integration CTA */}
      <Card className="bg-gradient-to-r from-primary to-polines-blue-light text-white">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Map className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Peta Kampus Interaktif</h3>
                <p className="text-white/80 text-sm">
                  Temukan lokasi fasilitas dengan mudah melalui peta digital
                </p>
              </div>
            </div>
            <Link to="/profil/peta-kampus">
              <Button variant="secondary" className="gap-2">
                Buka Peta
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Facility Detail Dialog */}
      <Dialog open={!!selectedFacility} onOpenChange={() => setSelectedFacility(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{selectedFacility?.name}</DialogTitle>
          </DialogHeader>
          {selectedFacility && (
            <div>
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                <selectedFacility.icon className="w-20 h-20 text-primary/30" />
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="w-4 h-4 text-primary" />
                {selectedFacility.location}
              </div>

              <p className="text-muted-foreground mb-4">{selectedFacility.description}</p>

              {selectedFacility.capacity && (
                <div className="mb-4">
                  <span className="text-sm font-medium text-foreground">Kapasitas: </span>
                  <span className="text-sm text-muted-foreground">{selectedFacility.capacity}</span>
                </div>
              )}

              {selectedFacility.features && (
                <div>
                  <span className="text-sm font-medium text-foreground block mb-2">Fitur:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedFacility.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SubPageLayout>
  );
}
