"use client"; // <--- Essential for animations in Next.js
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../../Assets/work team.json"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col items-center pt-10 md:pt-16">
      
      <main className="text-center px-4 max-w-6xl w-full">
        
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0f172a] mb-6">
          Welcome to <span className="text-orange-500">ERP SOLUTION</span>
        </h1>
        
        {/* Description */}
        <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
          Streamline your business operations, manage resources efficiently, and gain 
          real-time insights — all from one powerful platform.
        </p>
        
        {/* Illustration Area */}
        <div className="flex justify-center w-full">
          <div className="w-full max-w-3xl">
            {/* The Lottie Player renders the JSON file */}
            <Lottie 
              animationData={animationData} 
              loop={true} 
              className="w-full h-auto"
            />
          </div>
        </div>

      </main>
    </div>
  );
}