"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    PiLockKeyFill,
    PiShieldWarningFill,
    PiLockKeyOpenBold,
    PiUserCircleFill
} from 'react-icons/pi';

const RestrictedUsers = () => {
    const [restrictedUsers, setRestrictedUsers] = useState([]);
    const token = localStorage.getItem('token');
    useEffect(() => {
        try {
            const fetchData = async () => {
                const res = await axios.get("http://localhost:3000/admin/accounts/locked", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                if (res.data) {
                    setRestrictedUsers(res.data);
                } else {
                    console.log("No data found");
                }
            };
            fetchData();
        } catch {
            console.log("Error")
        }
    }, [token]);
    
    const getRoleBadge = (role) => {
        switch (role) {
            case 'admin': return 'badge-secondary badge-outline';
            case 'pm': return 'badge-accent badge-outline';
            default: return 'badge-ghost badge-outline';
        }
    };

    return (
        <div>
            {/* --- Page Header --- */}
            <div className="mb-8">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                        <PiShieldWarningFill size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-base-content">Restricted Users</h2>
                        <p className="text-base-content/60">Manage locked accounts and security blocks.</p>
                    </div>
                </div>
            </div>

            {/* --- Main Content Card --- */}
            <div className="bg-base-100 rounded-2xl shadow-sm border border-base-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* Head */}
                        <thead className="bg-base-50/50 text-base-content/60 border-b border-base-200">
                            <tr>
                                <th className="py-4 pl-6">User Account</th>
                                <th className="py-4">Role</th>
                                <th className="py-4">Status</th>
                                <th className="py-4 text-right pr-6">Actions</th>
                            </tr>
                        </thead>

                        {/* Body */}
                        <tbody>
                            {restrictedUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-base-50 transition-colors border-b border-base-100 last:border-none">

                                    {/* Column 1: User Info */}
                                    <td className="pl-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar placeholder">
                                                <div className="bg-neutral-focus text-neutral-content rounded-full w-10 h-10 bg-base-200 flex items-center justify-center">
                                                    <PiUserCircleFill className="w-6 h-6 text-base-content/40" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.email}</div>
                                                <div className="text-xs opacity-50">ID: {user.id}</div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Column 2: Role */}
                                    <td className="py-4">
                                        <span className={`badge ${getRoleBadge(user.role)} uppercase text-xs font-bold`}>
                                            {user.role}
                                        </span>
                                    </td>

                                    {/* Column 3: Status */}
                                    <td className="py-4">
                                        <div className="flex items-center gap-2 text-error font-medium bg-red-50 w-fit px-3 py-1 rounded-full text-xs border border-red-100">
                                            <PiLockKeyFill />
                                            Locked
                                        </div>
                                    </td>

                                    {/* Column 4: Action Button */}
                                    <td className="pr-6 py-4 text-right">
                                        <button className="btn btn-sm btn-outline border-base-300 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 gap-2 font-normal transition-all">
                                            <PiLockKeyOpenBold />
                                            Unlock Account
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Empty State Handling */}
                    {restrictedUsers.length === 0 && (
                        <div className="text-center py-12 text-base-content/40">
                            <PiShieldWarningFill className="w-12 h-12 mx-auto mb-2 opacity-20" />
                            <p>No restricted users found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default RestrictedUsers;