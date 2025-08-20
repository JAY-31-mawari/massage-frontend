import { useState } from "react";
import AdminSidebar from "../../components/admin-sidebar";
import Footer from "../../components/footer";
import Payment from "./payment";
import MyProfile from "./my-profile";
import UserBookings from "./userBookings";
import ChangePassword from "./change-password";

export default function AdminMainLayout() {
  const [selectedPage, setSelectedPage] = useState("my-profile");

  const renderPage = () => {
    switch (selectedPage) {
      case "payment":
        return <Payment />;
      case "my-profile":
        return <MyProfile />;
      case "my-orders":
        return <UserBookings />;
      case "change-password":
        return <ChangePassword />;
      default:
        return <MyProfile />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar (fixed width) */}
        <div className="w-64">
          <AdminSidebar
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
        </div>

        {/* Page Content */}
        <main className="flex-1">{renderPage()}</main>
      </div>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
