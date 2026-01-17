"use client";

import SectionHeader from "./SectionHeader";
import { Heart, MessageSquare, Reply, Share2, MoreVertical, PlayCircle, Play, CirclePlay, FilePenLine } from "lucide-react";
import { BsChatSquareDots } from "react-icons/bs";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { LiaShareSquareSolid } from "react-icons/lia";
import sharIcon from "@/public/images/icon/elements.svg";
import { FaCirclePlay } from "react-icons/fa6";

const VideoPreview = ({ poster, videoUrl }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <div className="relative w-full h-48 rounded-xl overflow-hidden bg-black group cursor-pointer" onClick={handlePlay}>
            <video
                ref={videoRef}
                src={videoUrl}
                poster={poster}
                className="w-full h-full object-cover"
                playsInline
                onEnded={() => setIsPlaying(false)}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
            />

            {/* Custom Play Button Overlay */}
            {!isPlaying && (
                <>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center z-10">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md  flex items-center justify-center transition-transform shadow-[inset_1.3px_1.3px_0px_0px_rgba(255,255,255,0.6),inset_-1.3px_-1.3px_0px_0px_rgba(255,255,255,0.4)]">
                                    <FaCirclePlay size={22} fill="white" className="text-white" />
                                </div>
                    </div>
                    {/* Text Overlay - Only visible when not playing (or can keep it, but usually cleaner to hide) */}
                    <div className="absolute bottom-4 right-4 text-right z-20 pointer-events-none">
                        <h2 className="text-2xl font-black text-white uppercase italic leading-none">COACH G<br />COACH MC</h2>
                        <p className="text-[10px] text-white font-bold bg-black/50 px-2 py-1 rounded inline-block mt-1">TUESDAYS, 7 PM ET | FA</p>
                    </div>
                </>
            )}
        </div>
    );
};

const AnnouncementsPreview = () => {
    return (
        <div className="mb-8 shadow-inner shadow-white/70  rounded-[24px]   bg-white/20 backdrop-blur-sm border border-gray-100">

            <div className="flex items-center justify-between mb-4 bg-white/40 rounded-t-[24px] p-4">
                <h3 className="text-xl font-semibold text-[#141B34]">Announcements preview</h3>
                <button
                    className="px-5 py-[10px] text-[10px] font-medium bg-linear-to-b from-[#5C8FF7] to-[#276AEE] text-[#FFFFFF]  rounded-full  transition-colors"

                >
                    View More
                </button>
            </div>

        <div className="px-4 pb-4">
                <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop" alt="Sam Guy" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 className="text-[16px] font-bold text-gray-900">Sam Guy <span className="text-gray-400 font-normal">@samguy</span></h4>
                            <p className="text-[10px] text-gray-400">2 hour ago</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Live video session</h3>
                    <p className="text-sm text-[#5C8FF7] font-medium mb-3">
                        COACH GORDAN <span className="text-gray-400">&</span> COACH MCCULLUM <span className="text-gray-500">Live video session</span>
                    </p>

                    <VideoPreview
                        poster="https://i.ibb.co.com/qFVFyLVV/Screenshot-2026-01-17-233057.png"
                        videoUrl="https://v.ftcdn.net/01/43/50/73/240_F_143507322_Mz50QeuHAO2f5in4cb58a9XuVEQZc38o_ST.mp4"
                    />
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-gradient-to-b  from-[#FF6565] to-[#EC4213] text-white text-[10px] font-medium rounded-full flex items-center gap-1 hover:bg-red-600 transition-colors space-x-2 cursor-pointer">
                            <CirclePlay size={20} /> <span>join LIVE</span>
                        </button>
                        <button className="px-4 py-2 bg-[#457FF326] text-blue-500 text-[10px] font-bold rounded-full flex items-center gap-1 hover:bg-blue-100 transition-colors">
                            <FilePenLine size={20} /> RSVP to Practice
                        </button>
                    </div>

                    <div className="flex items-center gap-4 text-gray-400 text-[10px] font-medium">
                        <span className="flex items-center gap-1 hover:text-red-500 cursor-pointer transition-colors"><FaHeart size={16} className="text-[#FF3939]" /> 22 Likes</span>
                        <span className="flex items-center gap-1 hover:text-blue-500 cursor-pointer transition-colors"><BsChatSquareDots size={16} /> 24 Replies</span>
                    </div>
                </div>
            </div>

            {/* Second Post Preview (Casual Ride) */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 mt-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop" alt="Sam Guy" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 className="text-[16px] font-bold text-[#0F1419]">Sam Guy <span className="text-gray-400 font-normal">@samguy</span></h4>
                            <p className="text-[10px] text-gray-400">8 hour ago</p>
                        </div>
                    </div>
                    <div className="flex gap-2 text-gray-400 items-center">
                        <Image src={sharIcon} width={16} height={16} alt="Share" className="cursor-pointer hover:text-gray-600 transition-colors" />
                        <MoreVertical size={16} />
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#0F1419] mb-1">Casual Ride!</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">
                        Join us for our Friday morning casual bike ride around central park! We will meet you all @6AM EST<br />
                        near Great Lawn Softball Field 7!
                    </p>

                    <div className="relative w-full h-50 rounded-xl overflow-hidden bg-blue-50">
                        <iframe
                            src="https://www.openstreetmap.org/export/embed.html?bbox=-73.97,-40.78,-73.96,40.79&layer=mapnik&marker=40.7812,-73.9665"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            title="Map of Great Lawn, Central Park"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AnnouncementsPreview;
