import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import {Outlet } from "react-router"

export function Container() {
  return (
    <div className=" flex flex-col bg-black text-gray-100">
        <div>
            <Navbar/>
        </div>
        <div>
            <Outlet/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  );
}