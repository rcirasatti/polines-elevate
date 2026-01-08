import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AIAssistant } from "@/components/shared/AIAssistant";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface GenericPageProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  children?: ReactNode;
}

export function GenericPage({ title, subtitle, breadcrumbs, children }: GenericPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-polines-blue-light/20 to-primary" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              {title}
            </h1>
            {subtitle && (
              <p className="text-primary-foreground/80 text-lg">{subtitle}</p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-muted border-b border-border">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Beranda</span>
            </Link>
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                {item.href ? (
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-xl border border-border shadow-sm p-6 md:p-8"
        >
          {children || (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Halaman {title}
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Konten untuk halaman ini sedang dalam pengembangan. Silakan kunjungi kembali atau hubungi kami untuk informasi lebih lanjut.
              </p>
            </div>
          )}
        </motion.div>
      </div>

      <Footer />
      <AIAssistant />
    </div>
  );
}
