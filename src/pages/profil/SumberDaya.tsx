import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Mail,
  Phone,
  FileText,
  Download,
  Building,
  Briefcase,
  GraduationCap,
  Calculator,
  Settings,
  ChevronRight,
  Search,
  User,
  Linkedin,
} from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Staff {
  name: string;
  position: string;
  email?: string;
  phone?: string;
}

interface Department {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  head: Staff;
  subUnits: {
    name: string;
    head: Staff;
  }[];
  staff: Staff[];
  documents: {
    name: string;
    type: string;
  }[];
}

const departments: Department[] = [
  {
    id: "umum",
    name: "Bagian Umum",
    description: "Mengelola administrasi umum, rumah tangga, keamanan, dan perlengkapan kampus.",
    icon: Building,
    head: {
      name: "Drs. Sunaryo, M.M.",
      position: "Kepala Bagian Umum",
      email: "bag.umum@polines.ac.id",
      phone: "(024) 7473417 ext. 101",
    },
    subUnits: [
      { name: "Subbag. Rumah Tangga", head: { name: "Bambang Sutrisno", position: "Kasubbag RT" } },
      { name: "Subbag. Keamanan", head: { name: "Agus Priyanto", position: "Kasubbag Keamanan" } },
      { name: "Subbag. Perlengkapan", head: { name: "Sri Wahyuni", position: "Kasubbag Perlengkapan" } },
    ],
    staff: [
      { name: "Eko Prasetyo", position: "Staf Administrasi" },
      { name: "Dewi Rahmawati", position: "Staf Administrasi" },
      { name: "Hendra Kusuma", position: "Staf Perlengkapan" },
    ],
    documents: [
      { name: "SOP Pelayanan Umum", type: "PDF" },
      { name: "Alur Pengajuan Barang", type: "PDF" },
      { name: "Formulir Peminjaman Ruangan", type: "DOCX" },
    ],
  },
  {
    id: "akademik",
    name: "Bagian Akademik",
    description: "Mengelola administrasi akademik, registrasi mahasiswa, dan penyelenggaraan pendidikan.",
    icon: GraduationCap,
    head: {
      name: "Dr. Endang Sulistyowati, M.Pd.",
      position: "Kepala Bagian Akademik",
      email: "bag.akademik@polines.ac.id",
      phone: "(024) 7473417 ext. 102",
    },
    subUnits: [
      { name: "Subbag. Registrasi & Statistik", head: { name: "Wulan Sari", position: "Kasubbag Registrasi" } },
      { name: "Subbag. Penyelenggaraan Pendidikan", head: { name: "Ahmad Fauzi", position: "Kasubbag Dikjar" } },
    ],
    staff: [
      { name: "Novi Andriani", position: "Staf Akademik" },
      { name: "Rudi Hartono", position: "Staf Registrasi" },
      { name: "Siti Fatimah", position: "Staf Akademik" },
    ],
    documents: [
      { name: "SOP Registrasi Mahasiswa", type: "PDF" },
      { name: "Panduan Perkuliahan", type: "PDF" },
      { name: "Formulir Cuti Akademik", type: "DOCX" },
    ],
  },
  {
    id: "perencanaan",
    name: "Bagian Perencanaan",
    description: "Mengelola perencanaan strategis, anggaran, dan kerjasama institusi.",
    icon: Briefcase,
    head: {
      name: "Ir. Wahyu Hidayat, M.T.",
      position: "Kepala Bagian Perencanaan",
      email: "bag.perencanaan@polines.ac.id",
      phone: "(024) 7473417 ext. 103",
    },
    subUnits: [
      { name: "Subbag. Program & Anggaran", head: { name: "Budi Setiawan", position: "Kasubbag Program" } },
      { name: "Subbag. Kerjasama", head: { name: "Dian Permata", position: "Kasubbag Kerjasama" } },
    ],
    staff: [
      { name: "Teguh Prakoso", position: "Staf Perencanaan" },
      { name: "Lina Kusuma", position: "Staf Kerjasama" },
    ],
    documents: [
      { name: "Template Proposal Kerjasama", type: "DOCX" },
      { name: "Panduan Penyusunan RKA", type: "PDF" },
    ],
  },
  {
    id: "keuangan",
    name: "Bagian Keuangan",
    description: "Mengelola keuangan, pembayaran, dan pelaporan anggaran institusi.",
    icon: Calculator,
    head: {
      name: "Dra. Yulianti, M.Ak.",
      position: "Kepala Bagian Keuangan",
      email: "bag.keuangan@polines.ac.id",
      phone: "(024) 7473417 ext. 104",
    },
    subUnits: [
      { name: "Subbag. Perbendaharaan", head: { name: "Retno Wati", position: "Kasubbag Perbendaharaan" } },
      { name: "Subbag. Akuntansi", head: { name: "Agung Prasetyo", position: "Kasubbag Akuntansi" } },
    ],
    staff: [
      { name: "Maya Sari", position: "Staf Keuangan" },
      { name: "Doni Kurniawan", position: "Staf Akuntansi" },
      { name: "Fitri Handayani", position: "Staf Perbendaharaan" },
    ],
    documents: [
      { name: "SOP Pembayaran", type: "PDF" },
      { name: "Formulir Reimbursement", type: "DOCX" },
      { name: "Panduan Pelaporan Keuangan", type: "PDF" },
    ],
  },
  {
    id: "kepegawaian",
    name: "Bagian Kepegawaian",
    description: "Mengelola SDM, rekrutmen, pengembangan karir, dan kesejahteraan pegawai.",
    icon: Users,
    head: {
      name: "Drs. Heru Wibowo, M.M.",
      position: "Kepala Bagian Kepegawaian",
      email: "bag.kepegawaian@polines.ac.id",
      phone: "(024) 7473417 ext. 105",
    },
    subUnits: [
      { name: "Subbag. Mutasi & Pengembangan", head: { name: "Andi Setiawan", position: "Kasubbag Mutasi" } },
      { name: "Subbag. Kesejahteraan", head: { name: "Nina Rosita", position: "Kasubbag Kesejahteraan" } },
    ],
    staff: [
      { name: "Rina Anggraini", position: "Staf Kepegawaian" },
      { name: "Joko Susilo", position: "Staf Pengembangan SDM" },
    ],
    documents: [
      { name: "SOP Pengajuan Cuti", type: "PDF" },
      { name: "Formulir Kenaikan Pangkat", type: "DOCX" },
      { name: "Panduan Tugas Belajar", type: "PDF" },
    ],
  },
];

const sidebarLinks = [
  { title: "Tentang Polines", href: "/profil/tentang", active: false },
  { title: "Struktur Organisasi", href: "/profil/struktur-organisasi", active: false },
  { title: "Rencana Strategis", href: "/profil/rencana-strategis", active: false },
  { title: "Laporan Kinerja", href: "/profil/laporan-kinerja", active: false },
  { title: "Fasilitas", href: "/profil/fasilitas", active: false },
  { title: "Sumber Daya Bagian", href: "/profil/sumber-daya", active: true },
  { title: "Peta Kampus", href: "/profil/peta-kampus", active: false },
];

export default function SumberDaya() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDepartment, setActiveDepartment] = useState(departments[0].id);

  const currentDept = departments.find((d) => d.id === activeDepartment)!;

  const filteredStaff = currentDept.staff.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SubPageLayout
      title="Sumber Daya Bagian"
      subtitle="Unit Kerja & Administrasi Polines"
      breadcrumbs={[
        { label: "Profil", href: "/profil/tentang" },
        { label: "Sumber Daya Bagian" },
      ]}

    >
      {/* Department Tabs */}
      <div className="mb-8 overflow-x-auto pb-2">
        <div className="flex gap-2 min-w-max">
          {departments.map((dept) => (
            <Button
              key={dept.id}
              variant={activeDepartment === dept.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveDepartment(dept.id)}
              className="gap-2"
            >
              <dept.icon className="w-4 h-4" />
              {dept.name.replace("Bagian ", "")}
            </Button>
          ))}
        </div>
      </div>

      {/* Department Overview */}
      <motion.div
        key={currentDept.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <currentDept.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-1">{currentDept.name}</h2>
                <p className="text-muted-foreground">{currentDept.description}</p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href={`mailto:${currentDept.head.email}`}>
                  <Mail className="w-4 h-4" />
                  {currentDept.head.email}
                </a>
              </Button>
              {currentDept.head.phone && (
                <Button variant="outline" size="sm" className="gap-2">
                  <Phone className="w-4 h-4" />
                  {currentDept.head.phone}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Staff Grid */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Pejabat & Staf
            </h3>
            <div className="relative w-48">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Cari staf..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 h-9 text-sm"
              />
            </div>
          </div>

          {/* Kepala Bagian */}
          <div className="mb-6">
            <Card className="bg-gradient-to-br from-primary to-polines-blue-light text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{currentDept.head.name}</h4>
                    <p className="text-white/80">{currentDept.head.position}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="secondary" asChild title={`Email ${currentDept.head.name}`}>
                      <a href={`mailto:${currentDept.head.email}`}>
                        <Mail className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sub Units */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {currentDept.subUnits.map((unit, index) => (
              <motion.div
                key={unit.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-all">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Settings className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">{unit.name}</h4>
                        <p className="text-sm text-muted-foreground">{unit.head.name}</p>
                        <p className="text-xs text-muted-foreground">{unit.head.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Staff List */}
          {filteredStaff.length > 0 && (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Staf Lainnya</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="divide-y">
                  {filteredStaff.map((staff, index) => (
                    <div
                      key={staff.name}
                      className="py-3 flex items-center justify-between first:pt-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-sm text-foreground">{staff.name}</p>
                          <p className="text-xs text-muted-foreground">{staff.position}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Documents */}
        <section>
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Dokumen & Formulir
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentDept.documents.map((doc, index) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-md transition-all cursor-pointer group">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          doc.type === "PDF" ? "bg-red-100" : "bg-blue-100"
                        }`}
                      >
                        <FileText
                          className={`w-5 h-5 ${doc.type === "PDF" ? "text-red-600" : "text-blue-600"}`}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-foreground">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">{doc.type}</p>
                      </div>
                    </div>
                    <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Download className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </SubPageLayout>
  );
}
