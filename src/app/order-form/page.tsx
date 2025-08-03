'use client';// ✅ ده معناه إن الصفحة دي بتستخدم مكونات تعتمد على التفاعل مع المستخدم (Client Side)

// ✅ استيراد الموديولات اللي هنحتاجها
import { useState } from 'react'; // للتحكم في حالة الإدخالات
import { Star } from 'lucide-react'; // أيقونة النجمة من مكتبة Lucide
import { useRouter } from 'next/navigation'; // للتنقل بين الصفحات
import Link from 'next/link'; // لروابط Next.js
import Navbar from '@/components/Navbar'; // مكون الهيدر
import Footer from '@/components/Footer'; // مكون الفوتر
import { useCart } from "@/context/CartContext"; // ✅ استخدام السياق لإضافة المنتجات للسلة

export default function OrderFormPage() {
    const router = useRouter(); // ✅ لإنشاء وظيفة التنقل بعد الإرسال

    // ✅ إنشاء الحالات لكل حقل في النموذج
    const [size, setSize] = useState('');
    const [height, setHeight] = useState('');
    const [density, setDensity] = useState('');
    const [stars, setStars] = useState(0);
    const { addToCart } = useCart(); // ✅ استدعاء دالة الإضافة إلى السلة من السياق


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // ✅ منع إعادة تحميل الصفحة

        // ✅ هنا ممكن تطبع القيم للتأكد منها في الـ Console
        console.log({ size, height, density, stars });

        // ✅ إرسال البيانات إلى السلة
        addToCart({
            size,
            height,
            density,
            stars,
        });

        // ✅ التوجيه إلى صفحة السلة بعد الإضافة
        router.push("/cart");
    };


    return (
        <>
            <Navbar /> {/* ✅ عرض شريط التنقل العلوي */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#3b1f99] via-[#602bb7] to-[#9e4ff1] text-white px-4">
                {/* ✅ طبقة شفافة سوداء خفيفة لتظليل الخلفية */}
                <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

                <form
                    onSubmit={handleSubmit}
                    className="relative z-20 w-full max-w-xl bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 space-y-6"
                >
                    <h1 className="text-3xl font-bold text-center mb-6 underline">مواصفات المرتبة</h1>

                    <br />

                    {/* ✅ حقل إدخال المقاس */}
                    <div>
                        <label className="block mb-1  text-yellow-300">مقاس المرتبة (سم)</label>
                        <input
                            type="text"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            placeholder="مثال: 180 × 200"
                            className="w-full p-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/60"
                            required
                        />
                    </div>

                    <br />

                    {/* ✅ حقل إدخال الارتفاع */}
                    <div>
                        <label className="block mb-1 text-yellow-300">ارتفاع المرتبة (سم)</label>
                        <input
                            type="text"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            placeholder="مثال: 25 سم"
                            className="w-full p-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/60"
                            required
                        />
                    </div>

                    <br />

                    {/* ✅ حقل إدخال درجة الضغط */}
                    <div>
                        <label className="block mb-1 text-yellow-300">درجة ضغط المرتبة</label>
                        <input
                            type="text"
                            value={density}
                            onChange={(e) => setDensity(e.target.value)}
                            placeholder="متوسط / عالي / سوفت..."
                            className="w-full p-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/60"
                            required
                        />
                    </div>

                    <br />

                    {/* ✅ تقييم النجوم */}
                    <div>
                        <label className="block mb-1  text-yellow-300">كم نجمة تعجبك؟</label>
                        <div className="flex gap-2 mt-2 flex item-center justify-center">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <button
                                    type="button"
                                    key={num}
                                    onClick={() => setStars(num)}
                                    className={stars >= num ? 'text-yellow-400' : 'text-white/50'}
                                >
                                    <Star className="w-8 h-8" fill={stars >= num ? 'currentColor' : 'none'} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <br />
                    {/* ✅ زر الإرسال */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mt-4"
                    >
                        متابعة الطلب
                    </button>
                </form>

            </section>

            {/* ✅ رابط الرجوع للصفحة الرئيسية */}
            <div className="text-center mt-6">
                <Link
                    href="/"
                    className="inline-block bg-white/20 hover:bg-white/30 text-yellow-300 font-bold py-2 px-6 rounded-full transition"
                >
                    ← الرجوع إلى الرئيسية
                </Link>
            </div>
            <Footer /> {/* ✅ عرض الفوتر أسفل الصفحة */}
        </>
    );
}
