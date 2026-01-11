import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Akademik Pages
import ProgramStudiNew from "./pages/akademik/ProgramStudiNew";
import BeasiswaNew from "./pages/akademik/BeasiswaNew";
import KegiatanKampus from "./pages/akademik/KegiatanKampus";
import Perpustakaan from "./pages/akademik/Perpustakaan";
import KalenderAkademik from "./pages/akademik/KalenderAkademik";
import Akreditasi from "./pages/akademik/Akreditasi";
import Pedoman from "./pages/akademik/Pedoman";

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
import Internasional from "./pages/kerjasama/Internasional";
import Nasional from "./pages/kerjasama/Nasional";

// Riset Pages
import RisetPublikasi from "./pages/riset/RisetPublikasi";
import PengabdianMasyarakat from "./pages/riset/PengabdianMasyarakat";
import HakiPaten from "./pages/riset/HakiPaten";
import JurnalSipmas from "./pages/riset/JurnalSipmas";
import ProdukInovasi from "./pages/riset/ProdukInovasi";

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

            {/* Akademik Routes */}
            <Route path="/akademik" element={<ProgramStudiNew />} />
            <Route path="/akademik/program-studi" element={<ProgramStudiNew />} />
            <Route path="/akademik/beasiswa" element={<BeasiswaNew />} />
            <Route path="/akademik/kegiatan" element={<KegiatanKampus />} />
            <Route path="/akademik/perpustakaan" element={<Perpustakaan />} />
            <Route path="/akademik/kalender" element={<KalenderAkademik />} />
            <Route path="/akademik/akreditasi" element={<Akreditasi />} />
            <Route path="/akademik/pedoman" element={<Pedoman />} />

            {/* Riset Routes */}
            <Route path="/riset/publikasi" element={<RisetPublikasi />} />
            <Route path="/riset/pengabdian" element={<PengabdianMasyarakat />} />
            <Route path="/riset/haki" element={<HakiPaten />} />
            <Route path="/riset/jurnal" element={<JurnalSipmas />} />
            <Route path="/riset/produk" element={<ProdukInovasi />} />

            {/* Kemahasiswaan Routes */}
            <Route path="/kemahasiswaan/ormawa" element={<GenericPage title="Organisasi Mahasiswa" breadcrumbs={[{ label: "Kemahasiswaan" }, { label: "Ormawa" }]} />} />
            <Route path="/kemahasiswaan/ukm" element={<GenericPage title="Unit Kegiatan Mahasiswa" breadcrumbs={[{ label: "Kemahasiswaan" }, { label: "UKM" }]} />} />
            <Route path="/kemahasiswaan/prestasi" element={<GenericPage title="Prestasi Mahasiswa" breadcrumbs={[{ label: "Kemahasiswaan" }, { label: "Prestasi" }]} />} />
            <Route path="/kemahasiswaan/layanan" element={<GenericPage title="Layanan Mahasiswa" breadcrumbs={[{ label: "Kemahasiswaan" }, { label: "Layanan" }]} />} />

            {/* Kerjasama Routes */}
            <Route path="/kerjasama" element={<Kerjasama />} />
            <Route path="/kerjasama/internasional" element={<Internasional />} />
            <Route path="/kerjasama/nasional" element={<Nasional />} />
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
