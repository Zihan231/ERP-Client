import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <div className="sticky top-0 z-50">
            <div className="navbar bg-base-100/80 backdrop-blur-md border-b border-base-200 px-4 md:px-8">
                
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-base-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-lg border border-base-200">
                            <li><a className="font-medium">About</a></li>
                            <li><a className="font-medium">Contact</a></li>
                        </ul>
                    </div>
                    
                    {/* Brand Logo: Added gradient text and bolder font */}
                    <a className="btn btn-ghost text-xl font-bold tracking-tight">
                        <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            ERP
                        </span>
                        <span className="text-base-content">Manager</span>
                    </a>
                </div>

                {/* --- Center (Desktop Menu) --- */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li><a className="font-medium text-base-content/80 hover:text-blue-600 transition-colors">About</a></li>
                        <li><a className="font-medium text-base-content/80 hover:text-blue-600 transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div className="navbar-end gap-2">
                    <Link href={'/login'} className="btn btn-ghost text-base-content/80 hover:text-blue-600 font-medium">
                        Login
                    </Link>
                    
                    <Link href={'/register'} className="btn bg-blue-600 hover:bg-blue-700 text-white border-none shadow-md shadow-blue-500/20 rounded-lg px-6">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;