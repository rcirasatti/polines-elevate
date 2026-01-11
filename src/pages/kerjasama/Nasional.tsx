import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, Factory, Briefcase, FileCheck, Users,
  Search, Filter, ChevronRight, ExternalLink, CheckCircle2,
  GraduationCap, Handshake
} from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sidebarLinks = [
  { title: "Kerjasama Internasional", href: "/kerjasama/internasional" },
  { title: "Kerjasama Nasional", href: "/kerjasama/nasional", active: true },
  { title: "Career Development Center", href: "/kerjasama/cdc" },
  { title: "Tracer Study", href: "/kerjasama/tracer-study" },
  { title: "Ikatan Alumni", href: "/kerjasama/alumni" },
];

const sectors = [
  { value: "all", label: "Semua Sektor" },
  { value: "bumn", label: "BUMN" },
  { value: "swasta", label: "Swasta Nasional" },
  { value: "pemerintah", label: "Pemerintah" },
  { value: "pendidikan", label: "Pendidikan" },
];

const industryPartners = [
  {
    id: 1,
    name: "PT Kereta Api Indonesia (Persero)",
    sector: "bumn",
    logo: "KAI",
    programs: ["Magang", "Rekrutmen", "Riset Terapan"],
    mouStatus: "active",
    since: 2015,
    graduates: 150,
  },
  {
    id: 2,
    name: "PT Telkom Indonesia (Persero) Tbk",
    sector: "bumn",
    logo: "TELKOM",
    programs: ["Magang", "Sertifikasi", "Digital Talent"],
    mouStatus: "active",
    since: 2016,
    graduates: 200,
  },
  {
    id: 3,
    name: "PT Astra International Tbk",
    sector: "swasta",
    logo: "ASTRA",
    programs: ["Magang", "Rekrutmen", "Beasiswa"],
    mouStatus: "active",
    since: 2014,
    graduates: 180,
  },
  {
    id: 4,
    name: "PT PLN (Persero)",
    sector: "bumn",
    logo: "PLN",
    programs: ["Magang", "Riset Energi", "Sertifikasi"],
    mouStatus: "active",
    since: 2017,
    graduates: 120,
  },
  {
    id: 5,
    name: "Djarum Foundation",
    sector: "swasta",
    logo: "DJARUM",
    programs: ["Beasiswa", "Leadership Training"],
    mouStatus: "active",
    since: 2018,
    graduates: 85,
  },
  {
    id: 6,
    name: "Bank Jateng",
    sector: "bumn",
    logo: "JATENG",
    programs: ["Magang", "Rekrutmen", "Literasi Keuangan"],
    mouStatus: "active",
    since: 2019,
    graduates: 95,
  },
  {
    id: 7,
    name: "PT Pertamina (Persero)",
    sector: "bumn",
    logo: "PERTAMINA",
    programs: ["Magang", "Riset Energi"],
    mouStatus: "renewal",
    since: 2016,
    graduates: 75,
  },
  {
    id: 8,
    name: "Lippo Group",
    sector: "swasta",
    logo: "LIPPO",
    programs: ["Beasiswa", "Magang", "Rekrutmen"],
    mouStatus: "active",
    since: 2020,
    graduates: 45,
  },
];

const benefits = [
  {
    icon: Briefcase,
    title: "Program Magang",
    description: "Akses magang berkualitas di perusahaan mitra untuk pengalaman industri nyata.",
  },
  {
    icon: GraduationCap,
    title: "Rekrutmen Langsung",
    description: "Kesempatan rekrutmen langsung oleh perusahaan mitra setelah lulus.",
  },
  {
    icon: FileCheck,
    title: "Riset Terapan",
    description: "Kolaborasi riset dengan industri untuk solusi masalah nyata.",
  },
  {
    icon: Handshake,
    title: "Sertifikasi Industri",
    description: "Program sertifikasi kompetensi yang diakui industri.",
  },
];

export default function Nasional() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("all");

  const filteredPartners = industryPartners.filter((partner) => {
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector = selectedSector === "all" || partner.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  const activePartners = industryPartners.filter(p => p.mouStatus === "active").length;

  return (
    <SubPageLayout
      title="Kerjasama Nasional"
      subtitle="Kemitraan Strategis dengan Dunia Usaha dan Industri"
      breadcrumbs={[
        { label: "Kerjasama", href: "/kerjasama" },
        { label: "Nasional" },
      ]}
      sidebarTitle="Kerjasama"
      sidebarLinks={sidebarLinks}
    >
      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20"
        >
          <Building2 className="w-8 h-8 text-primary mb-2" />
          <p className="text-2xl font-bold text-foreground">{industryPartners.length}+</p>
          <p className="text-sm text-muted-foreground">Mitra Industri</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl p-4 border border-green-500/20"
        >
          <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
          <p className="text-2xl font-bold text-foreground">{activePartners}</p>
          <p className="text-sm text-muted-foreground">MoU Aktif</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-4 border border-secondary/20"
        >
          <Users className="w-8 h-8 text-secondary mb-2" />
          <p className="text-2xl font-bold text-foreground">950+</p>
          <p className="text-sm text-muted-foreground">Lulusan Terserap</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-xl p-4 border border-purple-500/20"
        >
          <Factory className="w-8 h-8 text-purple-500 mb-2" />
          <p className="text-2xl font-bold text-foreground">5</p>
          <p className="text-sm text-muted-foreground">Sektor Industri</p>
        </motion.div>
      </div>

      {/* Logo Cloud */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-xl p-6 border border-border mb-8"
      >
        <h3 className="text-lg font-semibold mb-4">Mitra Industri Kami</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {industryPartners.slice(0, 8).map((partner) => (
            <div
              key={partner.id}
              className="w-24 h-16 bg-muted rounded-lg flex items-center justify-center text-muted-foreground font-bold text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Search & Filter */}
      <div className="bg-card rounded-xl p-6 border border-border mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Cari perusahaan mitra..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedSector} onValueChange={setSelectedSector}>
            <SelectTrigger className="w-full md:w-[180px]">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Pilih Sektor" />
            </SelectTrigger>
            <SelectContent>
              {sectors.map((sector) => (
                <SelectItem key={sector.value} value={sector.value}>
                  {sector.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Active MoU List */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <FileCheck className="w-5 h-5 text-primary" />
          Daftar Kerjasama Aktif ({filteredPartners.length})
        </h3>
        
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-semibold text-foreground">Perusahaan</th>
                  <th className="text-left p-4 font-semibold text-foreground hidden md:table-cell">Sektor</th>
                  <th className="text-left p-4 font-semibold text-foreground hidden lg:table-cell">Program</th>
                  <th className="text-center p-4 font-semibold text-foreground">Status</th>
                  <th className="text-center p-4 font-semibold text-foreground hidden md:table-cell">Lulusan</th>
                </tr>
              </thead>
              <tbody>
                {filteredPartners.map((partner, index) => (
                  <motion.tr
                    key={partner.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-t border-border hover:bg-muted/30 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-xs">
                          {partner.logo}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{partner.name}</p>
                          <p className="text-sm text-muted-foreground md:hidden">
                            Sejak {partner.since}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      <Badge variant="outline" className="capitalize">
                        {partner.sector}
                      </Badge>
                    </td>
                    <td className="p-4 hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {partner.programs.slice(0, 2).map((program) => (
                          <Badge key={program} variant="secondary" className="text-xs">
                            {program}
                          </Badge>
                        ))}
                        {partner.programs.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{partner.programs.length - 2}
                          </Badge>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <Badge 
                        className={partner.mouStatus === "active" 
                          ? "bg-green-500 text-white" 
                          : "bg-amber-500 text-white"
                        }
                      >
                        {partner.mouStatus === "active" ? "Aktif" : "Perpanjangan"}
                      </Badge>
                    </td>
                    <td className="p-4 text-center hidden md:table-cell">
                      <span className="font-semibold text-foreground">{partner.graduates}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Manfaat Kerjasama dengan Polines</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors"
            >
              <benefit.icon className="w-10 h-10 text-primary mb-3" />
              <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-xl p-8 border border-secondary/30"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Tertarik Bermitra dengan Polines?
            </h3>
            <p className="text-muted-foreground">
              Kami terbuka untuk kerjasama dengan berbagai sektor industri. 
              Hubungi kami untuk diskusi peluang kemitraan strategis.
            </p>
          </div>
          <Button variant="gold" size="lg" className="whitespace-nowrap">
            Ajukan Kerjasama
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </motion.div>
    </SubPageLayout>
  );
}
