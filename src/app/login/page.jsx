"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const router = useRouter();
    const handleLogin = (e) => {
        e.preventDefault();
        if (email == "admin@admin.com" && pass == "admin123") {
            router.push('/dashboard');
        } else {
            alert("Wrong Credentials")
        }
    }
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

                    <form className="space-y-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-base-content/70">Email</span>
                            </label>
                            <input 
                                onChange={(e)=>setEmail(e.target.value)}
                                type="email" 
                                placeholder="name@company.com" 
                                className="input input-bordered w-full bg-blue-50/30 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200" 
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-base-content/70">Password</span>
                            </label>
                            <input 
                                onChange={(e)=>setPass(e.target.value)}
                                type="password" 
                                placeholder="••••••••" 
                                className="input input-bordered w-full bg-blue-50/30  focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200" 
                            />
                            <label className="label mt-1">
                                <a href="#" className="label-text-alt link link-hover text-blue-600 font-medium">
                                    Forgot password?
                                </a>
                            </label>
                        </div>

                        <div className="form-control mt-8">
                            <button onClick={handleLogin} className="btn bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none text-lg shadow-lg shadow-blue-500/30 w-full">
                                Login
                            </button>
                        </div>
                    </form>
                    {/* Footer: Link to Login */}
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