import React from "react";
import { FaGift, FaScissors } from "react-icons/fa6";
import { GiTransparentTubes } from "react-icons/gi";

type CraftsCardType = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

export function CraftsCard({ icon, title, desc }: CraftsCardType) {
  return (
    <div className="bg-[#151515] border border-[#262626] flex flex-col gap-4 text-left p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-[#C9A24D]/30 transition">
      <div className="text-[#C9A24D]">{icon}</div>
      <h3 className="text-lg font-semibold text-[#F5E6C8]">{title}</h3>
      <p className="text-sm md:text-base leading-relaxed text-[#B8AA8F]">
        {desc}
      </p>
    </div>
  );
}

export function Crafts() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-[#1C1812] to-black py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#C9A24D]">
          Our Craftsmanship
        </h2>
        <p className="mt-4 text-[#B8AA8F]">
          Reflects our passion for detail, ethics, and timeless beauty.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <CraftsCard
          icon={<GiTransparentTubes size={44} />}
          title="Ethical Sourcing"
          desc="We carefully select our materials from ethical sources, ensuring that every gem and precious metal meets our rigorous standards for quality and responsibility."
        />

        <CraftsCard
          icon={<FaScissors size={44} />}
          title="Artisanal Excellence"
          desc="Our master craftsmen combine traditional techniques with modern innovation, bringing decades of experience to each piece they create."
        />

        <CraftsCard
          icon={<FaGift size={44} />}
          title="Timeless Design"
          desc="We create pieces that transcend trends, focusing on elegant designs that will be cherished for generations to come."
        />
      </div>
    </section>
  );
}
