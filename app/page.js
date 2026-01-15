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
      <div className="grid grid-cols-1 gap-8">

        {/* SECTION 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 grid gap-4">
            <ContinueWatching />
            <TodaysTasks />
          </div>

          <div className="lg:col-span-1 grid gap-4">
            <RecentActivity />
            <CoachFeedback />
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <AnnouncementsPreview />
          <Leaderboard />
        </div>

      </div>

    </div>
  );
}
