"use client";
import React from 'react';
import Link from "next/link";
import { 
  PiSignOutBold           // Logout
} from "react-icons/pi";
import { useRouter } from 'next/navigation';

const LogOutBtn = () => {
    const router = useRouter();
    const handleLogOut = () => {
        localStorage.removeItem("token");
        router.push("/login");
    }
    return (
        <div>
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