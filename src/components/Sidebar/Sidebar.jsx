import React from "react";
import Link from "next/link";

// Importing icons from 'react-icons/pi'
import {
    PiSquaresFourFill,      // Overview
    PiUsersThreeFill,       // User Management (All users, Create, Delete, Roles)
    PiShieldWarningFill,    // Security (Settings, Lock/Unlock, Locked Accounts)
    PiScrollFill,           // Activity Log
    PiEnvelopeSimpleFill,   // Send Mail
} from "react-icons/pi";
import LogOutBtn from "../LogOutBtn/LogOutBtn";

const Sidebar = () => {



    const menuItems = [
        { name: "Overview", icon: <PiSquaresFourFill className="w-5 h-5" />, path: "/dashboard" },
        { name: "User Management", icon: <PiUsersThreeFill className="w-5 h-5" />, path: "/dashboard/users" },
        { name: "Security Control", icon: <PiShieldWarningFill className="w-5 h-5" />, path: "/dashboard/security" },
        { name: "Activity Logs", icon: <PiScrollFill className="w-5 h-5" />, path: "/dashboard/logs" },
        { name: "Communication", icon: <PiEnvelopeSimpleFill className="w-5 h-5" />, path: "/dashboard/email" },
    ];

    return (
        <aside className="w-64 bg-base-100 shadow-xl shadow-blue-200/50 flex flex-col justify-between border-r border-base-200 z-10 h-full fixed left-0 top-0">

            {/* Branding */}
            <div className="p-6 border-b border-base-200">
                <h1 className="text-2xl font-extrabold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    ERP<span className="text-base-content/80 text-lg">Admin</span>
                </h1>
            </div>

            {/* Menu Options */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                <p className="px-4 text-xs font-semibold text-base-content/40 uppercase tracking-wider mb-2">
                    Administration
                </p>
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.path}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-base-content/70 hover:bg-blue-50 hover:text-blue-600 group"
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>

            {/* User & Logout */}
            <div className="p-4 border-t border-base-200 bg-base-50/50">
                <div className="flex items-center gap-3 mb-4 px-2">
                    <div className="avatar placeholder">
                        <div className="bg-red-100 text-red-600 rounded-full w-10 flex items-center justify-center">
                            <span className="text-sm font-bold">SU</span>
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-bold text-base-content">Super User</p>
                        <p className="text-xs text-base-content/50 truncate">root@nexus.com</p>
                    </div>
                </div>

                <LogOutBtn></LogOutBtn>

            </div>
        </aside>
    );
};

export default Sidebar;