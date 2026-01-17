"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { Upload, Bell, CheckCircle, Play, Clock, Check } from "lucide-react";
import { FaCalendarAlt, FaCheck, FaCheckCircle, FaLongArrowAltUp } from "react-icons/fa";
import clsx from "clsx";
import { TbBellFilled } from "react-icons/tb";
import startIcon from "@/public/images/icon/start.svg";
import Image from "next/image";

const CalendarStrip = () => {
    const [activeIndex, setActiveIndex] = useState(3);

    const days = [
        { day: "Sun", date: "3/11" },
        { day: "Mon", date: "3/12" },
        { day: "Tue", date: "3/13" },
        { day: "Wed", date: "3/14" },
        { day: "Thu", date: "3/15", hasDot: true, isGreen: true },
        { day: "Fri", date: "3/16", hasDot: true },
        { day: "Sat", date: "3/17" },
    ];

    return (
        <div className="flex justify-between items-center  rounded-2xl mb-3 ">
            {days.map((d, i) => {
                const isActive = i === activeIndex;
                return (
                    <div
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={clsx(
                            "flex flex-col items-center justify-center w-[96px] h-[79px] rounded-xl transition-all cursor-pointer border backdrop-blur-sm hover:shadow-lg  hover:shadow-blue-200 relative ",
                            isActive
                                ? "bg-white text-gray-900 shadow-lg shadow-blue-200 border-transparent  ring-blue-500/10"
                                : "bg-white/50 border-gray-50 hover:bg-white text-gray-400"
                        )}
                    >
                        <span className="text-xs font-medium text-gray-800">{d.day}</span>
                        <span className={clsx("text-sm font-bold", isActive ? "text-gray-900" : "text-gray-800")}>{d.date}</span>
                        {d.hasDot && !isActive && <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1 absolute top-1.5 right-2.5 shadow-2xl shadow-amber-400"></div>}
                        {d.hasDot && !isActive && d.isGreen && <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1 absolute top-1.5 right-2.5 shadow-2xl shadow-blue-400"></div>}
                    </div>
                );
            })}
        </div>
    );
};

const TaskRow = ({ title, label, labelType, time, timeIcon: Icon, action, actionType, status }) => {
    return (
        <div className="group flex items-center justify-between p-[12px]  mb-3 rounded-2xl hover:bg-white/50 transition-all duration-300    cursor-pointer ">
            {/* Left: Title & Subtitle */}
            <div className="flex flex-col gap-1.5 flex-2">
                <div className="flex items-center gap-3">
                    <h4 className="font-medium text-[14px] text-gray-900">{title}</h4>
                    {/* Tags */}
                    {label && (
                        <span className="text-[10px] px-2.5 py-1 bg-gray-200/50 text-gray-600 rounded-full font-semibold">
                            {label}
                        </span>
                    )}
                    {status === 'live' && (
                        <span className="text-[10px] px-2.5 py-1 bg-[#FFFFFFA6]/80 text-red-500 rounded-full font-bold flex items-center gap-1.5">
                            <span className="w-3 h-3 bg-red-500 rounded "></span> Live
                        </span>
                    )}
                </div>

                {/* Subtitle with Dot */}
                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                    <div className={clsx("w-3 h-3 rounded-sm shadow-sm", status === 'completed' ? 'bg-[#5C8FF7]' : status === 'live' ? 'bg-gradient-to-b from-[#F7E75C] to-[#CC7B1F]' : 'bg-gradient-to-b from-[#7180DF] to-[#2C49FF]')}></div>
                    <span>Hawaii Trench Warriors</span>
                </div>
            </div>

            {/* Center: Time/Status */}
            <div className="flex items-start gap-6 mr-8 min-w-[120px] justify-end flex-1 ">
                {status === 'completed' ? (
                    <div className="flex items-center gap-1.5  text-sm  py-1.5 rounded-full">
                        <div className="bg-[#18952D]/30 w-5 h-5 flex items-center justify-center rounded-full">
                            <FaCheck size={10} className="fill-current text-[#18952D] " />
                        </div>
                        <span className="text-[#18952D]">Complete</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                        {/* Logic to show different icons based on time string if needed, or pass strictly from parent */}
                        {(time?.includes('Due') || time?.includes('days')) && <FaCalendarAlt className="text-gray-400" />}
                        {(time?.includes('pm') || time?.includes('am')) && <Clock className="text-gray-400" />}
                        <span>{time}</span>
                    </div>
                )}
            </div>

            {/* Right: Action Button */}
            <div className="flex-1 flex justify-end">
                {status === "completed" ? (
                                    <div className="shadow-md shadow-gray-200 rounded-full w-fit">
                                        <button className="px-6 py-2.5 rounded-full text-white text-[10px] font-medium shadow-sm cursor-pointer
                    relative overflow-hidden flex items-center justify-center min-h-[34px]">

                                            {/* Base body */}
                                            <div className="absolute inset-0 rounded-full
                      bg-linear-to-b from-[#DDDDDD] to-[#7a7a7a]" />

                                            

                                            

                                            <span className="relative z-10">Done</span>
                                        </button>
                                    </div>
                ) : (
                    <button className={clsx(
                        "px-6 py-2.5 text-[10px] font-medium rounded-full  transition-all flex items-center gap-2 shadow-lg shadow-blue-200/50 cursor-pointer ",
                        actionType === 'primary'
                            ? 'bg-linear-to-b from-[#5C8FF7] to-[#276AEE] text-white'
                            : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'
                    )}>
                        {action === 'Upload' && <FaLongArrowAltUp className="bg-white/40 p-1 rounded-full" size={20} />}
                        {action === 'Remind Me' && <TbBellFilled size={20} className="bg-white/40 p-1 rounded-full" />}
                        {action === 'Start' && <Image src={startIcon} width={16} height={16} alt="Start" />}
                        {action}
                    </button>
                )}
            </div>
        </div>
    );
};

const TodaysTasks = () => {
    return (
        <div className="">

            <div className=" px-6 pt-6 rounded-2xl shadow-sm border border-gray-100 bg-white/20 backdrop-blur-sm">
                <SectionHeader title="Todays tasks" actionText="View Entire Schedule" />
                <CalendarStrip />

                <div className="flex flex-col">
                    <TaskRow
                        title="Linebacker Drills"
                        label="Video submission required"
                        time="Due Today"
                        action="Upload"
                        actionType="primary"
                    />
                    <TaskRow
                        title="University Of Oregon Virtual Camp"
                        status="live"
                        time="5:00 pm"
                        action="Remind Me"
                        actionType="primary"
                    />
                    <TaskRow
                        title="QB Fundamentals"
                        status="completed"
                        time=""
                        action="Done"
                    />
                    <TaskRow
                        title="Practice Reading Offense Quiz"
                        time="3 days left"
                        action="Start"
                        actionType="primary"
                    />
                </div>
            </div>
        </div>
    );
};

export default TodaysTasks;
