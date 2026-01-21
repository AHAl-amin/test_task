"use client";

import Link from "next/link";
import { ArrowRight, Users, Trophy, ChevronUp, Flame } from "lucide-react";
import banner from "../../public/images/banner.png";
import { FaArrowTrendUp } from "react-icons/fa6";
import Image from "next/image";
import fire from "../../public/images/fire.png";
import elementsIcon from "@/public/images/elements.svg";


const StatItem = ({ title, value, subValue, trend, icon: Icon, type = "normal", progress, color = "blue" }) => (
    <div className="bg-white rounded-[24px] shadow-lg p-4 flex items-center justify-center flex-1 h-[88px] gap-3">
        {type === "normal" && (
            <div className="flex gap-3 items-center w-full px-2">
                {Icon && (
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 shrink-0">
                        {Icon.src ? (
                            <Image src={Icon} width={16} height={16} alt={title} />
                        ) : (
                            <Icon size={16} />
                        )}
                    </div>
                )}
                <div>
                    <p className="text-[12px] text-[#141B34B2] font-medium mb-0.5">{title}</p>
                    <div className="flex items-end gap-1">
                        <h3 className="text-xl font-bold text-[#141B34]">{value}</h3>
                        {subValue && (
                            <span className={`text-[11px] font-semibold px-1 py-0.5 rounded-full flex gap-1 items-center ${trend === 'up' ? 'text-green-600' : 'text-gray-500'}`}>
                                {subValue}
                                {trend === 'up' && <FaArrowTrendUp size={10} />}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        )}
        {type === "progress" && (
            <div className="flex items-center justify-between gap-4 w-full px-2">
                <div>
                    <p className="text-[12px] text-[#141B34B2] font-bold mb-0.5">{title}</p>
                    {subValue && <p className="text-[11px] text-[#141b34a6]">{subValue}</p>}
                </div>
                <div className="relative w-14 h-14 shrink-0 -me-2">
                    <svg width="56" height="56" viewBox="0 0 56 56" className="transform rotate-135">
                       
                        <circle
                            cx="28"
                            cy="28"
                            r="22"
                            stroke={color === "green" ? "#10b98120" : color === "blue" ? "#5C8FF720" : "#FF8C1A20"}
                            strokeWidth="6"
                            fill="none"
                            strokeDasharray="103.6 138.2"
                            strokeLinecap="round"
                        />
                       
                        <circle
                            cx="28"
                            cy="28"
                            r="22"
                            stroke={color === "green" ? "#10b981" : color === "blue" ? "#5C8FF7" : "#FF8C1A"}
                            strokeWidth="6"
                            fill="none"
                            strokeDasharray={`${(progress / 100) * 103.6} 138.2`}
                            strokeLinecap="round"
                        />
                       
                        <circle
                            cx="28"
                            cy="28"
                            r="17"
                            stroke={color === "green" ? "#10b981" : color === "blue" ? "#5C8FF7" : "#FF8C1A"}
                            strokeWidth="1"
                            fill="none"
                            strokeDasharray="1, 3"
                            opacity="0.3"
                        />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[12px] font-bold text-[#141B34]">
                        {progress}%
                    </span>
                </div>
            </div>
        )}
    </div>
);

const HeroSection = () => {
    return (
        <div className="w-full rounded-[30px] relative mb-8 
         overflow-hidden min-h-[450px] ">
           
            <div
                className="absolute inset-0 bg-cover bg-center no-repeat   rounded-[30px]"
                style={{
                    backgroundImage: `url(${banner.src})`,
                }}
            />
           
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#FFFFFF] via-[#FFFFFF]/50 to-transparent " />

          
            <div className="relative z-10 p-6  flex flex-col justify-between min-h-[450px] gap-8">
               
                <div>
                    <h2 className="text-3xl md:text-5xl font-semibold text-[#FFFFFF] mt-5  poppins ">
                        The QB Fundamentals
                    </h2>
                </div>

               
                <div className="flex flex-col lg:flex-row items-end justify-between gap-6 pointer-events-none">

                   
                    <div className="flex flex-wrap items-center gap-2 pointer-events-auto w-full lg:flex-1">
                        <StatItem
                            title="Total Athletes"
                            value="65"
                            subValue="+12"
                            trend="up"
                            icon={Users}
                        />
                        <StatItem
                            title="Projected Ranking"
                            value="#5"
                            icon={elementsIcon}
                        />
                        <StatItem
                            title="Consistency Score"
                            type="progress"
                            subValue="Last 30 days"
                            progress={65}
                        />
                        <StatItem
                            title="Weekly Progress"
                            type="progress"
                            progress={35}
                            color="green"
                        />
                    </div>

                    {/* Floating Streak Card */}
                    <div className="bg-[#FFFFFFE5] rounded-[24px] p-5 h-auto lg:h-[200px] w-full md:w-[317px] pointer-events-auto shadow-lg shrink-0">
                        <div className="flex justify-between items-center  ">
                            <span className="text-[11px] font-bold text-gray-900  tracking-wider">Active Streak</span>
                            <div className="flex items-center gap-1">
                                <div className="  bg-linear-to-b from-[#FDB631] to-[#EC4213] text-[#FF5833] px-3 py-3 rounded-full text-[10px] font-bold">
                                    <span className="text-[#FFFFFF]">Hot Streak</span>
                                </div>
                                <Image src={fire.src} width={34} height={34} alt="fire" className="bg-[#FFFFFFA6] rounded-full p-1" />
                            </div>
                        </div>
                        <div className="mb-4 ">
                            <div className="bg-[#FFFFFF] shadow-md w-fit  ">
                                <h3 className="text-[28px]  font-bold text-gray-900 ">12 Days</h3>
                                <p className="text-[11px] text-gray-600 font-medium whitespace-nowrap">Next milestone: 15 days</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-center">
                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                                <div key={i} className="flex flex-col items-center gap-1.5">
                                    <span className="text-[10px] text-gray-400 font-bold">{day}</span>
                                    {i < 4 ? (
                                        <div className="w-5 h-5 md:w-6 md:h-6 bg-linear-to-b from-[#5C8FF7] to-[#276AEE] rounded-full flex items-center justify-center text-white text-[9px] md:text-[10px] shadow-sm">✓</div>
                                    ) : (
                                        <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-[9px] md:text-[10px] text-gray-400 font-medium">{23 + i}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
