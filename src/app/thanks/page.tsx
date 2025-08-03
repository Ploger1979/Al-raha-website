// ✅ app/thanks/page.tsx

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ThanksPage() {
    return (
        <>
            <Navbar />

            <div className="relative min-h-screen bg-gradient-to-tr from-[#3b1f99] via-[#602bb7] to-[#9e4ff1] text-white flex items-center justify-center">
                {/* ✅ طبقة شفافة فوق الخلفية */}
                <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

                {/* ✅ محتوى الشكر */}
                <div className="relative z-20 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl mx-auto bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-8"
                    >
                        <CheckCircle className="w-14 h-14 mx-auto text-green-400 mb-4" />
                        <h1 className="text-3xl font-bold mb-4"> شكراً لتواصلك معنا!</h1>
                        <br />
                        <p className="text-lg text-white/80 mb-6">
                            لقد استلمنا رسالتك وسنقوم بالرد عليك في أقرب وقت ممكن.
                        </p>
                        <br/>
                        <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition">
                            العودة إلى الصفحة الرئيسية
                        </Link>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </>
    );
}
