export function History(){
    return(
        <div className="grid grid-cols-2 w-300 py-20 px-10 gap-20 ">
            <div className="flex flex-col gap-10 justify-center text-start">
                <h1 className="text-3xl font-serif text-amber-400 font-bold">Crafting Stories, Creating Memories</h1>
                <p className="font-medium text-gray-400">Born from a simple dream, we create jewelry that embodies beauty, meaning, and soul. Each piece is handcrafted with love and artistry, connecting hearts and stories through timeless treasures that celebrate life’s most precious moments.</p>
            </div>
            <div>
                <div className="relative h-96 rounded-lg overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"></div>
                </div>
            </div>
        </div>
    )
}