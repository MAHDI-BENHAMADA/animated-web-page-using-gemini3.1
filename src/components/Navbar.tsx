import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const navLinks = ["Home", "How It Works", "Philosophy", "Use Cases"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-8 md:px-28 py-4 flex items-center justify-between"
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="relative w-7 h-7 rounded-full border-2 border-foreground/60 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full border border-foreground/60" />
        </div>
        <span className="text-foreground font-bold text-lg tracking-tight">
          Mindloop
        </span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-1 text-sm">
        {navLinks.map((link, i) => (
          <span key={link} className="flex items-center">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 px-2"
            >
              {link}
            </a>
            {i < navLinks.length - 1 && (
              <span className="text-muted-foreground/40 text-xs">•</span>
            )}
          </span>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-2">
        {[Instagram, Linkedin, Twitter].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
