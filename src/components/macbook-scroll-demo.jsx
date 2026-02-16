import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll.jsx";
import { motion } from "framer-motion";
import { PiChartPieSliceBold, PiLightbulbBold, PiLayoutBold, PiInfinityBold, PiCompassBold, PiSparkleBold } from "react-icons/pi";

export default function MacbookScrollDemo() {
    return (
        <div className="relative w-full overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#0B0B0F] dark:via-[#0f0f14] dark:to-[#0B0B0F] py-20">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

            {/* Vibrant Linear Gradient - Top to Bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/40 via-transparent to-transparent dark:from-orange-500/50" />
            <div className="absolute inset-0 bg-gradient-to-bl from-pink-500/35 via-transparent to-transparent dark:from-pink-500/45" />

            {/* Vibrant Linear Gradient - Bottom to Top */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/40 via-transparent to-transparent dark:from-blue-500/50" />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/35 via-transparent to-transparent dark:from-purple-500/45" />

            {/* Radial Gradient Blooms */}
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />

            <MacbookScroll
                title={
                    <div className="flex flex-col items-center">
                        <span className="font-mono text-[0.75rem] uppercase tracking-[2px] text-[#2563eb] mb-4">
                            Strategic Excellence
                        </span>
                        <h2 className="section-title text-center">
                            UI/UX is Critical for Your Success.
                        </h2>
                        <p className="text-[rgba(0,0,0,0.5)] dark:text-neutral-400 text-base md:text-lg max-w-2xl text-center font-normal leading-relaxed">
                            We build high-fidelity digital products that combine beautiful aesthetics with high-performance business logic.
                        </p>
                    </div>
                }
                badge={
                    <div className="h-10 w-10 -rotate-12 transform">
                        <Badge />
                    </div>
                }
                leftContent={<LeftSidebar />}
                rightContent={<RightSidebar />}
                secondTitle="Mastering the Digital Landscape."
                secondDescription="Our design philosophy bridges the gap between complex technical architecture and human-centered intuition, delivering products that users love and businesses trust."
                src="/src/assets/UI Lpatop.png"
                showGradient={false}
            />
        </div>
    );
}

const LeftSidebar = () => {
    return (
        <div className="flex flex-col gap-6 w-64">
            <SidebarItem
                icon={<PiChartPieSliceBold className="text-blue-500 text-xl" />}
                title="Conversion Focused"
                desc="Optimized user journeys that turn visitors into loyal customers."
            />
            <SidebarItem
                icon={<PiLightbulbBold className="text-amber-500 text-xl" />}
                title="Strategic Intuition"
                desc="Data-driven design decisions based on behavioral psychology."
            />
            <SidebarItem
                icon={<PiInfinityBold className="text-purple-500 text-xl" />}
                title="Scalable Systems"
                desc="Atomic design libraries that grow with your product ecosystem."
            />
        </div>
    );
};

const RightSidebar = () => {
    return (
        <div className="flex flex-col gap-6 w-64 text-right items-end">
            <SidebarItem
                icon={<PiLayoutBold className="text-emerald-500 text-xl" />}
                title="Pixel Perfection"
                desc="Architectural precision in grid alignment and spatial rhythm."
                right
            />
            <SidebarItem
                icon={<PiCompassBold className="text-rose-500 text-xl" />}
                title="User Centricity"
                desc="Accessibility-first approach for inclusive digital experiences."
                right
            />
            <SidebarItem
                icon={<PiSparkleBold className="text-indigo-500 text-xl" />}
                title="Motion Logic"
                desc="Cinematic transitions that guide user attention seamlessly."
                right
            />
        </div>
    );
};

const SidebarItem = ({ icon, title, desc, right }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: right ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col ${right ? 'items-end' : 'items-start'} gap-2`}
        >
            <div className={`flex items-center gap-3 ${right ? 'flex-row-reverse' : ''}`}>
                <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
                    {icon}
                </div>
                <h4 className="font-bold text-neutral-800 dark:text-neutral-200 text-sm uppercase tracking-wider">{title}</h4>
            </div>
            <p className={`text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed ${right ? 'text-right' : 'text-left'}`}>
                {desc}
            </p>
        </motion.div>
    );
};

// Peerlist-inspired High Fidelity Badge
const Badge = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl">
            <path
                d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
                fill="#00AA45"></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
                fill="#219653"></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
                fill="#24292E"></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
                fill="white"></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
                fill="#24292E"></path>
        </svg>
    );
};
