import { NavLink } from "react-router-dom";
import { BrowseGalleryOutlined, HomeOutlined, SettingsOutlined, Upload } from "@mui/icons-material";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';

const Sidebar = () => {
    return (
        <div className="bg-[#0F0F0F] fixed left-0 bottom-0 top-20 py-10 px-5 w-64">
            <div className="flex flex-col justify-start items-start gap-3 text-white font-space-mono">
                <NavLink to="" className={({ isActive }) => isActive ? "flex flex-row justify-start items-center gap-5 py-3 px-4 bg-[#212121] w-full rounded-md ease transition-all" : "flex flex-row justify-start items-center gap-5 py-3 px-4 hover:bg-[#212121] w-full rounded-md ease transition-all"}>
                    <HomeOutlined />
                    <p>Home</p>
                </NavLink>

                <NavLink to="reel" className={({ isActive }) => isActive ? "flex flex-row justify-start items-center gap-5 py-3 px-4 bg-[#212121] w-full rounded-md ease transition-all" : "flex flex-row justify-start items-center gap-5 py-3 px-4 hover:bg-[#212121] w-full rounded-md ease transition-all"}>
                    <HomeOutlined />
                    <p>Reel</p>
                </NavLink>

                <NavLink to="upload" className={({ isActive }) => isActive ? "flex flex-row justify-start items-center gap-5 py-3 px-4 bg-[#212121] w-full rounded-md ease transition-all" : "flex flex-row justify-start items-center gap-5 py-3 px-4 hover:bg-[#212121] w-full rounded-md ease transition-all"}>
                    <Upload />
                    <p>Upload</p>
                </NavLink>

                <NavLink to="gallery" className={({ isActive }) => isActive ? "flex flex-row justify-start items-center gap-5 py-3 px-4 bg-[#212121] w-full rounded-md ease transition-all" : "flex flex-row justify-start items-center gap-5 py-3 px-4 hover:bg-[#212121] w-full rounded-md ease transition-all"}>
                    <BrowseGalleryOutlined />
                    <p>Gallery</p>
                </NavLink>

                <NavLink to="earnings" className={({ isActive }) => isActive ? "flex flex-row justify-start items-center gap-5 py-3 px-4 bg-[#212121] w-full rounded-md ease transition-all" : "flex flex-row justify-start items-center gap-5 py-3 px-4 hover:bg-[#212121] w-full rounded-md ease transition-all"}>
                    <LightbulbOutlinedIcon />
                    <p>Earnings</p>
                </NavLink>

                <NavLink to="pools" className="flex flex-row justify-start items-center gap-5 py-3 px-4 hover:bg-[#212121] w-full rounded-md  ease transition-all">
                    <CurrencyBitcoinOutlinedIcon />
                    <p>Pools</p>
                </NavLink>

                <NavLink to="earnings" className={({ isActive }) => isActive ? "flex flex-row justify-start items-center gap-5 py-3 px-4 bg-[#212121] w-full rounded-md ease transition-all" : "flex flex-row justify-start items-center gap-5 py-3 px-4 hover:bg-[#212121] w-full rounded-md ease transition-all"}>
                    <SettingsOutlined />
                    <p>Settings</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar;