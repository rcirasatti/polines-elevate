import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, GraduationCap } from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProgramStudi {
  nama: string;
  jenjang: "D3" | "D4" | "S2";
  akreditasi: string;
  kapasitas: number;
}

interface Jurusan {
  id: string;
  nama: string;
  deskripsi: string;
  bgColor: string; // Tailwind color
  textColor: string;
  borderColor: string;
  programStudi: ProgramStudi[];
}

const jurusanData: Jurusan[] = [
  {
    id: "teknik-elektro",
    nama: "Teknik Elektro",
    deskripsi: "Menghasilkan tenaga ahli di bidang kelistrikan, elektronika, komputer, telekomunikasi, dan informatika.",
    bgColor: "bg-red-600",
    textColor: "text-white",
    borderColor: "border-red-600",
    programStudi: [
      { nama: "Teknik Listrik", jenjang: "D3", akreditasi: "Unggul", kapasitas: 120 },
      { nama: "Teknik Elektronika", jenjang: "D3", akreditasi: "Unggul", kapasitas: 120 },
      { nama: "Teknik Telekomunikasi", jenjang: "D3", akreditasi: "Baik Sekali", kapasitas: 90 },
      { nama: "Teknologi Rekayasa Komputer", jenjang: "S2", akreditasi: "Baik Sekali", kapasitas: 40 },
      { nama: "Teknologi Rekayasa Elektronika", jenjang: "S2", akreditasi: "Baik", kapasitas: 40 },
      { nama: "Teknik Informatika", jenjang: "D4", akreditasi: "Unggul", kapasitas: 120 },
      { nama: "Teknik Telekomunikasi", jenjang: "S2", akreditasi: "Internasional", kapasitas: 40 },
    ],
  },
  {
    id: "teknik-sipil",
    nama: "Teknik Sipil",
    deskripsi: "Menghasilkan tenaga profesional di bidang konstruksi, perencanaan, dan manajemen proyek infrastruktur.",
    bgColor: "bg-amber-800",
    textColor: "text-white",
    borderColor: "border-amber-800",
    programStudi: [
      { nama: "Konstruksi Gedung", jenjang: "D3", akreditasi: "A", kapasitas: 100 },
      { nama: "Konstruksi Sipil", jenjang: "D3", akreditasi: "Unggul", kapasitas: 100 },
      { nama: "Teknik Perawatan dan Perbaikan Gedung", jenjang: "D4", akreditasi: "Baik Sekali", kapasitas: 60 },
      { nama: "Perancangan Jalan dan Jembatan", jenjang: "D4", akreditasi: "B", kapasitas: 60 },
      { nama: "Teknik Bangunan Gedung", jenjang: "D4", akreditasi: "Baik Sekali", kapasitas: 60 },
    ],
  },
  {
    id: "teknik-mesin",
    nama: "Teknik Mesin",
    deskripsi: "Menghasilkan lulusan yang berkompeten di bidang perancangan, manufaktur, dan sistem mesin industri.",
    bgColor: "bg-blue-600",
    textColor: "text-white",
    borderColor: "border-blue-600",
    programStudi: [
      { nama: "Teknik Mesin", jenjang: "D3", akreditasi: "Unggul", kapasitas: 120 },
      { nama: "Teknik Konversi Energi", jenjang: "D3", akreditasi: "A", kapasitas: 80 },
      { nama: "Teknik Mesin Produksi dan Perawatan", jenjang: "D4", akreditasi: "B", kapasitas: 60 },
      { nama: "Teknologi Rekayasa Pembangkit Energi", jenjang: "D4", akreditasi: "Unggul", kapasitas: 60 },
      { nama: "Rekayasa Perancangan Mesin", jenjang: "D4", akreditasi: "A", kapasitas: 60 },
      { nama: "Rekayasa Perancangan Mesin", jenjang: "S2", akreditasi: "A", kapasitas: 40 },
    ],
  },
  {
    id: "akuntansi",
    nama: "Akuntansi",
    deskripsi: "Menghasilkan profesional akuntansi yang memahami prinsip-prinsip akuntansi, perpajakan, dan audit.",
    bgColor: "bg-green-600",
    textColor: "text-white",
    borderColor: "border-green-600",
    programStudi: [
      { nama: "Akuntansi", jenjang: "D3", akreditasi: "Unggul", kapasitas: 150 },
      { nama: "Keuangan dan Perbankan", jenjang: "D3", akreditasi: "A", kapasitas: 100 },
      { nama: "Komputerisasi Akuntansi", jenjang: "D4", akreditasi: "Internasional", kapasitas: 60 },
      { nama: "Perbankan Syariah", jenjang: "D4", akreditasi: "A", kapasitas: 60 },
      { nama: "Analisis Keuangan", jenjang: "D4", akreditasi: "Baik Sekali", kapasitas: 60 },
      { nama: "Akuntansi Manajerial", jenjang: "D4", akreditasi: "B", kapasitas: 60 },
      { nama: "Akuntansi", jenjang: "S2", akreditasi: "A", kapasitas: 40 },
    ],
  },
  {
    id: "administrasi-bisnis",
    nama: "Administrasi Bisnis",
    deskripsi: "Menghasilkan lulusan yang kompeten dalam manajemen bisnis, administrasi, pemasaran, dan logistik.",
    bgColor: "bg-yellow-500",
    textColor: "text-gray-900",
    borderColor: "border-yellow-500",
    programStudi: [
      { nama: "Administrasi Bisnis", jenjang: "D3", akreditasi: "Unggul", kapasitas: 150 },
      { nama: "Manajemen Pemasaran", jenjang: "D3", akreditasi: "A", kapasitas: 90 },
      { nama: "Manajemen Bisnis Internasional", jenjang: "D4", akreditasi: "A", kapasitas: 60 },
      { nama: "Administrasi Bisnis Terapan", jenjang: "D4", akreditasi: "B", kapasitas: 60 },
      { nama: "Manajemen Bisnis", jenjang: "D4", akreditasi: "A", kapasitas: 60 },
      { nama: "Logistik Bisnis", jenjang: "D4", akreditasi: "Baik Sekali", kapasitas: 60 },
    ],
  },
];

const akreditasiColors: Record<string, string> = {
  Unggul: "bg-purple-600 text-white font-bold",
  A: "bg-blue-500 text-white font-semibold",
  "Baik Sekali": "bg-cyan-500 text-white font-semibold",
  B: "bg-gray-500 text-white font-semibold",
  Baik: "bg-gray-500 text-white",
  Internasional: "bg-indigo-600 text-white font-bold",
};

export default function ProgramStudiRevised() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedJurusan, setExpandedJurusan] = useState<string | null>("teknik-elektro");

  const filteredJurusan = jurusanData.filter((jurusan) =>
    jurusan.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
    jurusan.programStudi.some((prodi) =>
      prodi.nama.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <SubPageLayout
      title="Program Studi"
      breadcrumbs={[
        { label: "Akademik", href: "/akademik" },
        { label: "Program Studi" },
      ]}
    >
      <div className="space-y-8">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
          <Input
            placeholder="Cari jurusan atau program studi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>Total Program:</strong> 31 program studi tersedia dalam 5 jurusan dengan berbagai jenjang (D3, D4, S2).
          </p>
        </div>

        {/* Jurusan Accordion */}
        <div className="space-y-4">
          {filteredJurusan.map((jurusan) => (
            <motion.div
              key={jurusan.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="border rounded-lg overflow-hidden"
            >
              {/* Header - Always Visible */}
              <button
                onClick={() =>
                  setExpandedJurusan(
                    expandedJurusan === jurusan.id ? null : jurusan.id
                  )
                }
                className={`w-full p-6 flex items-center justify-between transition-all ${jurusan.bgColor} ${jurusan.textColor} hover:shadow-lg`}
              >
                <div className="text-left">
                  <h3 className="text-lg font-bold">{jurusan.nama}</h3>
                  <p className="text-sm opacity-90 mt-1">{jurusan.deskripsi}</p>
                </div>
                <motion.div
                  animate={{ rotate: expandedJurusan === jurusan.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </button>

              {/* Content - Animated */}
              <AnimatePresence>
                {expandedJurusan === jurusan.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border-t"
                  >
                    <div className="p-6 space-y-4">
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-slate-50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-primary">
                            {jurusan.programStudi.length}
                          </div>
                          <div className="text-xs text-slate-600 mt-1">
                            Total Program
                          </div>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {jurusan.programStudi.filter(
                              (p) => p.jenjang === "D3"
                            ).length}
                          </div>
                          <div className="text-xs text-slate-600 mt-1">D3</div>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-green-600">
                            {jurusan.programStudi.filter(
                              (p) => p.jenjang === "D4"
                            ).length}
                          </div>
                          <div className="text-xs text-slate-600 mt-1">D4</div>
                        </div>
                      </div>

                      {/* Program List */}
                      <div className="space-y-3">
                        {jurusan.programStudi.map((prodi, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                          >
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-900">
                                {prodi.nama}
                              </h4>
                              <p className="text-sm text-slate-600 mt-1">
                                Kapasitas: {prodi.kapasitas} mahasiswa/tahun
                              </p>
                            </div>
                            <div className="flex gap-2 ml-4 flex-shrink-0">
                              <Badge className="bg-slate-600">
                                {prodi.jenjang}
                              </Badge>
                              <Badge
                                className={akreditasiColors[prodi.akreditasi]}
                              >
                                {prodi.akreditasi}
                              </Badge>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
            <GraduationCap className="w-8 h-8 text-red-600 mb-2" />
            <h3 className="font-semibold text-slate-900">Teknik Elektro</h3>
            <p className="text-sm text-slate-700 mt-1">7 program</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-800">
            <GraduationCap className="w-8 h-8 text-amber-800 mb-2" />
            <h3 className="font-semibold text-slate-900">Teknik Sipil</h3>
            <p className="text-sm text-slate-700 mt-1">5 program</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
            <GraduationCap className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-semibold text-slate-900">Teknik Mesin</h3>
            <p className="text-sm text-slate-700 mt-1">6 program</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
            <GraduationCap className="w-8 h-8 text-green-600 mb-2" />
            <h3 className="font-semibold text-slate-900">Akuntansi</h3>
            <p className="text-sm text-slate-700 mt-1">7 program</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border border-yellow-400">
            <GraduationCap className="w-8 h-8 text-yellow-600 mb-2" />
            <h3 className="font-semibold text-slate-900">Adm. Bisnis</h3>
            <p className="text-sm text-slate-700 mt-1">6 program</p>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
