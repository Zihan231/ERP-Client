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
            router.push("/dashboard");
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Login failed.");
        }
    };
    return (
        <div>
            <form onSubmit={handleLogin} className="space-y-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-base-content/70">
                            Email
                        </span>
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="name@company.com"
                        className="input input-bordered w-full bg-blue-50/30 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-base-content/70">
                            Password
                        </span>
                    </label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="••••••••"
                        className="input input-bordered w-full bg-blue-50/30 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200"
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
                    <button
                        type="submit"
                        className="btn bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none text-lg shadow-lg shadow-blue-500/30 w-full"
                    >
                        Login
                    </button>
                </div>
            </form>

            
        </div>
    );
};

export default LoginForm;