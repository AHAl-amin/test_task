import SectionHeader from "./SectionHeader";
import { Upload, Bell, CheckCircle, Play } from "lucide-react";
import clsx from "clsx";

const CalendarStrip = () => {
    const days = [
        { day: "Sun", date: "3/11", active: false },
        { day: "Mon", date: "3/12", active: false },
        { day: "Tue", date: "3/13", active: false },
        { day: "Wed", date: "3/14", active: false },
        { day: "Thu", date: "3/15", active: true, hasDot: true },
        { day: "Fri", date: "3/16", active: false, hasDot: true },
        { day: "Sat", date: "3/17", active: false },
    ];

    return (
        <div className="flex justify-between items-center bg-white p-4 rounded-2xl mb-6 shadow-sm border border-gray-100">
            {days.map((d, i) => (
                <div key={i} className={clsx(
                    "flex flex-col items-center justify-center w-12 h-14 rounded-xl transition-all cursor-pointer",
                    d.active ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "hover:bg-gray-50 text-gray-400"
                )}>
                    <span className="text-xs font-medium">{d.day}</span>
                    <span className={clsx("text-sm font-bold", d.active ? "text-white" : "text-gray-800")}>{d.date}</span>
                    {d.hasDot && !d.active && <div className="w-1 h-1 bg-amber-400 rounded-full mt-1"></div>}
                </div>
            ))}
        </div>
    );
};

const TaskRow = ({ title, label, labelType, time, timeIcon: Icon, action, actionType, status }) => {
    return (
        <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-none">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm text-gray-900">{title}</h4>
                    {label && (
                        <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md font-medium">{label}</span>
                    )}
                    {status === 'live' && (
                        <span className="text-[10px] px-2 py-0.5 bg-red-50 text-red-500 rounded-md font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span> Live
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                    <div className={clsx("w-2 h-2 rounded-sm", status === 'completed' ? 'bg-green-500' : 'bg-orange-400')}></div>
                    <span>Hawaii Trench Warriors</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                {time && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                        {Icon && <Icon size={14} />}
                        <span>{time}</span>
                    </div>
                )}

                {status === 'completed' ? (
                    <div className="flex items-center gap-1 text-green-500 text-xs font-bold">
                        <CheckCircle size={14} /> Complete
                    </div>
                ) : (
                    <button className={clsx(
                        "px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all",
                        actionType === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200' : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                    )}>
                        {action === 'Upload' && <Upload size={12} />}
                        {action === 'Remind Me' && <Bell size={12} />}
                        {action === 'Start' && <Play size={12} fill="currentColor" />}
                        {action}
                    </button>
                )}

                {status === "completed" && (
                    <button className="px-4 py-1.5 rounded-full bg-gray-200 text-gray-400 text-xs font-bold">
                        Done
                    </button>
                )}
            </div>
        </div>
    );
};

const TodaysTasks = () => {
    return (
        <div className="mb-8 p-6 bg-white rounded-[2rem] shadow-sm border border-gray-100">
            <SectionHeader title="Todays tasks" actionText="View Entire Schedule" />
            <CalendarStrip />

            <div className="flex flex-col">
                <TaskRow
                    title="Linebacker Drills"
                    label="Video Breakdown Roster"
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
    );
};

export default TodaysTasks;
