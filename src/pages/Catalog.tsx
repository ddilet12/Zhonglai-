import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { translations, Language } from "../lib/translations";

export function Catalog({ lang, openModal }: { lang: Language, openModal: () => void }) {
  const t = translations[lang];

  return (
    <section className="pt-32 pb-24 bg-zinc-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 mt-8">
          <h2 className="text-4xl font-heading font-extrabold text-blue-600 mb-4">{t.products.title}</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-grow">
          {/* Expandable House (Main Bento Card) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-7 md:row-span-4 bg-white rounded-3xl p-6 md:p-8 border border-zinc-200 flex flex-col shadow-sm relative overflow-hidden group"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-50 rounded-full blur-3xl z-0"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded w-fit mb-4 uppercase tracking-tighter italic">Top Seller</div>
              <h3 className="text-4xl font-heading font-black mb-3 text-zinc-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                {t.products.expandable.title}
              </h3>
              <p className="text-zinc-600 text-sm mb-6 leading-relaxed max-w-sm">
                {t.products.expandable.desc}
              </p>
              
              <div className="h-48 md:h-64 mt-4 relative overflow-hidden rounded-2xl mb-8 border-t border-l border-zinc-100 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80" 
                  alt="Expandable House" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {t.products.expandable.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-zinc-700 font-medium">
                    <span className="px-3 py-1 bg-zinc-100 rounded-full text-[10px] font-bold shrink-0">{spec}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center justify-between border-t border-zinc-100 pt-6">
                <span className="text-sm font-semibold text-zinc-400 uppercase tracking-wide">{t.products.from} <span className="text-zinc-900 text-xl font-black ml-1">$12k</span></span>
                <button onClick={openModal} className="flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-bold text-sm shadow-md shadow-blue-600/20">
                  {t.products.btnBook}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Flat Pack Container (Tech Specs Card) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-5 md:row-span-2 bg-zinc-900 text-white rounded-3xl p-6 md:p-8 border border-zinc-800 flex flex-col shadow-sm group"
          >
            <h3 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-4 italic">Tech Specs</h3>
            <h3 className="text-2xl font-heading font-black mb-2 text-white">{t.products.flatpack.title}</h3>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              {t.products.flatpack.desc}
            </p>
            
            <div className="space-y-3 flex-grow mb-6">
              {t.products.flatpack.specs.map((spec, i) => (
                <div key={i} className="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-400 text-sm">{i === 0 ? "Dimensions" : i === 1 ? "Lifespan" : "Assembly"}</span>
                  <span className="text-sm font-mono text-zinc-200">{spec}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-auto flex items-center justify-between">
              <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wide">{t.products.from} <span className="text-white text-xl font-bold ml-1">$1.4k</span></span>
              <button onClick={openModal} className="flex items-center justify-center w-10 h-10 bg-white text-zinc-900 rounded-full hover:bg-zinc-200 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Folding House (Accent Box) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-5 md:row-span-2 bg-blue-50 rounded-3xl p-6 md:p-8 border border-blue-100 flex flex-col shadow-sm group relative overflow-hidden"
          >
            <h3 className="text-2xl font-heading font-black mb-3 text-blue-900">{t.products.folding.title}</h3>
            <p className="text-blue-800/80 text-sm mb-6 leading-relaxed flex-grow">
              {t.products.folding.desc}
            </p>
            
            <div className="flex justify-between items-end mb-6">
              <div className="text-4xl font-black text-blue-900 leading-none">100% <span className="text-xs font-medium block opacity-60 mt-1 uppercase tracking-widest">Transformation</span></div>
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"/></svg>
              </div>
            </div>

             <div className="mt-auto flex items-center justify-between border-t border-blue-200/50 pt-6">
                <span className="text-sm font-semibold text-blue-800/60 uppercase tracking-wide">{t.products.from} <span className="text-blue-900 text-xl font-bold ml-1">$8k</span></span>
                <button onClick={openModal} className="flex items-center justify-center px-6 py-2 bg-white text-blue-600 font-bold border border-blue-200 rounded-full hover:bg-blue-100 transition-colors shadow-sm text-sm">
                  {t.products.btnBook}
                </button>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
