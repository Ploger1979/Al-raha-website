'use client';


import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';

export default function ContactPage() {
   

    
    const handleCallNow = (phone:string) => window.open(`tel:${phone}`, '_self');
    const handleWhatsApp = () => window.open('https://wa.me/218949830643', '_blank');

    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'اتصل بنا',
            details: ['0949830643', '0918803098'],
            action: () => handleCallNow('0949830643')
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'البريد الإلكتروني',
            details: ['info@raha-mattresses.com'],
            action: () => toast("📧 غير متاح حالياً")
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'العنوان',
            details: ['بنغازي - قاريونس', 'ليبيا'],
            action: () => toast("📍 غير متاح حالياً")
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: 'ساعات العمل',
            details: ['السبت - الخميس', '9:00 ص - 4:00 م'],
            action: () => { } 
        }
    ];


    return (
        <>
            <Navbar />

            <div className="relative min-h-screen bg-gradient-to-tr from-[#3b1f99] via-[#602bb7] to-[#9e4ff1] text-white">
                <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

                <div className="relative z-20 pt-20">
                    <br /><br /><br /><br />
                    <section className="flex items-center justify-center py-10 px-2">
                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-6">تواصل معنا</motion.h1>
                    </section>
                    <br />
                    <section className="flex items-center justify-center py-10 px-2">
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-white-200 max-w-2xl mx-auto">نحن هنا لمساعدتك في اختيار المنتج المثالي لاحتياجاتك</motion.p>
                    </section>
                    <br /><br />
                    <section className="py-16 px-4 mx-auto max-w-8xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="border border-white/30 rounded-xl bg-white/5 p-6 text-center backdrop-blur-md hover:scale-105 transition-transform cursor-pointer"
                                onClick={info.action}
                            >
                                <div className="text-purple-300 mb-3 flex justify-center">{info.icon}</div>
                                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                                {info.details.map((d, i) => (
                                    <p key={i} className="text-sm text-white-200">{d}</p>
                                ))}
                            </motion.div>
                        ))}
                    </section>

                    <br /><br />
                    {/* ✅ نموذج التواصل – يوضع في المنتصف بوضوح */}
                    <section className=" flex items-center justify-center py-10 px-2">
                        
                        <div className="w-full max-w-3xl text-center">
                            <h2 className="text-4xl font-bold mb-8 text-white">📬 أرسل لنا رسالة</h2>
                            <br />
                            <form
                                action="https://formspree.io/f/meozzvbv" // ✅ رابط الفورم من Formspree
                                method="POST" // ✅ طريقة الإرسال
                                className="grid gap-4"
                            >

                                {/* ✅ الاسم الكامل */}
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="الاسم الكامل"
                                    className="bg-white/10 p-3 rounded-lg border border-white/20 placeholder-white/60 text-white"
                                />

                                {/* ✅ رقم الهاتف */}
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    dir="rtl" // ✅ أضف هذا السطر
                                    placeholder="رقم الهاتف"
                                    className="bg-white/10 p-3 rounded-lg border border-white/20 placeholder-white/60 text-white"
                                />

                                {/* ✅ البريد الإلكتروني */}
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="البريد الإلكتروني"
                                    className="bg-white/10 p-3 rounded-lg border border-white/20 placeholder-white/60 text-white"
                                />

                                {/* ✅ نص الرسالة */}
                                <textarea
                                    name="message"
                                    required
                                    placeholder="اكتب رسالتك هنا..."
                                    rows={4}
                                    className="bg-white/10 p-3 rounded-lg border border-white/20 placeholder-white/60 text-white"
                                ></textarea>

                                {/* ✅ إعادة التوجيه لصفحة شكرًا بعد الإرسال */}
                                <input
                                    type="hidden"
                                    name="_redirect"
                                    value="http://localhost:3000/thanks" 
                                />

                                {/* ✅ تحديد عنوان الرسالة اللي توصلك */}
                                <input
                                    type="hidden"
                                    name="_subject"
                                    value="📩 رسالة جديدة من موقع الراحة"
                                />

                                {/* ✅ زر الإرسال */}
                                <Button
                                    type="submit"
                                    className="w-full py-3 flex items-center justify-center gap-2 text-white bg-blue-700 hover:bg-blue-800 transition"
                                >
                                    <Send className="w-5 h-5" /> إرسال الرسالة
                                </Button>

                            </form>


                        </div>
                    </section>
                    <br /><br />


                    {/* ✅ تواصل سريع عبر واتساب */}
                    <section className="py-16 text-center">
                        <h3 className="text-2xl font-semibold mb-4">أو تواصل معنا مباشرة عبر</h3>
                        <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold">WhatsApp 📞</Button>
                    </section>
                    <br />
                    <h2 className="text-3xl font-bold mb-6 text-center underline">لماذا تختارنا؟</h2>
                    <br />
                    {/* ✅ لماذا تختارنا */}
                    <section className="flex items-center justify-center py-10 px-2">
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                                <h4 className="text-lg font-semibold mb-2 text-yellow-300">جودة عالية</h4>
                                <p className="text-sm text-white-300">نستخدم أفضل المواد والتقنيات لنضمن لك نومًا مريحًا.</p>
                            <br />
                            </div>
                            <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                                <h4 className="text-lg font-semibold mb-2 text-yellow-300">خدمة عملاء</h4>
                                <p className="text-sm text-white-300">فريقنا متواجد دائمًا للرد على استفساراتك ومساعدتك.</p>
                            </div>
                            <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                                <h4 className="text-lg font-semibold mb-2 text-yellow-300">توصيل سريع</h4>
                                <p className="text-sm text-white-300">نوصل منتجاتنا بسرعة وأمان إلى باب منزلك.</p>
                            </div>
                        </div>
                    </section>
                    <br /><br />
                    <h2 className="text-3xl font-bold mb-8 text-center underline">الأسئلة الشائعة: </h2>
                    <br/>
                    {/* ✅ الأسئلة الشائعة */}
                    <section className="flex items-center justify-center py-10 px-2">

                        <div className="space-y-4">
                            <details className="bg-white/5 p-4 rounded-lg border border-white/20">
                                <summary className="cursor-pointer font-semibold ">ما هي مدة الضمان على المراتب؟</summary>
                                <p className="mt-2 text-md text-yellow-300">نقدم ضمانًا يصل إلى 10 سنوات على منتجاتنا ضد عيوب الصنع.</p>
                            </details>
                            <br />
                            <details className="bg-white/5 p-4 rounded-lg border border-white/20">
                                <summary className="cursor-pointer font-semibold">هل يوجد توصيل خارج بنغازي؟</summary>
                                <p className="mt-2 text-md text-yellow-300">نعم، نوصل إلى جميع أنحاء ليبيا برسوم إضافية حسب الموقع.</p>
                            </details>
                            <br />
                            <details className="bg-white/5 p-4 rounded-lg border border-white/20">
                                <summary className="cursor-pointer font-semibold">هل يمكنني تجربة المرتبة قبل الشراء؟</summary>
                                <p className="mt-2 text-md text-yellow-300">بعض الفروع توفر أماكن للعرض والتجربة. يُرجى التواصل معنا لمعرفة أقرب فرع.</p>
                            </details>
                        </div>
                    </section>
                    <br />
                </div>
            </div>

            <Footer />
        </>
    );
}
