'use client'; // ✅ هذا المكون يعمل على جهة المستخدم (Client Side)

import Image from 'next/image'; // ✅ مكون Image من Next.js لتحسين أداء الصور
import { motion } from 'framer-motion'; // ✅ مكتبة Framer Motion لإضافة الحركات
import { Phone, ArrowLeft } from 'lucide-react'; // ✅ أيقونات من مكتبة lucide-react

// ✅ مكون رئيسي يعرض القسم العلوي (Hero Section) مع دعوة للتواصل
export default function Hero() {

    // ✅ وظيفة الاتصال عند الضغط على زر "اتصل الآن"
    const handleCallNow = () => {
        window.open('tel:+218920786000', '_self');
    };

    // ✅ وظيفة فتح WhatsApp عند الضغط على زر "واتساب"
    const handleWhatsApp = () => {
        window.open('https://wa.me/218949830643', '_blank');
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#3b1f99] via-[#602bb7] to-[#9e4ff1] text-white">
            {/* ✅ طبقة خلفية شفافه لتحسين التباين بدون أن تؤثر على التفاعل */}
            <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

            {/* ✅ الحاوية الرئيسية للمحتوى */}
            <div className="container mx-auto px-4 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <br /> <br />
                    {/* ✅ العمود الأول: النصوص والعنوان والأزرار */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }} // يبدأ من اليسار وشفاف
                        animate={{ opacity: 1, x: 0 }} // يظهر تدريجيًا
                        transition={{ duration: 0.8 }}
                        className="flex justify-center items-center"
                    >
                        <br /><br /><br /><br /><br />
                        <div className="flex flex-col items-center text-center space-y-6">

                            {/* ✅ العنوان الرئيسي */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-6xl font-bold leading-tight"
                            >
                                فن صناعة الراحة
                            </motion.h1>

                            <br />

                            {/* ✅ النص الفرعي الأول */}
                            <p className="text-xl md:text-2xl font-light">
                                جودة تستحقها وراحة تليق بك
                            </p>

                            <br />

                            {/* ✅ النص الفرعي الثاني */}
                            <p className="text-base md:text-lg leading-relaxed">
                                👑مع مراتب الراحة.. نومك هايبقى زي السلطان 👑
                                <br />
                                اختر مرتبتك بعناية، واترك الباقي علينا
                            </p>

                            <br />

                            {/* ✅ الأزرار – موضوعة بشكل عمودي ومصممة بعناية */}
                            <div className="flex flex-col items-center w-full max-w-xs space-y-4 pt-4">

                                {/* ✅ زر الاتصال */}
                                <button
                                    onClick={handleCallNow}
                                    className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-3 px-6 rounded-full text-lg flex items-center justify-center w-full"
                                >
                                    <Phone className="w-5 h-5 ml-2" />
                                    اتصل الآن
                                </button>

                                <br />

                                {/* ✅ زر واتساب */}
                                <button
                                    onClick={handleWhatsApp}
                                    className="bg-green text-[#FFFFFF] hover:bg-green-500 font-bold py-3 px-6 rounded-full text-lg flex items-center justify-center border border-white w-full"
                                >
                                    <ArrowLeft className="w-5 h-5 mr-2" />
                                    Whatsapp
                                </button>

                                <br />

                                {/* ✅ جملة دعائية قصيرة أسفل الأزرار */}
                                <p className="text-md text-white mt-4">
                                    بصناعتنا_نفتخر_وبراحتكم_نعلو
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* ✅ العمود الثاني: صورة مرتبة الراحة */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }} // يظهر من اليمين
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <div className="floating-animation">
                            <Image
                                src="/assets/hero-mattress.jpg"
                                alt="مراتب الراحة"
                                width={800}
                                height={500}
                                className="rounded-2xl shadow-2xl w-full max-w-lg"
                                priority // ✅ لتحسين التحميل
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
