import React, { useContext } from "react";
import Link from "next/link";
import {
    PiSquaresFourFill,
    PiUsersThreeFill,
    PiShieldWarningFill,
    PiScrollFill,
    PiEnvelopeSimpleFill,
    PiUserCircleFill,
    PiUserMinusFill,
} from "react-icons/pi";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
const Sidebar = () => {
    const menuItems = [
        { name: "Overview", icon: <PiSquaresFourFill className="w-5 h-5" />, path: "/dashboard" },
        { name: "User Management", icon: <PiUsersThreeFill className="w-5 h-5" />, path: "/dashboard/users" },
        { name: "Restricted Users", icon: <PiUserMinusFill className="w-5 h-5" />, path: "/dashboard/restricted" },
        { name: "Activity Logs", icon: <PiScrollFill className="w-5 h-5" />, path: "/dashboard/logs" },
        { name: "Communication", icon: <PiEnvelopeSimpleFill className="w-5 h-5" />, path: "/dashboard/email" },
        { name: "User Profile", icon: <PiUserCircleFill className="w-5 h-5" />, path: "/dashboard/profile" },
    ];

    return (
        <aside className="w-64 bg-base-100 shadow-xl shadow-blue-200/50 flex flex-col justify-between border-r border-base-200 z-10 h-full fixed left-0 top-0">

            {/* Branding */}
            <Link href='/'>
                <div className="flex justify-around items-center p-6 border-b border-base-200">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20 0C25.3043 4.00466e-07 30.3919 2.10669 34.1426 5.85742C34.8157 6.53058 35.4354 7.24719 36 8H20C16.8174 8 13.7651 9.26421 11.5146 11.5146C9.26421 13.7651 8 16.8174 8 20H20L36.9102 9.31934C38.1656 11.3074 39.0611 13.5027 39.5547 15.8027L32 20H40L39.9941 20.4971C39.8669 25.6213 37.776 30.5092 34.1426 34.1426C30.3919 37.8933 25.3043 40 20 40C14.6957 40 9.60815 37.8933 5.85742 34.1426C5.18426 33.4694 4.56459 32.7528 4 32H20C23.1826 32 26.2349 30.7358 28.4854 28.4854C30.5952 26.3755 31.8383 23.5608 31.9854 20.5947L32 20H20L3.08984 30.6787C1.83452 28.6906 0.941002 26.4951 0.447266 24.1953L8 20H0C8.00931e-07 14.6957 2.1067 9.60815 5.85742 5.85742C9.60815 2.1067 14.6957 -5.79361e-10 20 0Z"
                            fill="#0094F7"
                        />
                    </svg>
                    <h1 className="text-2xl font-extrabold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Nexa<span className="text-base-content/80 text-lg">Byte</span>
                    </h1>
                </div>
            </Link>

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
            <LogOutBtn></LogOutBtn>
        </aside>
    );
};

export default Sidebar;