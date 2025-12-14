import { useState } from "react";
type DefaultMode =  "login" |"registration" ;

export function Contact(){
    const [mode , setMode] = useState<DefaultMode>("registration");

    return (
        <div className="h-200 bg-[#0d0d0d] flex flex-col items-center justify-center px-4 py-12">
            <div className="text-center mb-10">
                <h1 className="font-serif font-bold text-amber-500 text-3xl tracking-winder">AURÉA</h1>
                <p className="text-gray-400 mt-2">Luxury jewelry for the discerning</p>
            </div>
            <div className="w-max h-max bg-[#101727] px-10 py-5 rounded-md shadow-amber-500/10 shadow-2xl">
                {mode === "registration" &&(
                    <div>
                        <h2 className="text-2xl font-serif text-amber-500 mb-6 text-center">Create Account</h2>
                        <form>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="flex flex-col justify-start gap-3">
                                    <label className="block text-gray-300 text-sm font-medium text-start" htmlFor="firstName">First Name</label>
                                    <input 
                                        className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3" 
                                        id="firstName"
                                        type="text" 
                                        placeholder="John" 
                                        required/>
                                </div>
                                <div className="flex flex-col justify-start gap-3">
                                    <label className="block text-gray-300 text-sm font-medium text-start " htmlFor="lastName">Last Name</label>
                                    <input 
                                        className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3" 
                                        id="lastName"
                                        type="text" 
                                        placeholder="Doe" 
                                        required/>
                                </div>
                            </div>
                            <div className="mt-2 flex flex-col gap-2">
                                <label className=" text-gray-300 text-sm font-medium text-start " htmlFor="email">Email</label>
                                <input 
                                        className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3" 
                                        id="email"
                                        type="email" 
                                        placeholder="your@gmail.com" 
                                        required/>
                            </div>
                            <div className="mt-2 flex flex-col gap-2">
                                <label className="block text-gray-300 text-sm font-medium text-start" htmlFor="password">Password</label>
                                <input 
                                        className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3" 
                                        id="lastName"
                                        type="password" 
                                        placeholder="*********" 
                                        required/>
                            </div>
                            <div className="mt-2 flex flex-col gap-2">
                                <label className="block text-gray-300 text-sm font-medium text-start " htmlFor="password">Confirm Password</label>
                                <input 
                                        className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3" 
                                        id="lastName"
                                        type="password" 
                                        placeholder="*********" 
                                        required/>
                            </div>
                            <button className="mt-10 py-2 px-40 bg-amber-500 rounded-md  text-black font-bold hover:cursor-pointer">Create Account</button>
                            <p className="mt-4 text-gray-500">Already have an account? <span className="text-amber-600 font-bold hover:cursor-pointer"
                            onClick={()=>setMode("login")}
                            >Sign in</span></p>
                        </form>
                    </div>
                )}
                {mode === "login" &&(
                   <div>
                     <h2 className="text-2xl font-serif text-amber-500 mb-6 text-center ">Sign In</h2>
                     <form className="gap-3 flex flex-col">
                        <div className="flex flex-col gap-2 mt-15">
                            <label className=" text-gray-300 text-sm font-medium text-start" htmlFor="email">Email</label>
                            <input 
                                className="w-100 bg-gray-800 border border-gray-700 rounded-md py-2 px-3 " 
                                id="email"
                                type="email" 
                                placeholder="your@gmail.com" required/>
                        </div>
                        <div className="mt-2 flex flex-col gap-2">
                            <label className=" text-gray-300 text-sm font-medium text-start " htmlFor="password">Password</label>
                            <input 
                                className="w-100 bg-gray-800 border border-gray-700 rounded-md py-2 px-3" 
                                id="lastName"
                                type="password" 
                                placeholder="*********" required/>
                            <span className="text-amber-500 text-end hover:cursor-pointer hover:text-amber-400">Forgot Password?</span>
                        </div>
                        <button className="bg-amber-500 py-2 px-43 rounded-md mt-5 text-black font-bold hover: cursor-pointer">Sign In</button>
                        <div className="mt-3 text-gray-400 ">Don't have an account ?
                             <span
                             className="text-amber-500 hover: cursor-pointer font-bold"
                             onClick={()=>setMode("registration")}>  Sign Up</span></div>
                     </form>
                   </div> 
                )}
            </div>
            <p className="text-gray-500 mt-5 w-130">By signing in or creating an account, you agree to our <span className="text-amber-600 hover:cursor-pointer">Terms of Service</span> and <span className="text-amber-600 hover:cursor-pointer">Privacy</span></p>
        </div>
    )
}