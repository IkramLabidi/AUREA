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
            navigate("/newarrivals/summer/summercollection");
        }
        else if (title==="Autumn Whispers"){
            navigate("/newarrivals/autumncollection");
        }
        else {
            navigate("/newarrivals/wintercollection");
        }};
    return(
        <div className="rounded-md py-10 px-5 bg-gradient-to-b from-black via-gray-900 to-gray-700 hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col justify-center items-center gap-5"> 
                <h1 className="text-amber-500 font-serif text-2xl">{title}</h1>
                <p className="text-gray-400 ">{desc}</p>
                <p className="text-amber-500">{pieces}</p>
            </div>
            <button className="text-amber-500 border rounded-md py-2 px-5 cursor-pointer mt-5"
            onClick={()=>handleExplore()}
            >Explore</button>
        </div>
        
    )
}