import { FaGift, FaScissors } from "react-icons/fa6";
import { GiTransparentTubes } from "react-icons/gi";

type CraftsCardType = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

export function CraftsCard({ icon, title, desc }: CraftsCardType) {
  return (
    <div
      className="bg-black/90 backdrop-blur-sm flex flex-col gap-6 text-left p-8 md:p-10 rounded-2xl shadow-2xl shadow-amber-500/10 hover:shadow-amber-500/30 transition-all duration-500 hover:-translate-y-2">
      <div className="text-amber-400">{icon}</div>
      <h3 className="text-xl md:text-2xl font-serif text-amber-400">{title}</h3>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed">{desc}</p>
    </div>
  );
}

export function Crafts() {
  return (
    <section className="w-full bg-[#101727] py-20 px-6 md:px-12 lg:px-20">
        <div className="text-center mb-14">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-amber-400"> Our Craftsmanship</h1>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">Every piece reflects our passion for detail, ethics, and timeless beauty.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <CraftsCard
            icon={<GiTransparentTubes size={48} />}
            title="Ethical Sourcing"
            desc="We carefully select our materials from ethical sources, ensuring that every gem and precious metal meets our rigorous standards for quality and responsibility."/>
            <CraftsCard
            icon={<FaScissors size={48} />}
            title="Artisanal Excellence"
            desc="Our master craftsmen combine traditional techniques with modern innovation, bringing decades of experience to each piece they create."/>
            <CraftsCard
            icon={<FaGift size={48} />}
            title="Timeless Design"
            desc="We create pieces that transcend trends, focusing on elegant designs that will be cherished for generations to come."/>
        </div>
    </section>
  );
}
