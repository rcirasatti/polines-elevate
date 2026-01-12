import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  Users,
  Award,
  BookOpen,
  Lightbulb,
  Globe,
  Download,
  FileText,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const pilarStrategis = [
  {
    icon: BookOpen,
    title: "Kualitas Pendidikan",
    description: "Peningkatan mutu pembelajaran berbasis industri dan kompetensi global",
    color: "bg-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Riset & Inovasi",
    description: "Pengembangan penelitian terapan dan produk inovasi teknologi",
    color: "bg-yellow-500",
  },
  {
    icon: Users,
    title: "SDM Unggul",
    description: "Peningkatan kompetensi dosen dan tenaga kependidikan",
    color: "bg-green-500",
  },
  {
    icon: Globe,
    title: "Kerjasama Global",
    description: "Ekspansi kemitraan internasional dan jaringan industri",
    color: "bg-purple-500",
  },
];

const roadmapData = [
  {
    phase: "Fase 1",
    year: "2020-2021",
    title: "Persiapan & Konsolidasi",
    items: [
      "Penyusunan kurikulum berbasis KKNI",
      "Penguatan sistem penjaminan mutu",
      "Digitalisasi layanan akademik",
    ],
    status: "completed",
  },
  {
    phase: "Fase 2",
    year: "2022-2023",
    title: "Penguatan & Pengembangan",
    items: [
      "Akreditasi internasional program studi",
      "Pengembangan pusat unggulan riset",
      "Ekspansi kerjasama industri",
    ],
    status: "completed",
  },
  {
    phase: "Fase 3",
    year: "2024-2025",
    title: "Kemandirian & Keunggulan",
    items: [
      "Pencapaian status PTN-BH",
      "Pengembangan teaching factory",
      "Internasionalisasi institusi",
    ],
    status: "in-progress",
  },
];

const documents = [
  {
    name: "Dokumen Rencana Strategis Polines",
    version: "2020-2024",
    type: "PDF",
    size: "4.2 MB",
  },
  {
    name: "Rencana Strategis Bisnis (RSB)",
    version: "2020-2024",
    type: "PDF",
    size: "2.8 MB",
  },
  {
    name: "Rencana Kerja Tahunan",
    version: "2024",
    type: "PDF",
    size: "1.5 MB",
  },
  {
    name: "Dokumen RPJM Polines",
    version: "2020-2024",
    type: "PDF",
    size: "3.1 MB",
  },
];

const ikuData = [
  { name: "Lulusan Mendapat Pekerjaan Layak", target: 75, achieved: 82, unit: "%" },
  { name: "Dosen Berkegiatan di Luar Kampus", target: 50, achieved: 48, unit: "%" },
  { name: "Pendapatan Non-APBN", target: 30, achieved: 35, unit: "%" },
  { name: "Kerjasama dengan Industri", target: 500, achieved: 520, unit: "Mitra" },
  { name: "Prodi Terakreditasi A/Unggul", target: 80, achieved: 75, unit: "%" },
];

const sidebarLinks = [
  { title: "Tentang Polines", href: "/profil/tentang", active: false },
  { title: "Struktur Organisasi", href: "/profil/struktur-organisasi", active: false },
  { title: "Rencana Strategis", href: "/profil/rencana-strategis", active: true },
  { title: "Laporan Kinerja", href: "/profil/laporan-kinerja", active: false },
  { title: "Fasilitas", href: "/profil/fasilitas", active: false },
  { title: "Sumber Daya Bagian", href: "/profil/sumber-daya", active: false },
  { title: "Peta Kampus", href: "/profil/peta-kampus", active: false },
];

export default function RencanaStrategis() {
  return (
    <SubPageLayout
      title="Rencana Strategis"
      subtitle="Roadmap Menuju Keunggulan 2020-2024"
      breadcrumbs={[
        { label: "Profil", href: "/profil/tentang" },
        { label: "Rencana Strategis" },
      ]}
    >
      {/* Executive Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Target className="w-6 h-6 text-primary" />
          Pilar Strategis
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pilarStrategis.map((pilar, index) => (
            <motion.div
              key={pilar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${pilar.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <pilar.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{pilar.title}</h3>
                      <p className="text-sm text-muted-foreground">{pilar.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-primary" />
          Roadmap Pengembangan
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-muted hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmapData.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div
                  className={`hidden md:flex w-8 h-8 mx-auto mb-4 rounded-full items-center justify-center z-10 relative ${
                    phase.status === "completed"
                      ? "bg-green-500"
                      : phase.status === "in-progress"
                      ? "bg-secondary"
                      : "bg-muted"
                  }`}
                >
                  {phase.status === "completed" ? (
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  ) : (
                    <div className="w-3 h-3 bg-white rounded-full" />
                  )}
                </div>

                <Card
                  className={`h-full ${
                    phase.status === "in-progress"
                      ? "ring-2 ring-secondary ring-offset-2"
                      : ""
                  }`}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                        {phase.phase}
                      </span>
                      <span className="text-xs text-muted-foreground">{phase.year}</span>
                    </div>
                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs: Documents & IKU */}
      <Tabs defaultValue="documents" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="documents" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Dokumen Renstra
          </TabsTrigger>
          <TabsTrigger value="iku" className="flex items-center gap-2">
            <Award className="w-4 h-4" />
            Capaian IKU
          </TabsTrigger>
        </TabsList>

        <TabsContent value="documents">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-4 font-semibold text-foreground">Nama Dokumen</th>
                      <th className="text-left p-4 font-semibold text-foreground">Versi/Tahun</th>
                      <th className="text-left p-4 font-semibold text-foreground hidden sm:table-cell">Ukuran</th>
                      <th className="text-right p-4 font-semibold text-foreground">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((doc, index) => (
                      <motion.tr
                        key={doc.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                              <FileText className="w-5 h-5 text-red-600" />
                            </div>
                            <span className="font-medium text-foreground text-sm">{doc.name}</span>
                          </div>
                        </td>
                        <td className="p-4 text-sm text-muted-foreground">{doc.version}</td>
                        <td className="p-4 text-sm text-muted-foreground hidden sm:table-cell">{doc.size}</td>
                        <td className="p-4 text-right">
                          <Button size="sm" variant="outline" className="gap-2">
                            <Download className="w-4 h-4" />
                            <span className="hidden sm:inline">Download</span>
                          </Button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="iku">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Indikator Kinerja Utama (IKU) 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {ikuData.map((iku, index) => {
                  const percentage = Math.min((iku.achieved / iku.target) * 100, 100);
                  const isAchieved = iku.achieved >= iku.target;

                  return (
                    <motion.div
                      key={iku.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{iku.name}</span>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-bold ${isAchieved ? "text-green-600" : "text-orange-500"}`}>
                            {iku.achieved} {iku.unit}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            / {iku.target} {iku.unit}
                          </span>
                        </div>
                      </div>
                      <Progress
                        value={percentage}
                        className={`h-2 ${isAchieved ? "[&>div]:bg-green-500" : "[&>div]:bg-orange-500"}`}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </SubPageLayout>
  );
}
