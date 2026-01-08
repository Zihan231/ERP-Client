import LoginForm from "@/components/LoginForm/LoginForm";
import React from "react";
import Link from 'next/link';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card bg-base-100 w-full max-w-md shadow-lg shadow-blue-400 border-t-4 border-blue-600">
        <div className="card-body p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <p className="text-base-content/60 text-sm mt-3 font-medium">
              Enter your credentials to access your account
            </p>
          </div>
          {/*  Login form SSR */}
          <LoginForm/>
          <div className="text-center mt-4">
                <p className="text-sm text-base-content/70 font-medium">
                    Don&apos;t have an account?
                    <Link href="/register" className="link link-hover text-blue-600 font-bold ml-1">
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
