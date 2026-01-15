import { Search, Bell, CheckSquare, Mail } from "lucide-react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import profile from "@/public/images/profile.png";
import { FaRocketchat } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="py-2 px-4 md:px-0">
            {/* Left : Welcome Text */}
            <div className="md:h-[88px] h-auto min-h-[68px] flex flex-wrap md:flex-nowrap items-center justify-between backdrop-blur-sm sticky top-0 z-40 gap-4 md:gap-0">
                <div className="flex items-center gap-4 md:gap-12 flex-1">
                    <div className="ml-0 md:ml-4 flex-shrink-0">
                        <Image src={logo} width={32} height={28} alt="Logo" />
                    </div>
                    <div className="text-[16px] font-medium text-[#000000]">
                        <h1 className="text-sm md:text-[16px] -mb-[6px] ">Welcome Back, Mark</h1>
                        <p className="text-xs md:text-sm text-[#00000066]/60 font-medium mt-1">
                            Overview: <span className="text-[#000000] text-sm md:text-[16px]">Athlete Dashboard</span>
                        </p>
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 md:gap-6 h-full justify-end flex-1 md:flex-none w-full md:w-auto">
                    {/* Search */}
                    <div className=" relative group h-10 md:h-full text-gray-400 w-full md:w-auto flex-1 md:flex-none block sm:hidden lg:block">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4   transition-colors" />
                        </div>
                        <input
                            type="text"
                            className="block w-full md:w-[402px] h-full pl-10 pr-3 py-2.5 border-x border-[#FFFFFFE5] bg-[#ffffff62] rounded-lg md:rounded-none leading-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-[#ffffffa6] transition-all placeholder:text-[#00000099]/60 "
                            placeholder="Search "
                        />
                    </div>
                    {/* Mobile Search Icon (visible only on small screens) */}
                    <button className="md:hidden p-2 text-gray-500 hover:text-blue-500">
                        <Search className="h-5 w-5" />
                    </button>

                    {/* Icons */}
                    <div className="flex items-center gap-2 md:gap-3 h-full">
                        <div className="border-l border-[#00000021] pl-2 md:pl-6">
                            <Link href="/not-found" className="p-2.5 rounded-full border border-[#ffffff62] text-gray-400 hover:text-blue-500 hover:shadow-md transition-all shadow-sm w-[40px] h-[40px] flex items-center justify-center">
                                <FaRocketchat size={20} className="text-gray-500" />
                            </Link>
                        </div>

                    </div>
                    <div className="flex items-center gap-2 md:gap-3">

                        <Link href="/not-found" className="p-2.5 block border border-[#ffffff62] rounded-full text-gray-400 hover:text-blue-500 hover:shadow-md transition-all shadow-sm relative">
                            <Bell size={20} className="text-gray-500" />
                            <div className="absolute top-1 right-1 w-[16px] h-[16px]  bg-[#FF0033] rounded-full border-2 border-white text-[8px] text-gray-50 flex items-center justify-center">6</div>
                        </Link>
                    </div>

                    {/* Profile */}
                    <div className="flex items-center gap-2 md:gap-3 pl-0 md:pl-2">
                        <div className="w-10 h-10 rounded-full overflow-hidden  shadow-md cursor-pointer hover:ring-2 hover:ring-blue-200 transition-all flex-shrink-0">
                            {/* Placeholder for user image */}
                            <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                                <Image src={profile} width={40} height={40} alt="Profile" /></div>
                            {/* <Image src="/path/to/profile.jpg" width={40} height={40} alt="Profile" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
