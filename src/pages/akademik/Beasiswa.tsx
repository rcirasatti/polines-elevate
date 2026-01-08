import { motion } from "framer-motion";
import { Award, CheckCircle, Calendar, ExternalLink } from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Beasiswa {
  id: string;
  nama: string;
  deskripsi: string;
  jenis: "Pemerintah" | "Industri" | "Internal";
  benefit: string[];
  deadline?: string;
}

const beasiswaData: Beasiswa[] = [
  {
    id: "1",
    nama: "Beasiswa KIP-Kuliah",
    deskripsi:
      "Bantuan biaya pendidikan penuh dari pemerintah untuk mahasiswa berprestasi dari keluarga kurang mampu. Program ini menjamin mahasiswa dapat menyelesaikan pendidikan tanpa khawatir biaya.",
    jenis: "Pemerintah",
    benefit: [
      "Pembebasan biaya pendaftaran",
      "Pembebasan UKT/SPP",
      "Bantuan biaya hidup Rp 700.000/bulan",
      "Bantuan biaya buku dan alat tulis",
    ],
    deadline: "Maret - April",
  },
  {
    id: "2",
    nama: "Beasiswa PPA",
    deskripsi:
      "Beasiswa Peningkatan Prestasi Akademik diberikan kepada mahasiswa berprestasi untuk mendorong pencapaian akademik yang lebih tinggi.",
    jenis: "Pemerintah",
    benefit: [
      "Bantuan dana pendidikan",
      "Sertifikat penghargaan",
      "Prioritas kegiatan akademik",
    ],
    deadline: "September - Oktober",
  },
  {
    id: "3",
    nama: "Beasiswa PT PLN",
    deskripsi:
      "Program beasiswa dari PT PLN (Persero) untuk mahasiswa jurusan teknik dengan komitmen ikatan dinas setelah lulus.",
    jenis: "Industri",
    benefit: [
      "Biaya pendidikan penuh",
      "Uang saku bulanan",
      "Jaminan penempatan kerja",
      "Pelatihan kepemimpinan",
    ],
    deadline: "Juli - Agustus",
  },
  {
    id: "4",
    nama: "Beasiswa Djarum Foundation",
    deskripsi:
      "Beasiswa Djarum Plus untuk mahasiswa berprestasi dengan program pengembangan soft skill intensif.",
    jenis: "Industri",
    benefit: [
      "Dana pendidikan semester",
      "Pelatihan soft skill",
      "Jaringan alumni nasional",
      "Kesempatan magang",
    ],
    deadline: "April - Mei",
  },
  {
    id: "5",
    nama: "Beasiswa Lippo Group",
    deskripsi:
      "Program beasiswa dari Lippo Group untuk mahasiswa di bidang bisnis dan teknologi informasi.",
    jenis: "Industri",
    benefit: [
      "Bantuan biaya kuliah",
      "Kesempatan internship",
      "Mentoring profesional",
    ],
    deadline: "Agustus - September",
  },
  {
    id: "6",
    nama: "Beasiswa Prestasi Polines",
    deskripsi:
      "Beasiswa internal untuk mahasiswa dengan prestasi akademik dan non-akademik yang luar biasa.",
    jenis: "Internal",
    benefit: [
      "Potongan UKT",
      "Sertifikat penghargaan",
      "Prioritas kegiatan kampus",
    ],
    deadline: "Setiap semester",
  },
];

const sidebarLinks = [
  { title: "Program Studi", href: "/akademik/program-studi" },
  { title: "Kalender Akademik", href: "/akademik/kalender" },
  { title: "Beasiswa", href: "/akademik/beasiswa", active: true },
  { title: "Akreditasi", href: "/akademik/akreditasi" },
  { title: "Peraturan Akademik", href: "/akademik/peraturan" },
];

export default function Beasiswa() {
  const getJenisBadge = (jenis: Beasiswa["jenis"]) => {
    switch (jenis) {
      case "Pemerintah":
        return <Badge className="bg-primary text-primary-foreground">{jenis}</Badge>;
      case "Industri":
        return <Badge className="bg-secondary text-secondary-foreground">{jenis}</Badge>;
      case "Internal":
        return <Badge variant="outline">{jenis}</Badge>;
    }
  };

  return (
    <SubPageLayout
      title="Beasiswa"
      subtitle="Program bantuan pendidikan untuk mahasiswa berprestasi"
      breadcrumbs={[
        { label: "Akademik", href: "/akademik" },
        { label: "Beasiswa" },
      ]}
      sidebarTitle="Menu Akademik"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-secondary/20 rounded-xl">
            <Award className="w-8 h-8 text-secondary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Program Beasiswa
            </h2>
            <p className="text-muted-foreground">
              Berbagai kesempatan beasiswa untuk mahasiswa Polines
            </p>
          </div>
        </div>

        {/* Timeline / Cards */}
        <div className="space-y-6">
          {beasiswaData.map((beasiswa, index) => (
            <motion.div
              key={beasiswa.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <CardTitle className="text-xl flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                        {index + 1}
                      </div>
                      {beasiswa.nama}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      {getJenisBadge(beasiswa.jenis)}
                      {beasiswa.deadline && (
                        <Badge variant="outline" className="gap-1">
                          <Calendar className="w-3 h-3" />
                          {beasiswa.deadline}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {beasiswa.deskripsi}
                  </p>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-sm text-primary mb-3">
                      Benefit:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {beasiswa.benefit.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button variant="outline" size="sm" className="gap-2">
                      Informasi Lengkap
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 p-6 bg-gradient-to-r from-primary to-polines-blue-light rounded-xl text-primary-foreground">
          <h3 className="font-bold text-xl mb-2">Butuh Bantuan?</h3>
          <p className="mb-4 text-primary-foreground/80">
            Hubungi Bagian Kemahasiswaan untuk informasi lebih lanjut tentang
            program beasiswa.
          </p>
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Hubungi Kami
          </Button>
        </div>
      </div>
    </SubPageLayout>
  );
}
