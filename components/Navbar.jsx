import { Search, Bell, CheckSquare, Mail } from "lucide-react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import profile from "@/public/images/profile.png";
import messageIcon from "@/public/images/icon/message-icon.svg";
import { FaRocketchat } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 py-2 px-4 md:px-0 backdrop-blur-sm">
            {/* Left : Welcome Text */}
            <div className="h-[88px] flex flex-wrap md:flex-nowrap items-center justify-between gap-4 md:gap-0">
                <div className="flex items-center gap-4 md:gap-12 flex-1">
                    <div className="ml-0 md:ml-4 shrink-0">
                        <Image src={logo} width={32} height={28} alt="Logo" />
                    </div>
                    <div className="text-[16px] font-medium text-[#000000]">
                        <h1 className="text-sm md:text-[16px] -mb-[6px] ">Welcome Back, Mark</h1>
                        <p className="  font-medium mt-1">
                            <span className="text-[14px] text-[#00000066]/90">Overview/</span> <span className="text-[#000000] text-sm md:text-[16px]">Athlete Program Dashboard</span>
                        </p>
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 md:gap-6 h-full justify-end flex-1 md:flex-none w-full md:w-auto">
                    {/* Search */}
                    <div className=" relative group h-10 md:h-full text-gray-400 w-full md:w-auto flex-1 md:flex-none block sm:hidden lg:block">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-[18.33px] w-[18.33px]   transition-colors " />
                        </div>
                        <input
                            type="text"
                            className="block w-full md:w-[402px] h-full pl-10 pr-3 py-2.5 border-x border-[#FFFFFFE5] bg-[#ffffff62] rounded-lg md:rounded-none leading-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-[#ffffffa6] transition-all placeholder:text-[#00000099]/90 "
                            placeholder="Search "
                        />
                    </div>
                    {/* Mobile Search Icon (visible only on small screens) */}
                    <button className="md:hidden p-2 text-gray-500 hover:text-blue-500">
                        <Search className="h-[18.33px] w-[18.33px]" />
                    </button>

                    {/* Icons */}
                    <div className="flex items-center gap-2 md:gap-3 h-full">



                        <div className="relative pl-2 md:pl-6">

                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-2/3 border-l-2 border-[#00000021]/50"></span>

                            <Link
                                href="/not-found"
                                className="p-2.5 rounded-full bg-[#FFFFFF4D] text-gray-400 hover:text-blue-500  transition-all shadow-[inset_0.9px_0.9px_0px_0px_rgba(255,255,255,0.6),inset_-0.9px_-0.9px_0px_0px_rgba(255,255,255,0.4)] w-[40px] h-[40px] flex items-center justify-center placeholder:text-gray-400"
                            >
                                <Image src={messageIcon} width={20} height={20} alt="Chat" />
                            </Link>
                        </div>



                    </div>
                    <div className="flex items-center gap-2 md:gap-3">

                        <Link href="/not-found" className="p-2.5 block rounded-full bg-[#FFFFFF4D] text-gray-400  transition-all shadow-[inset_0.9px_0.9px_0px_0px_rgba(255,255,255,0.6),inset_-0.9px_-0.9px_0px_0px_rgba(255,255,255,0.4)] relative">
                            <Bell size={20} className="text-gray-500" />
                            <div className="absolute top-2 right-2 w-[12px] h-[12px]  bg-[#FF0033] rounded-full border-1 border-white text-[8px] text-gray-50 flex items-center justify-center">6</div>
                        </Link>
                    </div>

                    {/* Profile */}
                    <div className="flex items-center gap-2 md:gap-3 pl-0 md:pl-2">
                        <div className="w-10 h-10 rounded-full overflow-hidden  shadow-md cursor-pointer hover:ring-2 hover:ring-blue-200 transition-all shrink-0">
                            {/* Placeholder for user image */}
                            <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                                <Image src={profile} width={40} height={40} alt="Profile" /></div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
