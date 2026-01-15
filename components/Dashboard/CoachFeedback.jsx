import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { Star } from "lucide-react";

const FeedbackItem = ({ name, role, time, rating, comment, avatar }) => {
    return (
        <div className="mb-6 last:mb-0">
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                        <img src={avatar} alt={name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-gray-900">{name}</h4>
                        <p className="text-[10px] text-gray-400">{time}</p>
                    </div>
                </div>
                <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={12} className={s <= rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"} />
                    ))}
                </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
                {comment}
            </p>
        </div>
    );
};

const CoachFeedback = () => {
    const feedbacks = [
        {
            name: "Coach Sarah",
            time: "2h ago",
            rating: 4,
            comment: "Great progress on your strength training! 💪 Stay consistent and keep challenging yourself. You're getting stronger every day — keep pushing! 🚀",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop"
        },
        {
            name: "Coach Sarah",
            time: "3h ago",
            rating: 4,
            comment: "Your squat form is looking much better! 🏋️‍♀️ Stay focused on technique each rep. Keep it up—you're building real strength! 🔥",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop"
        },
        {
            name: "Coach Sarah",
            time: "4h ago",
            rating: 4,
            comment: "Solid improvement on your squat technique! Each rep looks more confident. Keep driving forward—you're doing great! 🚀",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-blue-50/50 p-6 rounded-[2rem] border border-blue-100">
            <SectionHeader title="Coach Feedback" actionText="View More" />
            <div className="flex flex-col">
                {feedbacks.map((f, i) => (
                    <FeedbackItem key={i} {...f} />
                ))}
            </div>
        </div>
    );
};

export default CoachFeedback;
