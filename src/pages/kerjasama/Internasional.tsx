import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Globe, MapPin, Users, GraduationCap, Building2, 
  ExternalLink, Quote, ChevronRight, Filter, Search
} from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const sidebarLinks = [
  { title: "Kerjasama Internasional", href: "/kerjasama/internasional", active: true },
  { title: "Kerjasama Nasional", href: "/kerjasama/nasional" },
  { title: "Career Development Center", href: "/kerjasama/cdc" },
  { title: "Tracer Study", href: "/kerjasama/tracer-study" },
  { title: "Ikatan Alumni", href: "/kerjasama/alumni" },
];

const worldRegions = [
  { region: "Asia Tenggara", count: 8, color: "bg-green-500" },
  { region: "Asia Timur", count: 5, color: "bg-blue-500" },
  { region: "Eropa", count: 4, color: "bg-purple-500" },
  { region: "Australia & Oceania", count: 2, color: "bg-amber-500" },
];

const partners = [
  {
    id: 1,
    name: "Management & Science University",
    country: "Malaysia",
    flag: "🇲🇾",
    programs: ["Dual Degree", "Student Exchange", "Joint Research"],
    since: 2018,
    students: 45,
    logo: "MSU",
  },
  {
    id: 2,
    name: "National Kaohsiung University of Science and Technology",
    country: "Taiwan",
    flag: "🇹🇼",
    programs: ["Student Exchange", "Internship"],
    since: 2019,
    students: 32,
    logo: "NKUST",
  },
  {
    id: 3,
    name: "Hochschule Hannover",
    country: "Jerman",
    flag: "🇩🇪",
    programs: ["Joint Research", "Faculty Exchange"],
    since: 2020,
    students: 12,
    logo: "HsH",
  },
  {
    id: 4,
    name: "Polytechnic University of the Philippines",
    country: "Filipina",
    flag: "🇵🇭",
    programs: ["Student Exchange", "Cultural Exchange"],
    since: 2021,
    students: 18,
    logo: "PUP",
  },
  {
    id: 5,
    name: "Universiti Teknologi MARA",
    country: "Malaysia",
    flag: "🇲🇾",
    programs: ["Research Collaboration", "Conference"],
    since: 2017,
    students: 28,
    logo: "UiTM",
  },
  {
    id: 6,
    name: "Tokyo Metropolitan College of Industrial Technology",
    country: "Jepang",
    flag: "🇯🇵",
    programs: ["Technical Training", "Internship"],
    since: 2022,
    students: 8,
    logo: "TMCIT",
  },
];

const testimonials = [
  {
    name: "Rina Fitriani",
    program: "Student Exchange ke MSU Malaysia",
    year: "2023",
    quote: "Pengalaman belajar di Malaysia membuka wawasan saya tentang dunia internasional. Saya belajar banyak tentang manajemen bisnis global dan budaya kerja profesional.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
  },
  {
    name: "Ahmad Fauzan",
    program: "Internship di Taiwan",
    year: "2023",
    quote: "Magang di NKUST Taiwan memberikan saya pengalaman hands-on dengan teknologi manufaktur terkini. Skill yang saya dapat sangat berharga untuk karir saya.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
  },
];

export default function Internasional() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPartners = partners.filter((partner) =>
    partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    partner.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SubPageLayout
      title="Kerjasama Internasional"
      subtitle="Membangun Jaringan Global untuk Pendidikan Berkualitas"
      breadcrumbs={[
        { label: "Kerjasama", href: "/kerjasama" },
        { label: "Internasional" },
      ]}

    >
      {/* World Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 mb-8 border border-primary/20"
      >
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-8 h-8 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Peta Jaringan Global</h2>
        </div>
        
        {/* Interactive Map Placeholder */}
        <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-xl h-64 mb-6 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Globe className="w-16 h-16 text-primary/30 mx-auto mb-2" />
              <p className="text-muted-foreground">Peta Interaktif Mitra Internasional</p>
            </div>
          </div>
          {/* Map Markers Simulation */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-500 rounded-full animate-pulse" title="Malaysia" />
          <div className="absolute top-1/5 left-2/3 w-4 h-4 bg-blue-500 rounded-full animate-pulse" title="Taiwan" />
          <div className="absolute top-1/3 left-1/5 w-4 h-4 bg-purple-500 rounded-full animate-pulse" title="Jerman" />
          <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-red-500 rounded-full animate-pulse" title="Jepang" />
        </div>

        {/* Region Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {worldRegions.map((region, index) => (
            <motion.div
              key={region.region}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-lg p-4 text-center border border-border"
            >
              <div className={`w-3 h-3 ${region.color} rounded-full mx-auto mb-2`} />
              <p className="text-2xl font-bold text-foreground">{region.count}</p>
              <p className="text-xs text-muted-foreground">{region.region}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Cari universitas mitra atau negara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Partner Grid */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <Building2 className="w-5 h-5 text-primary" />
          Universitas Mitra ({filteredPartners.length})
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPartners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold text-sm">
                  {partner.logo}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {partner.name}
                  </h4>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <span className="text-lg">{partner.flag}</span>
                    {partner.country}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {partner.programs.map((program) => (
                  <Badge key={program} variant="outline" className="text-xs">
                    {program}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Sejak {partner.since}</span>
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4" />
                  {partner.students} mahasiswa
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <Quote className="w-5 h-5 text-primary" />
          Testimoni Alumni Program Internasional
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <Quote className="w-8 h-8 text-secondary/50 mb-4" />
              <p className="text-muted-foreground italic mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.program} • {testimonial.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-8 text-primary-foreground"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">
              Tertarik dengan Program Internasional?
            </h3>
            <p className="opacity-90">
              Kunjungi Kantor Kerjasama dan Hubungan Internasional untuk informasi lebih lanjut 
              tentang program pertukaran pelajar dan peluang studi luar negeri.
            </p>
          </div>
          <Button variant="secondary" size="lg" className="whitespace-nowrap">
            Hubungi Kami
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </motion.div>
    </SubPageLayout>
  );
}
