import { TrendingUp, TrendingDown, Users, ChevronUp } from "lucide-react";

const StatCard = ({ title, value, subValue, trend, icon: Icon, type = "normal", progress }) => {
    return (
        <div className="bg-card p-[1.10rem] rounded-[1.5rem] shadow-sm flex items-center justify-between border border-gray-100 min-w-[200px]">

            {type === "normal" && (
                <div className="flex gap-4 items-center w-full">
                    {Icon && (
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">
                            <Icon size={20} />
                        </div>
                    )}
                    <div>
                        <p className="text-xs text-gray-400 font-medium mb-1">{title}</p>
                        <div className="flex items-end gap-2">
                            <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
                            {subValue && (
                                <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-full flex items-center gap-0.5 ${trend === 'up' ? 'text-green-600 bg-green-50' : 'text-gray-500'}`}>
                                    {trend === 'up' && <ChevronUp size={12} />}
                                    {subValue}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {type === "progress" && (
                <div className="flex items-center justify-between w-full">
                    <div>
                        <p className="text-xs text-gray-400 font-medium mb-1">{title}</p>
                        <p className="text-[10px] text-gray-400">{subValue}</p>
                    </div>
                    <div className="relative w-12 h-12">
                        {/* Simple Circular Progress Placeholder */}
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="24" cy="24" r="20" stroke="#f3f4f6" strokeWidth="4" fill="transparent" />
                            <circle cx="24" cy="24" r="20" stroke={progress > 50 ? "#22c55e" : "#3b82f6"} strokeWidth="4" fill="transparent" strokeDasharray={125.6} strokeDashoffset={125.6 - (125.6 * progress) / 100} strokeLinecap="round" />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-gray-700">
                            {progress}%
                        </span>
                    </div>
                </div>
            )}

        </div>
    );
};

export default StatCard;
