import { motion } from "framer-motion";
import { 
  Building2, Cog, Zap, Calculator, Briefcase, 
  ArrowRight, Users, BookOpen, Trophy
} from "lucide-react";
import { Button } from "@/components/ui/button";

const departments = [
  {
    icon: Building2,
    name: "Teknik Sipil",
    shortName: "Sipil",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    programs: ["D3 Konstruksi Gedung", "D3 Konstruksi Sipil", "D4 Teknik Perancangan Jalan & Jembatan", "D4 Teknik Perawatan Gedung"],
    students: 2800,
    achievements: 45,
  },
  {
    icon: Cog,
    name: "Teknik Mesin",
    shortName: "Mesin",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    programs: ["D3 Teknik Mesin", "D3 Teknik Konversi Energi", "D4 Teknik Mesin Produksi & Perawatan", "D4 Teknik Rekayasa Pembangkit Listrik"],
    students: 3200,
    achievements: 52,
  },
  {
    icon: Zap,
    name: "Teknik Elektro",
    shortName: "Elektro",
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-500/10",
    programs: ["D3 Teknik Elektronika", "D3 Teknik Telekomunikasi", "D4 Teknik Informatika", "D4 Teknologi Rekayasa Komputer"],
    students: 3500,
    achievements: 68,
  },
  {
    icon: Calculator,
    name: "Akuntansi",
    shortName: "Akuntansi",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    programs: ["D3 Akuntansi", "D3 Keuangan dan Perbankan", "D4 Akuntansi Manajerial", "D4 Keuangan dan Perbankan Syariah"],
    students: 2600,
    achievements: 38,
  },
  {
    icon: Briefcase,
    name: "Administrasi Bisnis",
    shortName: "Adm. Bisnis",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    programs: ["D3 Administrasi Bisnis", "D3 Bahasa Inggris", "D4 Manajemen Bisnis Internasional", "D4 Usaha Perjalanan Wisata"],
    students: 2400,
    achievements: 42,
  },
];

export function DepartmentsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            5 Jurusan Unggulan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pilih Jalur <span className="text-primary">Kariermu</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Polines menawarkan berbagai program studi vokasi yang dirancang untuk 
            menghasilkan tenaga profesional siap kerja dengan keahlian industri terkini.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`dept-card group ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Gradient Top Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${dept.color} rounded-t-2xl`} />
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 ${dept.bgColor} rounded-xl mb-4`}>
                <dept.icon className={`w-7 h-7 bg-gradient-to-r ${dept.color} bg-clip-text`} style={{ color: dept.color.includes('blue') ? '#3b82f6' : dept.color.includes('orange') ? '#f97316' : dept.color.includes('yellow') ? '#eab308' : dept.color.includes('emerald') ? '#10b981' : '#a855f7' }} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {dept.name}
              </h3>
              
              {/* Quick Stats */}
              <div className="flex items-center gap-4 mb-4 text-sm">
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  {dept.students.toLocaleString()}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Trophy className="w-4 h-4 text-secondary" />
                  {dept.achievements} Prestasi
                </span>
              </div>

              {/* Programs */}
              <div className="space-y-2 mb-6">
                {dept.programs.slice(0, 3).map((program) => (
                  <div key={program} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="w-3 h-3 text-primary" />
                    {program}
                  </div>
                ))}
                {dept.programs.length > 3 && (
                  <p className="text-sm text-primary font-medium">
                    +{dept.programs.length - 3} program lainnya
                  </p>
                )}
              </div>

              {/* CTA */}
              <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/10">
                Lihat Detail Jurusan
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="xl">
            Lihat Semua Program Studi
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
