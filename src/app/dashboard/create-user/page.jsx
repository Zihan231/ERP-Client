import React from 'react';
import {
    PiUserPlus,
} from "react-icons/pi";
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';
import { HashLoader } from 'react-spinners';

const CreateUserForm = () => {

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
            <RegistrationForm />
        </div>
    );
};

export default CreateUserForm;