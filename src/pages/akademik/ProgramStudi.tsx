import { useState } from "react";
import { Search, GraduationCap, BookOpen } from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface ProgramStudi {
  id: string;
  nama: string;
  jenjang: string;
  akreditasi: string;
  jurusan: string;
}

const programStudiData: ProgramStudi[] = [
  // Teknik Elektro
  { id: "1", nama: "Teknik Listrik", jenjang: "D3", akreditasi: "A", jurusan: "Teknik Elektro" },
  { id: "2", nama: "Teknik Elektronika", jenjang: "D3", akreditasi: "A", jurusan: "Teknik Elektro" },
  { id: "3", nama: "Teknologi Rekayasa Komputer", jenjang: "D4", akreditasi: "Unggul", jurusan: "Teknik Elektro" },
  { id: "4", nama: "Teknik Telekomunikasi", jenjang: "D4", akreditasi: "A", jurusan: "Teknik Elektro" },
  // Teknik Sipil
  { id: "5", nama: "Teknik Konstruksi Gedung", jenjang: "D3", akreditasi: "A", jurusan: "Teknik Sipil" },
  { id: "6", nama: "Teknik Perawatan dan Perbaikan Gedung", jenjang: "D4", akreditasi: "A", jurusan: "Teknik Sipil" },
  // Akuntansi
  { id: "7", nama: "Akuntansi", jenjang: "D3", akreditasi: "A", jurusan: "Akuntansi" },
  { id: "8", nama: "Komputerisasi Akuntansi", jenjang: "D4", akreditasi: "A", jurusan: "Akuntansi" },
  { id: "9", nama: "Perbankan Syariah", jenjang: "D4", akreditasi: "Baik Sekali", jurusan: "Akuntansi" },
  // Administrasi Bisnis
  { id: "10", nama: "Administrasi Bisnis", jenjang: "D3", akreditasi: "A", jurusan: "Administrasi Bisnis" },
  { id: "11", nama: "Manajemen Bisnis Internasional", jenjang: "D4", akreditasi: "A", jurusan: "Administrasi Bisnis" },
  // Teknik Mesin
  { id: "12", nama: "Teknik Mesin", jenjang: "D3", akreditasi: "A", jurusan: "Teknik Mesin" },
  { id: "13", nama: "Teknik Konversi Energi", jenjang: "D4", akreditasi: "A", jurusan: "Teknik Mesin" },
];

const sidebarLinks = [
  { title: "Program Studi", href: "/akademik/program-studi", active: true },
  { title: "Kalender Akademik", href: "/akademik/kalender" },
  { title: "Beasiswa", href: "/akademik/beasiswa" },
  { title: "Akreditasi", href: "/akademik/akreditasi" },
  { title: "Peraturan Akademik", href: "/akademik/peraturan" },
];

export default function ProgramStudi() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterJurusan, setFilterJurusan] = useState<string>("all");

  const jurusanList = [...new Set(programStudiData.map((p) => p.jurusan))];

  const filteredData = programStudiData.filter((prodi) => {
    const matchesSearch =
      prodi.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prodi.jurusan.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesJurusan =
      filterJurusan === "all" || prodi.jurusan === filterJurusan;
    return matchesSearch && matchesJurusan;
  });

  const getAkreditasiBadge = (akreditasi: string) => {
    if (akreditasi === "Unggul") {
      return <Badge className="bg-secondary text-secondary-foreground">{akreditasi}</Badge>;
    }
    if (akreditasi === "A") {
      return <Badge className="bg-green-600 text-white">{akreditasi}</Badge>;
    }
    return <Badge variant="secondary">{akreditasi}</Badge>;
  };

  return (
    <SubPageLayout
      title="Program Studi"
      subtitle="Daftar lengkap program studi di Politeknik Negeri Semarang"
      breadcrumbs={[
        { label: "Akademik", href: "/akademik" },
        { label: "Program Studi" },
      ]}
      sidebarTitle="Menu Akademik"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-primary/10 rounded-xl">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Daftar Program Studi
            </h2>
            <p className="text-muted-foreground">
              Politeknik Negeri Semarang memiliki {programStudiData.length} program studi
            </p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Cari program studi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={filterJurusan}
            onChange={(e) => setFilterJurusan(e.target.value)}
            className="px-4 py-2 rounded-lg border border-input bg-background text-foreground"
          >
            <option value="all">Semua Jurusan</option>
            {jurusanList.map((jurusan) => (
              <option key={jurusan} value={jurusan}>
                {jurusan}
              </option>
            ))}
          </select>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary hover:bg-primary">
                <TableHead className="text-primary-foreground font-semibold">
                  Program Studi
                </TableHead>
                <TableHead className="text-primary-foreground font-semibold">
                  Jurusan
                </TableHead>
                <TableHead className="text-primary-foreground font-semibold text-center">
                  Jenjang
                </TableHead>
                <TableHead className="text-primary-foreground font-semibold text-center">
                  Akreditasi
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((prodi, index) => (
                <TableRow
                  key={prodi.id}
                  className={index % 2 === 0 ? "bg-muted/30" : ""}
                >
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      {prodi.nama}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {prodi.jurusan}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline">{prodi.jenjang}</Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    {getAkreditasiBadge(prodi.akreditasi)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Tidak ada program studi yang ditemukan</p>
          </div>
        )}
      </div>
    </SubPageLayout>
  );
}
