import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';
import Link from 'next/link';
import React from 'react';

const Register = () => {
    return (
        // Background: White to match Login/Home
        <div className="min-h-screen bg-white flex items-center justify-center p-4 font-sans">
            
            {/* Card: White bg, Soft Shadow, Top Border in Brand Blue */}
            <div className="card bg-white w-full max-w-lg shadow-2xl shadow-blue-900/10 border-t-4 border-[#0094F7]">
                <div className="card-body p-8">

                    {/* Header Section */}
                    <div className="text-center mb-6">
                        {/* Heading: Dark Slate + Orange Accent */}
                        <h2 className="text-3xl font-bold text-[#0f172a]">
                            Create <span className="text-orange-500">Account</span>
                        </h2>
                        <p className="text-gray-500 text-sm mt-2 font-medium">
                            Join us to manage your ERP efficiently
                        </p>
                    </div>

                    <RegistrationForm />

                    {/* Footer: Link to Login */}
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-500 font-medium">
                            Already have an account?
                            {/* Link: Brand Blue */}
                            <Link href="/login" className="link link-hover text-[#0094F7] font-bold ml-1">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;