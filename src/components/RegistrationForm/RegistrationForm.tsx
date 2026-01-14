"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const RegistrationForm = () => {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [github, setGithub] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const handleRegistration = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await axios.post("http://localhost:3000/admin/create/user", {
                fullName,
                github,
                address,
                phone,
                email,
                password,
                role: "dev",
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            });

            console.log("RES:", res.data);

            if (res.data?.success || res.status === 201) {
                Swal.fire({
                title: "Success!",
                text: "User created successfully!",
                icon: "success",
                confirmButtonColor: "#0094F7",
                confirmButtonText: "Okay"
            }).then((result) => {
                if (result.isConfirmed) {
                   router.push("users")
                }
            });
            } else {
                setError(res.data?.message || "User creation failed.");
            }
        } catch (err) {
            console.log("ERR:", err?.response?.data || err);
            setError(err.response?.data?.message || err.message || "Something went wrong.");
            Swal.fire({
            title: "Error!",
            text: err.response?.data?.message || "Something went wrong.",
            icon: "error"
        });
        }
    };

    const inputClass = "input input-bordered w-full bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0094F7] focus:ring-1 focus:ring-[#0094F7] transition-all duration-200";
    const labelClass = "label-text font-semibold text-[#0f172a]";

    return (
        <div>
            <form onSubmit={handleRegistration} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className={labelClass}>Full Name</span>
                        </label>
                        <input
                            onChange={e => setFullName(e.target.value)}
                            type="text"
                            placeholder="John Doe"
                            className={inputClass}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className={labelClass}>Phone</span>
                        </label>
                        <input
                            onChange={e => setPhone(e.target.value)}
                            type="tel"
                            placeholder="01712345678"
                            className={inputClass}
                        />
                    </div>
                </div>

                {/* Email Input */}
                <div className="form-control">
                    <label className="label">
                        <span className={labelClass}>Email</span>
                    </label>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        placeholder="name@company.com"
                        className={inputClass}
                    />
                </div>

                {/* Address Input */}
                <div className="form-control">
                    <label className="label">
                        <span className={labelClass}>Address</span>
                    </label>
                    <input
                        onChange={e => setAddress(e.target.value)}
                        type="text"
                        placeholder="Dhaka, Bangladesh"
                        className={inputClass}
                    />
                </div>

                {/* Github Input */}
                <div className="form-control">
                    <label className="label">
                        <span className={labelClass}>GitHub Profile</span>
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </span>
                        <input
                            onChange={e => setGithub(e.target.value)}
                            type="text"
                            placeholder="github.com/username"
                            className={`${inputClass} pl-10`}
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div className="form-control">
                    <label className="label">
                        <span className={labelClass}>Password</span>
                    </label>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder="••••••••"
                        className={inputClass}
                    />
                </div>

                {/* Register Button */}
                <div className="form-control mt-6">
                    {/* Button: Brand Blue Background */}
                    <button type='submit' className="btn bg-[#0094F7] hover:bg-blue-600 text-white border-none text-lg shadow-md w-full font-bold">
                        Register
                    </button>
                </div>
                {error && (
                    <p className="text-red-500 text-sm font-medium text-center mt-2">{error}</p>
                )}
            </form>
        </div>
    );
};

export default RegistrationForm;