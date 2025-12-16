import { useState } from "react";
type DefaultMode = "login" | "registration";

function Input(
    {
        label,
        type = "text",
        placeholder,}:
    {
        label: string;
        type?: string;
        placeholder?: string;}
    ) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-300 text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-sm
                   focus:outline-none focus:border-amber-500 transition"
        required
      />
    </div>
    );
}

export function Contact() {
  const [mode, setMode] = useState<DefaultMode>("registration");
  return (
    <div className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center px-4 py-16">
        <div className="text-center mb-10">
            <h1 className="font-serif font-bold text-amber-500 text-3xl tracking-wider">AURÉA</h1>
            <p className="text-gray-400 mt-2 text-sm">Luxury jewelry for the discerning</p>
        </div>
        <div className="w-full max-w-md bg-[#101727] px-8 py-10 rounded-2xl shadow-2xl shadow-amber-500/10">
            {mode === "registration" && (
          <>
            <h2 className="text-2xl font-serif text-amber-500 mb-8 text-center">Create Account</h2>
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="First Name" placeholder="John" />
                <Input label="Last Name" placeholder="Doe" />
              </div>
              <Input label="Email" type="email" placeholder="your@gmail.com" />
              <Input label="Password" type="password" placeholder="********" />
              <Input label="Confirm Password" type="password" placeholder="********" />
              <button className="mt-6 w-full bg-amber-500 text-black py-2 rounded-full font-semibold hover:bg-amber-400 transition">
                Create Account
              </button>
              <p className="text-gray-500 text-sm text-center mt-4">
                Already have an account?{" "}
                <span
                  onClick={() => setMode("login")}
                  className="text-amber-500 font-semibold cursor-pointer hover:text-amber-400"
                >
                  Sign in
                </span>
              </p>
            </form>
          </>
        )}
        {mode === "login" && (
          <>
            <h2 className="text-2xl font-serif text-amber-500 mb-8 text-center">
              Sign In
            </h2>

            <form className="flex flex-col gap-4">
              <Input label="Email" type="email" placeholder="your@gmail.com" />
              <Input label="Password" type="password" placeholder="********" />

              <span className="text-amber-500 text-sm text-right cursor-pointer hover:text-amber-400">
                Forgot Password?
              </span>

              <button className="mt-4 w-full bg-amber-500 text-black py-2 rounded-full font-semibold hover:bg-amber-400 transition">
                Sign In
              </button>

              <p className="text-gray-500 text-sm text-center mt-4">
                Don’t have an account?{" "}
                <span
                  onClick={() => setMode("registration")}
                  className="text-amber-500 font-semibold cursor-pointer hover:text-amber-400"
                >
                  Sign Up
                </span>
              </p>
            </form>
          </>
        )}
      </div>
      <p className="text-gray-500 text-xs text-center mt-6 max-w-md">
        By signing in or creating an account, you agree to our{" "}
        <span className="text-amber-500 cursor-pointer hover:underline">
          Terms of Service
        </span>{" "}
        and{" "}
        <span className="text-amber-500 cursor-pointer hover:underline">
          Privacy Policy
        </span>
        .
      </p>
    </div>
  );
}


