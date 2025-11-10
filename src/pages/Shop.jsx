import { useMemo } from 'react'

const products = [
  { id: 1, name: 'Mono Shell Jacket', price: 320, img: 'https://images.unsplash.com/photo-1548883354-7622d3df3ccd?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Carbon Cargo Trouser', price: 210, img: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Slate Layered Hoodie', price: 190, img: 'https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Obsidian Overshirt', price: 240, img: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, name: 'White Noise Tee', price: 85, img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, name: 'Graphite Track Pant', price: 175, img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop' },
]

export default function Shop() {
  const formatted = useMemo(
    () => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
    []
  )

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight mb-8">Shop</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <div key={p.id} className="group border border-white/10 bg-white/5 overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-4 flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium">{p.name}</p>
                  </div>
                  <p className="text-white/70">{formatted.format(p.price)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
