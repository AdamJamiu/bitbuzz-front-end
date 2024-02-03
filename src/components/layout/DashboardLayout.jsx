import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useState } from "react";

const DashboardLayout = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Navbar setIsOpen={setIsOpen} />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="bg-[#14171C] md:ml-64 min-h-[530px] pt-20 ease-in-out duration-300 transition-all">
                <Outlet />
            </div>
        </>
    )
}

export default DashboardLayout;