import { motion } from "motion/react";
import { translations, Language } from "../lib/translations";
import { MessageCircle, Phone, ShieldCheck, Award, ThumbsUp, ArrowRight } from "lucide-react";

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

      {/* Intro Bento */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 bg-zinc-900 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full"></div>
              <div className="relative z-10 max-w-xl">
                <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">
                  {t.products.expandable.title}
                </h2>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  {t.products.expandable.desc}
                </p>
                <a href="#catalog" className="inline-flex items-center gap-2 bg-white text-zinc-900 px-6 py-3 rounded-full font-bold hover:bg-zinc-200 transition-colors">
                  View Catalog <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 bg-blue-600 rounded-3xl p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 blur-2xl rounded-full"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-5xl font-black font-heading mb-2">10</h3>
                <p className="text-blue-100 font-medium text-lg leading-tight uppercase tracking-wider">
                  Years of <br/> Excellence
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
