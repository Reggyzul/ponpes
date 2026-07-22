import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, Menu, X, Sun, Moon, Settings, Edit3, 
  HelpCircle, Sparkles, Check, ChevronRight, Eye, RefreshCw,
  ChevronDown, Plane, Droplets, Hammer
} from 'lucide-react';

import { PesantrenData } from './types';
import { 
  defaultProfil, 
  defaultPrograms, 
  defaultKeunggulan, 
  defaultFasilitas, 
  defaultKegiatan, 
  defaultTestimoni, 
  defaultBerita, 
  defaultAlur, 
  defaultFAQ, 
  defaultGaleri 
} from './data/defaultData';

// Modular Components
import SidebarEditor, { themes } from './components/SidebarEditor';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import FeaturesSection from './components/FeaturesSection';
import FacilitiesSection from './components/FacilitiesSection';
import ActivitiesSection from './components/ActivitiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsSection from './components/NewsSection';
import AdmissionSteps from './components/AdmissionSteps';
import FAQSection from './components/FAQSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import RegistrationForm from './components/RegistrationForm';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FooterSection from './components/FooterSection';
import FacilitiesPage from './components/FacilitiesPage';
import ActivitiesPage from './components/ActivitiesPage';
import RegistrationPage from './components/RegistrationPage';
import TravelPage from './components/TravelPage';
import MaduPage from './components/MaduPage';
import MebelPage from './components/MebelPage';

export default function App() {
  // Theme & Applet settings
  const [activeTheme, setActiveTheme] = useState<string>('emerald');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<'home' | 'facilities' | 'activities' | 'registration' | 'travel' | 'madu' | 'mebel'>('home');

  // Dynamic Pesantren State loaded from localStorage if exists
  const [pesantrenProfil, setPesantrenProfil] = useState<PesantrenData>(defaultProfil);

  // Load from localStorage on mount
  useEffect(() => {
    const savedProfil = localStorage.getItem('pesantren_profil_data');
    if (savedProfil) {
      try {
        const parsed = JSON.parse(savedProfil);
        if (parsed.whatsapp === "6282184827707") {
          parsed.whatsapp = defaultProfil.whatsapp;
          parsed.phone = defaultProfil.phone;
        }
        const updatedProfil = { 
          ...defaultProfil, 
          ...parsed, 
          fotoPengasuh: (!parsed.fotoPengasuh || parsed.fotoPengasuh === "/images/kh-mustain-romli.jpg") 
            ? defaultProfil.fotoPengasuh 
            : parsed.fotoPengasuh 
        };
        setPesantrenProfil(updatedProfil);
        localStorage.setItem('pesantren_profil_data', JSON.stringify(updatedProfil));
      } catch (e) {
        console.error('Gagal memuat profil pesantren tersimpan');
      }
    }

    const savedTheme = localStorage.getItem('pesantren_theme');
    if (savedTheme) {
      setActiveTheme(savedTheme);
    }

    // Default to dark mode based on browser preference if not saved
    const savedDark = localStorage.getItem('pesantren_dark_mode');
    if (savedDark === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedDark === 'false') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Default light theme as per visual instruction for standard high-contrast feel,
      // but let them toggle easily.
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Save changes helper
  const handleProfilChange = (newData: PesantrenData) => {
    setPesantrenProfil(newData);
    localStorage.setItem('pesantren_profil_data', JSON.stringify(newData));
  };

  const handleThemeChange = (themeId: string) => {
    setActiveTheme(themeId);
    localStorage.setItem('pesantren_theme', themeId);
  };

  const toggleDarkMode = () => {
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    localStorage.setItem('pesantren_dark_mode', String(nextDark));
    if (nextDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleReset = () => {
    if (window.confirm("Apakah Anda yakin ingin menyetel ulang semua konten kembali ke templat awal? Tindakan ini akan menghapus semua penulisan kustom Anda.")) {
      setPesantrenProfil(defaultProfil);
      setActiveTheme('emerald');
      localStorage.removeItem('pesantren_profil_data');
      localStorage.removeItem('pesantren_theme');
      alert("Konten disetel ulang ke default.");
    }
  };

  // Nav scroll & page handler
  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);

    if (id === 'facilities') {
      setCurrentView('facilities');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (id === 'activities') {
      setCurrentView('activities');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (id === 'registration') {
      setCurrentView('registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (id === 'travel') {
      setCurrentView('travel');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (id === 'madu') {
      setCurrentView('madu');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (id === 'mebel') {
      setCurrentView('mebel');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Inline Direct Editing Toggles (Awesome Feature)
  const handleDirectEdit = (field: keyof PesantrenData, value: string) => {
    handleProfilChange({ ...pesantrenProfil, [field]: value });
  };

  // Setup visual CSS overrides based on active theme
  const currentTheme = themes.find(t => t.id === activeTheme) || themes[0];
  const themeAccentStyle = {
    '--color-primary': currentTheme.primary,
    '--color-primary-hover': currentTheme.primaryHover,
    '--color-secondary': currentTheme.secondary,
    '--color-bg-light': currentTheme.bgLight,
    '--color-accent': currentTheme.accentColor,
  } as React.CSSProperties;

  return (
    <div 
      style={themeAccentStyle}
      className="min-h-screen bg-white font-sans text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100 selection:bg-emerald-500 selection:text-white"
    >
      {/* 
        Sticky Navigation Bar
      */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md dark:border-gray-900 dark:bg-gray-950/90 transition-colors">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          
          {/* Logo Brand */}
          <div 
            onClick={() => handleScrollTo('hero')} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <img 
              src="/logo.avif" 
              alt="Logo Barokatul Qodiri" 
              className="h-11 w-11 object-contain drop-shadow-xs group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-serif text-sm font-extrabold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                {pesantrenProfil.namaPesantren}
              </span>
              <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 leading-normal uppercase tracking-wider">
                Website Profil Resmi
              </span>
            </div>
          </div>

          {/* Desktop Navigation Link Menu */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wide text-gray-600 dark:text-gray-300">
            <button onClick={() => handleScrollTo('about')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition cursor-pointer">Tentang</button>
            <button onClick={() => handleScrollTo('programs')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition cursor-pointer">Program</button>
            <button onClick={() => handleScrollTo('facilities')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition cursor-pointer">Fasilitas</button>
            <button onClick={() => handleScrollTo('activities')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition cursor-pointer">Kegiatan</button>
            <button onClick={() => handleScrollTo('admission-steps')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition cursor-pointer">Alur PSB</button>
            <button onClick={() => handleScrollTo('faq')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition cursor-pointer">FAQ</button>
            <button onClick={() => handleScrollTo('contact')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition cursor-pointer">Kontak</button>

            {/* Unit Usaha Dropdown (Paling Kanan Navbar) */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setIsBusinessDropdownOpen(true)}
              onMouseLeave={() => setIsBusinessDropdownOpen(false)}
            >
              <button 
                onClick={() => handleScrollTo('business')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition cursor-pointer font-bold"
              >
                <span>Unit Usaha</span>
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200" />
              </button>

              <AnimatePresence>
                {isBusinessDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1 w-64 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl p-2 z-50 text-xs font-semibold"
                  >
                    <button
                      onClick={() => handleScrollTo('travel')}
                      className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/50 text-gray-800 dark:text-gray-200 hover:text-emerald-700 dark:hover:text-emerald-300 transition flex items-center gap-2.5 cursor-pointer"
                    >
                      <div className="p-2 rounded-lg bg-emerald-100/70 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 shrink-0">
                        <Plane className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">Travel Haji &amp; Umroh</div>
                        <div className="text-[10px] text-gray-400 font-normal">Perjalanan Suci &amp; Bimbingan</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleScrollTo('madu')}
                      className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-950/30 text-gray-800 dark:text-gray-200 hover:text-amber-700 dark:hover:text-amber-300 transition flex items-center gap-2.5 cursor-pointer mt-1"
                    >
                      <div className="p-2 rounded-lg bg-amber-100/70 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 shrink-0">
                        <Droplets className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">Madu Murni Pesantren</div>
                        <div className="text-[10px] text-gray-400 font-normal">100% Alami &amp; Khasiat</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleScrollTo('mebel')}
                      className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-950/30 text-gray-800 dark:text-gray-200 hover:text-amber-700 dark:hover:text-amber-300 transition flex items-center gap-2.5 cursor-pointer mt-1"
                    >
                      <div className="p-2 rounded-lg bg-amber-100/70 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 shrink-0">
                        <Hammer className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">Mebel Mbah Pugung</div>
                        <div className="text-[10px] text-gray-400 font-normal">Kriya &amp; Furniture Berkualitas</div>
                      </div>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Header Action Buttons (CTA, Mode Toggles) */}
          <div className="flex items-center gap-3">
            {/* Registration CTA button */}
            <button
              onClick={() => handleScrollTo('registration')}
              className="rounded-full bg-emerald-600 text-white hover:bg-emerald-700 px-5 py-2 text-xs font-bold transition shadow-md shadow-emerald-950/10 hover:scale-103 active:scale-97 cursor-pointer"
            >
              Daftar PSB
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white transition lg:hidden cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* 
        Mobile Navigation Overlay Drawer Menu
      */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-gray-100 bg-white/95 backdrop-blur-md dark:border-gray-900 dark:bg-gray-950/95 shadow-lg overflow-hidden fixed w-full z-30"
          >
            <div className="px-4 py-5 space-y-3.5 flex flex-col text-sm font-bold text-gray-700 dark:text-gray-300">
              <button onClick={() => handleScrollTo('about')} className="text-left py-1 hover:text-emerald-600 transition">Tentang Kami</button>
              <button onClick={() => handleScrollTo('programs')} className="text-left py-1 hover:text-emerald-600 transition">Program Pendidikan</button>
              <button onClick={() => handleScrollTo('facilities')} className="text-left py-1 hover:text-emerald-600 transition">Fasilitas</button>
              <button onClick={() => handleScrollTo('activities')} className="text-left py-1 hover:text-emerald-600 transition">Kegiatan Santri</button>
              <button onClick={() => handleScrollTo('admission-steps')} className="text-left py-1 hover:text-emerald-600 transition">Alur PSB</button>
              <button onClick={() => handleScrollTo('faq')} className="text-left py-1 hover:text-emerald-600 transition">Pertanyaan Umum (FAQ)</button>
              <button onClick={() => handleScrollTo('contact')} className="text-left py-1 hover:text-emerald-600 transition">Kontak &amp; Peta</button>
              
              <div className="pt-2 border-t border-gray-100 dark:border-gray-800 space-y-2">
                <span className="text-xs uppercase text-amber-500 font-bold tracking-wider">Unit Usaha Pesantren:</span>
                <button onClick={() => handleScrollTo('travel')} className="w-full text-left py-1.5 px-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                  <Plane className="h-4 w-4 text-emerald-600" /> Travel Haji &amp; Umroh
                </button>
                <button onClick={() => handleScrollTo('madu')} className="w-full text-left py-1.5 px-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-amber-500" /> Madu Murni Pesantren
                </button>
                <button onClick={() => handleScrollTo('mebel')} className="w-full text-left py-1.5 px-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 flex items-center gap-2">
                  <Hammer className="h-4 w-4 text-amber-500" /> Mebel Mbah Pugung
                </button>
              </div>
              
              <button
                onClick={() => handleScrollTo('registration')}
                className="w-full text-center rounded-xl bg-emerald-600 text-white font-bold py-2.5 shadow-md"
              >
                Formulir Pendaftaran Online
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 
        Inline Live Edit Mode Banner Warning
      */}
      {isEditMode && (
        <div className="bg-amber-500 text-white px-4 py-2.5 text-center text-xs font-bold sticky top-[72px] z-30 flex items-center justify-center gap-2 shadow-md">
          <Edit3 className="h-4 w-4 animate-bounce" />
          <span>Anda sedang dalam <b>Mode Edit Langsung</b>. Klik kolom teks bertanda kotak putus-putus untuk mengubah konten secara langsung di halaman!</span>
          <button 
            onClick={() => setIsEditMode(false)}
            className="underline ml-4 bg-black/25 px-2.5 py-1 rounded-md hover:bg-black/35 font-bold"
          >
            Selesai Edit
          </button>
        </div>
      )}

      {/* 
        Main Page Content Sections
      */}
      <main className="relative">
        {currentView === 'facilities' ? (
          <FacilitiesPage
            facilities={defaultFasilitas}
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onGoToActivities={() => handleScrollTo('activities')}
            onRegisterClick={() => handleScrollTo('registration')}
          />
        ) : currentView === 'activities' ? (
          <ActivitiesPage
            activities={defaultKegiatan}
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onGoToFacilities={() => handleScrollTo('facilities')}
            onRegisterClick={() => handleScrollTo('registration')}
          />
        ) : currentView === 'registration' ? (
          <RegistrationPage
            programs={defaultPrograms}
            whatsappNumber={pesantrenProfil.whatsapp}
            namaPesantren={pesantrenProfil.namaPesantren}
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : currentView === 'travel' ? (
          <TravelPage
            whatsappNumber="6282184827707"
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : currentView === 'madu' ? (
          <MaduPage
            whatsappNumber="6282184827707"
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : currentView === 'mebel' ? (
          <MebelPage
            whatsappNumber="6282184827707"
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          <>
            {/* HERO SECTION */}
            <HeroSection 
              data={pesantrenProfil}
              onRegisterClick={() => handleScrollTo('registration')}
              onLearnMoreClick={() => handleScrollTo('about')}
            />

            <div className="relative">
              {/* ABOUT SECTION */}
              <AboutSection data={pesantrenProfil} />

              {/* KEUNGGULAN SECTION */}
              <FeaturesSection features={defaultKeunggulan} />

              {/* PROGRAMS SECTION */}
              <ProgramsSection programs={defaultPrograms} />

              {/* ADMISSION STEPS WORKFLOW */}
              <AdmissionSteps steps={defaultAlur} />

              {/* FAQ ACCORDION SECTION */}
              <FAQSection faqItems={defaultFAQ} />

              {/* CONTACT & MAP LOCATION SECTION */}
              <ContactSection data={pesantrenProfil} />
            </div>
          </>
        )}
      </main>

      {/* 
        FOOTER SECTION
      */}
      <FooterSection 
        data={pesantrenProfil}
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      {/* 
        SIDEBAR CONFIGURATOR PANEL
      */}
      <SidebarEditor
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        data={pesantrenProfil}
        onChange={handleProfilChange}
        onReset={handleReset}
        activeTheme={activeTheme}
        onThemeChange={handleThemeChange}
        isEditMode={isEditMode}
        onToggleEditMode={() => {
          setIsEditMode(!isEditMode);
          setIsEditorOpen(false); // Close sidebar for comfortable direct page edits
        }}
      />

      {/* 
        FLOATING WHATSAPP CHAT BUTTON
      */}
      <FloatingWhatsApp whatsappNumber={pesantrenProfil.whatsapp} />

    </div>
  );
}
