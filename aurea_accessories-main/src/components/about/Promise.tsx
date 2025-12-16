export function Promise() {
    return(
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-black to-[#0b0f1d]">
        <div className="max-w-5xl mx-auto text-center flex flex-col gap-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-amber-400">The AURÉA Promise</h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"> At AURÉA, every creation is guided by a promise — to honor craftsmanship,respect ethical values, and design jewelry that carries emotion, meaning,and timeless beauty.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-serif text-amber-400">Authentic Craft</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Each piece is meticulously handcrafted, reflecting dedication,precision, and artistic excellence.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-serif text-amber-400">Ethical Values</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">We prioritize responsible sourcing and sustainable practices, ensuring beauty with integrity.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-serif text-amber-400">Timeless Emotion</h3>
                    <p className="text-gray-400 text-sm leading-relaxed"> Our jewelry is designed to capture moments, emotions, and stories that endure across generations.</p>
                </div>
            </div>
        </div>
    </section>

    )
}