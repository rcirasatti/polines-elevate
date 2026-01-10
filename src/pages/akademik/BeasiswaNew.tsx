import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Award, CheckCircle, Calendar, ExternalLink, Search,
  Filter, TrendingUp, Users, Building2 
} from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type BeasiswaStatus = "OPEN" | "ON_PROCESS" | "CLOSED";
type BeasiswaJenis = "Pemerintah" | "Industri" | "Internal";

interface Beasiswa {
  id: string;
  nama: string;
  deskripsi: string;
  jenis: BeasiswaJenis;
  status: BeasiswaStatus;
  benefit: string[];
  deadline?: string;
  kuota?: string;
  popular?: boolean;
}

const beasiswaData: Beasiswa[] = [
  {
    id: "1",
    nama: "Beasiswa KIP-Kuliah",
    deskripsi:
      "Bantuan biaya pendidikan penuh dari pemerintah untuk mahasiswa berprestasi dari keluarga kurang mampu. Program ini menjamin mahasiswa dapat menyelesaikan pendidikan tanpa khawatir biaya.",
    jenis: "Pemerintah",
    status: "OPEN",
    benefit: [
      "Pembebasan biaya pendaftaran",
      "Pembebasan UKT/SPP",
      "Bantuan biaya hidup Rp 700.000/bulan",
      "Bantuan biaya buku dan alat tulis",
    ],
    deadline: "31 Maret 2025",
    kuota: "500 Mahasiswa",
    popular: true,
  },
  {
    id: "2",
    nama: "Beasiswa Unggulan Kemendikbud",
    deskripsi:
      "Beasiswa untuk mahasiswa dengan prestasi akademik atau non-akademik luar biasa dari Kementerian Pendidikan dan Kebudayaan.",
    jenis: "Pemerintah",
    status: "OPEN",
    benefit: [
      "Biaya pendidikan penuh",
      "Uang saku bulanan",
      "Biaya buku",
      "Asuransi kesehatan",
    ],
    deadline: "15 April 2025",
    kuota: "100 Mahasiswa",
    popular: true,
  },
  {
    id: "3",
    nama: "Beasiswa PPA",
    deskripsi:
      "Beasiswa Peningkatan Prestasi Akademik diberikan kepada mahasiswa berprestasi untuk mendorong pencapaian akademik yang lebih tinggi.",
    jenis: "Pemerintah",
    status: "ON_PROCESS",
    benefit: [
      "Bantuan dana pendidikan",
      "Sertifikat penghargaan",
      "Prioritas kegiatan akademik",
    ],
    deadline: "Oktober 2025",
  },
  {
    id: "4",
    nama: "Beasiswa PT PLN",
    deskripsi:
      "Program beasiswa dari PT PLN (Persero) untuk mahasiswa jurusan teknik dengan komitmen ikatan dinas setelah lulus.",
    jenis: "Industri",
    status: "OPEN",
    benefit: [
      "Biaya pendidikan penuh",
      "Uang saku bulanan Rp 1.500.000",
      "Jaminan penempatan kerja",
      "Pelatihan kepemimpinan",
    ],
    deadline: "30 Juni 2025",
    kuota: "50 Mahasiswa",
  },
  {
    id: "5",
    nama: "Beasiswa Djarum Foundation",
    deskripsi:
      "Beasiswa Djarum Plus untuk mahasiswa berprestasi dengan program pengembangan soft skill intensif.",
    jenis: "Industri",
    status: "CLOSED",
    benefit: [
      "Dana pendidikan semester",
      "Pelatihan soft skill",
      "Jaringan alumni nasional",
      "Kesempatan magang",
    ],
    deadline: "Mei 2025",
  },
  {
    id: "6",
    nama: "Beasiswa Bank Indonesia",
    deskripsi:
      "Program beasiswa dari Bank Indonesia untuk mahasiswa jurusan ekonomi dan keuangan.",
    jenis: "Industri",
    status: "ON_PROCESS",
    benefit: [
      "Bantuan biaya kuliah",
      "Mentoring profesional",
      "Kesempatan internship di BI",
    ],
    deadline: "Agustus 2025",
  },
  {
    id: "7",
    nama: "Beasiswa Prestasi Polines",
    deskripsi:
      "Beasiswa internal untuk mahasiswa dengan prestasi akademik dan non-akademik yang luar biasa.",
    jenis: "Internal",
    status: "OPEN",
    benefit: [
      "Potongan UKT 50-100%",
      "Sertifikat penghargaan",
      "Prioritas kegiatan kampus",
    ],
    deadline: "Setiap semester",
    kuota: "200 Mahasiswa",
  },
  {
    id: "8",
    nama: "Beasiswa Hafidz Quran",
    deskripsi:
      "Beasiswa khusus bagi mahasiswa penghafal Al-Quran minimal 10 juz.",
    jenis: "Internal",
    status: "OPEN",
    benefit: [
      "Pembebasan UKT",
      "Asrama gratis",
      "Pembinaan tahfidz",
    ],
    deadline: "Saat pendaftaran PMB",
  },
];

const sidebarLinks = [
  { title: "Program Studi", href: "/akademik/program-studi" },
  { title: "Beasiswa", href: "/akademik/beasiswa", active: true },
  { title: "Kegiatan Kampus", href: "/akademik/kegiatan" },
  { title: "Perpustakaan (PERAK)", href: "/akademik/perpustakaan" },
  { title: "Kalender Akademik", href: "/akademik/kalender" },
  { title: "Akreditasi", href: "/akademik/akreditasi" },
  { title: "Pedoman Akademik", href: "/akademik/pedoman" },
];

const statusConfig = {
  OPEN: { label: "OPEN", color: "bg-green-500 text-white" },
  ON_PROCESS: { label: "ON PROCESS", color: "bg-yellow-500 text-white" },
  CLOSED: { label: "CLOSED", color: "bg-red-500 text-white" },
};

const jenisConfig = {
  Pemerintah: { icon: Building2, color: "text-primary" },
  Industri: { icon: TrendingUp, color: "text-secondary" },
  Internal: { icon: Users, color: "text-green-600" },
};

export default function BeasiswaNew() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterJenis, setFilterJenis] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const popularBeasiswa = beasiswaData.filter((b) => b.popular);

  const filteredData = beasiswaData.filter((beasiswa) => {
    const matchesSearch = beasiswa.nama
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesJenis =
      filterJenis === "all" || beasiswa.jenis === filterJenis;
    const matchesStatus =
      filterStatus === "all" || beasiswa.status === filterStatus;
    return matchesSearch && matchesJenis && matchesStatus;
  });

  return (
    <SubPageLayout
      title="Beasiswa"
      subtitle="Program bantuan pendidikan untuk mahasiswa berprestasi"
      breadcrumbs={[
        { label: "Akademik", href: "/akademik" },
        { label: "Beasiswa" },
      ]}
      sidebarTitle="Menu Akademik"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        {/* Popular Scholarships - Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {popularBeasiswa.map((beasiswa) => (
            <motion.div
              key={beasiswa.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden relative">
                <div className="absolute top-2 right-2">
                  <Badge className="bg-secondary text-secondary-foreground">
                    Popular
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Award className="w-5 h-5" />
                    {beasiswa.nama}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-primary-foreground/80 line-clamp-2">
                    {beasiswa.deskripsi}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge className={statusConfig[beasiswa.status].color}>
                      {statusConfig[beasiswa.status].label}
                    </Badge>
                    {beasiswa.kuota && (
                      <span className="text-xs text-primary-foreground/70">
                        Kuota: {beasiswa.kuota}
                      </span>
                    )}
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-white text-primary hover:bg-white/90"
                  >
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Cari beasiswa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            {/* Filter by Source */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Sumber:</span>
              <div className="flex gap-1">
                <Button
                  variant={filterJenis === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterJenis("all")}
                >
                  Semua
                </Button>
                <Button
                  variant={filterJenis === "Pemerintah" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterJenis("Pemerintah")}
                >
                  Pemerintah
                </Button>
                <Button
                  variant={filterJenis === "Industri" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterJenis("Industri")}
                >
                  Industri
                </Button>
                <Button
                  variant={filterJenis === "Internal" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterJenis("Internal")}
                >
                  Internal
                </Button>
              </div>
            </div>

            {/* Filter by Status */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Status:</span>
              <div className="flex gap-1">
                <Button
                  variant={filterStatus === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("all")}
                >
                  Semua
                </Button>
                <Button
                  variant={filterStatus === "OPEN" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("OPEN")}
                  className={filterStatus === "OPEN" ? "bg-green-600" : ""}
                >
                  Open
                </Button>
                <Button
                  variant={filterStatus === "ON_PROCESS" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("ON_PROCESS")}
                  className={filterStatus === "ON_PROCESS" ? "bg-yellow-500" : ""}
                >
                  On Process
                </Button>
                <Button
                  variant={filterStatus === "CLOSED" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("CLOSED")}
                  className={filterStatus === "CLOSED" ? "bg-red-500" : ""}
                >
                  Closed
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scholarship List */}
        <div className="space-y-4">
          {filteredData.map((beasiswa, index) => {
            const JenisIcon = jenisConfig[beasiswa.jenis].icon;
            return (
              <motion.div
                key={beasiswa.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      {/* Left: Icon & Title */}
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`p-3 rounded-xl bg-muted ${jenisConfig[beasiswa.jenis].color}`}>
                          <JenisIcon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="font-bold text-lg text-foreground">
                              {beasiswa.nama}
                            </h3>
                            <Badge className={statusConfig[beasiswa.status].color}>
                              {statusConfig[beasiswa.status].label}
                            </Badge>
                            <Badge variant="outline">{beasiswa.jenis}</Badge>
                          </div>
                          <p className="text-muted-foreground text-sm mb-4">
                            {beasiswa.deskripsi}
                          </p>

                          {/* Benefits */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {beasiswa.benefit.map((item, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Deadline & Action */}
                      <div className="flex flex-col items-end gap-3 min-w-[180px]">
                        {beasiswa.deadline && (
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">
                              Deadline: <span className="font-medium text-foreground">{beasiswa.deadline}</span>
                            </span>
                          </div>
                        )}
                        {beasiswa.kuota && (
                          <div className="text-sm text-muted-foreground">
                            Kuota: <span className="font-medium">{beasiswa.kuota}</span>
                          </div>
                        )}
                        <Button
                          variant={beasiswa.status === "OPEN" ? "default" : "outline"}
                          size="sm"
                          className="gap-2"
                          disabled={beasiswa.status === "CLOSED"}
                        >
                          {beasiswa.status === "OPEN" ? "Daftar Sekarang" : "Info Lengkap"}
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Tidak ada beasiswa yang ditemukan</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setFilterJenis("all");
                setFilterStatus("all");
              }}
            >
              Reset Filter
            </Button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-8 p-6 bg-gradient-to-r from-primary to-primary/80 rounded-xl text-primary-foreground">
          <h3 className="font-bold text-xl mb-2">Butuh Bantuan?</h3>
          <p className="mb-4 text-primary-foreground/80">
            Hubungi Bagian Kemahasiswaan untuk informasi lebih lanjut tentang
            program beasiswa.
          </p>
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Hubungi Kami
          </Button>
        </div>
      </div>
    </SubPageLayout>
  );
}
