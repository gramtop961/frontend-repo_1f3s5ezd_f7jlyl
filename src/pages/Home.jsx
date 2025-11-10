import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative h-[90vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523395243481-220b3ee73f6a?q=80&w=2000&auto=format&fit=crop"
          alt="Ressurreccion Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        <div className="relative z-10 h-full flex items-end pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
            >
              Rebirth of Street Elegance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 max-w-xl text-white/70"
            >
              Minimal silhouettes. Architectural lines. Monochrome precision.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-10 flex items-center gap-4"
            >
              <a href="/shop" className="px-6 py-3 bg-white text-black hover:bg-white/90 transition uppercase text-xs tracking-widest">Shop Collection</a>
              <a href="/lookbook" className="px-6 py-3 border border-white/30 hover:bg-white hover:text-black transition uppercase text-xs tracking-widest">View Lookbook</a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {[1,2,3].map((i) => (
              <div key={i} className="aspect-[3/4] bg-white/5 border border-white/10 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-15${i}395243481-220b3ee73f6a?q=80&w=1200&auto=format&fit=crop`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
