import { motion } from "motion/react";
import { translations, Language } from "../lib/translations";

const projectImages = [
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80", // Commercial - Street
  "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80", // Tourism - Resort/Cabin
  "https://images.unsplash.com/photo-1541888086925-ebbc371ff152?auto=format&fit=crop&q=80", // Industrial - Engineering base
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80"  // Custom Villa
];

export function Projects({ lang }: { lang: Language }) {
  const t = translations[lang];

  return (
    <section className="pt-32 pb-24 bg-zinc-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-heading font-extrabold text-blue-600 mb-4 tracking-tight">
              {t.projectsInfo.title}
            </h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-zinc-600 font-medium">
              {t.projectsInfo.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.projectsInfo.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-200 block"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={projectImages[idx]} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-80"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold font-mono text-sm border-2 border-white/20">
                    0{idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold font-heading">{item.title}</h3>
                </div>
                <p className="text-zinc-200 text-sm font-medium pl-13 ml-1">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
