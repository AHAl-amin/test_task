import StatCard from "./StatCard";
import { Users, Trophy, Flame } from "lucide-react";

const StatsRow = () => {
    return (
        <div className="grid grid-cols-4 gap-4 mb-8">
            <StatCard
                title="Total Athletes"
                value="65"
                subValue="+12"
                trend="up"
                icon={Users}
            />

            <StatCard
                title="Projected Ranking"
                value="#5"
                icon={Trophy}
            />

            <StatCard
                title="Consistency Score"
                type="progress"
                subValue="Last 30 days"
                progress={65}
            />

            <StatCard
                title="Weekly Progress"
                type="progress"
                progress={35}
            />

            {/* The Streak Card is special in the design, might need to be part of the grid or separate */}
            {/* Actually, looking at the design, the Streak card is floating ON the hero/banner image or to the right of it. 
           Wait, in the design, the "Total Athletes" etc are floating *below* the hero image but overlapping? 
           OR they are just a row below it.
           Let's look closely at `uploaded_image`. 
           The Cards are inside the White container of the Hero? No, they seem to be a separate row overlapping the bottom of the hero?
           Actually, they look like they are a separate row inside a container that has the hero image.
           
           Let's re-examine image.
           The Hero "The QB Fundamentals" is a large card.
           Inside that Hero Card, at the bottom, there is a WHITE row containing the stats.
           AND there is a "Active Streak" card floating on the right side of the Hero image.
           
           Ah, I see.
           The "StatsRow" should probably be separate or *inside* the Hero component to achieve that visual style if it's "inside" the rounded container.
           It looks like the Hero Card contains the image, and then at the bottom of the Hero Card, there is a white strip with the stats.
           
           Let's adjust. I'll put the stats INSIDE the HeroSection for better layout control to match the design.
       */}
        </div>
    );
};

export default StatsRow;
