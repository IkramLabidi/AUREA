import { MdOutlineMail, MdEdit } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { useState } from "react";

export function ProfilePage() {
  const [name, setName] = useState("Arianna Genovese");
  const [email, setEmail] = useState("AriannaGenovese05@gmail.com");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("Milan, Italy");

  const handleEditProfile = () => {
    setName(prompt("Enter your name:") || name);
    setEmail(prompt("Enter your email:") || email);
    setPhone(prompt("Enter your phone number:") || phone);
    setLocation(prompt("Enter your location:") || location);
  };

  return (
    <div className="min-h-screen flex flex-col items-center gap-8 sm:gap-10 px-4 sm:px-6 md:px-10 py-8 sm:py-10 bg-black">
      
      <div className="w-full max-w-4xl border border-gray-500 rounded-xl p-5 sm:p-6 md:p-10 font-serif relative">
        
        <MdEdit
          size={24}
          onClick={handleEditProfile}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 
                     text-amber-600 cursor-pointer hover:text-amber-400 transition"
        />

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
          
          <img
            src="https://i.pinimg.com/736x/3c/63/1b/3c631b97815217aaa9716d368feb990a.jpg"
            alt="profile"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 
                       rounded-full object-cover shadow-2xl shadow-amber-500"
          />

          <div className="flex flex-col gap-4 w-full text-gray-300">
            
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent text-xl sm:text-2xl text-amber-500 
                         outline-none border-b border-gray-600 pb-1"
            />

            <div className="flex items-center gap-3">
              <MdOutlineMail className="text-amber-600 shrink-0" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent w-full outline-none border-b border-gray-600 pb-1 text-sm sm:text-base"
              />
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-amber-600 shrink-0" size={16} />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-transparent w-full outline-none border-b border-gray-600 pb-1 text-sm sm:text-base"
              />
            </div>

            <div className="flex items-center gap-3">
              <GiPositionMarker className="text-amber-600 shrink-0" size={18} />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent w-full outline-none border-b border-gray-600 pb-1 text-sm sm:text-base"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-400 font-serif text-center max-w-3xl text-sm sm:text-base leading-relaxed px-2">Welcome to your personal space. Here, you can view and update your profile
        information to keep your account always up to date. Your contact details
        allow us to reach you easily and provide you with a better experience during
        your orders and interactions on the site.</p>
    </div>
  );
}
