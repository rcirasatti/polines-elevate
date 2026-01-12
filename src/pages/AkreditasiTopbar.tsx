import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Award, Search, Shield, CheckCircle2, Download,
  ExternalLink, Filter, FileText, Building2, Globe
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const departments = ["Semua Jurusan", "Teknik Sipil", "Teknik Mesin", "Teknik Elektro", "Akuntansi", "Administrasi Bisnis"];
const levels = ["Semua Jenjang", "D3", "D4", "S2"];

const akreditasiData = [
  { prodi: "Teknologi Rekayasa Komputer", jurusan: "Teknik Elektro", jenjang: "D4", status: "Unggul", masa: "2024-2029" },
  { prodi: "Teknik Informatika", jurusan: "Teknik Elektro", jenjang: "D3", status: "A", masa: "2023-2028" },
  { prodi: "Teknik Telekomunikasi", jurusan: "Teknik Elektro", jenjang: "D3", status: "A", masa: "2022-2027" },
  { prodi: "Teknik Elektronika", jurusan: "Teknik Elektro", jenjang: "D3", status: "A", masa: "2023-2028" },
  { prodi: "Teknik Mesin", jurusan: "Teknik Mesin", jenjang: "D3", status: "A", masa: "2022-2027" },
  { prodi: "Teknik Konversi Energi", jurusan: "Teknik Mesin", jenjang: "D3", status: "Baik Sekali", masa: "2023-2028" },
  { prodi: "Konstruksi Gedung", jurusan: "Teknik Sipil", jenjang: "D3", status: "A", masa: "2022-2027" },
  { prodi: "Konstruksi Sipil", jurusan: "Teknik Sipil", jenjang: "D4", status: "Unggul", masa: "2024-2029" },
  { prodi: "Akuntansi", jurusan: "Akuntansi", jenjang: "D3", status: "A", masa: "2023-2028" },
  { prodi: "Keuangan dan Perbankan", jurusan: "Akuntansi", jenjang: "D3", status: "A", masa: "2022-2027" },
  { prodi: "Administrasi Bisnis", jurusan: "Administrasi Bisnis", jenjang: "D3", status: "A", masa: "2023-2028" },
  { prodi: "Manajemen Bisnis Internasional", jurusan: "Administrasi Bisnis", jenjang: "D4", status: "Baik Sekali", masa: "2024-2029" },
];

export default function AkreditasiTopbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("Semua Jurusan");
  const [selectedLevel, setSelectedLevel] = useState("Semua Jenjang");

  const filteredData = akreditasiData.filter((item) => {
    const matchesSearch = item.prodi.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDepartment === "Semua Jurusan" || item.jurusan === selectedDepartment;
    const matchesLevel = selectedLevel === "Semua Jenjang" || item.jenjang === selectedLevel;
    return matchesSearch && matchesDept && matchesLevel;
  });

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      "Unggul": "bg-gradient-to-r from-amber-500 to-yellow-500 text-white",
      "A": "bg-green-500 text-white",
      "Baik Sekali": "bg-blue-500 text-white",
      "B": "bg-sky-500 text-white",
    };
    return variants[status] || "bg-gray-500 text-white";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="bg-white/20 text-white mb-4">Status Akreditasi</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Akreditasi Institusi & Program Studi
            </h1>
            <p className="text-lg text-blue-100">
              Politeknik Negeri Semarang berkomitmen menjaga kualitas pendidikan 
              dengan akreditasi terbaik untuk setiap program studi
            </p>
          </motion.div>
        </div>
      </section>

      <main className="section-container py-12">
        {/* Institutional Accreditation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 border-amber-200 dark:border-amber-800 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl">
                    <div className="text-center text-white">
                      <p className="text-4xl font-bold">A</p>
                      <p className="text-xs">UNGGUL</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-amber-500" />
                  </div>
                </div>
                <div className="text-center md:text-left flex-1">
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                    <img src="/ban-pt-logo.png" alt="BAN-PT" className="h-8" onError={(e) => e.currentTarget.style.display = 'none'} />
                    <Badge className="bg-amber-500 text-white">Akreditasi Institusi</Badge>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-amber-900 dark:text-amber-100 mb-2">
                    Peringkat UNGGUL
                  </h2>
                  <p className="text-amber-700 dark:text-amber-300 mb-4">
                    Akreditasi Institusi Perguruan Tinggi oleh BAN-PT
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>SK: 123/SK/BAN-PT/2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Masa Berlaku: s.d. 2029</span>
                    </div>
                  </div>
                </div>
                <Button className="bg-amber-600 hover:bg-amber-700">
                  <Download className="w-4 h-4 mr-2" />
                  Unduh Sertifikat
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* International Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6 text-primary" />
            Sertifikasi Internasional
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "ISO 9001:2015", desc: "Quality Management System" },
              { name: "ISO 21001:2018", desc: "Educational Organizations Management" },
              { name: "ASIIN", desc: "Accreditation for Engineering Programs" },
            ].map((cert, index) => (
              <Card key={cert.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Program Study Accreditation Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            Akreditasi Program Studi
          </h2>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Cari program studi..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <Building2 className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Jurusan" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="w-full md:w-[150px]">
                    <SelectValue placeholder="Jenjang" />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Table */}
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Program Studi</TableHead>
                      <TableHead>Jurusan</TableHead>
                      <TableHead>Jenjang</TableHead>
                      <TableHead>Peringkat</TableHead>
                      <TableHead>Masa Berlaku</TableHead>
                      <TableHead className="text-right">Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.prodi}</TableCell>
                        <TableCell>{item.jurusan}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{item.jenjang}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusBadge(item.status)}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{item.masa}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Verification Link */}
          <Card className="mt-6 bg-gradient-to-r from-primary/5 to-transparent border-primary/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Shield className="w-10 h-10 text-primary" />
                  <div>
                    <h3 className="font-bold">Verifikasi Data Akreditasi</h3>
                    <p className="text-sm text-muted-foreground">
                      Cek validitas data melalui sistem resmi BAN-PT
                    </p>
                  </div>
                </div>
                <Button variant="outline" asChild>
                  <a href="https://www.banpt.or.id" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Buka SAPTO BAN-PT
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
