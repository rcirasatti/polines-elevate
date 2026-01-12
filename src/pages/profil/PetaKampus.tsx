import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Navigation,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ChevronDown,
  ChevronRight,
  Building,
  FlaskConical,
  GraduationCap,
  Car,
  Coffee,
  ExternalLink,
  Info,
} from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MapLocation {
  id: string;
  name: string;
  category: string;
  description: string;
  floors?: string[];
  coordinates: { x: number; y: number };
}

const categories = [
  { id: "kuliah", label: "Gedung Kuliah", icon: GraduationCap, color: "bg-blue-500" },
  { id: "lab", label: "Laboratorium", icon: FlaskConical, color: "bg-green-500" },
  { id: "admin", label: "Administrasi", icon: Building, color: "bg-purple-500" },
  { id: "parkir", label: "Parkir", icon: Car, color: "bg-orange-500" },
  { id: "fasum", label: "Fasilitas Umum", icon: Coffee, color: "bg-pink-500" },
];

const locations: MapLocation[] = [
  {
    id: "gedung-a",
    name: "Gedung A (Rektorat)",
    category: "admin",
    description: "Gedung pusat administrasi dan rektorat Polines",
    floors: ["Lantai 1: Lobby & Informasi", "Lantai 2: Ruang Direktur", "Lantai 3: Ruang Rapat"],
    coordinates: { x: 40, y: 30 },
  },
  {
    id: "gedung-b",
    name: "Gedung B",
    category: "kuliah",
    description: "Gedung perkuliahan Jurusan Administrasi Bisnis",
    floors: ["Lantai 1-2: Ruang Kuliah", "Lantai 3: Ruang Dosen"],
    coordinates: { x: 55, y: 25 },
  },
  {
    id: "gedung-c",
    name: "Gedung C",
    category: "lab",
    description: "Gedung Laboratorium Komputer Terpadu",
    floors: ["Lantai 1: Lab Komputer Dasar", "Lantai 2: Lab Jaringan", "Lantai 3: Lab Multimedia"],
    coordinates: { x: 70, y: 35 },
  },
  {
    id: "gedung-d",
    name: "Gedung D",
    category: "lab",
    description: "Gedung Laboratorium Teknik Elektro",
    floors: ["Lantai 1: Lab Elektronika", "Lantai 2: Lab Telekomunikasi"],
    coordinates: { x: 75, y: 50 },
  },
  {
    id: "gedung-e",
    name: "Gedung E",
    category: "lab",
    description: "Bengkel dan Workshop Teknik Mesin",
    floors: ["Lantai 1: Bengkel CNC", "Lantai 2: Bengkel Las"],
    coordinates: { x: 60, y: 60 },
  },
  {
    id: "perpustakaan",
    name: "Perpustakaan Pusat",
    category: "fasum",
    description: "Perpustakaan digital dengan koleksi 50.000+ buku",
    floors: ["Lantai 1: Sirkulasi", "Lantai 2: Ruang Baca", "Lantai 3: E-Library"],
    coordinates: { x: 45, y: 45 },
  },
  {
    id: "masjid",
    name: "Masjid Al-Hikmah",
    category: "fasum",
    description: "Masjid kampus untuk ibadah civitas akademika",
    coordinates: { x: 25, y: 40 },
  },
  {
    id: "gsg",
    name: "Gedung Serba Guna",
    category: "fasum",
    description: "Aula untuk wisuda dan kegiatan besar",
    coordinates: { x: 50, y: 75 },
  },
  {
    id: "parkir-utama",
    name: "Parkir Utama",
    category: "parkir",
    description: "Area parkir kendaraan roda 4 utama",
    coordinates: { x: 30, y: 70 },
  },
  {
    id: "parkir-motor",
    name: "Parkir Motor",
    category: "parkir",
    description: "Area parkir kendaraan roda 2",
    coordinates: { x: 80, y: 70 },
  },
];

const accessPoints = [
  { name: "Gerbang Utama", description: "Jl. Prof. Sudarto, Tembalang" },
  { name: "Gerbang Belakang", description: "Akses dari Jl. Kertanegara" },
  { name: "Area Parkir Mahasiswa", description: "Kapasitas 500 motor, 100 mobil" },
];

const sidebarLinks = [
  { title: "Tentang Polines", href: "/profil/tentang", active: false },
  { title: "Struktur Organisasi", href: "/profil/struktur-organisasi", active: false },
  { title: "Rencana Strategis", href: "/profil/rencana-strategis", active: false },
  { title: "Laporan Kinerja", href: "/profil/laporan-kinerja", active: false },
  { title: "Fasilitas", href: "/profil/fasilitas", active: false },
  { title: "Sumber Daya Bagian", href: "/profil/sumber-daya", active: false },
  { title: "Peta Kampus", href: "/profil/peta-kampus", active: true },
];

export default function PetaKampus() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["kuliah", "lab"]);
  const [zoomLevel, setZoomLevel] = useState(1);

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const filteredLocations = locations.filter(
    (loc) =>
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCategoryIcon = (categoryId: string) => {
    const cat = categories.find((c) => c.id === categoryId);
    return cat?.icon || Building;
  };

  const getCategoryColor = (categoryId: string) => {
    const cat = categories.find((c) => c.id === categoryId);
    return cat?.color || "bg-gray-500";
  };

  return (
    <SubPageLayout
      title="Peta Kampus Interaktif"
      subtitle="Temukan lokasi gedung dan fasilitas dengan mudah"
      breadcrumbs={[
        { label: "Profil", href: "/profil/tentang" },
        { label: "Peta Kampus" },
      ]}

    >
      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Cari gedung atau ruangan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Main Layout: Sidebar + Map */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Location Sidebar */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <Card className="h-full">
            <CardContent className="p-4">
              <ScrollArea className="h-[400px] lg:h-[500px]">
                <div className="space-y-2">
                  {categories.map((category) => {
                    const categoryLocations = filteredLocations.filter(
                      (loc) => loc.category === category.id
                    );
                    if (categoryLocations.length === 0) return null;

                    return (
                      <div key={category.id}>
                        <button
                          onClick={() => toggleCategory(category.id)}
                          className="w-full flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 ${category.color} rounded-lg flex items-center justify-center`}>
                              <category.icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium text-foreground text-sm">{category.label}</span>
                            <span className="text-xs text-muted-foreground">({categoryLocations.length})</span>
                          </div>
                          {expandedCategories.includes(category.id) ? (
                            <ChevronDown className="w-4 h-4 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-muted-foreground" />
                          )}
                        </button>

                        {expandedCategories.includes(category.id) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            className="ml-4 space-y-1"
                          >
                            {categoryLocations.map((loc) => (
                              <button
                                key={loc.id}
                                onClick={() => setSelectedLocation(loc)}
                                className={`w-full text-left p-3 rounded-lg transition-colors text-sm ${
                                  selectedLocation?.id === loc.id
                                    ? "bg-primary text-primary-foreground"
                                    : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 flex-shrink-0" />
                                  <span>{loc.name}</span>
                                </div>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Map Area */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              {/* Map Controls */}
              <div className="flex items-center justify-between p-3 border-b bg-muted/30">
                <span className="text-sm font-medium text-foreground">Peta Kampus Polines</span>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2))}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.5))}
                  >
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setZoomLevel(1)}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Interactive Map Placeholder */}
              <div
                className="relative h-[350px] lg:h-[450px] bg-gradient-to-br from-green-100 to-green-50 overflow-hidden"
                style={{ transform: `scale(${zoomLevel})`, transformOrigin: "center" }}
              >
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Road Paths */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 0 50 L 100 50" stroke="#d1d5db" strokeWidth="3" fill="none" />
                  <path d="M 50 0 L 50 100" stroke="#d1d5db" strokeWidth="3" fill="none" />
                  <path d="M 20 30 L 80 30" stroke="#e5e7eb" strokeWidth="2" fill="none" />
                  <path d="M 20 70 L 80 70" stroke="#e5e7eb" strokeWidth="2" fill="none" />
                </svg>

                {/* Location Markers */}
                {locations.map((loc) => {
                  const Icon = getCategoryIcon(loc.category);
                  const isSelected = selectedLocation?.id === loc.id;

                  return (
                    <motion.button
                      key={loc.id}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => setSelectedLocation(loc)}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                        isSelected ? "z-20" : "z-10"
                      }`}
                      style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all ${
                          isSelected
                            ? "bg-primary ring-4 ring-primary/30"
                            : getCategoryColor(loc.category)
                        }`}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      {isSelected && (
                        <div className="absolute left-1/2 -translate-x-1/2 mt-1 bg-white px-2 py-1 rounded shadow-lg whitespace-nowrap z-30">
                          <span className="text-xs font-medium text-foreground">{loc.name}</span>
                        </div>
                      )}
                    </motion.button>
                  );
                })}

                {/* Legend */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <p className="text-xs font-medium text-foreground mb-2">Legenda</p>
                  <div className="space-y-1">
                    {categories.slice(0, 4).map((cat) => (
                      <div key={cat.id} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${cat.color}`} />
                        <span className="text-xs text-muted-foreground">{cat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Selected Location Info */}
              {selectedLocation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 border-t bg-muted/30"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getCategoryColor(selectedLocation.category)}`}>
                      {(() => {
                        const Icon = getCategoryIcon(selectedLocation.category);
                        return <Icon className="w-5 h-5 text-white" />;
                      })()}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground">{selectedLocation.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{selectedLocation.description}</p>
                      {selectedLocation.floors && (
                        <div className="space-y-1">
                          {selectedLocation.floors.map((floor, i) => (
                            <p key={i} className="text-xs text-muted-foreground">• {floor}</p>
                          ))}
                        </div>
                      )}
                    </div>
                    <Button size="sm" variant="outline" className="gap-1 flex-shrink-0">
                      <Navigation className="w-3 h-3" />
                      Navigasi
                    </Button>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Access Points */}
      <section>
        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Navigation className="w-5 h-5 text-primary" />
          Titik Akses Kampus
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {accessPoints.map((point, index) => (
            <motion.div
              key={point.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all cursor-pointer group">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{point.name}</h4>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => window.open("https://maps.google.com", "_blank")}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Google Maps CTA */}
        <Card className="mt-6 bg-gradient-to-r from-primary to-polines-blue-light text-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Buka di Google Maps</h3>
                  <p className="text-white/80 text-sm">
                    Dapatkan navigasi langsung ke kampus Polines
                  </p>
                </div>
              </div>
              <Button
                variant="secondary"
                className="gap-2"
                onClick={() => window.open("https://goo.gl/maps/polines", "_blank")}
              >
                <ExternalLink className="w-4 h-4" />
                Buka Google Maps
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </SubPageLayout>
  );
}
