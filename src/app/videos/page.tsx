'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function VideosPage() {
    const localVideos = Array.from({ length: 18 }, (_, i) => `/videos/${i + 1}.mp4`);

    return (
        <>
            <Navbar />

            {/* ✅ الهيدر مع الخلفية المتدرجة + طبقة شفافة */}
            <section className="relative min-h-[30vh] flex flex-col items-center justify-center bg-gradient-to-tr from-[#3b1f99] via-[#602bb7] to-[#9e4ff1] text-white text-center px-4">
                <br /><br /><br /><br />
                {/* ✅ طبقة شفافة للتباين */}
                <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />

                <div className="relative z-10 max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        معرض الفيديوهات
                    </motion.h1>
                      <br/>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg"
                    >
                        اكتشف مراحل التصنيع والجودة في مصنع الراحة عبر هذه المقاطع.
                    </motion.p>
                </div>
                <br />
            </section>
          
            {/* ✅ خلفية كاملة بنفس تدرج الهيدر + تـوسيط شبكة الفيديوهات */}
            <main className="bg-gradient-to-tr from-[#3b1f99] via-[#602bb7] to-[#9e4ff1] py-20"><br />
                <div className="w-full flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 max-w-7xl w-full">
                        {localVideos.map((src, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl border overflow-hidden shadow-md transition-transform hover:scale-[1.02] duration-300"
                            >
                                <video
                                    controls
                                    className="w-full aspect-video object-cover rounded-lg"
                                    poster="/assets/Rahr-splash.png"
                                >
                                    <source src={src} type="video/mp4" />
                                    المتصفح لا يدعم تشغيل الفيديو.
                                </video>
                            </div>
                        ))}
                    </div>
                </div>
                <br />
            </main>

            <Footer />
        </>
    );
}
