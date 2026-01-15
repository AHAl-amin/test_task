"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutGrid,
    Trophy,
    MessageSquare,
    ListTodo,
    CalendarDays,
    BarChart2,
    Users,
    Calendar,
    FileText,

    Settings,
    Headphones,
    GraduationCap,
    LucideLampDesk,
    Headset,

} from "lucide-react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";


const Sidebar = () => {
    const pathname = usePathname();

    // Menu items based on the icons in the image
    const menuItems = [
        { icon: LayoutGrid, label: "Dashboard", href: "/" },
        { icon: GraduationCap, label: "Training", href: "/training" },
        { icon: LucideLampDesk, label: "Lamp", href: "/lamp" },
        { icon: ListTodo, label: "Tasks", href: "/tasks" },
        { icon: IoChatbubbleEllipsesOutline, label: "Massage", href: "/massage" },
        { icon: CalendarDays, label: "Schedule", href: "/schedule" },
        { icon: BarChart2, label: "Analytics", href: "/analytics" },
        { icon: FaUsers, label: "Team", href: "/team" },
        { icon: Calendar, label: "Calendar", href: "/calendar" }, 
        { icon: FaSackDollar, label: "Wallet", href: "/wallet" }, 
    ];

    const bottomItems = [
        // { icon: FileText, label: "Docs", href: "/docs" },
        { icon: Headset , label: "Support", href: "/support" },
        { icon: FaUsers, label: "Team", href: "/team" },
        { icon: Settings, label: "Settings", href: "/settings" },
    ];

    const isActive = (path) => pathname === path;

    return (
        <aside className="w-[72px]  border rounded-2xl border-[#000000] flex flex-col items-center py-6  sticky top-0 shrink-0 z-50 overflow-hidden overflow-y-auto hide-scrollbar px-2 ">



            {/* Main Menu */}
            <nav className="flex-1 flex flex-col gap-2 w-full items-center">
                {menuItems.map((item, index) => {
                    const active = isActive(item.href);
                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={`p-3 rounded-xl transition-all duration-200 group relative ${active ? 'bg-gradient-to-b from-[#5C8FF7] to-[#276AEE] text-white shadow-md shadow-blue-200' : 'text-gray-400 hover:text-blue-500 hover:bg-blue-50'}`}
                        >
                            <item.icon size={22} strokeWidth={active ? 2.5 : 2} />
                            {active && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-transparent rounded-r-md" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Menu */}
            <div className="flex flex-col gap-2 w-full items-center mt-auto border-t border-[#141B341A] pt-4  ">
                {bottomItems.map((item, index) => {
                    const active = isActive(item.href);
                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={`p-3 rounded-xl transition-all duration-200 group relative ${active ? 'bg-gradient-to-b from-[#5C8FF7] to-[#276AEE] text-white shadow-md shadow-blue-200' : 'text-gray-400 hover:text-blue-500 hover:bg-blue-50 '}`}
                        >
                            <item.icon size={22} strokeWidth={active ? 2.5 : 2} />
                        </Link>
                    );
                })}
            </div>
        </aside>
    );
};

export default Sidebar;
