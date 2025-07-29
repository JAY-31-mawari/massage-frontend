import React, { useState } from 'react';
import UserNav from '../../components/navbar/user-nav'
import AdminSidebar from '../../components/admin-sidebar'
import Footer from '../../components/footer'

// Admin Pages
// import Dashboard from './dashboard';
import Payment from './payment';
import MyProfile from './my-profile';
import MyProperty from './my-property';
import BookmarkList from './bookmark-list';
import ChangePassword from './change-password';
import Checkout from './checkout';
import SubmitPropertyDashboard from './submit-property-dashboard';

export default function AdminMainLayout() {
    const [selectedPage, setSelectedPage] = useState('my-profile');

    const renderPage = () => {
        switch (selectedPage) {
            // case 'dashboard':
            //     return <Dashboard />;
            case 'payment':
                return <Payment />;
            case 'my-profile':
                return <MyProfile />;
            case 'my-property':
                return <MyProperty />;
            case 'bookmark-list':
                return <BookmarkList />;
            case 'change-password':
                return <ChangePassword />;
            case 'checkout':
                return <Checkout />;
            case 'submit-property-dashboard':
                return <SubmitPropertyDashboard />;
            default:
                return <MyProfile />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <div className="w-full">
                <UserNav />
            </div>

            {/* Main Content Area */}
            <div className="flex flex-1">
                {/* Sidebar (fixed width) */}
                <div className="w-64">
                    <AdminSidebar setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
                </div>

                {/* Page Content */}
                <main className="flex-1">
                    {renderPage()}
                </main>
            </div>

            {/* Footer */}
            <div className="w-full">
                <Footer />
            </div>
        </div>

    );
}
