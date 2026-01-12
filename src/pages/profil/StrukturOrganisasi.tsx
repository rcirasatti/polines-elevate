import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  User,
  Mail,
  Phone,
  ChevronDown,
  ChevronRight,
  Building2,
  Users,
  Briefcase,
  GraduationCap,
  Shield,
  X,
} from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Person {
  name: string;
  position: string;
  email?: string;
  phone?: string;
  photo?: string;
}

interface Unit {
  name: string;
  head: Person;
  subHead?: Person;
  members?: Person[];
}

const direktur: Person = {
  name: "Dr. Ir. Supriyadi, M.T.",
  position: "Direktur",
  email: "direktur@polines.ac.id",
  phone: "(024) 7473417",
};

const wakilDirektur: Person[] = [
  {
    name: "Drs. Ahmad Fauzi, M.M.",
    position: "Wakil Direktur I",
    email: "wadir1@polines.ac.id",
  },
  {
    name: "Ir. Budi Santoso, M.Eng.",
    position: "Wakil Direktur II",
    email: "wadir2@polines.ac.id",
  },
  {
    name: "Dr. Siti Aminah, M.Pd.",
    position: "Wakil Direktur III",
    email: "wadir3@polines.ac.id",
  },
  {
    name: "Dr. Teguh Wiyono, M.T.",
    position: "Wakil Direktur IV",
    email: "wadir4@polines.ac.id",
  },
];

const jurusanData: Unit[] = [
  {
    name: "Teknik Elektro",
    head: { name: "Dr. Eko Supriyanto, M.T.", position: "Ketua Jurusan" },
    subHead: { name: "Ir. Rina Widiastuti, M.Eng.", position: "Sekretaris Jurusan" },
  },
  {
    name: "Teknik Mesin",
    head: { name: "Dr. Bambang Susilo, M.T.", position: "Ketua Jurusan" },
    subHead: { name: "Ir. Hendro Prasetyo, M.T.", position: "Sekretaris Jurusan" },
  },
  {
    name: "Teknik Sipil",
    head: { name: "Dr. Wahyu Nugroho, M.T.", position: "Ketua Jurusan" },
    subHead: { name: "Ir. Dewi Ratnasari, M.T.", position: "Sekretaris Jurusan" },
  },
  {
    name: "Akuntansi",
    head: { name: "Dr. Sri Mulyani, M.Si., Ak.", position: "Ketua Jurusan" },
    subHead: { name: "Dra. Endang Sulistyowati, M.M.", position: "Sekretaris Jurusan" },
  },
  {
    name: "Administrasi Bisnis",
    head: { name: "Dr. Agus Widodo, M.M.", position: "Ketua Jurusan" },
    subHead: { name: "Dra. Retno Wulandari, M.M.", position: "Sekretaris Jurusan" },
  },
];

const unitData: Unit[] = [
  {
    name: "Pusat Penelitian & Pengabdian Masyarakat (P3M)",
    head: { name: "Dr. Tri Wibowo, M.T.", position: "Kepala P3M" },
  },
  {
    name: "Unit Penjaminan Mutu (UPM)",
    head: { name: "Dr. Heru Santoso, M.M.", position: "Kepala UPM" },
  },
  {
    name: "Pusat Karir & Kerjasama",
    head: { name: "Ir. Yudi Hartono, M.T.", position: "Kepala Pusat" },
  },
  {
    name: "Perpustakaan",
    head: { name: "Dra. Ani Suryani, M.Hum.", position: "Kepala Perpustakaan" },
  },
  {
    name: "UPT Teknologi Informasi",
    head: { name: "Ir. Didik Prasetyo, M.Kom.", position: "Kepala UPT TI" },
  },
  {
    name: "UPT Bahasa",
    head: { name: "Dra. Maya Sari, M.Pd.", position: "Kepala UPT Bahasa" },
  },
];

const senatData: Person[] = [
  { name: "Dr. Ir. Supriyadi, M.T.", position: "Ketua Senat" },
  { name: "Dr. Eko Supriyanto, M.T.", position: "Sekretaris Senat" },
  { name: "Prof. Dr. Ahmad Yani, M.T.", position: "Anggota Senat" },
  { name: "Dr. Budi Raharjo, M.Eng.", position: "Anggota Senat" },
  { name: "Dr. Citra Dewi, M.Si.", position: "Anggota Senat" },
];

const sidebarLinks = [
  { title: "Tentang Polines", href: "/profil/tentang", active: false },
  { title: "Struktur Organisasi", href: "/profil/struktur-organisasi", active: true },
  { title: "Rencana Strategis", href: "/profil/rencana-strategis", active: false },
  { title: "Laporan Kinerja", href: "/profil/laporan-kinerja", active: false },
  { title: "Fasilitas", href: "/profil/fasilitas", active: false },
  { title: "Sumber Daya Bagian", href: "/profil/sumber-daya", active: false },
  { title: "Peta Kampus", href: "/profil/peta-kampus", active: false },
];

export default function StrukturOrganisasi() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [expandedUnits, setExpandedUnits] = useState<string[]>([]);

  const toggleUnit = (name: string) => {
    setExpandedUnits((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const filterBySearch = (items: Person[], query: string) => {
    if (!query) return items;
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.position.toLowerCase().includes(query.toLowerCase())
    );
  };

  const PersonCard = ({ person, large = false }: { person: Person; large?: boolean }) => (
    <Card
      className={`cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 ${
        large ? "bg-gradient-to-br from-primary to-polines-blue-light text-white" : ""
      }`}
      onClick={() => setSelectedPerson(person)}
    >
      <CardContent className={`${large ? "p-8" : "p-6"} text-center`}>
        <div
          className={`${large ? "w-24 h-24" : "w-16 h-16"} mx-auto mb-4 rounded-full ${
            large ? "bg-white/20" : "bg-primary/10"
          } flex items-center justify-center`}
        >
          <User className={`${large ? "w-12 h-12" : "w-8 h-8"} ${large ? "text-white" : "text-primary"}`} />
        </div>
        <h3 className={`font-bold ${large ? "text-xl" : "text-base"} mb-1`}>{person.name}</h3>
        <p className={`text-sm ${large ? "text-white/80" : "text-muted-foreground"}`}>
          {person.position}
        </p>
      </CardContent>
    </Card>
  );

  return (
    <SubPageLayout
      title="Struktur Organisasi"
      subtitle="Kepemimpinan Politeknik Negeri Semarang"
      breadcrumbs={[
        { label: "Profil", href: "/profil/tentang" },
        { label: "Struktur Organisasi" },
      ]}

    >
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Cari nama pejabat atau unit kerja..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Top Management Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          Pimpinan Polines
        </h2>

        {/* Direktur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <div className="max-w-xs w-full">
            <PersonCard person={direktur} large />
          </div>
        </motion.div>

        {/* Connecting Lines Visual */}
        <div className="flex justify-center mb-4">
          <div className="w-1 h-8 bg-primary/30" />
        </div>
        <div className="flex justify-center mb-4">
          <div className="w-3/4 h-1 bg-primary/30" />
        </div>

        {/* Wakil Direktur */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filterBySearch(wakilDirektur, searchQuery).map((wd, index) => (
            <motion.div
              key={wd.position}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PersonCard person={wd} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tabs for Jurusan, Unit, Senat */}
      <Tabs defaultValue="jurusan" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="jurusan" className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Jurusan
          </TabsTrigger>
          <TabsTrigger value="unit" className="flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            Pusat/Unit
          </TabsTrigger>
          <TabsTrigger value="senat" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Senat
          </TabsTrigger>
        </TabsList>

        <TabsContent value="jurusan">
          <div className="space-y-4">
            {jurusanData.map((jurusan) => (
              <motion.div
                key={jurusan.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Card>
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleUnit(jurusan.name)}
                      className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-semibold text-foreground">{jurusan.name}</span>
                      </div>
                      {expandedUnits.includes(jurusan.name) ? (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedUnits.includes(jurusan.name) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-0 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div
                              className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-colors"
                              onClick={() => setSelectedPerson(jurusan.head)}
                            >
                              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                                <User className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <p className="font-medium text-sm">{jurusan.head.name}</p>
                                <p className="text-xs text-muted-foreground">{jurusan.head.position}</p>
                              </div>
                            </div>
                            {jurusan.subHead && (
                              <div
                                className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-colors"
                                onClick={() => setSelectedPerson(jurusan.subHead!)}
                              >
                                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                                  <User className="w-5 h-5 text-secondary" />
                                </div>
                                <div>
                                  <p className="font-medium text-sm">{jurusan.subHead.name}</p>
                                  <p className="text-xs text-muted-foreground">{jurusan.subHead.position}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="unit">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {unitData.map((unit, index) => (
              <motion.div
                key={unit.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-all">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground text-sm mb-2">{unit.name}</h3>
                        <div
                          className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
                          onClick={() => setSelectedPerson(unit.head)}
                        >
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{unit.head.name}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="senat">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {filterBySearch(senatData, searchQuery).map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                    onClick={() => setSelectedPerson(member)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.position}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Person Detail Dialog */}
      <Dialog open={!!selectedPerson} onOpenChange={() => setSelectedPerson(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Profil Pejabat</DialogTitle>
          </DialogHeader>
          {selectedPerson && (
            <div className="text-center py-4">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{selectedPerson.name}</h3>
              <p className="text-muted-foreground mb-4">{selectedPerson.position}</p>
              <div className="space-y-2">
                {selectedPerson.email && (
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href={`mailto:${selectedPerson.email}`} className="text-primary hover:underline">
                      {selectedPerson.email}
                    </a>
                  </div>
                )}
                {selectedPerson.phone && (
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>{selectedPerson.phone}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SubPageLayout>
  );
}
