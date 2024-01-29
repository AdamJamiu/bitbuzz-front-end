import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const DashboardLayout = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="bg-app-black ml-64 min-h-[530px] pt-20">
                <Outlet />
            </div>
        </>
    )
}

export default DashboardLayout;