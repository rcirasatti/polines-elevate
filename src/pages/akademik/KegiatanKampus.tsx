import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, Clock, MapPin, ChevronRight, 
  Image as ImageIcon, CalendarDays, Tag
} from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  category: string;
  image?: string;
  description: string;
  featured?: boolean;
}

const featuredEvents: Event[] = [
  {
    id: "1",
    title: "POLINES EXPO 2025",
    date: "15-17 Maret 2025",
    location: "Gedung Serbaguna Polines",
    category: "Pameran",
    description: "Pameran inovasi dan karya mahasiswa Polines dari seluruh jurusan. Menampilkan produk unggulan hasil pembelajaran dan penelitian.",
    featured: true,
  },
  {
    id: "2",
    title: "Dies Natalis ke-43 Polines",
    date: "7 September 2025",
    location: "Lapangan Utama Polines",
    category: "Seremonial",
    description: "Perayaan hari jadi Politeknik Negeri Semarang dengan berbagai rangkaian acara menarik.",
    featured: true,
  },
  {
    id: "3",
    title: "Seminar Nasional Teknologi Industri",
    date: "22 April 2025",
    time: "08:00 - 16:00 WIB",
    location: "Auditorium Polines",
    category: "Seminar",
    description: "Seminar nasional menghadirkan pakar industri dan akademisi membahas tren teknologi terkini.",
    featured: true,
  },
];

const upcomingEvents: Event[] = [
  {
    id: "4",
    title: "Workshop IoT dan Smart System",
    date: "25 Januari 2025",
    time: "09:00 - 15:00 WIB",
    location: "Lab Komputer Gedung C",
    category: "Workshop",
    description: "Pelatihan intensif pembuatan sistem IoT untuk mahasiswa teknik.",
  },
  {
    id: "5",
    title: "Lomba Debat Bahasa Inggris",
    date: "1 Februari 2025",
    location: "Gedung Administrasi",
    category: "Kompetisi",
    description: "Kompetisi debat antar jurusan dalam bahasa Inggris.",
  },
  {
    id: "6",
    title: "Job Fair Polines 2025",
    date: "10-11 Februari 2025",
    time: "08:00 - 16:00 WIB",
    location: "Gedung Serbaguna",
    category: "Karir",
    description: "Bursa kerja menghadirkan 50+ perusahaan nasional dan multinasional.",
  },
  {
    id: "7",
    title: "Pelatihan Sertifikasi Kompetensi",
    date: "15-17 Februari 2025",
    location: "Gedung Teknik Mesin",
    category: "Pelatihan",
    description: "Program sertifikasi kompetensi bidang manufaktur dan pengelasan.",
  },
  {
    id: "8",
    title: "Kompetisi Business Plan",
    date: "20 Februari 2025",
    location: "Gedung Administrasi Bisnis",
    category: "Kompetisi",
    description: "Kompetisi rencana bisnis untuk mahasiswa enterpreneurship.",
  },
];

const calendarEvents = [
  { date: "15", month: "Jan", title: "Kuliah Umum Industri 4.0", type: "Seminar" },
  { date: "22", month: "Jan", title: "Workshop Python", type: "Workshop" },
  { date: "25", month: "Jan", title: "Workshop IoT", type: "Workshop" },
  { date: "01", month: "Feb", title: "Debat Bahasa Inggris", type: "Kompetisi" },
  { date: "10", month: "Feb", title: "Job Fair 2025", type: "Karir" },
  { date: "14", month: "Feb", title: "Donor Darah PMI", type: "Sosial" },
];

const galleryImages = [
  { id: 1, title: "Wisuda 2024", category: "Seremonial" },
  { id: 2, title: "POLINES EXPO", category: "Pameran" },
  { id: 3, title: "Lomba Robotik", category: "Kompetisi" },
  { id: 4, title: "Kegiatan UKM", category: "Kemahasiswaan" },
  { id: 5, title: "Kunjungan Industri", category: "Akademik" },
  { id: 6, title: "Seminar Nasional", category: "Seminar" },
];

const sidebarLinks = [
  { title: "Program Studi", href: "/akademik/program-studi" },
  { title: "Beasiswa", href: "/akademik/beasiswa" },
  { title: "Kegiatan Kampus", href: "/akademik/kegiatan", active: true },
  { title: "Perpustakaan (PERAK)", href: "/akademik/perpustakaan" },
  { title: "Kalender Akademik", href: "/akademik/kalender" },
  { title: "Akreditasi", href: "/akademik/akreditasi" },
  { title: "Pedoman Akademik", href: "/akademik/pedoman" },
];

const categoryColors: Record<string, string> = {
  Seminar: "bg-blue-500",
  Workshop: "bg-green-500",
  Kompetisi: "bg-purple-500",
  Pameran: "bg-orange-500",
  Karir: "bg-teal-500",
  Seremonial: "bg-pink-500",
  Pelatihan: "bg-indigo-500",
  Sosial: "bg-red-500",
};

export default function KegiatanKampus() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <SubPageLayout
      title="Kegiatan Kampus"
      subtitle="Berbagai kegiatan dan event menarik di Politeknik Negeri Semarang"
      breadcrumbs={[
        { label: "Akademik", href: "/akademik" },
        { label: "Kegiatan Kampus" },
      ]}
      sidebarTitle="Menu Akademik"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        {/* Featured Events Slider */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Tag className="w-5 h-5 text-secondary" />
            Highlight Kegiatan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all group">
                  <div className="aspect-video bg-gradient-to-br from-primary via-primary/80 to-secondary relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-primary-foreground/30" />
                    </div>
                    <Badge className={`absolute top-3 left-3 ${categoryColors[event.category] || "bg-gray-500"} text-white`}>
                      {event.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Content with Tabs and Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Events List */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="upcoming">Akan Datang</TabsTrigger>
                <TabsTrigger value="gallery">Galeri Kegiatan</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex flex-col items-center justify-center">
                            <span className="text-2xl font-bold text-primary">
                              {event.date.split(" ")[0]}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {event.date.split(" ")[1]}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h3 className="font-semibold text-foreground line-clamp-1">
                                  {event.title}
                                </h3>
                                <Badge
                                  variant="secondary"
                                  className={`mt-1 ${categoryColors[event.category] || "bg-gray-500"} text-white`}
                                >
                                  {event.category}
                                </Badge>
                              </div>
                              <Button variant="ghost" size="sm">
                                <ChevronRight className="w-4 h-4" />
                              </Button>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                              {event.description}
                            </p>
                            <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                              {event.time && (
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {event.time}
                                </span>
                              )}
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {event.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
                <Button variant="outline" className="w-full">
                  Lihat Semua Kegiatan
                </Button>
              </TabsContent>

              <TabsContent value="gallery">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.map((img, index) => (
                    <motion.div
                      key={img.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="group cursor-pointer"
                    >
                      <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-xl overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ImageIcon className="w-10 h-10 text-muted-foreground/30" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                          <div>
                            <p className="text-white font-medium text-sm">{img.title}</p>
                            <p className="text-white/70 text-xs">{img.category}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Lihat Galeri Lengkap
                </Button>
              </TabsContent>
            </Tabs>
          </div>

          {/* Mini Calendar Widget */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-4">
                <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  Jadwal Bulan Ini
                </h3>
                <div className="space-y-3">
                  {calendarEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">{event.date}</span>
                        <span className="text-[10px] text-muted-foreground">{event.month}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {event.title}
                        </p>
                        <Badge
                          variant="secondary"
                          className={`text-[10px] ${categoryColors[event.type] || "bg-gray-500"} text-white`}
                        >
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Lihat Kalender Lengkap
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
