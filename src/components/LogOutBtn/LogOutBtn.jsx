"use client";
import React, { useContext } from 'react';
import Link from "next/link";
import {
    PiSignOutBold           // Logout
} from "react-icons/pi";
import { useRouter } from 'next/navigation';
import AuthContext from '@/context/AuthContext';

const LogOutBtn = () => {
    const { user } = useContext(AuthContext);
    // console.log("Logged in user:", user);
    const router = useRouter();
    const handleLogOut = () => {
        localStorage.removeItem("token");
        router.push("/login");
    }
    return (
        <div className="p-4 border-t border-base-200 bg-base-50/50">
            <div className="flex items-center gap-3 mb-4 px-2">
                <div className="avatar placeholder">
                    <div className="bg-red-100 text-red-600 rounded-full w-10 flex items-center justify-center">
                        <span className="text-sm font-bold">SU</span>
                    </div>
                </div>
                <div className="overflow-hidden">
                    <p className="text-sm font-bold text-base-content">{ user ? user?.fullName : "Unknown User" }</p>
                    <p className="text-xs text-base-content/50 truncate">{ user? user?.login?.email : "No email found" }</p>
                </div>
            </div>
            <Link
                onClick={handleLogOut}
                href="/login"
                className="btn btn-outline btn-error btn-sm w-full flex items-center gap-2 decoration-transparent hover:text-white!"
            >
                <PiSignOutBold className="w-4 h-4" />
                Logout
            </Link>
        </div>
    );
};

export default LogOutBtn;