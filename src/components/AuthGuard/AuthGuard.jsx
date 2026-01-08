"use client"
import AuthContext from '@/context/AuthContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';

const AuthGuard = ({ children }) => {

    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const { user, setUser, isLoading, setIsLoading} = useContext(AuthContext);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login")
        } else {
            setLoading(false);
        }
    }, [router]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchData = async () => {
            const userdata = await axios.get("http://localhost:3000/admin/profile",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            if (userdata.data) {
                setUser(userdata.data);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [setUser, setIsLoading]);
    console.log(user);

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