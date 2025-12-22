import Link from 'next/link';
import React from 'react';

const Register = () => {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
            
            <div className="card bg-base-100 w-full max-w-lg shadow-lg shadow-blue-400 border-t-4 border-blue-600">
                <div className="card-body p-8">
                    
                    {/* Header Section */}
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Create Account
                        </h2>
                        <p className="text-base-content/60 text-sm mt-2 font-medium">
                            Join us to manage your ERP efficiently
                        </p>
                    </div>

                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base-content/70">Full Name</span>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="John Doe" 
                                    className="input input-bordered w-full bg-blue-50/30 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200" 
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base-content/70">Phone</span>
                                </label>
                                <input 
                                    type="tel" 
                                    placeholder="01712345678" 
                                    className="input input-bordered w-full bg-blue-50/30 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200" 
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-base-content/70">Email</span>
                            </label>
                            <input 
                                type="email" 
                                placeholder="name@company.com" 
                                className="input input-bordered w-full bg-blue-50/30 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200" 
                            />
                        </div>

                        {/* Address Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-base-content/70">Address</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Dhaka, Bangladesh" 
                                className="input input-bordered w-full bg-blue-50/30 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200" 
                            />
                        </div>

                        {/* Github Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-base-content/70">GitHub Profile</span>
                            </label>
                            <div className="relative">
                                {/* Optional: GitHub Icon inside input */}
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/40">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                </span>
                                <input 
                                    type="text" 
                                    placeholder="github.com/username" 
                                    className="input input-bordered w-full pl-10 bg-blue-50/30 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200" 
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-base-content/70">Password</span>
                            </label>
                            <input 
                                type="password" 
                                placeholder="••••••••" 
                                className="input input-bordered w-full bg-blue-50/30 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200" 
                            />
                        </div>

                        {/* Register Button */}
                        <div className="form-control mt-6">
                            <button className="btn bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none text-lg shadow-lg shadow-blue-500/30 w-full">
                                Register
                            </button>
                        </div>
                    </form>

                    {/* Footer: Link to Login */}
                    <div className="text-center mt-4">
                        <p className="text-sm text-base-content/70 font-medium">
                            Already have an account? 
                            <Link href="/login" className="link link-hover text-blue-600 font-bold ml-1">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;