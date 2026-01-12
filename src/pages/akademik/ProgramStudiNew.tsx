import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, GraduationCap, BookOpen, Filter, Building2, 
  ChevronRight, Users, Award, Briefcase, Cpu, Wrench, 
  HardHat, Calculator, BarChart3, Globe
} from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProgramStudi {
  nama: string;
  jenjang: "D3" | "D4" | "S2";
  akreditasi: string;
  kapasitas?: number;
}

interface Jurusan {
  id: string;
  nama: string;
  icon: React.ElementType;
  color: string;
  deskripsi: string;
  programStudi: ProgramStudi[];
}

// Data lengkap Program Studi Polines berdasarkan informasi resmi
const jurusanData: Jurusan[] = [
  {
    id: "teknik-elektro",
    nama: "Teknik Elektro",
    icon: Cpu,
    color: "from-blue-600 to-blue-700",
    deskripsi: "Menghasilkan tenaga ahli di bidang kelistrikan, elektronika, komputer, telekomunikasi, dan informatika yang kompeten dan siap kerja di industri.",
    programStudi: [
      { nama: "Teknik Listrik", jenjang: "D3", akreditasi: "A", kapasitas: 120 },
      { nama: "Teknik Elektronika", jenjang: "D3", akreditasi: "A", kapasitas: 120 },
      { nama: "Teknik Telekomunikasi", jenjang: "D3", akreditasi: "A", kapasitas: 90 },
      { nama: "Teknologi Rekayasa Komputer", jenjang: "D4", akreditasi: "Unggul", kapasitas: 80 },
      { nama: "Teknik Informatika", jenjang: "D4", akreditasi: "Unggul", kapasitas: 120 },
      { nama: "Broadband Multimedia", jenjang: "D4", akreditasi: "Baik Sekali", kapasitas: 60 },
      { nama: "Teknik Telekomunikasi", jenjang: "D4", akreditasi: "A", kapasitas: 60 },
    ],
  },
  {
    id: "teknik-mesin",
    nama: "Teknik Mesin",
    icon: Wrench,
    color: "from-orange-600 to-orange-700",
    deskripsi: "Menyiapkan tenaga terampil di bidang manufaktur, konversi energi, perancangan mekanik, dan perawatan mesin industri.",
    programStudi: [
      { nama: "Teknik Mesin", jenjang: "D3", akreditasi: "A", kapasitas: 150 },
      { nama: "Teknik Konversi Energi", jenjang: "D3", akreditasi: "A", kapasitas: 90 },
      { nama: "Teknik Mesin Produksi dan Perawatan", jenjang: "D4", akreditasi: "Baik Sekali", kapasitas: 60 },
      { nama: "Teknik Konversi Energi", jenjang: "D4", akreditasi: "A", kapasitas: 60 },
      { nama: "Rekayasa Perancangan Mekanik", jenjang: "D4", akreditasi: "Baik Sekali", kapasitas: 60 },
      { nama: "Rekayasa Perancangan Mekanik", jenjang: "S2", akreditasi: "Baik", kapasitas: 20 },
    ],
  },
  {
    id: "teknik-sipil",
    nama: "Teknik Sipil",
    icon: HardHat,
    color: "from-amber-600 to-amber-700",
    deskripsi: "Menghasilkan ahli konstruksi bangunan gedung, infrastruktur jalan jembatan, dan perawatan bangunan dengan standar industri.",
    programStudi: [
      { nama: "Teknik Konstruksi Gedung", jenjang: "D3", akreditasi: "A", kapasitas: 120 },
      { nama: "Teknik Konstruksi Sipil", jenjang: "D3", akreditasi: "A", kapasitas: 90 },
      { nama: "Teknik Perawatan dan Perbaikan Gedung", jenjang: "D4", akreditasi: "A", kapasitas: 60 },
      { nama: "Teknik Perancangan Jalan dan Jembatan", jenjang: "D4", akreditasi: "Baik Sekali", kapasitas: 60 },
      { nama: "Konstruksi Gedung", jenjang: "D4", akreditasi: "A", kapasitas: 60 },
    ],
  },
  {
    id: "akuntansi",
    nama: "Akuntansi",
    icon: Calculator,
    color: "from-emerald-600 to-emerald-700",
    deskripsi: "Menyiapkan tenaga profesional di bidang akuntansi, perpajakan, audit, keuangan, dan perbankan konvensional serta syariah.",
    programStudi: [
      { nama: "Akuntansi", jenjang: "D3", akreditasi: "A", kapasitas: 180 },
      { nama: "Keuangan dan Perbankan", jenjang: "D3", akreditasi: "A", kapasitas: 120 },
      { nama: "Komputerisasi Akuntansi", jenjang: "D4", akreditasi: "Unggul", kapasitas: 90 },
      { nama: "Akuntansi Perpajakan", jenjang: "D4", akreditasi: "A", kapasitas: 60 },
      { nama: "Perbankan Syariah", jenjang: "D4", akreditasi: "Baik Sekali", kapasitas: 60 },
      { nama: "Keuangan Syariah", jenjang: "D4", akreditasi: "Baik Sekali", kapasitas: 60 },
      { nama: "Akuntansi Manajerial", jenjang: "S2", akreditasi: "Baik", kapasitas: 25 },
    ],
  },
  {
    id: "administrasi-bisnis",
    nama: "Administrasi Bisnis",
    icon: BarChart3,
    color: "from-violet-600 to-violet-700",
    deskripsi: "Menghasilkan tenaga profesional di bidang administrasi, manajemen bisnis, pemasaran, logistik, dan bisnis internasional.",
    programStudi: [
      { nama: "Administrasi Bisnis", jenjang: "D3", akreditasi: "A", kapasitas: 150 },
      { nama: "Manajemen Pemasaran", jenjang: "D3", akreditasi: "A", kapasitas: 90 },
      { nama: "Manajemen Bisnis Internasional", jenjang: "D4", akreditasi: "A", kapasitas: 60 },
      { nama: "Administrasi Bisnis Terapan", jenjang: "D4", akreditasi: "Baik Sekali", kapasitas: 60 },
      { nama: "Manajemen Bisnis", jenjang: "D4", akreditasi: "A", kapasitas: 60 },
      { nama: "Logistik Bisnis", jenjang: "D4", akreditasi: "Baik Sekali", kapasitas: 60 },
    ],
  },
];

const sidebarLinks = [
  { title: "Program Studi", href: "/akademik/program-studi", active: true },
  { title: "Beasiswa", href: "/akademik/beasiswa" },
  { title: "Kegiatan Kampus", href: "/akademik/kegiatan" },
  { title: "PERAK (Peraturan Akademik)", href: "/akademik/perak" },
  { title: "Kalender Akademik", href: "/akademik/kalender" },
  { title: "Pedoman Akademik", href: "/akademik/pedoman" },
];

const jenjangColors = {
  D3: "bg-blue-600 text-white",
  D4: "bg-emerald-600 text-white",
  S2: "bg-violet-600 text-white",
};

const akreditasiColors: Record<string, string> = {
  Unggul: "bg-secondary text-secondary-foreground font-semibold",
  A: "bg-green-600 text-white",
  "Baik Sekali": "bg-blue-500 text-white",
  Baik: "bg-gray-500 text-white",
};

export default function ProgramStudiNew() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterJenjang, setFilterJenjang] = useState<string>("all");
  const [expandedJurusan, setExpandedJurusan] = useState<string | null>(null);

  const allJenjang = ["D3", "D4", "S2"];

  const filteredJurusan = jurusanData.map((jurusan) => ({
    ...jurusan,
    programStudi: jurusan.programStudi.filter((prodi) => {
      const matchesSearch =
        prodi.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        jurusan.nama.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesJenjang =
        filterJenjang === "all" || prodi.jenjang === filterJenjang;
      return matchesSearch && matchesJenjang;
    }),
  })).filter((jurusan) => jurusan.programStudi.length > 0);

  const totalProdi = jurusanData.reduce(
    (acc, j) => acc + j.programStudi.length,
    0
  );

  const getAkreditasiBadge = (akreditasi: string) => {
    const colorClass = akreditasiColors[akreditasi] || "bg-gray-400 text-white";
    return <Badge className={`${colorClass} text-xs`}>{akreditasi}</Badge>;
  };

  return (
    <SubPageLayout
      title="Program Studi"
      subtitle="Pilihan pendidikan vokasi berkualitas untuk masa depan karirmu"
      breadcrumbs={[
        { label: "Akademik", href: "/akademik" },
        { label: "Program Studi" },
      ]}
    >
      <div className="space-y-8">
        {/* Header Description */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/20 rounded-xl">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                Sistem Pendidikan Vokasi Polines
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Politeknik Negeri Semarang menyelenggarakan pendidikan vokasi yang 
                berorientasi pada penguasaan kompetensi praktis. Dengan kurikulum 
                berbasis industri, lulusan Polines siap memasuki dunia kerja dengan 
                keahlian yang terukur.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-secondary" />
                  <span className="font-medium">{totalProdi} Program Studi</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="font-medium">5 Jurusan</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="w-4 h-4 text-green-600" />
                  <span className="font-medium">Jenjang D3, D4/S.Tr, S2</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Cari program studi atau jurusan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground hidden sm:inline">Filter Jenjang:</span>
            <div className="flex gap-2">
              <Button
                variant={filterJenjang === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterJenjang("all")}
              >
                Semua
              </Button>
              {allJenjang.map((j) => (
                <Button
                  key={j}
                  variant={filterJenjang === j ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterJenjang(j)}
                >
                  {j}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 gap-6">
          {filteredJurusan.map((jurusan, index) => (
            <motion.div
              key={jurusan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card 
                className={`overflow-hidden transition-all cursor-pointer hover:shadow-lg ${
                  expandedJurusan === jurusan.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedJurusan(
                  expandedJurusan === jurusan.id ? null : jurusan.id
                )}
              >
                <CardHeader className={`bg-gradient-to-r ${jurusan.color} text-white`}>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-sm">
                        <jurusan.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{jurusan.nama}</h3>
                        <p className="text-sm text-white/80 font-normal">
                          {jurusan.programStudi.length} Program Studi
                        </p>
                      </div>
                    </CardTitle>
                    <ChevronRight 
                      className={`w-6 h-6 transition-transform ${
                        expandedJurusan === jurusan.id ? "rotate-90" : ""
                      }`} 
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="p-4 bg-muted/30 border-b">
                    <p className="text-muted-foreground text-sm">{jurusan.deskripsi}</p>
                  </div>
                  
                  {/* Program Studi List */}
                  <div className="divide-y divide-border">
                    {jurusan.programStudi.map((prodi, prodiIndex) => (
                      <motion.div
                        key={prodi.nama}
                        initial={expandedJurusan === jurusan.id ? { opacity: 0, x: -10 } : {}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: prodiIndex * 0.05 }}
                        className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-4 h-4 text-primary" />
                          <span className="font-medium text-foreground">{prodi.nama}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={jenjangColors[prodi.jenjang]}>
                            {prodi.jenjang}
                          </Badge>
                          {getAkreditasiBadge(prodi.akreditasi)}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredJurusan.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Tidak ada program studi yang ditemukan</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setFilterJenjang("all");
              }}
            >
              Reset Filter
            </Button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-8 p-6 bg-gradient-to-br from-primary to-polines-blue-dark rounded-xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          <div className="relative z-10">
            <h3 className="font-bold text-xl mb-2">Tertarik Bergabung?</h3>
            <p className="mb-4 text-white/80">
              Daftarkan dirimu melalui jalur penerimaan mahasiswa baru Polines. Tersedia jalur SNBP, SNBT, dan Mandiri.
            </p>
            <Link to="/penerimaan">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
                Lihat Info PMB
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
