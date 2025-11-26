import { MdOutlineMail , MdEdit} from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { useState } from "react";

export function ProfilePage(){
    const [name,setName]=useState("Arianna Genovese");
    const [email, setEmail]=useState("AriannaGenovese05@gmail.com");
    const [phone, setPhone]=useState(55098161);;
    const [location, setLocation]=useState("Milan, Italy");
    
    const handleEditProfile=()=>{
        const newName=prompt("Enter your name:") || name;
        const newEmail=prompt("Enter your email:") || email;
        const newPhone=prompt("Enter your phone number:") || phone;
        const newLocation=prompt("Enter your location:") || location;
        
        setName(newName);
        setEmail(newEmail);
        setPhone(newPhone);
        setLocation(newLocation);
    }   
    
    return(
        <div className="h-150 flex flex-col justify-center items-center gap-10 p-10">
            <div className=" flex justify-center gap-20 font-serif">
            <div className="flex justify-evenly items-start mt-20 gap-10 border-2 border-gray-500 w-250 h-70 p-10 rounded-lg">
                <div className="flex justify-center items-center gap-15">
                    <img src="https://i.pinimg.com/736x/3c/63/1b/3c631b97815217aaa9716d368feb990a.jpg" alt="placeholder" className="w-40 h-40 rounded-full object-cover mb-6 shadow-2xl shadow-amber-500"/>
                    <div className="flex flex-col gap-4 text-start">
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="text-2xl text-amber-600"/>
                        <div>
                            <MdOutlineMail size={20} className="inline-block mr-2 text-amber-600"/>
                            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="w-100" />    
                        </div>
                        <div>
                            <FaPhoneAlt size={18} className="inline-block mr-2 text-amber-600"/>
                            <input type="number" value={phone} onChange={(e)=> { 
                                const num= Number(e.target.value);
                                if (!isNaN(num)) setPhone(num)}} className="w-100" />
                        </div>
                        <div>
                            <GiPositionMarker size={20} className="inline-block mr-2 text-amber-600"/>
                            <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)} className="w-100" />
                        </div>
                    </div>
                </div>
                <MdEdit className="inline-block mr-2 text-amber-600 hover:cursor-pointer" size={25}
                onClick={()=>{handleEditProfile()}}
                />
            </div>
        </div>
        <span className="text-gray-400 font-serif text-center">Bienvenue dans votre espace personnel. Ici, vous pouvez consulter et mettre à jour vos informations de profil afin de garder votre compte toujours à jour. Vos coordonnées nous permettent de vous contacter facilement et de vous offrir une meilleure expérience lors de vos commandes et interactions sur le site."</span>
        </div>
        
    )
}