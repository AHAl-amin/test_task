"use client";

import SectionHeader from "./SectionHeader";
import { Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaCalendar, FaCalendarAlt } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

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
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3  min-w-[200px] flex-1">
            <div className="relative max-h-[249px] rounded-xl overflow-hidden group cursor-pointer">
                <video
                    ref={videoRef}
                    src={videoUrl}
                    poster={image}
                    className="w-full h-[127px] object-cover rounded-xl"
                    onClick={()=>{
                        videoRef.current.pause();
                        setIsPlaying(false)
                    }}
                    playsInline
                    onPause={() => setIsPlaying(false)}
                >
                    Your browser does not support the video tag.
                </video>

                {/* Custom Play Button Overlay - Only visible when not playing */}
                {!isPlaying && (
                    <div className="w-full h-full flex items-center justify-center  absolute inset-0 ">
                        <div className=" rounded-full  inset-0 w-fit h-fit">
                            <div
                                className=" bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center rounded-full"
                                onClick={handlePlay}
                            >
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md  flex items-center justify-center transition-transform shadow-[inset_1.3px_1.3px_0px_0px_rgba(255,255,255,0.6),inset_-1.3px_-1.3px_0px_0px_rgba(255,255,255,0.4)]">
                                    <FaCirclePlay size={22} fill="white" className="text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>


            <div className="mt-auto space-y-3">
                <div>
                    <h4 className="font-medium text-[12px] text-[#141B34] w-full  ">{title}</h4>
                </div>
                <div className="w-full h-2.5 bg-[#C4D4FD] rounded-full overflow-hidden">
                    <div
                        className={`h-full rounded-full ${status === 'Complete' ? 'bg-green-500' : 'bg-gradient-to-r from-[#7180DF] to-[#2C49FF]'}`}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5 ">
                    <span className="flex items-center gap-1">
                        <span className={`w-3 h-3 rounded-sm ${status === 'Complete' ? 'bg-green-500' : 'bg-gradient-to-b from-[#7180DF] to-[#2C49FF] '}`}></span>
                        {progress}% Complete
                    </span>
                    <span className="flex items-center gap1 text-xs"><FaCalendarAlt className="me-1.5 text-gray-400" /> <span>{dueDate}</span></span>
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
            progress: 10,
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
        <div className=" ">
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
