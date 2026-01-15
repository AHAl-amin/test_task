"use client";

import { useRouter } from "next/navigation";
import { Ghost, ArrowLeft } from "lucide-react";


export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center  text-center px-4">
            {/* Animated Icon */}
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-75"></div>
                <div className="relative bg-white p-6 rounded-full shadow-xl animate-bounce">
                    <Ghost className="w-20 h-20 text-blue-300" />
                </div>
            </div>

            {/* Text Content */}
            <h1 className="text-9xl font-bold text-gray-900 mb-2">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                Page Not Found
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
                Oops! The page you are looking for seems to have wandered off into the unknown.
            </p>

            {/* Action Button */}
            <button
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-b from-[#5C8FF7] to-[#276AEE]  text-white rounded-xl font-medium shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
                <ArrowLeft size={20} />
                Back
            </button>
        </div>
    );
}
