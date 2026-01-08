import { motion } from "framer-motion";
import { Briefcase, Globe, Building, Plane, GraduationCap, Users } from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mitraNasional = [
  { nama: "PT Kereta Api Indonesia", bidang: "Magang & Rekrutmen" },
  { nama: "PT Telkom Indonesia", bidang: "Kurikulum & Sertifikasi" },
  { nama: "PT Astra International", bidang: "Magang & Beasiswa" },
  { nama: "PT PLN (Persero)", bidang: "Beasiswa & Ikatan Dinas" },
  { nama: "PT Pertamina", bidang: "Riset & Pengembangan" },
  { nama: "Bank BRI", bidang: "Magang & Rekrutmen" },
];

const mitraInternasional = [
  {
    nama: "Management & Science University",
    negara: "Malaysia",
    program: "Dual Degree & Student Exchange",
  },
  {
    nama: "National Kaohsiung University of Science and Technology",
    negara: "Taiwan",
    program: "Student Exchange & Joint Research",
  },
  {
    nama: "Hochschule Hannover",
    negara: "Jerman",
    program: "Dual Degree & Internship",
  },
  {
    nama: "Kyungpook National University",
    negara: "Korea Selatan",
    program: "Student Exchange",
  },
];

const sidebarLinks = [
  { title: "Kerjasama", href: "/kerjasama", active: true },
  { title: "Hubungan Industri", href: "/kerjasama/industri" },
  { title: "Kerjasama Internasional", href: "/kerjasama/internasional" },
  { title: "CDC", href: "/kerjasama/cdc" },
  { title: "Tracer Study", href: "/kerjasama/tracer-study" },
  { title: "Ikatan Alumni", href: "/kerjasama/alumni" },
];

export default function Kerjasama() {
  return (
    <SubPageLayout
      title="Kerjasama"
      subtitle="Jaringan mitra strategis nasional dan internasional"
      breadcrumbs={[{ label: "Kerjasama" }]}
      sidebarTitle="Menu Kerjasama"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Mitra Kerjasama
            </h2>
            <p className="text-muted-foreground">
              Kemitraan strategis untuk pengembangan pendidikan vokasi
            </p>
          </div>
        </div>

        {/* Mitra Nasional */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Building className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">
              Mitra Nasional
            </h3>
          </div>

          <p className="text-muted-foreground mb-6">
            Kerjasama kurikulum dan magang dengan berbagai perusahaan BUMN dan
            swasta nasional untuk memastikan lulusan siap kerja.
          </p>

          {/* Logo Cloud */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mitraNasional.map((mitra, index) => (
              <motion.div
                key={mitra.nama}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="text-center hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Building className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h4 className="font-semibold text-sm mb-2">{mitra.nama}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {mitra.bidang}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mitra Internasional */}
        <section className="pt-6 border-t border-border">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-bold text-foreground">
              Mitra Internasional
            </h3>
          </div>

          <p className="text-muted-foreground mb-6">
            Program Dual Degree dan Student Exchange dengan perguruan tinggi
            internasional untuk pengalaman global.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mitraInternasional.map((mitra, index) => (
              <motion.div
                key={mitra.nama}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-3">
                      <Plane className="w-5 h-5 text-secondary" />
                      {mitra.nama}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-primary/10 text-primary">
                        {mitra.negara}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="w-4 h-4" />
                      {mitra.program}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          {[
            { label: "Mitra Industri", value: "500+", icon: Building },
            { label: "Negara Partner", value: "15+", icon: Globe },
            { label: "Program MoU", value: "100+", icon: Users },
            { label: "Alumni Tersebar", value: "50.000+", icon: GraduationCap },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="bg-primary/5 rounded-xl p-4 text-center"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </section>
      </div>
    </SubPageLayout>
  );
}
