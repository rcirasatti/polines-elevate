import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Akademik Pages
import ProgramStudi from "./pages/akademik/ProgramStudi";
import Beasiswa from "./pages/akademik/Beasiswa";

// Profil Pages
import Fasilitas from "./pages/profil/Fasilitas";
import Sejarah from "./pages/profil/Sejarah";
import TentangPolines from "./pages/profil/TentangPolines";
import StrukturOrganisasi from "./pages/profil/StrukturOrganisasi";
import RencanaStrategis from "./pages/profil/RencanaStrategis";
import LaporanKinerja from "./pages/profil/LaporanKinerja";
import FasilitasNew from "./pages/profil/FasilitasNew";
import SumberDaya from "./pages/profil/SumberDaya";
import PetaKampus from "./pages/profil/PetaKampus";

// Kerjasama Pages
import Kerjasama from "./pages/kerjasama/Index";

// Penerimaan Pages
import Penerimaan from "./pages/penerimaan/Index";

// Generic Page
import { GenericPage } from "./components/layout/GenericPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Profil Routes */}
            <Route path="/profil/tentang" element={<TentangPolines />} />
            <Route path="/profil/sejarah" element={<Sejarah />} />
            <Route path="/profil/struktur-organisasi" element={<StrukturOrganisasi />} />
            <Route path="/profil/rencana-strategis" element={<RencanaStrategis />} />
            <Route path="/profil/laporan-kinerja" element={<LaporanKinerja />} />
            <Route path="/profil/fasilitas" element={<FasilitasNew />} />
            <Route path="/profil/sumber-daya" element={<SumberDaya />} />
            <Route path="/profil/peta-kampus" element={<PetaKampus />} />
            <Route path="/profil/visi-misi" element={<GenericPage title="Visi & Misi" breadcrumbs={[{ label: "Profil", href: "/profil/tentang" }, { label: "Visi & Misi" }]} />} />
            <Route path="/profil/struktur" element={<StrukturOrganisasi />} />
            <Route path="/profil/direktur" element={<GenericPage title="Direktur & Manajemen" breadcrumbs={[{ label: "Profil", href: "/profil/tentang" }, { label: "Direktur & Manajemen" }]} />} />
            <Route path="/profil/akreditasi" element={<GenericPage title="Akreditasi Institusi" breadcrumbs={[{ label: "Profil", href: "/profil/tentang" }, { label: "Akreditasi" }]} />} />
            <Route path="/profil/peta" element={<PetaKampus />} />

            {/* Akademik Routes */}
            <Route path="/akademik" element={<ProgramStudi />} />
            <Route path="/akademik/program-studi" element={<ProgramStudi />} />
            <Route path="/akademik/beasiswa" element={<Beasiswa />} />
            <Route path="/akademik/kalender" element={<GenericPage title="Kalender Akademik" breadcrumbs={[{ label: "Akademik", href: "/akademik" }, { label: "Kalender Akademik" }]} />} />
            <Route path="/akademik/akreditasi" element={<GenericPage title="Akreditasi Program Studi" breadcrumbs={[{ label: "Akademik", href: "/akademik" }, { label: "Akreditasi" }]} />} />
            <Route path="/akademik/peraturan" element={<GenericPage title="Peraturan Akademik" breadcrumbs={[{ label: "Akademik", href: "/akademik" }, { label: "Peraturan Akademik" }]} />} />
            <Route path="/akademik/jurusan/:slug" element={<GenericPage title="Jurusan" breadcrumbs={[{ label: "Akademik", href: "/akademik" }, { label: "Jurusan" }]} />} />

            {/* Riset Routes */}
            <Route path="/riset/p3m" element={<GenericPage title="Pusat Penelitian (P3M)" breadcrumbs={[{ label: "Riset & Inovasi" }, { label: "P3M" }]} />} />
            <Route path="/riset/jurnal" element={<GenericPage title="Jurnal SIPMAS" breadcrumbs={[{ label: "Riset & Inovasi" }, { label: "Jurnal SIPMAS" }]} />} />
            <Route path="/riset/produk" element={<GenericPage title="Produk Inovasi" breadcrumbs={[{ label: "Riset & Inovasi" }, { label: "Produk Inovasi" }]} />} />
            <Route path="/riset/haki" element={<GenericPage title="HAKI & Paten" breadcrumbs={[{ label: "Riset & Inovasi" }, { label: "HAKI & Paten" }]} />} />

            {/* Kemahasiswaan Routes */}
            <Route path="/kemahasiswaan/ormawa" element={<GenericPage title="Organisasi Mahasiswa" breadcrumbs={[{ label: "Kemahasiswaan" }, { label: "Ormawa" }]} />} />
            <Route path="/kemahasiswaan/ukm" element={<GenericPage title="Unit Kegiatan Mahasiswa" breadcrumbs={[{ label: "Kemahasiswaan" }, { label: "UKM" }]} />} />
            <Route path="/kemahasiswaan/prestasi" element={<GenericPage title="Prestasi Mahasiswa" breadcrumbs={[{ label: "Kemahasiswaan" }, { label: "Prestasi" }]} />} />
            <Route path="/kemahasiswaan/layanan" element={<GenericPage title="Layanan Mahasiswa" breadcrumbs={[{ label: "Kemahasiswaan" }, { label: "Layanan" }]} />} />

            {/* Kerjasama Routes */}
            <Route path="/kerjasama" element={<Kerjasama />} />
            <Route path="/kerjasama/industri" element={<GenericPage title="Hubungan Industri" breadcrumbs={[{ label: "Kerjasama", href: "/kerjasama" }, { label: "Hubungan Industri" }]} />} />
            <Route path="/kerjasama/internasional" element={<GenericPage title="Kerjasama Internasional" breadcrumbs={[{ label: "Kerjasama", href: "/kerjasama" }, { label: "Internasional" }]} />} />
            <Route path="/kerjasama/cdc" element={<GenericPage title="Career Development Center" breadcrumbs={[{ label: "Kerjasama", href: "/kerjasama" }, { label: "CDC" }]} />} />
            <Route path="/kerjasama/tracer-study" element={<GenericPage title="Tracer Study" breadcrumbs={[{ label: "Kerjasama", href: "/kerjasama" }, { label: "Tracer Study" }]} />} />
            <Route path="/kerjasama/alumni" element={<GenericPage title="Ikatan Alumni" breadcrumbs={[{ label: "Kerjasama", href: "/kerjasama" }, { label: "Ikatan Alumni" }]} />} />

            {/* Penerimaan Routes */}
            <Route path="/penerimaan" element={<Penerimaan />} />
            <Route path="/penerimaan/jalur" element={<GenericPage title="Jalur Masuk" breadcrumbs={[{ label: "Penerimaan", href: "/penerimaan" }, { label: "Jalur Masuk" }]} />} />
            <Route path="/penerimaan/biaya" element={<GenericPage title="Biaya Kuliah" breadcrumbs={[{ label: "Penerimaan", href: "/penerimaan" }, { label: "Biaya Kuliah" }]} />} />
            <Route path="/penerimaan/panduan" element={<GenericPage title="Panduan Pendaftaran" breadcrumbs={[{ label: "Penerimaan", href: "/penerimaan" }, { label: "Panduan" }]} />} />
            <Route path="/penerimaan/faq" element={<GenericPage title="FAQ PMB" breadcrumbs={[{ label: "Penerimaan", href: "/penerimaan" }, { label: "FAQ" }]} />} />

            {/* Layanan Routes */}
            <Route path="/layanan/ppid" element={<GenericPage title="PPID" subtitle="Pejabat Pengelola Informasi dan Dokumentasi" breadcrumbs={[{ label: "Layanan" }, { label: "PPID" }]} />} />

            {/* Static Pages */}
            <Route path="/kebijakan-privasi" element={<GenericPage title="Kebijakan Privasi" breadcrumbs={[{ label: "Kebijakan Privasi" }]} />} />
            <Route path="/syarat-ketentuan" element={<GenericPage title="Syarat & Ketentuan" breadcrumbs={[{ label: "Syarat & Ketentuan" }]} />} />
            <Route path="/peta-situs" element={<GenericPage title="Peta Situs" breadcrumbs={[{ label: "Peta Situs" }]} />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
