"use client"
import AuthContext from '@/context/AuthContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';

const AuthGuard = ({ children }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const { setUser } = useContext(AuthContext);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                router.replace("/login");
                return;
            }

            try {
                const response = await axios.get("http://localhost:3000/admin/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.data) {
                    setUser(response.data);
                }
            } catch (error) {
                console.error("Auth verification failed:", error);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, [router, setUser]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-blue-50/30">
                <span className="loading loading-spinner loading-lg text-blue-600"></span>
            </div>
        );
    }

    return <>
        {children}
    </>;
};

export default AuthGuard;