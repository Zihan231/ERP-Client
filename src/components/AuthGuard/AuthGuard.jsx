"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const AuthGuard = ({ children }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login")
        } else {
            setLoading(false);
        }
    }, [router]);
    if (loading) {
        <div className="flex items-center justify-center h-screen bg-blue-50/30">
        <span className="loading loading-spinner loading-lg text-blue-600"></span>
      </div>
    }
    return (
        <>
            {children}
        </>
    );
};

export default AuthGuard;