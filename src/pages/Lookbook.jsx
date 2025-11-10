export default function Lookbook() {
  const images = [
    'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1548883354-7622d3df3ccd?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight mb-8">Lookbook</h1>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]
                          [&>img:not(:first-child)]:mt-6">
            {images.map((src, i) => (
              <img key={i} src={src} className="w-full mb-6 break-inside-avoid object-cover hover:opacity-90 transition" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
