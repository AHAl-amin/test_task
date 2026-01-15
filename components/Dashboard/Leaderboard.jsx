import SectionHeader from "./SectionHeader";
import { User } from "lucide-react";

const LeaderboardItem = ({ rank, name, points, image }) => (
    <div className="flex items-center justify-between mb-4 last:mb-0 p-2 hover:bg-white hover:shadow-sm rounded-xl transition-all">
        <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-gray-400 w-4">#{rank}</span>
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div>
                <h4 className="text-xs font-bold text-gray-900">{name}</h4>
                <p className="text-[10px] text-gray-400">{points}</p>
            </div>
        </div>
    </div>
);

const Leaderboard = () => {
    const leaders = [
        { rank: 4, name: "Jane Cooper", points: 210, image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop" },
        { rank: 5, name: "Ronald Richards", points: 197, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" },
        { rank: 6, name: "Marvin McKinney", points: 185, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop" },
        { rank: 7, name: "Kristin Watson", points: 184, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop" },
        { rank: 8, name: "Esther Howard", points: 172, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop" },
    ];

    return (
        <div className="bg-transparent">
            <SectionHeader title="Leaderboard" actionText="View More" />

            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 mb-6">
                <p className="text-center font-bold text-gray-800 mb-6">Jan 2025</p>

                {/* Top 3 Visual - Simplified for CSS only without complex absolute positioning hell */}
                <div className="flex items-end justify-center gap-4 mb-8 h-40">
                    {/* 2nd Place */}
                    <div className="flex flex-col items-center z-10">
                        <div className="relative mb-2">
                            <div className="w-12 h-12 rounded-full border-2 border-gray-200 overflow-hidden shadow-md">
                                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover" />
                            </div>
                            <span className="absolute -top-2 -right-1 text-2xl font-black text-gray-200 drop-shadow-sm font-outline-2">#2</span>
                        </div>
                        <div className="bg-gradient-to-t from-gray-200 to-gray-100 w-16 h-24 rounded-t-lg flex flex-col items-center justify-end pb-2 shadow-inner">
                            <div className="text-[10px] font-bold text-gray-600 text-center">Cameron C.</div>
                            <div className="text-[10px] font-bold text-gray-500 bg-white/50 px-2 rounded-full mt-1">293</div>
                        </div>
                    </div>

                    {/* 1st Place */}
                    <div className="flex flex-col items-center z-20 -mx-2">
                        <div className="relative mb-2">
                            <div className="w-16 h-16 rounded-full border-4 border-blue-500 overflow-hidden shadow-lg transform -translate-y-2">
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop" className="w-full h-full object-cover" />
                            </div>
                            <span className="absolute -top-4 -right-2 text-3xl font-black text-blue-500 drop-shadow-sm">#1</span>
                        </div>
                        <div className="bg-gradient-to-t from-blue-500 to-blue-400 w-20 h-32 rounded-t-xl flex flex-col items-center justify-end pb-4 shadow-lg text-white relative overflow-hidden">
                            <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-white/10 to-transparent"></div>
                            <div className="text-xs font-bold text-center leading-tight">Marcus<br />Williams</div>
                            <div className="text-xs font-bold text-blue-500 bg-white px-2 py-0.5 rounded-full mt-1 shadow-sm">327</div>
                        </div>
                    </div>

                    {/* 3rd Place */}
                    <div className="flex flex-col items-center z-10">
                        <div className="relative mb-2">
                            <div className="w-12 h-12 rounded-full border-2 border-orange-200 overflow-hidden shadow-md">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop" className="w-full h-full object-cover" />
                            </div>
                            <span className="absolute -top-2 -right-1 text-2xl font-black text-orange-200 drop-shadow-sm">#3</span>
                        </div>
                        <div className="bg-gradient-to-t from-orange-200 to-orange-100 w-16 h-20 rounded-t-lg flex flex-col items-center justify-end pb-2 shadow-inner">
                            <div className="text-[10px] font-bold text-gray-600 text-center">Cameron C.</div>
                            <div className="text-[10px] font-bold text-gray-500 bg-white/50 px-2 rounded-full mt-1">238</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    {leaders.map((l, i) => (
                        <LeaderboardItem key={i} {...l} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
