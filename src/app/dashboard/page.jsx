import AllEmployees from '@/components/AllEmployees/AllEmployees';
import React from 'react';

const dashboard = () => {
    const employees = [
        {
            id: 1,
            name: "Zihan Islam",
            email: "zihan@erp.com",
            role: "Frontend Developer",
            department: "Engineering",
            status: "Active",
            location: "Dhaka, BD",
            avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        },
        {
            id: 2,
            name: "Sarah Smith",
            email: "sarah@erp.com",
            role: "UI/UX Designer",
            department: "Design",
            status: "Active",
            location: "London, UK",
            avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
        },
        {
            id: 3,
            name: "Michael Chen",
            email: "m.chen@erp.com",
            role: "Backend Lead",
            department: "Engineering",
            status: "On Leave",
            location: "Toronto, CA",
            avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        },
        {
            id: 4,
            name: "Emily Davis",
            email: "emily.d@erp.com",
            role: "HR Manager",
            department: "Human Resources",
            status: "Active",
            location: "New York, USA",
            avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        },
        {
            id: 5,
            name: "David Wilson",
            email: "david.w@erp.com",
            role: "Project Manager",
            department: "Product",
            status: "Inactive",
            location: "Sydney, AU",
            avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        },
    ];
    return (
        <div>
            <AllEmployees employees={employees}></AllEmployees>
        </div>
    );
};

export default dashboard;