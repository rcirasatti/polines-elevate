import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Eye,
  Search,
  Filter,
  TrendingUp,
  Users,
  Award,
  BarChart3,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const performanceStats = [
  {
    icon: TrendingUp,
    label: "Capaian IKU 1",
    value: 92,
    description: "Lulusan Bekerja",
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    icon: Users,
    label: "Capaian IKU 2",
    value: 78,
    description: "Dosen di Industri",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: Award,
    label: "Capaian IKU 3",
    value: 85,
    description: "Akreditasi Prodi",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    icon: BarChart3,
    label: "Capaian IKU 4",
    value: 88,
    description: "Pendapatan Non-APBN",
    color: "text-orange-500",
    bgColor: "bg-orange-100",
  },
];

const documents = [
  {
    id: 1,
    name: "Laporan Kinerja (LAKIN) 2024",
    year: "2024",
    type: "LAKIN",
    size: "5.2 MB",
    date: "2024-02-15",
  },
  {
    id: 2,
    name: "Perjanjian Kinerja 2024",
    year: "2024",
    type: "PK",
    size: "2.1 MB",
    date: "2024-01-10",
  },
  {
    id: 3,
    name: "Laporan Kinerja (LAKIN) 2023",
    year: "2023",
    type: "LAKIN",
    size: "4.8 MB",
    date: "2023-02-20",
  },
  {
    id: 4,
    name: "Perjanjian Kinerja 2023",
    year: "2023",
    type: "PK",
    size: "1.9 MB",
    date: "2023-01-15",
  },
  {
    id: 5,
    name: "Laporan Kinerja (LAKIN) 2022",
    year: "2022",
    type: "LAKIN",
    size: "4.5 MB",
    date: "2022-02-18",
  },
  {
    id: 6,
    name: "Perjanjian Kinerja 2022",
    year: "2022",
    type: "PK",
    size: "1.8 MB",
    date: "2022-01-12",
  },
  {
    id: 7,
    name: "Laporan Evaluasi Kinerja Anggaran 2024",
    year: "2024",
    type: "LEKA",
    size: "3.2 MB",
    date: "2024-03-01",
  },
  {
    id: 8,
    name: "Laporan Evaluasi Kinerja Anggaran 2023",
    year: "2023",
    type: "LEKA",
    size: "3.0 MB",
    date: "2023-03-05",
  },
];

const sidebarLinks = [
  { title: "Tentang Polines", href: "/profil/tentang", active: false },
  { title: "Struktur Organisasi", href: "/profil/struktur-organisasi", active: false },
  { title: "Rencana Strategis", href: "/profil/rencana-strategis", active: false },
  { title: "Laporan Kinerja", href: "/profil/laporan-kinerja", active: true },
  { title: "Fasilitas", href: "/profil/fasilitas", active: false },
  { title: "Sumber Daya Bagian", href: "/profil/sumber-daya", active: false },
  { title: "Peta Kampus", href: "/profil/peta-kampus", active: false },
];

export default function LaporanKinerja() {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const years = [...new Set(documents.map((doc) => doc.year))].sort().reverse();

  const filteredDocuments = documents.filter((doc) => {
    const matchesYear = selectedYear === "all" || doc.year === selectedYear;
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesSearch;
  });

  const CircularProgress = ({ value, color }: { value: number; color: string }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
      <div className="relative w-24 h-24">
        <svg className="transform -rotate-90 w-24 h-24" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-muted"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={color}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-foreground">{value}%</span>
        </div>
      </div>
    );
  };

  return (
    <SubPageLayout
      title="Laporan Kinerja"
      subtitle="Akuntabilitas Kinerja Instansi Pemerintah"
      breadcrumbs={[
        { label: "Profil", href: "/profil/tentang" },
        { label: "Laporan Kinerja" },
      ]}
      sidebarTitle="Menu Profil"
      sidebarLinks={sidebarLinks}
    >
      {/* Performance Stats */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary" />
          Ringkasan Kinerja Terbaru
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {performanceStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-4">
                  <div className="flex justify-center mb-3">
                    <CircularProgress value={stat.value} color={stat.color} />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{stat.label}</h3>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Filter & Search */}
      <section className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Cari dokumen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-full sm:w-40">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Tahun" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Tahun</SelectItem>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Documents Table */}
      <section className="mb-10">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Daftar Dokumen Kinerja
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-4 font-semibold text-foreground">Nama Dokumen</th>
                    <th className="text-left p-4 font-semibold text-foreground hidden sm:table-cell">Tahun</th>
                    <th className="text-left p-4 font-semibold text-foreground hidden md:table-cell">Tipe</th>
                    <th className="text-left p-4 font-semibold text-foreground hidden lg:table-cell">Ukuran</th>
                    <th className="text-right p-4 font-semibold text-foreground">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDocuments.length > 0 ? (
                    filteredDocuments.map((doc, index) => (
                      <motion.tr
                        key={doc.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="w-5 h-5 text-red-600" />
                            </div>
                            <div>
                              <span className="font-medium text-foreground text-sm block">{doc.name}</span>
                              <span className="text-xs text-muted-foreground sm:hidden">{doc.year}</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-sm text-muted-foreground hidden sm:table-cell">{doc.year}</td>
                        <td className="p-4 hidden md:table-cell">
                          <span
                            className={`text-xs px-2 py-1 rounded font-medium ${
                              doc.type === "LAKIN"
                                ? "bg-blue-100 text-blue-700"
                                : doc.type === "PK"
                                ? "bg-green-100 text-green-700"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {doc.type}
                          </span>
                        </td>
                        <td className="p-4 text-sm text-muted-foreground hidden lg:table-cell">{doc.size}</td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button size="sm" variant="ghost" className="gap-1">
                              <Eye className="w-4 h-4" />
                              <span className="hidden sm:inline">Lihat</span>
                            </Button>
                            <Button size="sm" variant="outline" className="gap-1">
                              <Download className="w-4 h-4" />
                              <span className="hidden sm:inline">PDF</span>
                            </Button>
                          </div>
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-muted-foreground">
                        Tidak ada dokumen yang ditemukan.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section>
        <Card className="bg-muted/50">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-foreground mb-1">Ada pertanyaan terkait data kinerja?</h3>
                <p className="text-sm text-muted-foreground">
                  Hubungi Bagian Perencanaan dan Kerjasama Polines
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" className="gap-2">
                  <Phone className="w-4 h-4" />
                  (024) 7473417
                </Button>
                <Button className="gap-2">
                  <Mail className="w-4 h-4" />
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </SubPageLayout>
  );
}
