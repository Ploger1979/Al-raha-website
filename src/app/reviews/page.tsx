'use client';

import { useEffect, useState } from 'react';


import { Star } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useKeenSlider } from "keen-slider/react";


// ✅ تعريف شكل كل تقييم
interface Review {
    _id?: string;
    rating: number;
    comment?: string;
    name?: string;
    createdAt?: string;
}

export default function ReviewsPage() {
    // ✅ بيانات النموذج
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const [reviews, setReviews] = useState<Review[]>([]);

    // ✅ تحميل التقييمات من API
    const fetchReviews = async () => {
        try {
            const res = await fetch('/api/reviews');
            let data = await res.json();
            data = data.sort(() => Math.random() - 0.5); // ✅ ترتيب عشوائي
            setReviews(data);
        } catch (error) {
            console.error('❌ Error fetching reviews:', error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    // ✅ إرسال تقييم جديد
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ rating, comment, name }),
            });

            if (res.ok) {
                alert(`✅ شكراً ${name || 'ضيف'} لتقييمك: ${rating} نجوم\n📝 ملاحظتك: ${comment || 'بدون ملاحظة'}`);
                setRating(0);
                setComment('');
                setName('');
                fetchReviews();
            } else {
                alert('❌ حدث خطأ أثناء إرسال التقييم.');
            }
        } catch (err) {
            console.error('❌ Network error:', err);
            alert('⚠️ حدث خطأ في الاتصال بالسيرفر.');
        }
    };

    // ✅ إعداد السلايدر
  
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        rtl: true,
        slides: {
            perView: 1,
            spacing: 15,
        },
    });

    // ✅ تشغيل السلايدر تلقائيًا كل 10 ثواني، فقط لو كان جاهز
    
    useEffect(() => {
        // ✅ دالة لتحريك السلايدر
        const autoplay = () => {
            const slider = instanceRef.current;

            // ✅ لو السلايدر جاهز بالكامل (track.details موجود)
            if (slider && slider.track && slider.track.details) {
                console.log("🔁 السلايدر بيتحرك تلقائيًا...");
                slider.next(); // ⏩ تحريك السلايدر للعنصر التالي
            } else {
                console.log("⏳ السلايدر لسه مش جاهز بالكامل");
            }
        };

        // ✅ نبدأ نتحقق كل نصف ثانية لحد ما السلايدر يكون جاهز
        const waitUntilReady = setInterval(() => {
            const slider = instanceRef.current;

            // ✅ لما يكون جاهز نبدأ التحريك التلقائي
            if (slider && slider.track && slider.track.details) {
                console.log("✅ السلايدر بقى جاهز بالكامل!");

                clearInterval(waitUntilReady); // 🛑 نوقف التحقق

                // ✅ نبدأ التحريك التلقائي كل 10 ثواني
                const autoplayInterval = setInterval(autoplay, 10000);

                // ✅ لما نغادر الصفحة نوقف التحريك
                return () => clearInterval(autoplayInterval);
            } else {
                console.log("⏳ السلايدر لسه بيجهز...");
            }
        }, 500); // ⏱️ نتحقق كل 500ms

        // ✅ تنظيف عند الخروج
        return () => {
            clearInterval(waitUntilReady);
        };
    }, []); 

    return (
        <>
            <Navbar />
            <section className="relative min-h-screen flex items-center justify-center text-white bg-gradient-to-tr from-[#3b1f99] via-[#602bb7] to-[#9e4ff1]">
                <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
                <div className="relative z-20 w-full max-w-xl px-4">
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 underline">شاركنا رأيك</h1>
                    <br />

                    {/* ✅ نموذج التقييم */}
                    <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 p-6 rounded-lg border border-white/20">
                        {/* ✅ اختيار عدد النجوم */}
                        <div className="flex justify-center gap-2">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <button
                                    type="button"
                                    key={num}
                                    onClick={() => setRating(num)}
                                    className={rating >= num ? 'text-yellow-400' : 'text-white/50'}
                                >
                                    <Star className="w-10 h-10" fill={rating >= num ? 'currentColor' : 'none'} />
                                </button>
                            ))}
                        </div>

                        <input
                            type="text"
                            placeholder="اسمك أو المدينة (اختياري)"
                            className="w-full p-3 rounded border border-white/20 bg-white/10 placeholder-white/60 text-white"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <textarea
                            placeholder="ملاحظاتك (اختياري)"
                            className="w-full p-3 rounded border border-white/20 bg-white/10 placeholder-white/60 text-white"
                            rows={4}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full w-full"
                        >
                            إرسال التقييم
                        </button>
                    </form>
                    
                    <br />
                    <br />

                    {/* ✅ قسم التقييمات */}
                    <div className="mt-10 bg-white/10 p-6 rounded-lg border border-white/20">
                        <h2 className="text-2xl font-bold text-yellow-300 text-center mb-6">آراء الزبائن</h2>

                        {/* ✅ عرض رسالة لو مفيش تقييمات */}
                        {reviews.length === 0 && (
                            <p className="text-white/70 text-center">لا توجد تقييمات بعد.</p>
                        )}

                       

                        <br />

                        {/* ✅ سلايدر التقييمات */}
                        <div ref={sliderRef} className="keen-slider overflow-hidden">
                            {reviews.map((r, i) => (
                                <div
                                    key={r._id || i}
                                    className="keen-slider__slide min-w-full flex flex-col justify-center items-center bg-white/20 p-6 rounded-xl text-white text-right h-full min-h-[240px]"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        {Array.from({ length: r.rating }).map((_, idx) => (
                                            <Star key={idx} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                                        ))}
                                        <span className="text-sm text-white/70">({r.rating} نجوم)</span>
                                    </div>
                                    {r.name && <p className="text-sm font-semibold mb-2">💬 {r.name}</p>}
                                    <br />
                                    <p className="text-sm leading-relaxed">{r.comment || 'بدون تعليق'}</p>
                                    <br />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ✅ زر الرجوع إلى الرئيسية */}
                    <br />
                    <div className="text-center mt-6">
                        <Link
                            href="/"
                            className="inline-block bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-6 rounded-full transition"
                        >
                            ← الرجوع إلى الرئيسية
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
