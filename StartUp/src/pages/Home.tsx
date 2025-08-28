"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import NavHeader from "../components/Navbar";
import HeroSection from "../components/Home_Page_Sections/HeroSection";
import AboutSection from "../components/Home_Page_Sections/AboutSection";
import ServicesSection from "../components/Home_Page_Sections/ServiceSection";
import PortfolioSection from "../components/Home_Page_Sections/PortfolioSection";
import ContactSection from "../components/Home_Page_Sections/ContactSection";
import FooterSection from "../components/FooterSection";


function StartupWebsite() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection for active nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <NavHeader activeSection={activeSection} />

      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 right-4 z-50 md:hidden p-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-y-0 right-0 z-40 w-64 bg-black/95 backdrop-blur-md border-l border-white/20 md:hidden"
          >
            <div className="flex flex-col p-6 pt-20 space-y-4">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-lg hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sections */}
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <PortfolioSection/>
      <ContactSection/>

      {/* Footer */}
      <FooterSection />

    </div>
  );
}

export default StartupWebsite;