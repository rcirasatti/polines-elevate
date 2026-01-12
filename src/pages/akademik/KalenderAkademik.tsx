import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, Download, ExternalLink, ChevronRight,
  BookOpen, GraduationCap, FileText, Clock
} from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AcademicEvent {
  id: string;
  title: string;
  dateStart: string;
  dateEnd?: string;
  type: "akademik" | "administrasi" | "ujian" | "libur";
}

const semesterGasalEvents: AcademicEvent[] = [
  { id: "1", title: "Registrasi Mahasiswa Baru", dateStart: "1 Agustus", dateEnd: "15 Agustus", type: "administrasi" },
  { id: "2", title: "Perkuliahan Semester Gasal Dimulai", dateStart: "19 Agustus", type: "akademik" },
  { id: "3", title: "Batas Akhir Pengisian KRS", dateStart: "30 Agustus", type: "administrasi" },
  { id: "4", title: "Libur Hari Kemerdekaan", dateStart: "17 Agustus", type: "libur" },
  { id: "5", title: "Ujian Tengah Semester (UTS)", dateStart: "14 Oktober", dateEnd: "25 Oktober", type: "ujian" },
  { id: "6", title: "Libur Semester Gasal", dateStart: "28 Oktober", dateEnd: "1 November", type: "libur" },
  { id: "7", title: "Perkuliahan Dilanjutkan", dateStart: "4 November", type: "akademik" },
  { id: "8", title: "Ujian Akhir Semester (UAS)", dateStart: "16 Desember", dateEnd: "27 Desember", type: "ujian" },
  { id: "9", title: "Libur Natal & Tahun Baru", dateStart: "23 Desember", dateEnd: "1 Januari", type: "libur" },
  { id: "10", title: "Pengumuman Nilai Semester Gasal", dateStart: "10 Januari", type: "akademik" },
];

const semesterGenapEvents: AcademicEvent[] = [
  { id: "11", title: "Registrasi Semester Genap", dateStart: "13 Januari", dateEnd: "24 Januari", type: "administrasi" },
  { id: "12", title: "Perkuliahan Semester Genap Dimulai", dateStart: "27 Januari", type: "akademik" },
  { id: "13", title: "Batas Akhir Pengisian KRS", dateStart: "7 Februari", type: "administrasi" },
  { id: "14", title: "Libur Tahun Baru Imlek", dateStart: "10 Februari", type: "libur" },
  { id: "15", title: "Ujian Tengah Semester (UTS)", dateStart: "17 Maret", dateEnd: "28 Maret", type: "ujian" },
  { id: "16", title: "Libur Semester Genap", dateStart: "31 Maret", dateEnd: "4 April", type: "libur" },
  { id: "17", title: "Perkuliahan Dilanjutkan", dateStart: "7 April", type: "akademik" },
  { id: "18", title: "Libur Hari Raya Idul Fitri", dateStart: "28 Maret", dateEnd: "6 April", type: "libur" },
  { id: "19", title: "Ujian Akhir Semester (UAS)", dateStart: "2 Juni", dateEnd: "13 Juni", type: "ujian" },
  { id: "20", title: "Wisuda Periode I", dateStart: "28 Juni", type: "akademik" },
  { id: "21", title: "Libur Semester Genap", dateStart: "16 Juni", dateEnd: "31 Juli", type: "libur" },
];

const documents = [
  { title: "Kalender Akademik 2024/2025", size: "1.2 MB", format: "PDF" },
  { title: "Kalender Akademik 2023/2024", size: "1.1 MB", format: "PDF" },
  { title: "Kalender Akademik 2022/2023", size: "980 KB", format: "PDF" },
];

const sidebarLinks = [
  { title: "Program Studi", href: "/akademik/program-studi" },
  { title: "Beasiswa", href: "/akademik/beasiswa" },
  { title: "Kegiatan Kampus", href: "/akademik/kegiatan" },
  { title: "Perpustakaan (PERAK)", href: "/akademik/perpustakaan" },
  { title: "Kalender Akademik", href: "/akademik/kalender", active: true },
  { title: "Akreditasi", href: "/akademik/akreditasi" },
  { title: "Pedoman Akademik", href: "/akademik/pedoman" },
];

const typeConfig = {
  akademik: { label: "Akademik", color: "bg-blue-500 text-white", icon: BookOpen },
  administrasi: { label: "Administrasi", color: "bg-green-500 text-white", icon: FileText },
  ujian: { label: "Ujian", color: "bg-red-500 text-white", icon: GraduationCap },
  libur: { label: "Libur", color: "bg-purple-500 text-white", icon: Calendar },
};

export default function KalenderAkademik() {
  const [activeTab, setActiveTab] = useState("gasal");

  const events = activeTab === "gasal" ? semesterGasalEvents : semesterGenapEvents;

  return (
    <SubPageLayout
      title="Kalender Akademik"
      subtitle="Jadwal kegiatan akademik Politeknik Negeri Semarang"
      breadcrumbs={[
        { label: "Akademik", href: "/akademik" },
        { label: "Kalender Akademik" },
      ]}
    >
      <div className="space-y-8">
        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4">
          <Button className="gap-2">
            <Download className="w-4 h-4" />
            Unduh PDF Resmi
          </Button>
          <Button variant="outline" className="gap-2">
            <ExternalLink className="w-4 h-4" />
            Sinkronkan ke Google Calendar
          </Button>
        </div>

        {/* Tabs for Semester */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="gasal" className="gap-2">
              <Calendar className="w-4 h-4" />
              Semester Gasal
            </TabsTrigger>
            <TabsTrigger value="genap" className="gap-2">
              <Calendar className="w-4 h-4" />
              Semester Genap
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gasal" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Kalender Semester Gasal 2024/2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TimelineView events={events} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="genap" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Kalender Semester Genap 2024/2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TimelineView events={events} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Legend */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-foreground mb-3">Keterangan:</h3>
            <div className="flex flex-wrap gap-4">
              {Object.entries(typeConfig).map(([key, config]) => (
                <div key={key} className="flex items-center gap-2">
                  <Badge className={config.color}>{config.label}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Document Downloads */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText className="w-5 h-5 text-primary" />
              Dokumen Kalender Akademik
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <FileText className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{doc.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {doc.format} • {doc.size}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="w-4 h-4" />
                    Unduh
                  </Button>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SubPageLayout>
  );
}

function TimelineView({ events }: { events: AcademicEvent[] }) {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-4">
        {events.map((event, index) => {
          const config = typeConfig[event.type];
          const EventIcon = config.icon;

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="relative pl-12"
            >
              {/* Timeline Dot */}
              <div className={`absolute left-2 top-2 w-5 h-5 rounded-full ${config.color} flex items-center justify-center`}>
                <EventIcon className="w-3 h-3" />
              </div>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {event.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {event.dateStart}
                          {event.dateEnd && ` - ${event.dateEnd}`}
                        </span>
                      </div>
                    </div>
                    <Badge className={config.color}>
                      {config.label}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
