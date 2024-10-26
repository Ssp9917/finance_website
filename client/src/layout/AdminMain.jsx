import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Menu from "../components/admin/Menu";
import Navbar from "../components/admin/Navbar";
// import Sidebar from "../components/admin/Sidebar";

const AdminMain = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const data = {};

    return (
        <div className="flex w-full h-full">
            {/* Sidebar */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
                <Link
                    href="/"
                    className="flex items-center justify-center lg:justify-start gap-2"
                >
                    {/* <i src="/logo.png" alt="logo" width={32} height={32} /> */}
                    <span className="hidden lg:block font-bold">Dashboard</span>
                </Link>
                <Menu />
            </div>

            {/* Main content area */}
            {/* RIGHT */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default AdminMain;
