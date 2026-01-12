import { motion } from "framer-motion";
import { Building2, BookOpen, Users, Dumbbell, FlaskConical, Wifi } from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Fasilitas {
  id: string;
  nama: string;
  deskripsi: string;
  icon: React.ElementType;
  image?: string;
}

const fasilitasData: Fasilitas[] = [
  {
    id: "1",
    nama: "Laboratorium Terpadu",
    deskripsi:
      "Fasilitas praktik mutakhir untuk teknik dan komputasi. Dilengkapi dengan peralatan industri terkini untuk mendukung pembelajaran berbasis praktik.",
    icon: FlaskConical,
  },
  {
    id: "2",
    nama: "Perpustakaan Digital",
    deskripsi:
      "Akses ke ribuan e-journal dan buku fisik dengan sistem peminjaman mandiri. Tersedia ruang baca yang nyaman dan area diskusi kelompok.",
    icon: BookOpen,
  },
  {
    id: "3",
    nama: "Gedung Serba Guna",
    deskripsi:
      "Kapasitas 2000 orang untuk kegiatan wisuda dan seminar nasional. Dilengkapi sistem audio visual modern dan AC sentral.",
    icon: Building2,
  },
  {
    id: "4",
    nama: "Pusat Olahraga",
    deskripsi:
      "Lapangan basket, voli, dan area panjat tebing standar nasional. Tersedia juga lapangan futsal indoor dan outdoor.",
    icon: Dumbbell,
  },
  {
    id: "5",
    nama: "Ruang Kuliah Multimedia",
    deskripsi:
      "Ruang kuliah modern dengan fasilitas multimedia lengkap. Proyektor HD, sound system, dan koneksi internet berkecepatan tinggi.",
    icon: Users,
  },
  {
    id: "6",
    nama: "Area WiFi Kampus",
    deskripsi:
      "Jaringan WiFi berkecepatan tinggi tersebar di seluruh area kampus. Mendukung pembelajaran online dan akses materi digital.",
    icon: Wifi,
  },
];

const sidebarLinks = [
  { title: "Sejarah", href: "/profil/sejarah" },
  { title: "Visi & Misi", href: "/profil/visi-misi" },
  { title: "Struktur Organisasi", href: "/profil/struktur" },
  { title: "Fasilitas", href: "/profil/fasilitas", active: true },
  { title: "Peta Kampus", href: "/profil/peta" },
];

export default function Fasilitas() {
  return (
    <SubPageLayout
      title="Fasilitas Kampus"
      subtitle="Sarana dan prasarana pendukung pembelajaran"
      breadcrumbs={[
        { label: "Profil", href: "/profil" },
        { label: "Fasilitas" },
      ]}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Building2 className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Fasilitas Kampus
            </h2>
            <p className="text-muted-foreground">
              Sarana modern untuk mendukung proses pembelajaran
            </p>
          </div>
        </div>

        {/* Fasilitas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fasilitasData.map((fasilitas, index) => (
            <motion.div
              key={fasilitas.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group overflow-hidden">
                {/* Placeholder Image */}
                <div className="h-48 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
                  <fasilitas.icon className="w-20 h-20 text-primary/30 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <fasilitas.icon className="w-5 h-5 text-primary" />
                    </div>
                    {fasilitas.nama}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {fasilitas.deskripsi}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
          <h3 className="font-semibold text-lg text-primary mb-2">
            Fasilitas Tambahan
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              Kantin dan Food Court
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              Musholla dan Masjid Kampus
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              Klinik Kesehatan
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              ATM Center
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              Parkir Luas
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              Asrama Mahasiswa
            </li>
          </ul>
        </div>
      </div>
    </SubPageLayout>
  );
}
