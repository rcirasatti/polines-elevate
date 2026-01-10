import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Award, Shield, CheckCircle, ExternalLink, Download,
  Search, Building2, GraduationCap, FileText
} from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Akreditasi {
  id: string;
  prodi: string;
  jenjang: string;
  peringkat: string;
  masaBerlaku: string;
  nomorSK: string;
}

const akreditasiData: Akreditasi[] = [
  { id: "1", prodi: "Teknik Listrik", jenjang: "D3", peringkat: "A", masaBerlaku: "2027", nomorSK: "1234/SK/BAN-PT/2022" },
  { id: "2", prodi: "Teknik Elektronika", jenjang: "D3", peringkat: "A", masaBerlaku: "2026", nomorSK: "1235/SK/BAN-PT/2021" },
  { id: "3", prodi: "Teknologi Rekayasa Komputer", jenjang: "D4", peringkat: "Unggul", masaBerlaku: "2028", nomorSK: "1236/SK/BAN-PT/2023" },
  { id: "4", prodi: "Teknik Telekomunikasi", jenjang: "D4", peringkat: "A", masaBerlaku: "2027", nomorSK: "1237/SK/BAN-PT/2022" },
  { id: "5", prodi: "Teknik Mesin", jenjang: "D3", peringkat: "A", masaBerlaku: "2026", nomorSK: "1238/SK/BAN-PT/2021" },
  { id: "6", prodi: "Teknik Konversi Energi", jenjang: "D4", peringkat: "A", masaBerlaku: "2027", nomorSK: "1239/SK/BAN-PT/2022" },
  { id: "7", prodi: "Teknik Konstruksi Gedung", jenjang: "D3", peringkat: "A", masaBerlaku: "2026", nomorSK: "1240/SK/BAN-PT/2021" },
  { id: "8", prodi: "Teknik Perawatan dan Perbaikan Gedung", jenjang: "D4", peringkat: "A", masaBerlaku: "2028", nomorSK: "1241/SK/BAN-PT/2023" },
  { id: "9", prodi: "Akuntansi", jenjang: "D3", peringkat: "A", masaBerlaku: "2027", nomorSK: "1242/SK/BAN-PT/2022" },
  { id: "10", prodi: "Komputerisasi Akuntansi", jenjang: "D4", peringkat: "A", masaBerlaku: "2026", nomorSK: "1243/SK/BAN-PT/2021" },
  { id: "11", prodi: "Perbankan Syariah", jenjang: "D4", peringkat: "Baik Sekali", masaBerlaku: "2028", nomorSK: "1244/SK/BAN-PT/2023" },
  { id: "12", prodi: "Administrasi Bisnis", jenjang: "D3", peringkat: "A", masaBerlaku: "2027", nomorSK: "1245/SK/BAN-PT/2022" },
  { id: "13", prodi: "Manajemen Bisnis Internasional", jenjang: "D4", peringkat: "A", masaBerlaku: "2026", nomorSK: "1246/SK/BAN-PT/2021" },
];

const certifications = [
  { title: "ISO 9001:2015", description: "Sistem Manajemen Mutu", year: "2023" },
  { title: "ISO 21001:2018", description: "Sistem Manajemen Organisasi Pendidikan", year: "2023" },
  { title: "ISO 14001:2015", description: "Sistem Manajemen Lingkungan", year: "2022" },
];

const sidebarLinks = [
  { title: "Program Studi", href: "/akademik/program-studi" },
  { title: "Beasiswa", href: "/akademik/beasiswa" },
  { title: "Kegiatan Kampus", href: "/akademik/kegiatan" },
  { title: "Perpustakaan (PERAK)", href: "/akademik/perpustakaan" },
  { title: "Kalender Akademik", href: "/akademik/kalender" },
  { title: "Akreditasi", href: "/akademik/akreditasi", active: true },
  { title: "Pedoman Akademik", href: "/akademik/pedoman" },
];

export default function Akreditasi() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = akreditasiData.filter((item) =>
    item.prodi.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getPeringkatBadge = (peringkat: string) => {
    if (peringkat === "Unggul") {
      return <Badge className="bg-secondary text-secondary-foreground font-bold">{peringkat}</Badge>;
    }
    if (peringkat === "A") {
      return <Badge className="bg-green-600 text-white font-bold">{peringkat}</Badge>;
    }
    if (peringkat === "Baik Sekali") {
      return <Badge className="bg-blue-500 text-white">{peringkat}</Badge>;
    }
    return <Badge variant="secondary">{peringkat}</Badge>;
  };

  return (
    <SubPageLayout
      title="Akreditasi"
      subtitle="Status akreditasi institusi dan program studi Politeknik Negeri Semarang"
      breadcrumbs={[
        { label: "Akademik", href: "/akademik" },
        { label: "Akreditasi" },
      ]}
      sidebarTitle="Menu Akademik"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        {/* Main Accreditation Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />
            <CardContent className="p-8 relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center border-4 border-secondary">
                    <div className="text-center">
                      <span className="text-5xl font-bold text-secondary">A</span>
                      <p className="text-xs text-primary-foreground/80 mt-1">UNGGUL</p>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Akreditasi Institusi
                  </h2>
                  <p className="text-primary-foreground/80 mb-4">
                    Politeknik Negeri Semarang telah meraih akreditasi Unggul dari 
                    Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT)
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      <span>No. SK: 1234/SK/BAN-PT/2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>Berlaku s/d 2028</span>
                    </div>
                  </div>
                </div>
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
                  <Download className="w-4 h-4" />
                  Lihat Sertifikat
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Certifications Grid */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Sertifikasi Internasional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{cert.description}</p>
                    <Badge variant="outline" className="mt-3">
                      Tahun {cert.year}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Program Study Accreditation Table */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Akreditasi Program Studi
              </CardTitle>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Cari program studi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary hover:bg-primary">
                    <TableHead className="text-primary-foreground font-semibold">
                      Program Studi
                    </TableHead>
                    <TableHead className="text-primary-foreground font-semibold text-center">
                      Jenjang
                    </TableHead>
                    <TableHead className="text-primary-foreground font-semibold text-center">
                      Peringkat
                    </TableHead>
                    <TableHead className="text-primary-foreground font-semibold text-center">
                      Masa Berlaku
                    </TableHead>
                    <TableHead className="text-primary-foreground font-semibold text-center">
                      Aksi
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((item, index) => (
                    <TableRow
                      key={item.id}
                      className={index % 2 === 0 ? "bg-muted/30" : ""}
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-primary" />
                          {item.prodi}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline">{item.jenjang}</Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        {getPeringkatBadge(item.peringkat)}
                      </TableCell>
                      <TableCell className="text-center text-muted-foreground">
                        {item.masaBerlaku}
                      </TableCell>
                      <TableCell className="text-center">
                        <Button variant="ghost" size="sm" className="gap-1">
                          <FileText className="w-4 h-4" />
                          Sertifikat
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredData.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Search className="w-10 h-10 mx-auto mb-3 opacity-50" />
                <p>Tidak ada program studi yang ditemukan</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Verification Info */}
        <Card className="bg-muted/50">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <ExternalLink className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-semibold text-foreground">Verifikasi Akreditasi</h3>
                <p className="text-sm text-muted-foreground">
                  Untuk memverifikasi status akreditasi, silakan kunjungi website resmi BAN-PT
                </p>
              </div>
              <Button variant="outline" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                Kunjungi BAN-PT
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </SubPageLayout>
  );
}
