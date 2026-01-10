import LoginForm from "@/components/LoginForm/LoginForm";
import React from "react";
import Link from 'next/link';

const Login = () => {
  return (
    // Changed background to white to match Home page
    <div className="min-h-screen flex items-center justify-center p-4 bg-white font-sans">
      
      {/* Card Container */}
      {/* - bg-white: Clean card background
          - shadow-2xl: Soft, modern shadow
          - border-t-4 border-[#0094F7]: Matches the Brand Logo color
      */}
      <div className="card bg-white w-full max-w-md shadow-2xl shadow-blue-900/10 border-t-4 border-[#0094F7]">
        <div className="card-body p-8">
          
          <div className="text-center mb-8">
            {/* Heading Style: Matches "Welcome to ERP SOLUTION" from Home Page */}
            <h2 className="text-3xl font-bold text-[#0f172a]">
              Welcome <span className="text-orange-500">Back</span>
            </h2>
            
            <p className="text-gray-500 text-sm mt-3 font-medium">
              Enter your credentials to access your account
            </p>
          </div>

          {/* Login form SSR */}
          <LoginForm/>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 font-medium">
              Don&apos;t have an account?
              {/* Link Color: Matches Brand Logo Blue */}
              <Link href="/register" className="link link-hover text-[#0094F7] font-bold ml-1">
                Register
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;