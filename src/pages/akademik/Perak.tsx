import { useState } from "react";
import { Search } from "lucide-react";
import { SubPageLayout } from "@/components/layout/SubPageLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Regulation {
  id: string;
  title: string;
  date: string;
  category: string;
  year: string;
}

const regulations: Regulation[] = [
  {
    id: "1",
    title: "Peraturan Akademik 2024",
    date: "27 Agustus 2024",
    category: "Semua Jenjang",
    year: "2024",
  },
  {
    id: "2",
    title: "Peraturan Akademik 2022",
    date: "21 Mei 2024",
    category: "Diploma dan Sarjana Terapan",
    year: "2022",
  },
  {
    id: "3",
    title: "Peraturan Akademik 2020",
    date: "07 Oktober 2020",
    category: "Diploma dan Sarjana Terapan",
    year: "2020",
  },
  {
    id: "4",
    title: "Peraturan Akademik 2018",
    date: "24 Mei 2018",
    category: "Diploma dan Sarjana Terapan",
    year: "2018",
  },
  {
    id: "5",
    title: "Peraturan Akademik 2017",
    date: "03 Maret 2017",
    category: "Magister Terapan",
    year: "2017",
  },
];

export default function Perak() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = regulations.filter((reg) =>
    reg.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleReset = () => {
    setSearchQuery("");
  };

  return (
    <SubPageLayout
      title="Peraturan Akademik"
      breadcrumbs={[
        { label: "Akademik", href: "/akademik" },
        { label: "Peraturan Akademik" },
      ]}
    >
      <div className="space-y-8">
        {/* Search Section */}
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
            <Input
              placeholder="Cari peraturan akademik..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            variant="outline"
            onClick={handleReset}
            className="px-6"
          >
            Reset
          </Button>
        </div>

        {/* Table */}
        <div className="border rounded-lg overflow-hidden bg-white">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Perak
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Kategori
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((regulation) => (
                  <tr
                    key={regulation.id}
                    className="border-b hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <p className="font-medium text-slate-900">
                          {regulation.title}
                        </p>
                        <p className="text-sm text-slate-500">
                          {regulation.date}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-700">
                        {regulation.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Detail →
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-6 py-8 text-center text-slate-500">
                    Tidak ada peraturan akademik yang cocok dengan pencarian Anda.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Info Text */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>Informasi:</strong> Semua peraturan akademik berlaku untuk semua mahasiswa Politeknik Negeri Semarang. Untuk informasi lebih lanjut, hubungi Bagian Akademik melalui portal akademik atau kunjungi kantor akademik kami.
          </p>
        </div>
      </div>
    </SubPageLayout>
  );
}
