import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { ListFilter } from "lucide-react";

const ActivityItem = ({ icon: Icon, title, description, time, type }) => {
    return (
        <div className="flex gap-4 mb-6 last:mb-0">
            <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <Image width={50} height={50} src="/famicons_logo-vue.png" alt={title} className="w-1/2 h-1/2" />
                </div>
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <h4 className="font-bold text-sm text-gray-900">{title}</h4>
                    <span className="text-[10px] text-[#2C4AFF]">{time}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{description}</p>
                {type === "feedback" && (
                    <button className="mt-2 px-3 py-3 bg-linear-to-b from-[#5C8FF7] to-[#276AEE] text-white text-[10px] font-bold rounded-full">
                        View Feedback
                    </button>
                )}
            </div>
        </div>
    );
};

const RecentActivity = () => {
    return (
        <div className="mb-6 bg-blue-50/50 p-6 rounded-[2rem] border border-blue-100">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
                    <span className="bg-red-50 text-red-500 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span> LIVE
                    </span>
                </div>

                <div className="flex gap-2">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-blue-500 shadow-sm">
                        <ListFilter size={14} />
                    </button>
                    <button className="px-3 py-1 bg-linear-to-b from-[#5C8FF7] to-[#276AEE] text-white text-xs font-bold rounded-full shadow-md shadow-blue-200">
                        View More
                    </button>
                </div>
            </div>

            <div className="flex flex-col">
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
