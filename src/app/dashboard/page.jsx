import React from "react";
import { PiShieldCheckFill, PiUserPlusFill, PiEnvelopeSimpleOpenFill } from "react-icons/pi";

const Dashboard = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-base-content">System Overview</h2>
                    <p className="text-base-content/60">Manage users, security protocols, and system access.</p>
                </div>
                <div className="flex gap-3">
                    {/* Quick Actions */}
                    <button className="btn bg-base-100 border border-base-300 shadow-sm hover:bg-base-50 gap-2">
                        <PiEnvelopeSimpleOpenFill className="w-4 h-4" />
                        Send Email
                    </button>
                    <button className="btn bg-blue-600 hover:bg-blue-700 text-white border-none shadow-lg shadow-blue-500/30 gap-2">
                        <PiUserPlusFill className="w-4 h-4" />
                        Create User
                    </button>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Stat Card 1: Total Users */}
                <div className="card bg-base-100 shadow-lg shadow-blue-100 border-t-4 border-blue-600">
                    <div className="card-body">
                        <h3 className="text-base-content/60 font-medium">Total Users</h3>
                        <div className="flex items-end gap-2">
                            <p className="text-4xl font-bold text-blue-600">142</p>
                            <span className="text-sm text-base-content/40 mb-1 font-medium">Active Accounts</span>
                        </div>
                    </div>
                </div>

                {/* Stat Card 2: Security Status */}
                <div className="card bg-base-100 shadow-lg shadow-red-100 border-t-4 border-red-500">
                    <div className="card-body">
                        <h3 className="text-base-content/60 font-medium">Locked Accounts</h3>
                        <div className="flex items-end gap-2">
                            <p className="text-4xl font-bold text-red-500">3</p>
                            <span className="text-sm text-red-400 mb-1 font-medium bg-red-50 px-2 py-0.5 rounded-md">Action Required</span>
                        </div>
                    </div>
                </div>

                {/* Stat Card 3: System Health */}
                <div className="card bg-base-100 shadow-lg shadow-emerald-100 border-t-4 border-emerald-500">
                    <div className="card-body">
                        <h3 className="text-base-content/60 font-medium">Security Level</h3>
                        <div className="flex items-center gap-2 mt-1">
                            <PiShieldCheckFill className="w-8 h-8 text-emerald-500" />
                            <p className="text-2xl font-bold text-emerald-600">Optimal</p>
                        </div>
                        <p className="text-xs text-base-content/50 mt-1">Last scan: 2 mins ago</p>
                    </div>
                </div>

            </div>

            {/* Recent Admin Activity Table */}
            <div className="mt-8 bg-base-100 rounded-2xl shadow-sm border border-base-200 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold">Recent Admin Activity</h3>
                    <button className="btn btn-ghost btn-xs text-blue-600">View My Logs</button>
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="bg-base-50/50 text-base-content/60">
                                <th>Target User</th>
                                <th>Action Type</th>
                                <th>Date & Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Row 1 */}
                            <tr className="hover:bg-base-50 transition-colors">
                                <td>
                                    <div className="font-bold">Sarah Connor</div>
                                    <div className="text-xs opacity-50">sarah@nexus.com</div>
                                </td>
                                <td><span className="badge badge-outline badge-error">Account Locked</span></td>
                                <td className="text-sm text-base-content/70">Oct 24, 10:42 AM</td>
                                <td className="text-success font-medium">Success</td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="hover:bg-base-50 transition-colors">
                                <td>
                                    <div className="font-bold">Mike Ross</div>
                                    <div className="text-xs opacity-50">mike@nexus.com</div>
                                </td>
                                <td><span className="badge badge-outline badge-info">Role Changed</span></td>
                                <td className="text-sm text-base-content/70">Oct 24, 09:15 AM</td>
                                <td className="text-success font-medium">Success</td>
                            </tr>
                            {/* Row 3 */}
                            <tr className="hover:bg-base-50 transition-colors">
                                <td>
                                    <div className="font-bold">System Settings</div>
                                    <div className="text-xs opacity-50">Global Policy</div>
                                </td>
                                <td><span className="badge badge-outline badge-warning">Security Update</span></td>
                                <td className="text-sm text-base-content/70">Oct 23, 04:30 PM</td>
                                <td className="text-success font-medium">Applied</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;