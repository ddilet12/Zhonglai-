import { motion } from "motion/react";
import { translations, Language } from "../lib/translations";
import { MessageCircle, Phone, ShieldCheck, Award, ThumbsUp } from "lucide-react";

export function Home({ lang, openWhatsApp }: { lang: Language, openWhatsApp: () => void }) {
  const t = translations[lang];

  return (
    <>
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1498144846853-60ca2d438496?auto=format&fit=crop&q=80" 
            alt="Hero background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-blue-600/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-600/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-white">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-block bg-blue-600/20 border border-blue-600/50 text-blue-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-md">
                Innovating Modular Space
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight leading-[1.1] mb-6">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-zinc-200 mb-10 max-w-2xl leading-relaxed">
                {t.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={openWhatsApp}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/30"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  {t.hero.whatsapp}
                </button>
                <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <div className="w-10 h-10 rounded-full bg-zinc-100/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-300 uppercase tracking-widest">{t.floating.manager}</div>
                    <div className="font-mono font-bold">+7 700 000 0000</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-sm p-6 md:p-8 flex flex-wrap gap-8 justify-between items-center border border-zinc-200"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-lg text-blue-600">{t.trust.numberOne}</div>
              <div className="text-sm text-zinc-500">Market Leader</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-lg text-zinc-900">{t.trust.cert1}</div>
              <div className="text-sm text-zinc-500">Certified Production</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-600">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-lg text-zinc-900">{t.trust.cert2}</div>
              <div className="text-sm text-zinc-500">Premium Materials</div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
