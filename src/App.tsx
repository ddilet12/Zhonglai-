import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { translations, Language } from './lib/translations';
import { cn } from './lib/utils';
import { MessageCircle, Phone, ArrowRight, Globe, Menu, X } from 'lucide-react';

import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { About } from './pages/About';
import { Projects } from './pages/Projects';

function App() {
  const [lang, setLang] = useState<Language>('kz');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const location = useLocation();

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const openWhatsApp = () => {
    window.open('https://wa.me/77000000000', '_blank');
  };

  return (
    <div className="min-h-screen bg-zinc-100 font-sans text-zinc-900 flex flex-col">
      {/* Navbar */}
      <nav className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled || location.pathname !== '/' ? "bg-white/90 backdrop-blur-md shadow-sm py-4 border-b border-zinc-200" : "bg-transparent py-6"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-heading font-bold text-xl">
              Z
            </div>
            <span className={cn(
              "font-heading font-bold text-2xl tracking-tight",
              isScrolled || location.pathname !== '/' ? "text-blue-600" : "text-white"
            )}>
              Zhonglai
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <div className={cn(
              "flex gap-6 font-medium text-sm",
              isScrolled || location.pathname !== '/' ? "text-zinc-600" : "text-white/90"
            )}>
              <Link to="/catalog" className="hover:text-blue-500 transition-colors uppercase tracking-widest">{t.nav.products}</Link>
              <Link to="/projects" className="hover:text-blue-500 transition-colors uppercase tracking-widest">{t.nav.projects}</Link>
              <Link to="/about" className="hover:text-blue-500 transition-colors uppercase tracking-widest">{t.nav.about}</Link>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative group">
                <button className={cn(
                  "flex items-center gap-1 font-medium text-sm",
                  isScrolled || location.pathname !== '/' ? "text-zinc-800" : "text-white"
                )}>
                  <Globe className="w-4 h-4" />
                  {lang.toUpperCase()}
                </button>
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 border border-zinc-100">
                  {(['kz', 'ru', 'en', 'zh'] as Language[]).map(l => (
                    <button 
                      key={l} 
                      onClick={() => setLang(l)}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm hover:bg-zinc-50 transition-colors",
                        lang === l ? "text-blue-600 font-bold" : "text-zinc-600"
                      )}
                    >
                      {l === 'kz' ? 'Қазақша' : l === 'ru' ? 'Русский' : l === 'en' ? 'English' : '中文'}
                    </button>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-blue-600/90 transition-colors shadow-lg shadow-blue-600/20"
              >
                {t.hero.cta}
              </button>
            </div>
          </div>

          <button className={cn("md:hidden p-2", isScrolled || location.pathname !== '/' ? "text-zinc-900" : "text-white")} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t border-zinc-100 overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                <Link to="/catalog" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{t.nav.products}</Link>
                <Link to="/projects" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{t.nav.projects}</Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{t.nav.about}</Link>
                <div className="flex gap-4 mt-4 py-4 border-t border-zinc-100">
                   {(['kz', 'ru', 'en', 'zh'] as Language[]).map(l => (
                    <button 
                      key={l} 
                      onClick={() => { setLang(l); setIsMenuOpen(false); }}
                      className={cn(
                        "text-sm font-medium px-3 py-1 rounded-full",
                        lang === l ? "bg-blue-600 text-white" : "bg-zinc-100 text-zinc-600"
                      )}
                    >
                      {l.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Pages Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home lang={lang} openWhatsApp={openWhatsApp} />} />
          <Route path="/catalog" element={<Catalog lang={lang} openModal={() => setIsModalOpen(true)} />} />
          <Route path="/projects" element={<Projects lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
        </Routes>
      </main>

      {/* Floating WhatsApp / CTA */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition-transform hover:scale-110 active:scale-95 group relative border border-blue-500"
        >
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-zinc-900 text-sm font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
            {t.hero.cta}
          </span>
          <ArrowRight className="w-6 h-6" />
        </button>  
        <button 
          onClick={openWhatsApp}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20bd5a] transition-transform hover:scale-110 active:scale-95 group relative flex items-center justify-center"
        >
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-slate-900 text-sm font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
            {t.hero.whatsapp}
          </span>
          <MessageCircle className="w-6 h-6 fill-current" />
        </button>
      </div>

      {/* Request Quote Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-md relative z-10 overflow-hidden shadow-2xl"
            >
              <div className="bg-blue-600 p-6 text-white text-center relative">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
                <h3 className="text-2xl font-bold font-heading">Request a Quote</h3>
                <p className="text-white/80 text-sm mt-1">We will contact you within 15 minutes.</p>
              </div>
              <div className="p-6">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Submitted successfully! (Simulation)'); setIsModalOpen(false); }}>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Phone Number</label>
                    <input type="tel" required className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Interested In</label>
                    <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all">
                      <option>Flat Pack Container</option>
                      <option>Expandable House</option>
                      <option>Folding House</option>
                      <option>Other / Customs</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 mt-4">
                    Get Pricing
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="bg-zinc-900 border-t border-zinc-800 text-zinc-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-2xl font-heading font-bold text-white mb-4">Zhonglai Kazakhstan</div>
          <p className="mb-6">Khorgos, Kazakhstan • High-End Modular Homes</p>
          <div className="flex justify-center gap-6 mb-8">
            {['kz', 'ru', 'en', 'zh'].map(l => (
              <button 
                key={l}
                onClick={() => setLang(l as Language)}
                className={cn("hover:text-white transition-colors uppercase text-sm font-medium tracking-widest", lang === l && "text-secondary")}
              >
                {l}
              </button>
            ))}
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Zhonglai Kazakhstan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
