"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { 
    PiUser, 
    PiGithubLogo, 
    PiMapPin, 
    PiPhone, 
    PiEnvelope, 
    PiLockKey,
    PiSpinnerGap,
    PiUserPlus,
    PiBriefcase // Added for Role icon
} from "react-icons/pi";
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';

const CreateUserForm = ({ onSuccess, onCancel }) => {
    // Using a single object for state to keep the form clean, 
    // but mapping it exactly to your backend payload requirements.
    const [formData, setFormData] = useState({
        fullName: '',
        github: '',
        address: '',
        phone: '',
        email: '',
        password: '',
        role: 'dev' // Defaulting to 'dev' as per your snippet
    });
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // --- YOUR LOGIC HERE ---
    const handleRegistration = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            // Using your exact endpoint and payload structure
            const res = await axios.post("http://localhost:3000/admin/create/user", {
                fullName: formData.fullName,
                github: formData.github,
                address: formData.address,
                phone: formData.phone,
                email: formData.email,
                password: formData.password,
                role: formData.role, 
            }, {
                headers: { "Content-Type": "application/json" }
            });

            console.log("RES:", res.data);

            if (res.data?.success || res.status === 201) {
                // Success Action: Close modal and refresh parent
                onSuccess(res.data); 
                // Reset form
                setFormData({ fullName: '', github: '', address: '', phone: '', email: '', password: '', role: 'dev' });
            } else {
                setError(res.data?.message || "User creation failed.");
            }
        } catch (err) {
            console.log("ERR:", err?.response?.data || err);
            setError(err.response?.data?.message || err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    // --- STYLING FIX ---
    // Added 'text-gray-900' to ensure text is dark and visible.
    const inputWrapperClass = "relative group";
    const inputClass = "input input-bordered w-full pl-10 bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all duration-200";
    const iconClass = "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors w-5 h-5";
    const labelClass = "label-text font-semibold text-xs uppercase tracking-wide text-gray-500 mb-1 block ml-1";

    return (
        <div className="w-full">
            
            {/* --- Heading Section --- */}
            <div className="flex items-start gap-4 mb-6 pb-4 border-b border-gray-200">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shadow-sm">
                    <PiUserPlus className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Create User Account</h2>
                    <p className="text-sm text-gray-500 mt-1">Enter the necessary details to register a new system user.</p>
                </div>
            </div>

            <RegistrationForm/>
        </div>
    );
};

export default CreateUserForm;