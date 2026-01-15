import AuthGuard from '@/components/AuthGuard/AuthGuard';
import NotificationListener from '@/components/NotificationListener/NotificationListener';
import Sidebar from '@/components/Sidebar/Sidebar';
import AuthProvider from '@/context/AuthProvider';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <AuthProvider>
            <AuthGuard>
                <div className="min-h-screen bg-blue-50/30">
                    {/* The Sidebar */}
                    <Sidebar />
                    <NotificationListener></NotificationListener>
                    {/* main content */}
                    <main className="ml-64 p-8 w-[calc(100%-16rem)]">
                        {children}
                    </main>
                </div>
            </AuthGuard>
        </AuthProvider>


    );
};

export default DashboardLayout;