import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AIAssistant } from "@/components/shared/AIAssistant";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SidebarLink {
  title: string;
  href: string;
  active?: boolean;
}

interface SubPageLayoutProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  sidebarTitle?: string;
  sidebarLinks?: SidebarLink[];
  children: ReactNode;
}

export function SubPageLayout({
  title,
  subtitle,
  breadcrumbs,
  sidebarTitle,
  sidebarLinks,
  children,
}: SubPageLayoutProps) {
  const hasSidebar = sidebarTitle && sidebarLinks && sidebarLinks.length > 0;
  
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
        <div className={hasSidebar ? "grid grid-cols-1 lg:grid-cols-4 gap-8" : "w-full"}>
          {/* Sidebar - Only show if hasSidebar */}
          {hasSidebar && (
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="bg-card rounded-xl border border-border shadow-sm p-6 sticky top-64">
                <h3 className="font-bold text-lg text-primary mb-4 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-secondary" />
                  {sidebarTitle}
                </h3>
                <ul className="space-y-2">
                  {sidebarLinks?.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className={`block px-4 py-2 rounded-lg transition-colors ${
                          link.active
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-primary"
                        }`}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          )}

          {/* Main Content Area */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={hasSidebar ? "lg:col-span-3" : "w-full"}
          >
            <div className="bg-card rounded-xl border border-border shadow-sm p-6 md:p-8">
              {children}
            </div>
          </motion.main>
        </div>
      </div>

      <Footer />
      <AIAssistant />
    </div>
  );
}
