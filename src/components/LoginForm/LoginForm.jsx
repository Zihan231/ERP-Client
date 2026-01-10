"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    // Login handler
    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await axios.post("http://localhost:3000/admin/login", {
                email,
                password,
            });

            const token = res.data?.token;
            if (!token) {
                setError(res.data?.message || "Login failed (no token).");
                return;
            }

            localStorage.setItem("token", token);
            document.cookie = `token=${token}; path=/; max-age=86400; SameSite=Strict`;
            router.push("/dashboard");
            router.refresh();
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Login failed.");
        }
    };
    return (
        <div>
            <form onSubmit={handleLogin} className="space-y-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#0f172a] font-semibold">
                            Email
                        </span>
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="name@company.com"
                        className="input input-bordered w-full bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#0094F7] focus:ring-[#0094F7]"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#0f172a] font-semibold">
                            Password
                        </span>
                    </label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="••••••••"
                        className="input input-bordered w-full bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#0094F7] focus:ring-[#0094F7]"
                    />
                    <label className="label mt-1">
                        <a href="#" className="label-text-alt link link-hover text-blue-600 font-medium">
                            Forgot password?
                        </a>
                    </label>
                </div>

                {/* show error */}
                {error && <p className="text-red-500 text-sm">{error}</p>}

                <div className="form-control mt-8">
                    {/*  submit button */}
                    <button className="btn w-full bg-[#0094F7] hover:bg-blue-600 text-white border-none font-bold">
                        Login
                    </button>
                </div>
            </form>


        </div>
    );
};

export default LoginForm;