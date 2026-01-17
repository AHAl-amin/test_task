import Image from "next/image";
import SectionHeader from "./SectionHeader";

import { PiFaders } from "react-icons/pi";

const ActivityItem = ({ icon: Icon, title, description, time, type }) => {
    return (
        <div className="flex gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-white/40 cursor-default">
            <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                    {type === "feedback" ? (
                        <Image width={50} height={50} src="/famicons_logo-vue2.png" alt={title} className="w-1/2 h-1/2" />
                    ) : (
                        <Image width={50} height={50} src="/famicons_logo-vue.png" alt={title} className="w-1/2 h-1/2" />
                    )}
                </div>
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <h4 className="font-bold text-sm text-gray-900 w-2/3">{title}</h4>
                    <span className="text-[10px] text-[#2C4AFF]">{time}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{description}</p>
                {type === "feedback" && (
                    <button className="mt-2 px-5 py-2.5 bg-linear-to-b from-[#5C8FF7] to-[#276AEE] text-white text-[10px] font-bold rounded-full">
                        View Feedback
                    </button>
                )}
            </div>
        </div>
    );
};

const RecentActivity = () => {
    return (
        <div className="px-6 py-4 rounded-[24px]   bg-white/20 backdrop-blur-sm border border-gray-100 h-fit">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <h3 className="2xl:text-xl text-[16px] font-semibold text-[#141B34]">Recent Activity</h3>
                    <span className="bg-red-200 text-red-500 text-[10px] font-bold  p-1 rounded-full flex items-center gap-1">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    </span>
                    <span className="text-[10px] text-red-500 font-bold">LIVE</span>
                </div>

                <div className="flex gap-2 items-center">
                    <button className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-500 shadow-sm">
                        <PiFaders size={20} />
                    </button>
                    <button className="px-5 py-[10px] text-[10px] font-medium bg-linear-to-b from-[#5C8FF7] to-[#276AEE] text-[#FFFFFF] rounded-full shadow-md shadow-blue-200">
                        View More
                    </button>
                </div>
            </div>

            <div className="flex flex-col -mx-3">
                <ActivityItem
                    title="Coach Bronson added a task"
                    description="Check the Itinerary for optimization suggestions."
                    time="11 min ago"
                />
                <ActivityItem
                    title="Coach Johnny gave feedback on your submission"
                    description=""
                    time="1h ago"
                    type="feedback"
                />
                <ActivityItem
                    title="Coach Sarah replied to your comment"
                    description="Check the Itinerary for optimization suggestions."
                    time="1d ago"
                />
            </div>
        </div>
    );
};

export default RecentActivity;
