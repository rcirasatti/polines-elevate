import { motion } from "framer-motion";
import { Calendar, ArrowRight, Bell, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    category: "Prestasi",
    title: "Mahasiswa Polines Raih Juara 1 Kompetisi Robotika Nasional 2025",
    excerpt: "Tim robotika Polines berhasil mengalahkan 50 tim dari seluruh Indonesia dalam kompetisi tahunan yang diselenggarakan oleh Kemenristekdikti.",
    date: "5 Jan 2025",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    category: "Akademik",
    title: "Polines Buka Program Studi Baru: Teknologi Kecerdasan Buatan",
    excerpt: "Program studi terbaru ini dirancang untuk menjawab kebutuhan industri 4.0 di Indonesia.",
    date: "3 Jan 2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 3,
    category: "Kerjasama",
    title: "MoU dengan Toyota Indonesia untuk Program Magang Mahasiswa",
    excerpt: "Kerjasama strategis ini membuka peluang magang langsung di pabrik Toyota bagi mahasiswa Teknik Mesin.",
    date: "28 Des 2024",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
    featured: false,
  },
];

const announcements = [
  {
    id: 1,
    title: "Jadwal Wisuda Periode Januari 2025",
    date: "10 Jan 2025",
    urgent: true,
  },
  {
    id: 2,
    title: "Pendaftaran KKN Tematik Semester Genap 2024/2025",
    date: "8 Jan 2025",
    urgent: false,
  },
  {
    id: 3,
    title: "Pengumuman Beasiswa Bank Indonesia 2025",
    date: "6 Jan 2025",
    urgent: true,
  },
  {
    id: 4,
    title: "Libur Semester Genap & Persiapan UTS",
    date: "4 Jan 2025",
    urgent: false,
  },
];

export function NewsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Berita & Pengumuman
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kabar <span className="text-primary">Terbaru</span> Polines
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ikuti perkembangan terkini seputar kegiatan akademik, prestasi, dan informasi penting lainnya.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-primary" />
                Berita Kampus
              </h3>
              <Button variant="ghost" size="sm">
                Lihat Semua
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Featured News */}
            {newsItems.filter(n => n.featured).map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="news-card overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="news-card-image h-64 sm:h-72"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {news.date}
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                  <p className="text-muted-foreground line-clamp-2">{news.excerpt}</p>
                  <Button variant="ghost" className="mt-4 p-0 h-auto text-primary hover:bg-transparent">
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </motion.article>
            ))}

            {/* Regular News Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {newsItems.filter(n => !n.featured).map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="news-card"
                >
                  <div className="relative">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="news-card-image"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="w-3 h-3" />
                      {news.date}
                    </div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                      {news.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{news.excerpt}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Announcements Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Bell className="w-5 h-5 text-secondary" />
                Pengumuman
              </h3>
              <Button variant="ghost" size="sm">
                Semua
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-xl border border-border/50 overflow-hidden"
            >
              {announcements.map((announcement, index) => (
                <a
                  key={announcement.id}
                  href="#"
                  className={`block p-4 hover:bg-muted/50 transition-colors ${
                    index !== announcements.length - 1 ? 'border-b border-border/50' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {announcement.urgent && (
                      <span className="mt-1 flex-shrink-0 w-2 h-2 bg-destructive rounded-full animate-pulse" />
                    )}
                    <div className={announcement.urgent ? '' : 'ml-5'}>
                      <h4 className="font-medium text-foreground text-sm mb-1 hover:text-primary transition-colors">
                        {announcement.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {announcement.date}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 p-6 bg-gradient-to-br from-primary to-maroon-dark rounded-xl text-white"
            >
              <h4 className="font-bold text-lg mb-4">Akses Cepat</h4>
              <div className="space-y-2">
                <a href="#" className="block py-2 px-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm">
                  📚 E-Learning / LMS
                </a>
                <a href="#" className="block py-2 px-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm">
                  📊 SIAKAD Mahasiswa
                </a>
                <a href="#" className="block py-2 px-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm">
                  📧 Webmail Polines
                </a>
                <a href="#" className="block py-2 px-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm">
                  📖 Perpustakaan Digital
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
