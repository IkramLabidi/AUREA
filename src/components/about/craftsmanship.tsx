import { FaGift , FaScissors} from "react-icons/fa6";
import { GiTransparentTubes } from "react-icons/gi";

type CraftsCardType={
    icon: React.ReactNode;
    title: string;
    desc: string;
}

export function CraftsCard({icon, title, desc}: CraftsCardType){
    return(
        <div className="bg-[#000000] flex flex-col gap-5 text-start p-10 rounded-md w-100 h-75 shadow-amber-500/10 shadow-2xl">
            <div className="text-amber-400">{icon}</div>
            <p className="text-2xl text-amber-400">{title}</p>
            <p className="text-gray-400 ">{desc}</p>
        </div>
    )
}

export function Crafts(){
    return(
        <div className="bg-[#101727] py-10 flex flex-col gap-10 w-full h-130">
            <h1 className="text-3xl font-serif text-amber-400 font-bold">Our Craftsmanship</h1>
            <div className=" flex justify-center items-center gap-10">
                <CraftsCard
                icon = {<GiTransparentTubes size={50}/>}
                title = "Ethical Sourcing"
                desc="We carefully select our materials from ethical sources, ensuring that every gem and precious metal meets our rigorous standards for quality and responsibility." 
                />
                <CraftsCard
                icon = {<FaScissors size={50}/>}
                title = "Artisanal Excellence"
                desc="Our master craftsmen combine traditional techniques with modern innovation, bringing decades of experience to each piece they create." 
                />
                <CraftsCard
                icon = {<FaGift size={50}/>}
                title = "Timeless Design"
                desc="We create pieces that transcend trends, focusing on elegant designs that will be cherished for generations to come." 
                />
            </div>  
        </div>
    )
}