export function History() {
  return (
    <section className="w-full px-6 py-16 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-amber-400 leading-tight">
            Crafting Stories, <br className="hidden md:block" /> Creating Memories
          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Born from a simple dream, we create jewelry that embodies beauty,
            meaning, and soul. Each piece is handcrafted with love and artistry,
            connecting hearts and stories through timeless treasures that
            celebrate life’s most precious moments.
          </p>
        </div>
        <div className="relative h-72 sm:h-96 lg:h-[28rem] rounded-2xl overflow-hidden group shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10"></div>

          <div
            className="absolute inset-0 bg-cover bg-center transform 
                       group-hover:scale-110 transition-transform duration-700 ease-out"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
            }}
          />
        </div>
      </div>
    </section>
  );
}
