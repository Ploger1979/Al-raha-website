'use client'; // ✅ هذا الملف يعمل على جهة المستخدم (Client Component)

import { motion } from 'framer-motion'; // ✅ مكتبة للأنيميشن
import { Star, CheckCircle, Award, Truck } from 'lucide-react'; // ✅ أيقونات من مكتبة lucide-react

// ✅ مصفوفة الميزات التي يتم عرضها في واجهة الصفحة
const features = [
    {
        icon: <Star className="w-8 h-8 text-blue-600" />, // ✅ أيقونة خاصة بالجودة
        title: 'جودة عالمية',
        description: 'منتجات بمواصفات دولية وجودة مضمونة',
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-green-600" />, // ✅ أيقونة شهادة الأيزو
        title: 'شهادة الأيزو',
        description: 'حاصلون على شهادة الأيزو في جودة الصناعة',
    },
    {
        icon: <Award className="w-8 h-8 text-yellow-600" />, // ✅ أيقونة الخبرة
        title: 'خبرة 25 عام',
        description: 'ربع قرن من الخبرة في صناعة المراتب',
    },
    {
        icon: <Truck className="w-8 h-8 text-purple-600" />, // ✅ أيقونة التوصيل
        title: 'توصيل لكل ليبيا',
        description: 'خدمة توصيل تغطي جميع المدن الليبية',
    },
];

// ✅ مكون Features لعرض قسم "لماذا تختار الراحة؟"
export default function Features() {
    return (
        <section className="relative py-20 bg-gray-100 text-gray-900">
            {/* ✅ خلفية خفيفة من الأسود الشفاف */}
            <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />

            <div className="relative z-10 px-4 flex flex-col items-center">
                <br />

                {/* ✅ العنوان الرئيسي للقسم مع تأثير حركة */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} // يبدأ غير ظاهر ومنخفض
                    whileInView={{ opacity: 1, y: 0 }} // يظهر تدريجيًا عند دخوله الشاشة
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">لماذا تختار الراحة؟</h2>
                    <br />
                    <p className="text-xl text-gray-600">
                        لأن راحتك هي أولويتنا، نقدم لك الأفضل دائمًا
                    </p>
                </motion.div>

                <br />

                {/* ✅ عرض الميزات على شكل كروت (بطاقات) – متجاوبة مع الشاشات المختلفة */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-fit mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }} // بداية الحركة لكل كرت
                            whileInView={{ opacity: 1, y: 0 }} // الظهور عند رؤية العنصر
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }} // تأخير بسيط لكل كرت لعمل تسلسل أنيق
                            whileHover={{ scale: 1.05 }} // تكبير بسيط عند المرور عليه بالماوس
                            className="bg-white text-center rounded-xl shadow-lg p-6 w-72"
                        >
                            {/* ✅ الأيقونة */}
                            <div className="mb-4 flex justify-center">
                                {feature.icon}
                            </div>

                            <br />

                            {/* ✅ عنوان الميزة */}
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {feature.title}
                            </h3>

                            {/* ✅ وصف الميزة */}
                            <p className="text-gray-600">{feature.description}</p>
                            <br />
                        </motion.div>
                    ))}
                    <br />
                </div>
            </div>
        </section>
    );
}
