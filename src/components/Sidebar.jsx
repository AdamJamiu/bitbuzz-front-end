import { NavLink, useLocation } from "react-router-dom";
import { BrowseGallery, BrowseGalleryOutlined, CurrencyBitcoin, Home, HomeOutlined, Lightbulb, PlayCircleFilled, PlayCircleOutlineOutlined, Settings, SettingsOutlined, Upload, UploadOutlined } from "@mui/icons-material";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';

const Sidebar = ({ isOpen, setIsOpen }) => {
    const location = useLocation();
    const { pathname } = location;

    const handleClose = () => setIsOpen(false)

    return (
        <>
            {isOpen && <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40" onClick={() => setIsOpen(false)}></div>}

            <div className={`${isOpen ? "translate-x-0 top-0 z-50" : "top-20"} bg-[#0F0F0F] fixed left-0 bottom-0 py-10 px-5 w-64 md:translate-x-0 -translate-x-96 ease-in-out duration-300 transition-transform z-50`}>
                <div className="flex flex-col justify-start items-start gap-3 text-white">
                    <NavLink onClick={handleClose} to="" className={({ isActive }) => isActive ? "flex flex-row justify-start items-center gap-5 py-3 px-4 bg-[#212121] w-full rounded-md ease transition-all" : "flex flex-row justify-start items-center gap-5 py-3 px-4 hover:bg-[#212121] w-full rounded-md ease transition-all text-gray-400"}>
                        {pathname === "/" ? <Home /> : <HomeOutlined />}
                        <p>Home</p>
                    </NavLink>

                    <NavLink onClick={handleClose} to="reel" className={({ isActive }) => isActive ? "flex flex-row justify-start items-center gap-5 py-3 px-4 bg-[#212121] w-full rounded-md ease transition-all" : "flex flex-row justify-start items-center gap-5 py-3 px-4 hover:bg-[#212121] w-full rounded-md ease transition-all text-gray-400"}>
                        {pathname === "/reel" ? <PlayCircleFilled /> : <PlayCircleOutlineOutlined />}
                        <p>Reel</p>
                    </NavLink>

                    <NavLink onClick={handleClose} to="upload" className={({ isActive }) => isActive ? "flex flex-row justify-start items-center gap-5 py-3 px-4 bg-[#212121] w-full rounded-md ease transition-all" : "flex flex-row justify-start items-center gap-5 py-3 px-4 hover:bg-[#212121] w-full rounded-md ease transition-all text-gray-400"}>
                        {pathname === "/upload" ? <Upload /> : <UploadOutlined />}
                        <p>Upload</p>
                    </NavLink>

                    <NavLink onClick={handleClose} to="gallery" className={({ isActive }) => isActive ? "flex flex-row justify-start items-center gap-5 py-3 px-4 bg-[#212121] w-full rounded-md ease transition-all" : "flex flex-row justify-start items-center gap-5 py-3 px-4 hover:bg-[#212121] w-full rounded-md ease transition-all text-gray-400"}>
                        {pathname === "/gallery" ? <BrowseGallery /> : <BrowseGalleryOutlined />}
                        <p>Gallery</p>
                    </NavLink>

                    <NavLink onClick={handleClose} to="earnings" className={({ isActive }) => isActive ? "flex flex-row justify-start items-center gap-5 py-3 px-4 bg-[#212121] w-full rounded-md ease transition-all" : "flex flex-row justify-start items-center gap-5 py-3 px-4 hover:bg-[#212121] w-full rounded-md ease transition-all text-gray-400"}>
                        {pathname === "/earnings" ? <Lightbulb /> : <LightbulbOutlinedIcon />}
                        <p>Earnings</p>
                    </NavLink>

                    <NavLink onClick={handleClose} to="pools" className={({ isActive }) => isActive ? "flex flex-row justify-start items-center gap-5 py-3 px-4 bg-[#212121] w-full rounded-md ease transition-all" : "flex flex-row justify-start items-center gap-5 py-3 px-4 hover:bg-[#212121] w-full rounded-md ease transition-all text-gray-400"}>
                        {pathname === "/pools" ? <CurrencyBitcoin /> : <CurrencyBitcoinOutlinedIcon />}
                        <p>Pools</p>
                    </NavLink>

                    <NavLink onClick={handleClose} to="earnings" className={({ isActive }) => isActive ? "flex flex-row justify-start items-center gap-5 py-3 px-4 bg-[#212121] w-full rounded-md ease transition-all" : "flex flex-row justify-start items-center gap-5 py-3 px-4 hover:bg-[#212121] w-full rounded-md ease transition-all text-gray-400"}>
                        {pathname === "/earnings" ? <Settings /> : <SettingsOutlined />}
                        <p>Settings</p>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Sidebar;