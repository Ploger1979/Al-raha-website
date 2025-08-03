'use client'; // ✅ هذا المكون يعمل فقط على جهة العميل (Client Component)

import { motion } from 'framer-motion'; // ✅ مكتبة الحركات Framer Motion
import { Button } from '@/components/ui/Button'; // ✅ زر مخصص مُصمم سابقًا داخل المشروع
import Link from "next/link"; // ✅ التنقل بين صفحات Next.js

// ✅ مكون يعرض قسم تجريبي لكلام العملاء بشكل دعائي محفز
export default function TestimonialSection() {

    return (
        <section className="relative min-h-[50vh] flex items-center justify-center text-center bg-gradient-to-tr from-[#3b1f99] via-[#602bb7] to-[#9e4ff1] text-white">

            {/* ✅ طبقة شفافة خفيفة لتحسين التباين مع الحفاظ على التفاعل */}
            <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

            {/* ✅ محتوى القسم داخل حركة framer-motion */}
            <motion.div
                initial={{ opacity: 0, y: 20 }} // ✅ يظهر تدريجيًا من الأسفل
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-20 max-w-3xl mx-auto text-white px-4 space-y-8"
            >
                {/* ✅ العنوان الرئيسي */}
                <h2 className="text-4xl md:text-5xl font-bold leading-snug">
                    مراتب الراحة ترجعك شباب 😉
                </h2>

                {/* ✅ جملة دعائية تشجيعية */}
                <p className="text-2xl md:text-3xl mb-8 leading-relaxed">
                    اسأل المجرب... وشوف الفرق بنفسك!
                </p>

                <br />

                {/* ✅ جملة ترويجية إضافية */}
                <p className="text-xl md:text-2xl leading-relaxed">
                    آراء عملائنا هي سر نجاحنا
                </p>

                <br />

                {/* ✅ زر للذهاب إلى صفحة آراء العملاء */}
                <Link href="/reviews">
                    <Button
                        className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-3 px-6 rounded-full text-lg w-fit mx-auto"
                    >
                        شوف آراء عملائنا
                    </Button>
                </Link>
            </motion.div>
        </section>
    );
}
