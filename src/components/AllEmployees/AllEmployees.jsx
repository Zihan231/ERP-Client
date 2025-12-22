/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const AllEmployees = ({ employees }) => {
    
    // Minimalist Status Badge Helper
    const getStatusBadge = (status) => {
        switch(status) {
            case 'Active': return 'badge-success badge-xs badge-outline';
            case 'On Leave': return 'badge-warning badge-xs badge-outline';
            case 'Inactive': return 'badge-error badge-xs badge-outline';
            default: return 'badge-ghost badge-xs badge-outline';
        }
    };

    return (
        <div className="min-h-screen bg-base-100 p-6 md:p-12">
            
            {/* Minimal Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h2 className="text-2xl font-semibold text-base-content tracking-tight">
                        Team Members
                    </h2>
                    <p className="text-base-content/50 text-sm mt-1">
                        View and manage your organization&apos;s staff.
                    </p>
                </div>
                <button className="btn btn-neutral btn-sm rounded-md font-normal">
                    + Add Employee
                </button>
            </div>

            {/* Minimal Table Container - No shadow, simple border */}
            <div className="border border-base-200 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        
                        {/* Header */}
                        <thead className="bg-base-100 border-b border-base-200 text-base-content/60 font-medium">
                            <tr>
                                <th className="py-4 pl-6 font-normal">Employee</th>
                                <th className="font-normal">Role</th>
                                <th className="font-normal">Status</th>
                                <th className="font-normal">Location</th>
                                <th className="pr-6 text-right font-normal">Action</th>
                            </tr>
                        </thead>
                        
                        {/* Body */}
                        <tbody>
                            {employees && employees.map((employee) => (
                                <tr key={employee.id} className="hover:bg-base-200/30 border-b border-base-100 last:border-none transition-colors">
                                    
                                    {/* Name & Avatar */}
                                    <td className="py-4 pl-6">
                                        <div className="flex items-center gap-4">
                                            <div className="avatar">
                                                <div className="w-10 h-10 rounded-full ring-1 ring-base-200">
                                                    <img src={employee.avatar} alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-medium text-sm text-base-content">
                                                    {employee.name}
                                                </div>
                                                <div className="text-xs text-base-content/40 mt-0.5">
                                                    {employee.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    
                                    {/* Role */}
                                    <td className="text-sm">
                                        <div className="text-base-content/80">{employee.role}</div>
                                        <div className="text-xs text-base-content/40 mt-0.5">{employee.department}</div>
                                    </td>
                                    
                                    {/* Status - Using small outline badges */}
                                    <td>
                                        <div className={`badge ${getStatusBadge(employee.status)} py-2 px-3 h-auto font-medium`}>
                                            {employee.status}
                                        </div>
                                    </td>

                                    {/* Location */}
                                    <td className="text-sm text-base-content/60">
                                        {employee.location}
                                    </td>
                                    
                                    {/* Actions */}
                                    <td className="pr-6 text-right">
                                        <Link href={`/dashboard/${employee.id}`} className="btn btn-ghost btn-xs text-blue-600 hover:text-base-content">
                                            See Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Minimal Footer */}
                {employees && employees.length > 0 && (
                    <div className="p-4 border-t border-base-200 bg-base-50 flex justify-between items-center">
                        <span className="text-xs text-base-content/40">
                            Page 1 of 1
                        </span>
                        <div className="flex gap-2">
                            <button className="btn btn-xs btn-ghost disabled:bg-transparent" disabled>Prev</button>
                            <button className="btn btn-xs btn-ghost">Next</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllEmployees;