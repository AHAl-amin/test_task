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
      style={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <body className={` text-foreground max-w-[1440px] mx-auto 2xl:px-0 xl:px-4 px-4 flex flex-col`}>

        <Navbar  />


        <div className="flex   gap-2 md:gap-6 pb-2 ">
          <Sidebar />
          <main className="flex-1 overflow-y-auto pt-3 hide-scrollbar relative rounded-2xl  ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
