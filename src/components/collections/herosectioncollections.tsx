export function HeroSectionCollections(){
    const handleClick= (sectionId : string)=> {
        const section= document.getElementById(sectionId);
        section?.scrollIntoView({behavior: "smooth"});
    }
    return(
        <div className="h-100 flex flex-col justify-center items-center gap-5" id="herosection">
            <h1 className="font-serif text-4xl font-bold">Our <span className="text-amber-500">Collections</span></h1>
            <p className="text-gray-400 text-medium">Discover our exquisite jewelry collections, each piece handcrafted with precision and passion to elevate your style.</p>
            <div className="flex justify-center items-center gap-5">
                <button className="py-2 px-5 border-amber-500 border rounded-md text-black bg-amber-500 hover:cursor-pointer" onClick={()=>handleClick("gold")}
                >Gold Collection</button>
                <button className="py-2 px-5 border-amber-500 border rounded-md text-amber-500 hover:cursor-pointer" onClick={()=>handleClick("whiteGold")}>Silver Collection</button>
                <button className="py-2 px-5 border-amber-500 border rounded-md text-amber-500 hover:cursor-pointer" onClick={()=>handleClick("diamond")}>Diamond Collection</button>
            </div>
        </div>
    )
}