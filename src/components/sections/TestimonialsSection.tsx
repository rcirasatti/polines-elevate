import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Ahmad Rizky Pratama",
    role: "Senior Engineer",
    company: "PT Astra International",
    batch: "Angkatan 2018",
    department: "Teknik Mesin",
    quote: "Pendidikan vokasi di Polines benar-benar mempersiapkan saya dengan skill praktis yang langsung bisa diterapkan di industri. Dalam 3 bulan setelah wisuda, saya sudah diterima di Astra.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Dewi Kartika Sari",
    role: "Tax Consultant Manager",
    company: "Deloitte Indonesia",
    batch: "Angkatan 2016",
    department: "Akuntansi",
    quote: "Kurikulum yang link and match dengan industri membuat saya percaya diri menghadapi dunia kerja. Dosen-dosen yang berpengalaman di industri sangat membantu perkembangan karier saya.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Network Engineer",
    company: "PT Telkom Indonesia",
    batch: "Angkatan 2017",
    department: "Teknik Elektro",
    quote: "Fasilitas laboratorium yang lengkap dan program magang yang terstruktur menjadi modal utama saya untuk berkarier di bidang telekomunikasi. Polines memang luar biasa!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Siti Nurhaliza",
    role: "Business Development",
    company: "Gojek",
    batch: "Angkatan 2019",
    department: "Administrasi Bisnis",
    quote: "Soft skill dan kemampuan berbahasa Inggris yang diasah di Polines membuka banyak peluang. Sekarang saya bisa bekerja di perusahaan startup unicorn Indonesia.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cerita <span className="text-primary">Sukses</span> Alumni
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dengarkan pengalaman alumni Polines yang kini berkarier di berbagai perusahaan ternama.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="testimonial-card relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />

              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur" />
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="relative w-24 h-24 rounded-full object-cover border-4 border-white"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg text-foreground mb-6 italic leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-foreground text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-primary font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-2 mt-1 text-sm text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      {testimonials[currentIndex].company}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {testimonials[currentIndex].department} • {testimonials[currentIndex].batch}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
