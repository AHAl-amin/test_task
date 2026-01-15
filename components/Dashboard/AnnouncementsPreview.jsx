"use client";

import SectionHeader from "./SectionHeader";
import { Heart, MessageSquare, Reply, Share2, MoreVertical, PlayCircle, Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { LiaShareSquareSolid } from "react-icons/lia";

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
                        <PlayCircle size={48} className="text-white fill-white/20" />
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
        <div className="mb-8">
            <SectionHeader title="Announcements preview" actionText="View More" />

            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop" alt="Sam Guy" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-gray-900">Sam Guy <span className="text-gray-400 font-normal">@samguy</span></h4>
                            <p className="text-[10px] text-gray-400">2 hour ago</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Live video session</h3>
                    <p className="text-xs text-blue-500 font-medium mb-3">
                        COACH GORDAN <span className="text-gray-400">&</span> COACH MCCULLUM <span className="text-gray-500">Live video session</span>
                    </p>

                    <VideoPreview
                        poster="https://i.ibb.co.com/NgS18SHX/Screenshot-2026-01-15-213340.png"
                        videoUrl="https://v.ftcdn.net/01/43/50/73/240_F_143507322_Mz50QeuHAO2f5in4cb58a9XuVEQZc38o_ST.mp4"
                    />
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <button className="px-4 py-1.5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center gap-1 hover:bg-red-600 transition-colors">
                            <PlayCircle size={12} fill="currentColor" /> JOIN LIVE
                        </button>
                        <button className="px-4 py-1.5 bg-blue-50 text-blue-500 text-[10px] font-bold rounded-full flex items-center gap-1 hover:bg-blue-100 transition-colors">
                            <Reply size={12} /> RSVP to Practice
                        </button>
                    </div>

                    <div className="flex items-center gap-4 text-gray-400 text-[10px] font-medium">
                        <span className="flex items-center gap-1 hover:text-red-500 cursor-pointer transition-colors"><Heart size={14} /> 22 Likes</span>
                        <span className="flex items-center gap-1 hover:text-blue-500 cursor-pointer transition-colors"><MessageSquare size={14} /> 24 Replies</span>
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
                            <h4 className="text-sm font-bold text-gray-900">Sam Guy <span className="text-gray-400 font-normal">@samguy</span></h4>
                            <p className="text-[10px] text-gray-400">8 hour ago</p>
                        </div>
                    </div>
                    <div className="flex gap-2 text-gray-400 items-center">
                        <LiaShareSquareSolid  size={20} />
                        <MoreVertical size={16} />
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Casual Ride!</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3">
                        Join us for our Friday morning casual bike ride around central park! We will meet you all @6AM EST<br />
                        near Great Lawn Softball Field 7!
                    </p>

                    <div className="relative w-full h-40 rounded-xl overflow-hidden bg-blue-50">
                        {/* Map Placeholder */}
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop")' }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-white flex items-center justify-center shadow-lg">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementsPreview;
