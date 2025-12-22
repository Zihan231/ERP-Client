/* eslint-disable @next/next/no-img-element */
import React from 'react';

const EmployeeDetails = async ({ params }) => {
    const { id } = await params;
    console.log(id)

    const employeesData = [
        {
            id: 1,
            name: "Zihan Islam",
            email: "zihan@erp.com",
            phone: "+880 1712 345 678",
            role: "Frontend Developer",
            department: "Engineering",
            status: "Active",
            location: "Dhaka, BD",
            joiningDate: "15 Jan, 2023",
            type: "Full-Time",
            manager: "Michael Chen",
            about: "Passionate Frontend Developer with a keen eye for detail. Specializes in building responsive, accessible, and performant web applications using React and Next.js.",
            skills: ["React", "Next.js", "TailwindCSS", "JavaScript", "Figma"],
            avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        },
        {
            id: 2,
            name: "Sarah Smith",
            email: "sarah@erp.com",
            phone: "+44 20 7946 0958",
            role: "UI/UX Designer",
            department: "Design",
            status: "Active",
            location: "London, UK",
            joiningDate: "10 Mar, 2022",
            type: "Full-Time",
            manager: "David Wilson",
            about: "Creative UI/UX Designer focused on user-centered design principles. Experts in creating wireframes, prototypes, and high-fidelity mockups.",
            skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "CSS"],
            avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        },
        {
            id: 3,
            name: "Michael Chen",
            email: "m.chen@erp.com",
            phone: "+1 416 555 0199",
            role: "Backend Lead",
            department: "Engineering",
            status: "On Leave",
            location: "Toronto, CA",
            joiningDate: "01 Nov, 2020",
            type: "Full-Time",
            manager: "CTO",
            about: "Senior backend engineer with extensive experience in system architecture, database optimization, and API design. Currently leading the core infrastructure team.",
            skills: ["Node.js", "Python", "PostgreSQL", "AWS", "System Design"],
            avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        },
        {
            id: 4,
            name: "Emily Davis",
            email: "emily.d@erp.com",
            phone: "+1 212 555 3456",
            role: "HR Manager",
            department: "Human Resources",
            status: "Active",
            location: "New York, USA",
            joiningDate: "12 Jun, 2019",
            type: "Full-Time",
            manager: "CEO",
            about: "Dedicated HR professional committed to fostering a positive workplace culture. skilled in talent acquisition, employee relations, and compliance.",
            skills: ["Recruiting", "Employee Relations", "Communication", "HR Software", "Conflict Resolution"],
            avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        },
        {
            id: 5,
            name: "David Wilson",
            email: "david.w@erp.com",
            phone: "+61 2 9876 5432",
            role: "Project Manager",
            department: "Product",
            status: "Inactive",
            location: "Sydney, AU",
            joiningDate: "23 Aug, 2021",
            type: "Contract",
            manager: "CEO",
            about: "Results-oriented Project Manager with a track record of delivering complex software projects on time. Expert in Agile methodologies and stakeholder management.",
            skills: ["Agile", "Scrum", "Jira", "Risk Management", "Leadership"],
            avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        },
    ];

    const employee = employeesData.find(item => item.id == id);
    
    if (!employee) {
        return <div className="p-10 text-center">Employee not found</div>;
    }

    return (
        <div className="min-h-screen bg-base-100 p-6 md:p-12">

            <div className="max-w-4xl mx-auto">
                {/* Header Profile Section */}
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-10 pb-10 border-b border-base-200">
                    <div className="avatar">
                        <div className="w-24 h-24 rounded-full ring-1 ring-base-200 p-1">
                            <img src={employee.avatar} alt="Avatar" className="rounded-full" />
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <h1 className="text-3xl font-semibold text-base-content">{employee.name}</h1>
                                <p className="text-base-content/60 mt-1 flex items-center gap-2">
                                    {employee.role}
                                    <span className="w-1 h-1 rounded-full bg-base-300"></span>
                                    {employee.department}
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <button className="btn btn-outline btn-sm font-normal">Message</button>
                                <button className="btn btn-neutral btn-sm font-normal">Edit Profile</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Left Column: Personal Info */}
                    <div className="md:col-span-2 space-y-8">

                        {/* About Section */}
                        <section>
                            <h3 className="text-sm font-medium text-base-content/40 uppercase tracking-wider mb-3">About</h3>
                            <p className="text-base-content/80 leading-relaxed">
                                {employee.about}
                            </p>
                        </section>

                        {/* Personal Information */}
                        <section>
                            <h3 className="text-sm font-medium text-base-content/40 uppercase tracking-wider mb-4">Personal Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
                                <div>
                                    <label className="text-xs text-base-content/50 block mb-1">Email Address</label>
                                    <div className="text-base-content font-medium">{employee.email}</div>
                                </div>
                                <div>
                                    <label className="text-xs text-base-content/50 block mb-1">Phone Number</label>
                                    <div className="text-base-content font-medium">{employee.phone}</div>
                                </div>
                                <div>
                                    <label className="text-xs text-base-content/50 block mb-1">Location</label>
                                    <div className="text-base-content font-medium">{employee.location}</div>
                                </div>
                                <div>
                                    <label className="text-xs text-base-content/50 block mb-1">Employment Status</label>
                                    <span className="badge badge-success badge-xs badge-outline py-2 px-3 mt-1">
                                        {employee.status}
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* Skills */}
                        <section>
                            <h3 className="text-sm font-medium text-base-content/40 uppercase tracking-wider mb-3">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {employee.skills.map((skill, index) => (
                                    <span key={index} className="badge badge-ghost rounded-md px-3 py-3 text-base-content/70">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Employment Details */}
                    <div className="md:col-span-1">
                        <div className="bg-base-50 p-6 rounded-lg border border-base-200 space-y-6">
                            <div>
                                <label className="text-xs text-base-content/50 block mb-1">Employment Type</label>
                                <div className="text-sm font-medium">{employee.type}</div>
                            </div>
                            <div>
                                <label className="text-xs text-base-content/50 block mb-1">Date Joined</label>
                                <div className="text-sm font-medium">{employee.joiningDate}</div>
                            </div>
                            <div>
                                <label className="text-xs text-base-content/50 block mb-1">Reporting To</label>
                                <div className="flex items-center gap-3 mt-2">
                                    <div className="avatar placeholder">
                                        <div className="bg-neutral text-neutral-content rounded-full w-8">
                                            <span className="text-xs">MC</span>
                                        </div>
                                    </div>
                                    <div className="text-sm font-medium">{employee.manager}</div>
                                </div>
                            </div>

                            <div className="divider my-4"></div>

                            <button className="btn btn-error btn-outline btn-sm w-full font-normal">
                                Deactivate Account
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails;