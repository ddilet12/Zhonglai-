import { motion } from "motion/react";
import { translations, Language } from "../lib/translations";

export function About({ lang }: { lang: Language }) {
  const t = translations[lang];

  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1541888086925-ebbc371ff152?auto=format&fit=crop&q=80" 
                alt="Factory" 
                className="relative z-10 w-full h-auto rounded-3xl shadow-xl border border-zinc-200"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 z-20 hidden md:block">
                <div className="text-4xl font-heading font-black text-blue-600 mb-1">ISO</div>
                <div className="text-sm font-bold text-zinc-900 border-t border-zinc-100 pt-2">9001 / 14001</div>
              </div>
            </div>
            
            <div className="mt-16 bg-zinc-50 rounded-3xl p-8 border border-zinc-100">
              <h3 className="text-2xl font-bold mb-6 text-zinc-900">{t.aboutInfo.certTitle}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.aboutInfo.certificates.map((cert, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-zinc-200 text-sm font-medium text-zinc-700 flex items-center shadow-sm">
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <h2 className="text-4xl font-heading font-extrabold text-zinc-900 mb-4 tracking-tight">
              {t.aboutInfo.title}
            </h2>
            <div className="h-1 w-20 bg-blue-600 mb-8 rounded-full"></div>
            <p className="text-lg text-zinc-600 mb-12 leading-relaxed font-medium">
              {t.aboutInfo.subtitle}
            </p>
            
            <div className="grid grid-cols-2 gap-6 group mb-16">
              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-blue-200 transition-colors">
                <div className="text-3xl font-black text-blue-600 mb-2">
                  {t.aboutInfo.stats.branches.split(' ')[0]}
                </div>
                <div className="text-sm font-bold text-zinc-900 mb-1">
                  {t.aboutInfo.stats.branches.split(' ').slice(1).join(' ')}
                </div>
                <div className="text-xs text-zinc-500 leading-tight">
                  {t.aboutInfo.stats.branchesDesc}
                </div>
              </div>

              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-blue-200 transition-colors">
                <div className="text-3xl font-black text-blue-600 mb-2">
                  {t.aboutInfo.stats.production.split(' ')[0]}
                </div>
                <div className="text-sm font-bold text-zinc-900 mb-1">
                  {t.aboutInfo.stats.production.split(' ').slice(1).join(' ')}
                </div>
                <div className="text-xs text-zinc-500 leading-tight">
                  {t.aboutInfo.stats.productionDesc}
                </div>
              </div>

              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-blue-200 transition-colors">
                <div className="text-3xl font-black text-blue-600 mb-2">
                  {t.aboutInfo.stats.employees.split(' ')[0]}
                </div>
                <div className="text-sm font-bold text-zinc-900 mb-1">
                  {t.aboutInfo.stats.employees.split(' ').slice(1).join(' ')}
                </div>
                <div className="text-xs text-zinc-500 leading-tight">
                  {t.aboutInfo.stats.employeesDesc}
                </div>
              </div>

              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-blue-200 transition-colors">
                <div className="text-3xl font-black text-blue-600 mb-2">
                  {t.aboutInfo.stats.installTime.split(' ')[0]}
                </div>
                <div className="text-sm font-bold text-zinc-900 mb-1">
                  {t.aboutInfo.stats.installTime.split(' ').slice(1).join(' ')}
                </div>
                <div className="text-xs text-zinc-500 leading-tight">
                  {t.aboutInfo.stats.installTimeDesc}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-heading font-extrabold text-zinc-900 mb-8">{t.aboutInfo.historyTitle}</h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-200 before:to-transparent">
                {t.aboutInfo.history.map((event, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-blue-600 text-transparent group-hover:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/></svg>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm group-hover:border-blue-300 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-bold text-blue-600">{event.year}</div>
                      </div>
                      <div className="text-zinc-600 text-sm font-medium">{event.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
