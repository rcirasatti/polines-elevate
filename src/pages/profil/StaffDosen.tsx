import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, Users, GraduationCap, Award, BookOpen,
  Mail, Phone, ExternalLink, Filter, Building2
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SubPageLayout } from "@/components/layout/SubPageLayout";

const sidebarLinks = [
  { title: "Tentang Polines", href: "/profil/tentang" },
  { title: "Sejarah", href: "/profil/sejarah" },
  { title: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
  { title: "Staff & Dosen", href: "/profil/staff-dosen", isActive: true },
  { title: "Rencana Strategis", href: "/profil/rencana-strategis" },
  { title: "Laporan Kinerja", href: "/profil/laporan-kinerja" },
  { title: "Fasilitas Kampus", href: "/profil/fasilitas" },
  { title: "Sumber Daya", href: "/profil/sumber-daya" },
  { title: "Peta Kampus", href: "/profil/peta-kampus" },
];

const stats = [
  { label: "Total Staf & Dosen", value: "800+", icon: Users },
  { label: "Dosen Tersertifikasi", value: "300+", icon: Award },
  { label: "Doktor (S3)", value: "40+", icon: GraduationCap },
  { label: "Profesor", value: "5", icon: BookOpen },
];

const departments = [
  "Semua Jurusan",
  "Teknik Sipil",
  "Teknik Mesin",
  "Teknik Elektro",
  "Akuntansi",
  "Administrasi Bisnis"
];

const staffData = [
  {
    name: "Dr. Ir. Supriyadi, M.T.",
    position: "Dosen Teknik Mesin",
    department: "Teknik Mesin",
    expertise: "Manufaktur, CAD/CAM",
    education: "S3",
    email: "supriyadi@polines.ac.id",
    image: null
  },
  {
    name: "Dr. Rina Candra, S.T., M.Eng.",
    position: "Dosen Teknik Elektro",
    department: "Teknik Elektro",
    expertise: "Sistem Kendali, IoT",
    education: "S3",
    email: "rina.candra@polines.ac.id",
    image: null
  },
  {
    name: "Bambang Wijaya, S.Kom., M.Cs.",
    position: "Dosen Teknik Elektro",
    department: "Teknik Elektro",
    expertise: "Cloud Computing, Networking",
    education: "S2",
    email: "bambang.wijaya@polines.ac.id",
    image: null
  },
  {
    name: "Dra. Sri Mulyani, M.Si., Ak.",
    position: "Dosen Akuntansi",
    department: "Akuntansi",
    expertise: "Akuntansi Keuangan, Audit",
    education: "S2",
    email: "sri.mulyani@polines.ac.id",
    image: null
  },
  {
    name: "Ir. Ahmad Fauzi, M.T.",
    position: "Dosen Teknik Sipil",
    department: "Teknik Sipil",
    expertise: "Struktur, Beton Bertulang",
    education: "S2",
    email: "ahmad.fauzi@polines.ac.id",
    image: null
  },
  {
    name: "Dra. Endang Purwanti, M.M.",
    position: "Dosen Administrasi Bisnis",
    department: "Administrasi Bisnis",
    expertise: "Manajemen SDM, Marketing",
    education: "S2",
    email: "endang.p@polines.ac.id",
    image: null
  },
];

export default function StaffDosen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("Semua Jurusan");

  const filteredStaff = staffData.filter((staff) => {
    const matchesSearch = staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.expertise.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === "Semua Jurusan" || 
      staff.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <SubPageLayout
      title="Profil Sumber Daya Manusia"
      subtitle="Direktori dosen dan staf Politeknik Negeri Semarang"
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Profil", href: "/profil/tentang" },
        { label: "Staff & Dosen" }
      ]}
    >
      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Search & Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col md:flex-row gap-4 mb-8"
      >
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Cari nama dosen atau keahlian..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12"
          />
        </div>
        <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
          <SelectTrigger className="w-full md:w-[200px]">
            <Building2 className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Pilih Jurusan" />
          </SelectTrigger>
          <SelectContent>
            {departments.map((dept) => (
              <SelectItem key={dept} value={dept}>{dept}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </motion.div>

      {/* Staff Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
      >
        {filteredStaff.map((staff, index) => (
          <motion.div
            key={staff.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.05 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm truncate">{staff.name}</h3>
                    <p className="text-sm text-muted-foreground">{staff.position}</p>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {staff.department}
                    </Badge>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Bidang:</span>
                    <span className="truncate">{staff.expertise}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Pendidikan:</span>
                    <Badge variant="outline" className="text-xs">{staff.education}</Badge>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={`mailto:${staff.email}`}>
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Career CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/20">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Bergabung dengan Keluarga Besar Polines</h3>
                <p className="text-muted-foreground">
                  Lihat informasi rekrutmen dosen dan tenaga kependidikan
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  <Award className="w-4 h-4 mr-2" />
                  Sertifikasi Dosen
                </Button>
                <Button>
                  Informasi Rekrutmen
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SubPageLayout>
  );
}
