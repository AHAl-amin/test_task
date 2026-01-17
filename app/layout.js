import { Inter, Poppins } from "next/font/google"; // Keep fonts
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import bg from "@/public/images/background.png";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Athlete Dashboard",
  description: "Performance tracking for athletes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=""
      >
        <body className="relative w-screen overflow-x-hidden bg-linear-to-tr from-[#CBE1FF]/50 via-[#E7F2F5] to-[#E7F2F5]">
      <div className={` text-foreground max-w-[1440px] mx-auto 2xl:px-0 xl:px-4 px-4 flex flex-col `}>
<div className='absolute -top-40 -right-32 rounded-full bg-radial from-[#BAD1FF] via-[#BAD1FF]/10 to-transparent w-[800px] h-[800px]'></div>
        <div className='absolute top-[0%] -left-[300px] rounded-full bg-radial from-[#CBE1FF] via-[#CBE1FF]/20 to-transparent w-[700px] h-[700px]'></div>
        <div className='absolute top-[15%] -right-[200px] rounded-full bg-radial from-[#AFF4FA] via-transparent to-transparent w-[900px] h-[1200px]'></div>
        <Navbar  />


        <div className="flex   gap-2 md:gap-6 pb-2 ">
          <Sidebar />
          <main className="flex-1 overflow-y-auto pt-3 hide-scrollbar relative rounded-2xl  ">
            {children}
          </main>
        </div>
      </div>
      </body>
    </html>
  );
}
