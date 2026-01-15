import ContinueWatching from "@/components/Dashboard/ContinueWatching";
import TodaysTasks from "@/components/Dashboard/TodaysTasks";
import RecentActivity from "@/components/Dashboard/RecentActivity";
import CoachFeedback from "@/components/Dashboard/CoachFeedback";
import AnnouncementsPreview from "@/components/Dashboard/AnnouncementsPreview";
import Leaderboard from "@/components/Dashboard/Leaderboard";
import HeroSection from "@/components/Dashboard/HeroSection";



export default function Home() {
  return (
    <div className="flex flex-col pb-4 h-full">
      {/* Hero Section */}
      
<HeroSection /> 
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Left Column (Main) */}
        <div className="lg:col-span-8 flex flex-col gap-2">
          <ContinueWatching />
          <TodaysTasks />
          <AnnouncementsPreview />
        </div>

        {/* Right Column (Sidebar-ish) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <RecentActivity />
          <CoachFeedback />
          <Leaderboard />
          
        </div>
        {/* <HeroSection /> */}

      </div>
    </div>
  );
}
