import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { User } from "lucide-react";

// Helper for diamond shape avatar
const DiamondAvatar = ({ src, alt,i }) => (
    <div className={`w-10 h-10 flex items-center justify-center filter drop-shadow-sm ${i==0 || i==1 ? 'ms-5 me-3':'ms-5 me-3'}`}>
        <div className="w-8 h-8 relative">
            <div className={`absolute inset-0  overflow-hidden border-2 border-white shadow-sm bg-gray-200 ${i==0 || i==1 ? 'transform rotate-45 rounded-[8px] scale-[1.75] transition-all':'border-[#FF0033] rounded-full scale-[1.5]'}`}>
                <Image width={100} height={100} src={src} alt={alt} className={`w-full h-full object-cover transform ${i==0 || i==1 ? '-rotate-45':''}`} />
            </div>
        </div>
    </div>
);

const LeaderboardItem = ({ rank, name, points, image,i }) => (
    <div className="flex items-center justify-between mb-3 px-4 py-3 bg-white hover:shadow-md rounded-2xl transition-all">
        <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-gray-400 w-4">#{rank}</span>
            <DiamondAvatar src={image} alt={name} i={i} />
            <div>
                <h4 className="text-sm font-bold text-gray-900">{name}</h4>
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
        <div className="bg-white/30 shadow shadow-blue-200 px-4 py-5 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Leaderboard</h3>
                <button className="px-4 py-2.5 bg-linear-to-b from-[#5C8FF7] to-[#276AEE] text-white text-xs font-semibold rounded-full  transition-colors hover:cursor-pointer">
                    View More
                </button>
            </div>

            <div className="rounded-2xl relative overflow-hidden ">


                <div className="relative z-10">
                    <div className="py-5 rounded-2xl mb-5" style={{
                        backgroundSize: "cover",
                        backgroundPosition: "bottom",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: "url('/section/Frame 2147238986.svg')",
                    }}>

                    {/* Top 3 Podium */}
                        <p className="text-center font-bold text-gray-800 mb-8">Jan 2025</p>
                    <div className="flex items-end justify-center gap-2 mb-32 ">
                        {/* 2nd Place */}
                        <div className="flex flex-col items-center -mr-4 z-10 mb-4">
                            <div className="relative w-[150px] h-[160px]  transition-transform duration-300">
                                <Image width={200} height={200} src="/section/Group 2085665490.png" alt="2nd Place" className="w-full h-[200px] object-contain drop-shadow-lg" />
                            </div>
                        </div>

                        {/* 1st Place */}
                        <div className="flex flex-col items-center z-20">
                            <div className="relative w-[200px] h-[200px] transition-transform duration-300">
                                <Image width={200} height={200} src="/section/Group 2085665474.png" alt="1st Place" className="w-full h-[300px] object-contain drop-shadow-xl -mt-10" />
                            </div>
                        </div>

                        {/* 3rd Place */}
                        <div className="flex flex-col items-center -ml-4 z-10 mb-4">
                            <div className="relative w-[150px] h-[160px]  transition-transform duration-300">
                                <Image width={200} height={200} src="/section/Group 2085665491.png" alt="3rd Place" className="w-full h-[200px] object-contain drop-shadow-lg" />
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* List Items */}
                    <div className="flex flex-col">
                        {leaders.map((l, i) => (
                            <LeaderboardItem key={i} {...l} i={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
