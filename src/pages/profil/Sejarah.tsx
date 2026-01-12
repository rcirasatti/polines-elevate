import { Building2 } from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";

const sidebarLinks = [
  { title: "Sejarah", href: "/profil/sejarah", active: true },
  { title: "Visi & Misi", href: "/profil/visi-misi" },
  { title: "Struktur Organisasi", href: "/profil/struktur" },
  { title: "Fasilitas", href: "/profil/fasilitas" },
  { title: "Peta Kampus", href: "/profil/peta" },
];

export default function Sejarah() {
  return (
    <SubPageLayout
      title="Sejarah Polines"
      subtitle="Perjalanan Politeknik Negeri Semarang dari masa ke masa"
      breadcrumbs={[
        { label: "Profil", href: "/profil" },
        { label: "Sejarah" },
      ]}
    >
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Building2 className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Sejarah</h2>
            <p className="text-muted-foreground">Politeknik Negeri Semarang</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            Politeknik Negeri Semarang (Polines) didirikan pada tahun 1982 berdasarkan Surat Keputusan 
            Menteri Pendidikan dan Kebudayaan Republik Indonesia. Awalnya bernama Politeknik Universitas Diponegoro, 
            institusi ini kemudian berubah menjadi Politeknik Negeri Semarang pada tahun 1997.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-4">Tonggak Sejarah</h3>
          
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="font-bold text-primary text-lg">1982</div>
              <div>
                <h4 className="font-semibold">Pendirian</h4>
                <p className="text-muted-foreground text-sm">Didirikan sebagai Politeknik Universitas Diponegoro dengan 3 jurusan awal.</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="font-bold text-primary text-lg">1997</div>
              <div>
                <h4 className="font-semibold">Mandiri</h4>
                <p className="text-muted-foreground text-sm">Resmi menjadi Politeknik Negeri Semarang sebagai institusi mandiri.</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="font-bold text-primary text-lg">2010</div>
              <div>
                <h4 className="font-semibold">Pengembangan</h4>
                <p className="text-muted-foreground text-sm">Membuka program D4 dan mengembangkan kerjasama industri secara masif.</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="font-bold text-primary text-lg">2020</div>
              <div>
                <h4 className="font-semibold">Akreditasi Unggul</h4>
                <p className="text-muted-foreground text-sm">Meraih akreditasi institusi "Unggul" dari BAN-PT.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
