import { Link } from "react-router";
type CollectionsPathProps={
    title: string;
    desc: string;
    sectionId: string;
}
export function CollectionsPathCard({title, desc, sectionId}:  CollectionsPathProps){
    return(
        <div className="flex flex-col justify-center items-center gap-5 rounded-md bg-gradient-to-b from-amber-950 to-black p-6 sm:p-8 md:p-10 w-full h-auto transition-all duration-500 hover:scale-105 hover:cursor-pointer shadow-2xl shadow-amber-500/10">
            <h1 className="text-amber-500 text-xl sm:text-2xl md:text-3xl font-semibold text-center">{title}</h1>
            <p className="text-gray-400 text-sm sm:text-base text-center px-2">{desc}</p>
            <Link to={`/collections/${sectionId}`}>
                <button className="text-amber-500 py-2 px-6 border-2 border-amber-500 rounded-md text-sm sm:text-base transition-all hover:bg-amber-500 hover:text-black">Explore</button>
            </Link>
        </div>
    )
}
export function CollectionsPath(){
    return(
        <div className="flex flex-col gap-10 justify-center items-center w-full px-4 py-10">
            <h1 className="text-amber-500 text-4xl font-bold font-serif text-center">Collections</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full max-w-7xl">
                    <CollectionsPathCard
                    title="Gold Collection"
                    desc="Timeless elegance in 18k gold"
                    sectionId="gold"
                    />    
                    <CollectionsPathCard
                    title="White Gold Collection"
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
