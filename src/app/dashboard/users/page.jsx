"use client"
import React, { useState } from 'react';
import { 
    PiPlus, 
    PiTrash, 
    PiGithubLogoFill, 
    PiMapPinFill, 
    PiPhoneFill,
    PiUserCircleFill,
    PiCaretDownBold // Added a custom caret icon for better styling
} from "react-icons/pi";

const UserManagement = () => {
    // 1. DEMO DATA
    const [users, setUsers] = useState([
        { 
            id: 1, 
            fullName: "Zihaul Islam", 
            github: "zihan-code", 
            address: "Dhaka, Bangladesh", 
            phone: "+8801712345678", 
            email: "zihan@nexabyte.com", 
            role: "admin" 
        },
        { 
            id: 2, 
            fullName: "Sarah O'Connor", 
            github: "sarah-dev", 
            address: "New York, USA", 
            phone: "+19876543210", 
            email: "sarah@nexabyte.com", 
            role: "manager" 
        },
        { 
            id: 3, 
            fullName: "David Chen", 
            github: null, 
            address: "Singapore", 
            phone: "+6591234567", 
            email: "david@nexabyte.com", 
            role: "user" 
        },
        { 
            id: 4, 
            fullName: "Ayesha Rahman", 
            github: "ayesha-r", 
            address: "Sylhet, Bangladesh", 
            phone: "+8801998877665", 
            email: "ayesha@nexabyte.com", 
            role: "user" 
        },
    ]);

    const handleRoleChange = (userId, newRole) => {
        const updatedUsers = users.map(user => 
            user.id === userId ? { ...user, role: newRole } : user
        );
        setUsers(updatedUsers);
    };

    // New helper: Returns full Tailwind classes for background and text
    const getRoleStyle = (role) => {
        switch (role?.toLowerCase()) {
            case 'admin': 
                return 'bg-red-100/80 text-red-700 hover:bg-red-200';
            case 'manager': 
                return 'bg-amber-100/80 text-amber-700 hover:bg-amber-200';
            default: 
                return 'bg-slate-100 text-slate-600 hover:bg-slate-200';
        }
    };

    return (
        <div className="space-y-6">
            
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-base-content">User Directory</h2>
                    <p className="text-base-content/60">Manage system access and roles.</p>
                </div>
                <button className="btn bg-blue-600 hover:bg-blue-700 text-white border-none shadow-lg shadow-blue-500/30 gap-2">
                    <PiPlus className="w-5 h-5" />
                    Create User
                </button>
            </div>

            {/* Table */}
            <div className="bg-base-100 rounded-2xl shadow-xl shadow-blue-100/50 border border-base-200 overflow-hidden">
                <div className="overflow-x-auto overflow-y-hidden"> {/* Added overflow-y-hidden to clip dropdown edges cleanly */}
                    <table className="table w-full align-middle">
                        
                        <thead className="bg-base-50/80 text-base-content/60 font-medium uppercase text-xs tracking-wider border-b border-base-200">
                            <tr>
                                <th className="py-4 pl-6">User Details</th>
                                <th>Access Role</th>
                                <th>Contact Info</th>
                                <th>Location</th>
                                <th className="text-right pr-6">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-base-200">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-blue-50/30 transition-colors duration-200 group">
                                    
                                    {/* User Details */}
                                    <td className="pl-6 py-4">
                                        <div>
                                            <div className="font-bold text-base-content text-base">{user.fullName}</div>
                                            <div className="text-sm text-base-content/50">{user.email}</div>
                                            {user.github ? (
                                                <a href={`https://github.com/${user.github}`} className="flex items-center gap-1 text-xs text-blue-600 mt-1 hover:underline w-fit">
                                                    <PiGithubLogoFill /> {user.github}
                                                </a>
                                            ) : (
                                                <span className="flex items-center gap-1 text-xs text-base-content/30 mt-1 italic select-none">
                                                    <PiUserCircleFill /> No Github
                                                </span>
                                            )}
                                        </div>
                                    </td>

                                    {/* --- REDESIGNED ROLE SELECTOR --- */}
                                    <td className="w-40"> {/* Fixed width for stability */}
                                        <div className="relative group/select">
                                            {/* Custom select styling to look like a badge */}
                                            <select 
                                                className={`
                                                    select select-sm w-full max-w-[140px] 
                                                    appearance-none outline-none border-none shadow-sm
                                                    rounded-full font-semibold text-xs tracking-wide cursor-pointer
                                                    pl-4 pr-8 py-0 h-9 min-h-0
                                                    transition-all duration-200 ease-in-out
                                                    focus:ring-2 focus:ring-offset-1 focus:ring-blue-400
                                                    ${getRoleStyle(user.role)}
                                                `}
                                                value={user.role}
                                                onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                            >
                                                <option value="admin">Admin</option>
                                                <option value="manager">Manager</option>
                                                <option value="user">User</option>
                                            </select>
                                            
                                            {/* Custom tiny arrow icon positioned absolutely */}
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-current opacity-60">
                                                <PiCaretDownBold className="w-3 h-3" />
                                            </div>
                                        </div>
                                    </td>
                                    {/* ------------------------------- */}

                                    {/* Contact */}
                                    <td>
                                        <div className="flex items-center gap-2 text-sm text-base-content/70">
                                            <PiPhoneFill className="text-blue-400" />
                                            {user.phone || <span className="text-base-content/30 italic">N/A</span>}
                                        </div>
                                    </td>

                                    {/* Location */}
                                    <td>
                                        <div className="flex items-center gap-2 text-sm text-base-content/70">
                                            <PiMapPinFill className="text-red-400" />
                                            <span className="truncate max-w-[150px]">{user.address || "Unknown"}</span>
                                        </div>
                                    </td>

                                    {/* Actions */}
                                    <td className="text-right pr-6">
                                        <button 
                                            className="btn btn-ghost btn-sm text-red-500 hover:bg-red-50 hover:border-red-200"
                                            title="Remove User"
                                        >
                                            <PiTrash className="w-5 h-5" />
                                            <span className="hidden md:inline text-xs">Remove</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;