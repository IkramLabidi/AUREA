import { Link } from "react-router";
type CollectionsPathProps={
    title: string;
    desc: string;
    sectionId: string;
}
export function CollectionsPathCard({title, desc, sectionId}:  CollectionsPathProps){
    return(
        <div className="flex flex-col justify-center items-center gap-5 rounded-md  bg-gradient-to-b from-amber-950 to-black p-10 w-100 h-75 hover:transition-all hovber:duration-1000 hover:scale-105 hover:cursor-pointer shadow-amber-500/10 shadow-2xl">
            <h1 className="text-amber-500 text-2xl">{title}</h1>
            <p className="text-gray-400">{desc}</p>
            <Link to={`/collections/${sectionId}`}>
                <button className="text-amber-500 py-2 px-5 border-2 rounded-md hover:cursor-pointer">Explore</button>
            </Link>
        </div>
    )
}
export function CollectionsPath(){
    return(
        <div className="flex flex-col gap-10">
            <h1 className="text-amber-500 text-4xl font-bold font-serif">Collections</h1>
            <div className="flex gap-10 items-center justify-center">
                    <CollectionsPathCard
                    title="Gold Collection"
                    desc="Timeless elegance in 18k gold"
                    sectionId="gold"
                    />    
                    <CollectionsPathCard
                    title="Silver Collection"
                    desc="Modern designs in sterling silver"
                    sectionId="silver"
                    />
                    <CollectionsPathCard
                    title="Diamond Collection"
                    desc="Brilliant diamonds for special moments"
                    sectionId="diamond"
                    />
            </div>
        </div>
    )
}
