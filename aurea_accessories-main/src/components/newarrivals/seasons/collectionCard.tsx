import { useNavigate } from "react-router"

type CardProps={
    title: string;
    desc : string;
    pieces : string;
}
export function Card({title, desc, pieces}: CardProps){
    const navigate=useNavigate();
    const handleExplore=()=>{
        if (title==="Summer Radiance"){
            navigate("/newarrivals/summercollection");
        }
        else if (title==="Autumn Whispers"){
            navigate("/newarrivals/autumn/autumncollection");
        }
        else {
            navigate("/newarrivals/winter/wintercollection");
        }};
    return(
      <div className="rounded-xl py-10 px-6 bg-linear-to-b from-black via-gray-900 to-gray-700 hover:scale-105 transition-transform duration-300 shadow-lg shadow-amber-500/20 w-full max-w-xs mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-amber-400 font-serif text-2xl sm:text-3xl font-semibold tracking-wide">{title}</h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{desc}</p>
          <p className="text-amber-400 font-medium text-lg">{pieces}</p>
        </div>
        <button className="mt-6 w-full border border-amber-500 text-amber-500 rounded-lg py-2.5 px-6 font-medium hover:bg-amber-500 hover:text-black transition-all duration-300 shadow-sm"
        onClick={() => handleExplore()}> Explore </button>
      </div>
    )
}