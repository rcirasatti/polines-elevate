import { motion } from "framer-motion";
import { GraduationCap, ClipboardList, FileText, UserPlus, CheckCircle } from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const jalurMasuk = [
  {
    nama: "SNBP",
    deskripsi: "Seleksi Nasional Berdasarkan Prestasi (rapor dan prestasi)",
    periode: "Januari - Februari",
    kuota: "30%",
  },
  {
    nama: "SNBT",
    deskripsi: "Seleksi Nasional Berbasis Tes (UTBK-SNBT)",
    periode: "Maret - Juni",
    kuota: "40%",
  },
  {
    nama: "Mandiri",
    deskripsi: "Seleksi Mandiri Polines",
    periode: "Juli - Agustus",
    kuota: "30%",
  },
];

const persyaratan = [
  "Warga Negara Indonesia",
  "Lulusan SMA/SMK/MA sederajat tahun 2023, 2024, atau 2025",
  "Sehat jasmani dan rohani",
  "Tidak buta warna (untuk prodi tertentu)",
  "Memenuhi persyaratan khusus program studi",
];

const sidebarLinks = [
  { title: "Informasi PMB", href: "/penerimaan", active: true },
  { title: "Jalur Masuk", href: "/penerimaan/jalur" },
  { title: "Biaya Kuliah", href: "/penerimaan/biaya" },
  { title: "Panduan Pendaftaran", href: "/penerimaan/panduan" },
  { title: "FAQ", href: "/penerimaan/faq" },
];

export default function Penerimaan() {
  return (
    <SubPageLayout
      title="Penerimaan Mahasiswa Baru"
      subtitle="PMB Politeknik Negeri Semarang 2025"
      breadcrumbs={[{ label: "Penerimaan Mahasiswa Baru" }]}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-3 bg-secondary/20 rounded-xl">
            <GraduationCap className="w-8 h-8 text-secondary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">PMB 2025</h2>
            <p className="text-muted-foreground">
              Bergabunglah dengan ribuan mahasiswa berprestasi
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-primary to-polines-blue-light rounded-xl p-6 text-primary-foreground">
          <h3 className="text-xl font-bold mb-2">Pendaftaran Dibuka!</h3>
          <p className="text-primary-foreground/80 mb-4">
            Raih masa depan cerah bersama Polines. Daftar sekarang melalui jalur yang tersedia.
          </p>
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <UserPlus className="w-4 h-4 mr-2" />
            Daftar Sekarang
          </Button>
        </div>

        {/* Jalur Masuk */}
        <section>
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-primary" />
            Jalur Masuk
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {jalurMasuk.map((jalur, index) => (
              <motion.div
                key={jalur.nama}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {jalur.nama}
                      <Badge className="bg-secondary text-secondary-foreground">
                        {jalur.kuota}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">
                      {jalur.deskripsi}
                    </p>
                    <Badge variant="outline">{jalur.periode}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Persyaratan */}
        <section>
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Persyaratan Umum
          </h3>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {persyaratan.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <div className="p-6 bg-muted rounded-xl">
          <h4 className="font-semibold mb-2">Butuh Bantuan?</h4>
          <p className="text-muted-foreground text-sm mb-3">
            Hubungi Panitia PMB untuk informasi lebih lanjut.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span>📞 (024) 7473417</span>
            <span>📧 pmb@polines.ac.id</span>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
