import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ClipboardCheck, Search, FileText, CheckCircle2, 
  AlertCircle, Shield, ArrowRight
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SubPageLayout } from "@/components/layout/SubPageLayout";

const sidebarLinks = [
  { title: "Semua Layanan", href: "/layanan" },
  { title: "Zona Integritas", href: "/layanan/zona-integritas" },
  { title: "Whistleblowing System", href: "/layanan/wbs" },
  { title: "Unit Layanan Terpadu", href: "/layanan/ult" },
  { title: "Informasi Publik (PPID)", href: "/layanan/ppid" },
  { title: "Layanan SI", href: "/layanan/sistem-informasi" },
  { title: "MikroTik Academy", href: "/layanan/mikrotik" },
  { title: "Verifikasi Ijazah", href: "/layanan/verifikasi-ijazah", isActive: true },
];

export default function VerifikasiIjazah() {
  const [nomorIjazah, setNomorIjazah] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = () => {
    if (!nomorIjazah) return;
    setIsVerifying(true);
    // Simulate verification
    setTimeout(() => {
      setIsVerifying(false);
    }, 2000);
  };

  return (
    <SubPageLayout
      title="Verifikasi Ijazah"
      subtitle="Layanan verifikasi keaslian ijazah dan transkrip Politeknik Negeri Semarang"
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Layanan", href: "/layanan" },
        { label: "Verifikasi Ijazah" }
      ]}
    >
      {/* Verification Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Card className="max-w-xl mx-auto">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClipboardCheck className="w-8 h-8 text-primary" />
            </div>
            <CardTitle>Verifikasi Ijazah Online</CardTitle>
            <CardDescription>
              Masukkan nomor ijazah untuk memverifikasi keaslian dokumen
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nomor-ijazah">Nomor Ijazah</Label>
              <Input
                id="nomor-ijazah"
                placeholder="Contoh: 2024.12.1.xxxxx"
                value={nomorIjazah}
                onChange={(e) => setNomorIjazah(e.target.value)}
                className="text-center text-lg py-6"
              />
            </div>
            <Button 
              onClick={handleVerify} 
              className="w-full" 
              size="lg"
              disabled={!nomorIjazah || isVerifying}
            >
              {isVerifying ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Memverifikasi...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Verifikasi
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <Card className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-500 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">Ijazah Terverifikasi</h3>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Jika ijazah valid, sistem akan menampilkan informasi nama lulusan, 
                  program studi, tanggal kelulusan, dan status akreditasi saat lulus.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500 rounded-xl">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Perlu Verifikasi Manual?</h3>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Untuk ijazah keluaran sebelum tahun 2015 atau verifikasi untuk keperluan 
                  resmi, silakan hubungi Bagian Akademik.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8"
      >
        <Card className="bg-gradient-to-r from-primary/5 to-transparent border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Shield className="w-10 h-10 text-primary" />
              <div>
                <h3 className="font-bold">Data Terintegrasi dengan PDDikti</h3>
                <p className="text-sm text-muted-foreground">
                  Sistem verifikasi ini terintegrasi dengan Pangkalan Data Pendidikan Tinggi (PDDikti) 
                  Kementerian Pendidikan dan Kebudayaan.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SubPageLayout>
  );
}
