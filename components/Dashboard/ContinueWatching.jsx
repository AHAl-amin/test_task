"use client";

import SectionHeader from "./SectionHeader";
import { Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaCalendar, FaCalendarAlt } from "react-icons/fa";

const VideoCard = ({ title, status, progress, dueDate, image, videoUrl }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3 min-w-[200px] flex-1">
            <div className="relative h-28 rounded-xl overflow-hidden group cursor-pointer">
                <video
                    ref={videoRef}
                    src={videoUrl}
                    poster={image}
                    className="w-full h-full object-cover rounded-xl"

                    playsInline
                    onPause={() => setIsPlaying(false)}
                >
                    Your browser does not support the video tag.
                </video>

                {/* Custom Play Button Overlay - Only visible when not playing */}
                {!isPlaying && (
                    <div
                        className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center z-10"
                        onClick={handlePlay}
                    >
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/60 flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                            <Play size={16} fill="white" className="text-white ml-1" />
                        </div>
                    </div>
                )}
            </div>

            <div>
                <h4 className="font-bold text-xs text-gray-800 line-clamp-2 min-h-[32px]">{title}</h4>
            </div>

            <div className="mt-auto">
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className={`h-full rounded-full ${status === 'Complete' ? 'bg-green-500' : 'bg-gradient-to-r from-[#7180DF] to-[#2C49FF]'}`}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5 mt-1.5">
                    <span className="flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-sm ${status === 'Complete' ? 'bg-green-500' : 'bg-[#2C49FF]'}`}></span>
                        {progress}% Complete
                    </span>
                    <span className="flex items-center gap1 text-xs"><FaCalendarAlt className="me-1.5" /> <span>{dueDate}</span></span>
                </div>
            </div>
        </div>
    );
};

const ContinueWatching = () => {
    const items = [
        {
            title: "Review Approach Feedback",
            progress: 70,
            dueDate: "Due Today",
            image: "https://images.unsplash.com/photo-1574602904316-f84f62477265?q=80&w=600&auto=format&fit=crop",
            videoUrl: "https://v.ftcdn.net/01/43/50/73/240_F_143507322_Mz50QeuHAO2f5in4cb58a9XuVEQZc38o_ST.mp4"
        },
        {
            title: "Review Ghost Rush Technique feedback",
            progress: 40,
            dueDate: "Due Tomorrow",
            image: "https://images.unsplash.com/photo-1574602904329-56e2f95fb15e?q=80&w=600&auto=format&fit=crop",
            videoUrl: "https://v.ftcdn.net/01/43/50/73/240_F_143507322_Mz50QeuHAO2f5in4cb58a9XuVEQZc38o_ST.mp4"
        },
        {
            title: "Film Breakdown: Elite Pass Rush",
            progress: 70,
            dueDate: "Due Today",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
            videoUrl: "https://v.ftcdn.net/01/43/50/73/240_F_143507322_Mz50QeuHAO2f5in4cb58a9XuVEQZc38o_ST.mp4"
        }
    ];

    return (
        <div className="mb-8">
            <SectionHeader title="Continue Where You Left Off" actionText="View More" />
            <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
                {items.map((item, i) => (
                    <VideoCard key={i} {...item} />
                ))}
            </div>
        </div>
    );
};

export default ContinueWatching;
