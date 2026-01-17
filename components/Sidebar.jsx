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
import lampIcon from "@/public/images/icon/lamp.svg";
import listIcon from "@/public/images/icon/right-to-left-list-dash.svg";
import analyticsIcon from "@/public/images/icon/analytics-up.svg";
import walletIcon from "@/public/images/icon/money-bag.svg";
import rankingIcon from "@/public/images/icon/ranking.svg";






const Sidebar = () => {
    const pathname = usePathname();

    // Menu items based on the icons in the image
    const menuItems = [
        { icon: LayoutGrid, label: "Dashboard", href: "/" },
        { icon: GraduationCap, label: "Training", href: "/training" },
        { icon: lampIcon, label: "Lamp", href: "/lamp" },
        { icon: listIcon, label: "List", href: "/list" },


        { icon: IoChatbubbleEllipsesOutline, label: "Massage", href: "/massage" },

        { icon: BarChart2, label: "Analytics", href: "/analytics" },
        { icon: FaUsers, label: "Team", href: "/team" },
        { icon: CalendarDays, label: "Calendar", href: "/calendar" },



    ];

    const middleItems = [
        { icon: analyticsIcon, label: "Tasks", href: "/tasks" },
        { icon: walletIcon, label: "Wallet", href: "/wallet" },
       
        { icon: rankingIcon, label: "Ranking", href: "/ranking" },        
    ];

    const bottomItems = [
        // { icon: FileText, label: "Docs", href: "/docs" },
        { icon: Headset, label: "Support", href: "/support" },
        { icon: FaUsers, label: "User", href: "/user" },
        { icon: Settings, label: "Settings", href: "/settings" },
    ];

    const isActive = (path) => pathname === path;

    const renderIcon = (item, active) => {
        const Icon = item.icon;
        if (Icon?.src) {
            return (
                <Image
                    src={Icon}
                    width={22}
                    height={22}
                    alt={item.label}
                    className={`${active ? '' : 'opacity-50 group-hover:opacity-100'} transition-opacity`}
                />
            );
        }
        return <Icon size={22} strokeWidth={active ? 2.5 : 2} />;
    };

    return (
        <aside className="w-[72px] max-h-[calc(100vh-114px)] border rounded-2xl border-[#000000] flex flex-col items-center py-4  sticky top-[114px]  shrink-0 z-50 overflow-hidden overflow-y-auto hide-scrollbar  ">

            {/* Main Menu */}
            <div className="flex flex-col gap-4 w-full items-center mb-4">
                {menuItems.map((item, index) => {
                    const active = isActive(item.href);
                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={`p-[10px] rounded-xl transition-all duration-200 group relative flex items-center justify-center ${active ? 'bg-linear-to-b from-[#5C8FF7] to-[#276AEE] text-white shadow-md shadow-blue-200' : 'text-gray-400 hover:text-blue-500 hover:bg-blue-50'}`}
                        >
                            {renderIcon(item, active)}
                            {active && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-transparent rounded-r-md" />
                            )}
                        </Link>
                    );
                })}
            </div>

            {/* Middle Menu */}
            <div className="flex flex-col gap-4 w-full items-center py-4 border-t border-[#141B341A]">
                {middleItems.map((item, index) => {
                    const active = isActive(item.href);
                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={`p-[10px] rounded-xl transition-all duration-200 group relative flex items-center justify-center ${active ? 'bg-linear-to-b from-[#5C8FF7] to-[#276AEE] text-white shadow-md shadow-blue-200' : 'text-gray-400 hover:text-blue-500 hover:bg-blue-50'}`}
                        >
                            {renderIcon(item, active)}
                            {active && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-transparent rounded-r-md" />
                            )}
                        </Link>
                    );
                })}
            </div>

            {/* Bottom Menu */}
            <div className="flex flex-col gap-4 w-full items-center mt-auto border-t border-[#141B341A] pt-4  ">
                {bottomItems.map((item, index) => {
                    const active = isActive(item.href);
                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={`p-[10px] rounded-xl transition-all duration-200 group relative flex items-center justify-center ${active ? 'bg-linear-to-b from-[#5C8FF7] to-[#276AEE] text-white shadow-md shadow-blue-200' : 'text-gray-400 hover:text-blue-500 hover:bg-blue-50 '}`}
                        >
                            {renderIcon(item, active)}
                        </Link>
                    );
                })}
            </div>
        </aside>
    );
};

export default Sidebar;
