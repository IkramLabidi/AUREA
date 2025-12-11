import { FaFacebook, FaTwitter , FaInstagram } from "react-icons/fa";

export function Footer(){
    return (
      <footer className="bg-black text-gray-400 py-5  border-t border-amber-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-xl font-serif font-bold text-amber-400 mb-6">AURÉA</h3>
              <p className="mb-6 text-gray-400">Exquisite jewelry crafted with passion and precision. Elevate your style with our timeless pieces.</p>
              <div className="flex space-x-5 items-center">
                <a href="#" className="text-amber-400 hover:text-amber-400 transition-all duration-300">
                  <FaFacebook size={25}/>
                </a>
                <a href="#" className="text-amber-400 hover:text-amber-400 transition-all duration-300">
                  <FaInstagram size={25}/>
                </a>
                <a href="#" className="text-amber-400 hover:text-amber-400 transition-all duration-300">
                  <FaTwitter size={25}/>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-amber-400 font-medium mb-6">Shop</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-300">All Collections</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-300">Gold Jewelry</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-300">Silver Jewelry</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-300">Diamond Jewelry</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-300">New Arrivals</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-300">Special Offers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-amber-400 font-medium mb-6">About</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-300">Our Story</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-300">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-300">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-amber-400 font-medium mb-6">Customer Service</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-300">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-300">Shipping & Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-300">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-400 text-sm">© 2025 AURÉA. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-amber-400 hover:text-amber-400 transition-all duration-300 text-sm">Terms of Service</a>
              <a href="#" className="text-amber-400 hover:text-amber-400 transition-all duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-amber-400 hover:text-amber-400 transition-all duration-300 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
    </footer>
    )
}