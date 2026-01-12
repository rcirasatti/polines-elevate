import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, ThumbsUp, Meh, ThumbsDown, Send,
  Star, CheckCircle2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SubPageLayout } from "@/components/layout/SubPageLayout";

const sidebarLinks = [
  { title: "Semua Layanan", href: "/layanan" },
  { title: "Zona Integritas", href: "/layanan/zona-integritas" },
  { title: "Whistleblowing System", href: "/layanan/wbs" },
  { title: "Unit Layanan Terpadu", href: "/layanan/ult" },
  { title: "Informasi Publik (PPID)", href: "/layanan/ppid" },
  { title: "Layanan SI", href: "/layanan/sistem-informasi" },
  { title: "MikroTik Academy", href: "/layanan/mikrotik" },
  { title: "Verifikasi Ijazah", href: "/layanan/verifikasi-ijazah" },
  { title: "Survei Website", href: "/layanan/survei", isActive: true },
];

const satisfactionOptions = [
  { value: "5", label: "Sangat Puas", emoji: "😄", color: "text-green-500" },
  { value: "4", label: "Puas", emoji: "🙂", color: "text-lime-500" },
  { value: "3", label: "Cukup", emoji: "😐", color: "text-yellow-500" },
  { value: "2", label: "Kurang Puas", emoji: "😕", color: "text-orange-500" },
  { value: "1", label: "Tidak Puas", emoji: "😞", color: "text-red-500" },
];

const questions = [
  "Kemudahan navigasi website",
  "Kecepatan loading halaman",
  "Kelengkapan informasi",
  "Desain tampilan website",
  "Kemudahan menemukan informasi"
];

export default function Survei() {
  const [submitted, setSubmitted] = useState(false);
  const [ratings, setRatings] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <SubPageLayout
        title="Survei Kepuasan Website"
        subtitle="Terima kasih atas partisipasi Anda"
        breadcrumbs={[
          { label: "Beranda", href: "/" },
          { label: "Layanan", href: "/layanan" },
          { label: "Survei" }
        ]}
        sidebarTitle="Layanan"
        sidebarLinks={sidebarLinks}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center py-12"
        >
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Terima Kasih!</h2>
          <p className="text-muted-foreground mb-6">
            Umpan balik Anda sangat berharga untuk peningkatan kualitas website kami.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline">
            Isi Survei Lagi
          </Button>
        </motion.div>
      </SubPageLayout>
    );
  }

  return (
    <SubPageLayout
      title="Survei Kepuasan Website"
      subtitle="Bantu kami meningkatkan kualitas website Politeknik Negeri Semarang"
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Layanan", href: "/layanan" },
        { label: "Survei" }
      ]}
      sidebarTitle="Layanan"
      sidebarLinks={sidebarLinks}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Survei Singkat
            </CardTitle>
            <CardDescription>
              Survei ini hanya membutuhkan waktu 2-3 menit
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Rating Questions */}
            {questions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-3"
              >
                <Label className="text-base font-medium">
                  {index + 1}. {question}
                </Label>
                <RadioGroup
                  value={ratings[question] || ""}
                  onValueChange={(value) => setRatings({ ...ratings, [question]: value })}
                  className="flex flex-wrap gap-2"
                >
                  {satisfactionOptions.map((option) => (
                    <div key={option.value}>
                      <RadioGroupItem
                        value={option.value}
                        id={`${question}-${option.value}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`${question}-${option.value}`}
                        className={`flex flex-col items-center gap-1 p-3 rounded-lg border-2 cursor-pointer transition-all
                          ${ratings[question] === option.value 
                            ? 'border-primary bg-primary/5' 
                            : 'border-muted hover:border-primary/50'}`}
                      >
                        <span className="text-2xl">{option.emoji}</span>
                        <span className="text-xs text-muted-foreground">{option.label}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </motion.div>
            ))}

            {/* Feedback */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: questions.length * 0.1 }}
              className="space-y-3"
            >
              <Label className="text-base font-medium">
                Saran dan masukan untuk website kami (opsional)
              </Label>
              <Textarea
                placeholder="Tuliskan saran atau masukan Anda di sini..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={4}
              />
            </motion.div>

            {/* Submit */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (questions.length + 1) * 0.1 }}
            >
              <Button onClick={handleSubmit} size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Kirim Survei
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </SubPageLayout>
  );
}
