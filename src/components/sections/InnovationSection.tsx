import { motion } from "framer-motion";
import { Lightbulb, Award, ExternalLink, Cpu, Wrench, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const innovations = [
  {
    id: 1,
    title: "Smart Irrigation System",
    description: "Sistem irigasi cerdas berbasis IoT untuk pertanian presisi. Menghemat penggunaan air hingga 40% dengan sensor kelembaban tanah otomatis.",
    department: "Teknik Elektro",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&auto=format&fit=crop",
    award: "Juara 1 PIMNAS 2024",
    tags: ["IoT", "Agriculture", "Sustainability"],
  },
  {
    id: 2,
    title: "Autonomous Mobile Robot",
    description: "Robot bergerak otonom untuk keperluan industri manufaktur dengan navigasi berbasis AI dan sensor LiDAR terintegrasi.",
    department: "Teknik Mesin",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop",
    award: "Best Innovation Award 2024",
    tags: ["Robotics", "AI", "Industry 4.0"],
  },
  {
    id: 3,
    title: "Green Concrete Mix",
    description: "Inovasi campuran beton ramah lingkungan menggunakan limbah abu terbang yang mampu mengurangi emisi karbon hingga 30%.",
    department: "Teknik Sipil",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop",
    award: "Paten Terdaftar 2024",
    tags: ["Sustainable", "Construction", "Green Tech"],
  },
];

export function InnovationSection() {
  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
            Innovation Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Produk <span className="text-primary">Inovasi</span> Unggulan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mahasiswa dan dosen Polines aktif menghasilkan karya inovatif yang 
            berkontribusi pada kemajuan teknologi dan industri Indonesia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative h-full bg-card rounded-2xl overflow-hidden border border-border/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={innovation.image}
                    alt={innovation.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  
                  {/* Award Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                      <Award className="w-3 h-3" />
                      {innovation.award}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                      <innovation.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-medium text-primary mb-2">
                    {innovation.department}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {innovation.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {innovation.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {innovation.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full justify-between group/btn">
                    Lihat Detail
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 p-6 bg-card rounded-2xl border border-border/50">
            <div className="p-4 bg-primary/10 rounded-xl">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-foreground">Punya Ide Inovatif?</h4>
              <p className="text-sm text-muted-foreground">
                Kembangkan ide Anda bersama tim P3M Polines
              </p>
            </div>
            <Button variant="gold">
              Ajukan Proposal
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
