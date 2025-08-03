// ✅ components/home/VideoSection.tsx
'use client'

import { motion } from 'framer-motion'

import Link from 'next/link'


export default function VideoSection() {
  
    return (
        <section className="bg-gray-100 py-20" dir="rtl">
            <br />
            <div className="w-full max-w-[1400px] mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center">

                    {/* ✅ النصوص */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl text-center font-bold text-gray-800 mb-6">
                            شاهد جودتنا بنفسك
                        </h2>
                        <br />
                        <p className="text-lg  text-center text-gray-600 leading-relaxed">
                            نحن لا نتحدث عن الجودة فقط، بل نريها لك. شاهد فيديوهاتنا وتعرف على مراحل صناعة مراتب الراحة التي تضمن لك نوماً هنيئاً.
                        </p>
                        <br />
                        {/* ✅ النصوص */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            
                            <br />
                            <Link href="/videos">
                                <div className="flex justify-center">
                                    <div className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-3 px-6 rounded-full text-lg w-fit shadow-md">
                                        عرض كل الفيديوهات
                                    </div>
                                </div>
                            </Link>


                        </motion.div>
                    </motion.div>

                    {/* ✅ مشغل الفيديو بدل الصورة الثابتة */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-xl mx-auto my-8 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-2 hover:border-purple-400"
                    >
                        <video
                            controls
                            className="w-full h-[400px] object-cover rounded-xl"
                        >
                            {/* ✅ الفيديو موجود داخل مجلد public/videos/ */}
                            <source src="/videos/8.mp4" type="video/mp4" />
                            المتصفح لا يدعم تشغيل الفيديو.
                        </video>
                    </motion.div>
                </div>
            </div>
            <br />
        </section>
    )
}
