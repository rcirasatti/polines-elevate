import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Akademik Pages
import ProgramStudiRevised from "./pages/akademik/ProgramStudiRevised";
import BeasiswaNew from "./pages/akademik/BeasiswaNew";
import KegiatanKampus from "./pages/akademik/KegiatanKampus";
import Perak from "./pages/akademik/Perak";
import KalenderAkademik from "./pages/akademik/KalenderAkademik";
import Pedoman from "./pages/akademik/Pedoman";

// Profil Pages
import TentangPolines from "./pages/profil/TentangPolines";
import StrukturOrganisasi from "./pages/profil/StrukturOrganisasi";
import RencanaStrategis from "./pages/profil/RencanaStrategis";
import LaporanKinerja from "./pages/profil/LaporanKinerja";
import FasilitasNew from "./pages/profil/FasilitasNew";
import SumberDaya from "./pages/profil/SumberDaya";
import PetaKampus from "./pages/profil/PetaKampus";
import StaffDosen from "./pages/profil/StaffDosen";

// Kerjasama Pages
import KerjasamaIndex from "./pages/kerjasama/Index";
import Internasional from "./pages/kerjasama/Internasional";
import Nasional from "./pages/kerjasama/Nasional";

// Riset Pages
import RisetPublikasi from "./pages/riset/RisetPublikasi";
import PengabdianMasyarakat from "./pages/riset/PengabdianMasyarakat";
import HakiPaten from "./pages/riset/HakiPaten";
import JurnalSipmas from "./pages/riset/JurnalSipmas";
import ProdukInovasi from "./pages/riset/ProdukInovasi";

// Kemahasiswaan Pages
import KemahasiswaanIndex from "./pages/kemahasiswaan/Index";

// Layanan Pages
import LayananIndex from "./pages/layanan/Index";
import ZonaIntegritas from "./pages/layanan/ZonaIntegritas";
import WBS from "./pages/layanan/WBS";
import ULT from "./pages/layanan/ULT";
import PPID from "./pages/layanan/PPID";
import SistemInformasi from "./pages/layanan/SistemInformasi";
import MikroTik from "./pages/layanan/MikroTik";
import VerifikasiIjazah from "./pages/layanan/VerifikasiIjazah";
import Survei from "./pages/layanan/Survei";

// Akreditasi
import AkreditasiTopbar from "./pages/AkreditasiTopbar";

// Penerimaan Pages
import Penerimaan from "./pages/penerimaan/Index";

// Generic Page
import { GenericPage } from "./components/layout/GenericPage";

const queryClient = new QueryClient();

// Get basename from Vite config
const basename = import.meta.env.BASE_URL;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Profil Routes */}
            <Route path="/profil/tentang" element={<TentangPolines />} />
            <Route path="/profil/struktur-organisasi" element={<StrukturOrganisasi />} />
            <Route path="/profil/staff-dosen" element={<StaffDosen />} />
            <Route path="/profil/rencana-strategis" element={<RencanaStrategis />} />
            <Route path="/profil/laporan-kinerja" element={<LaporanKinerja />} />
            <Route path="/profil/fasilitas" element={<FasilitasNew />} />
            <Route path="/profil/sumber-daya" element={<SumberDaya />} />
            <Route path="/profil/peta-kampus" element={<PetaKampus />} />

            {/* Akademik Routes */}
            <Route path="/akademik" element={<ProgramStudiRevised />} />
            <Route path="/akademik/program-studi" element={<ProgramStudiRevised />} />
            <Route path="/akademik/beasiswa" element={<BeasiswaNew />} />
            <Route path="/akademik/kegiatan" element={<KegiatanKampus />} />
            <Route path="/akademik/perak" element={<Perak />} />
            <Route path="/akademik/kalender" element={<KalenderAkademik />} />
            <Route path="/akademik/pedoman" element={<Pedoman />} />

            {/* Riset Routes */}
            <Route path="/riset" element={<RisetPublikasi />} />
            <Route path="/riset/publikasi" element={<RisetPublikasi />} />
            <Route path="/riset/pengabdian" element={<PengabdianMasyarakat />} />
            <Route path="/riset/haki" element={<HakiPaten />} />
            <Route path="/riset/jurnal" element={<JurnalSipmas />} />
            <Route path="/riset/produk" element={<ProdukInovasi />} />

            {/* Kemahasiswaan Routes */}
            <Route path="/kemahasiswaan" element={<KemahasiswaanIndex />} />
            <Route path="/kemahasiswaan/ormawa" element={<GenericPage title="Organisasi Mahasiswa" breadcrumbs={[{ label: "Kemahasiswaan" }, { label: "Ormawa" }]} />} />
            <Route path="/kemahasiswaan/ukm" element={<GenericPage title="Unit Kegiatan Mahasiswa" breadcrumbs={[{ label: "Kemahasiswaan" }, { label: "UKM" }]} />} />
            <Route path="/kemahasiswaan/prestasi" element={<GenericPage title="Prestasi Mahasiswa" breadcrumbs={[{ label: "Kemahasiswaan" }, { label: "Prestasi" }]} />} />

            {/* Kerjasama Routes */}
            <Route path="/kerjasama" element={<KerjasamaIndex />} />
            <Route path="/kerjasama/internasional" element={<Internasional />} />
            <Route path="/kerjasama/nasional" element={<Nasional />} />

            {/* Layanan Routes */}
            <Route path="/layanan" element={<LayananIndex />} />
            <Route path="/layanan/zona-integritas" element={<ZonaIntegritas />} />
            <Route path="/layanan/wbs" element={<WBS />} />
            <Route path="/layanan/ult" element={<ULT />} />
            <Route path="/layanan/ppid" element={<PPID />} />
            <Route path="/layanan/sistem-informasi" element={<SistemInformasi />} />
            <Route path="/layanan/mikrotik" element={<MikroTik />} />
            <Route path="/layanan/verifikasi-ijazah" element={<VerifikasiIjazah />} />
            <Route path="/layanan/survei" element={<Survei />} />

            {/* Akreditasi (Topbar) */}
            <Route path="/akreditasi" element={<AkreditasiTopbar />} />

            {/* Penerimaan Routes */}
            <Route path="/penerimaan" element={<Penerimaan />} />

            {/* Download */}
            <Route path="/download" element={<GenericPage title="Pusat Unduhan" breadcrumbs={[{ label: "Download" }]} />} />

            {/* Static Pages */}
            <Route path="/kebijakan-privasi" element={<GenericPage title="Kebijakan Privasi" breadcrumbs={[{ label: "Kebijakan Privasi" }]} />} />
            <Route path="/syarat-ketentuan" element={<GenericPage title="Syarat & Ketentuan" breadcrumbs={[{ label: "Syarat & Ketentuan" }]} />} />
            <Route path="/peta-situs" element={<GenericPage title="Peta Situs" breadcrumbs={[{ label: "Peta Situs" }]} />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
