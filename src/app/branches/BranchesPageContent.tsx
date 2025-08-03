"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, Navigation, Building } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Toaster as Sonner } from "sonner";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from "next/image";
import BranchesMapWrapper from '@/components/BranchesMapWrapper';
const BranchesPage = () => {
    const handleGetDirections = (address: string) => {
        const query = encodeURIComponent(address);
        window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
    };

    const handleCallBranch = (phone: string) => {
        window.open(`tel:${phone}`, '_self');
    };

    const branchesByCity = [
        {
            city: "بنغازي",
            branches: [
                {
                    id: 1,
                    name: "فرع قاريونس",
                    address: "محلات نادي الأهلي، قاريونس",
                    phone: "0948051999",
                    image: "/Branche/al-raha-raha.jpg",
                },
                {
                    id: 2,
                    name: "فرع الهواري",
                    address: "طريق النهر - الهواري (قرب مديرية الأمن)",
                    phone: "0921174954 / 0941533315",
                    image: "/Branche/al-raha-raha.jpg",
                }
            ]
        },
        {
            city: "طرابلس",
            branches: [
                {
                    id: 3,
                    name: "فرع عين زارة",
                    address: "عين زارة بعد الدبلوماسي مول",
                    phone: "0917276670 / 0923001674",
                    image: "/Branche/al-raha-raha.jpg",
                }
            ]
        },
        {
            city: "البيضاء",
            branches: [
                {
                    id: 4,
                    name: "فرع البيضاء",
                    address: "السوق الفوقي خلف التجيش شارع العيادة رقم 1",
                    phone: "0928888929",
                    image: "/Branche/al-raha-raha.jpg",
                }
            ]
        },
        {
            city: "سرت",
            branches: [
                {
                    id: 5,
                    name: "فرع سرت",
                    address: "مقابل شارع 5 بالقرب من مفترق شارع دبي",
                    phone: "0917911988 / 0926447091",
                    image: "/Branche/al-raha-raha.jpg",
                }
            ]
        },
        {
            city: "طبرق",
            branches: [
                {
                    id: 6,
                    name: "فرع طبرق",
                    address: "شارع شاهر روحه",
                    phone: "0928043445 / 0921174954",
                    image: "/Branche/al-raha-raha.jpg",
                }
            ]
        }
    ];

    return (
        // ✅ خلفية عامة لكل الصفحة
        <div className="relative min-h-screen bg-gradient-to-tr from-[#3b1f99] via-[#602bb7] to-[#9e4ff1] text-white">

            {/* ✅ طبقة شفافة فوق الخلفية (لا تمنع الضغط) */}
            <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

            {/* ✅ محتوى الصفحة فوق الخلفية */}
            <div className="relative z-20">

                <Navbar />

                <div className="pt-20 min-h-screen">
                    {/* ✅ عنوان الصفحة */}
                    <section className="hero-gradient py-20">
                        <br /><br /><br /><br />
                        {/* ✅ هذا الديف يضمن أن المحتوى في الوسط وأن كل شيء عمودي ومركزي */}
                        <div className="text-center flex flex-col items-center justify-center px-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl font-bold text-white mb-6 underline"
                            >
                                فروعنا في كل مكان
                            </motion.h1>
                            <br /><br />
                            <>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-xl text-white-200 max-w-2xl mx-auto text-center"
                                >
                                    من سنة 99 ابتدينا... وبثقة الله وثقتكم كملنا وعالينا 🙏
                                </motion.p>

                                <p className="text-center text-white mt-4 text-xl">
                                    وفروعنا تحت أمركم عشان إنتوا غاليين علينا ❤️
                                </p>
                            </>

                            <hr className="my-4 border-gray-300" /> {/* ✅ خارج الـ <p> */}
                            <br />
                        </div>
                    </section>

                    <br />
                    
                    {/* ✅ الشبكة الخاصة بالفروع */}
                    <section className="section-bg py-20 ">
                        <div className="container mx-auto px-4 ">
                            {branchesByCity.map((cityData) => (
                                <div key={cityData.city} className="mb-16">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="flex items-center mb-8"
                                    >
                                        <Building className="w-8 h-8 text-yellow-400 ml-4" />
                                        <h2 className="text-3xl font-bold text-white underline">{cityData.city}</h2>
                                    </motion.div>
                                    <br />
                                    <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-8">
                                        {cityData.branches.map((branch, branchIndex) => (
                                            <motion.div
                                                key={branch.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: (branchIndex * 0.1) }}
                                                className="product-card rounded-2xl border border-yellow-200 overflow-hidden"

                                            >
                                                <div className="relative">
                                                    <Image
                                                        src={branch.image || "/placeholder.jpg"} // تأكد إن الصورة مش فاضية
                                                        alt={branch.name}
                                                        width={600} // أو أي عرض مناسب
                                                        height={250} // أو أي ارتفاع مناسب
                                                        className="w-full h-48 object-cover"
                                                    />

                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                                    <div className="absolute bottom-4 left-4 right-4">
                                                        <h3 className="text-xl font-bold text-white">{branch.name}</h3>
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="p-6 space-y-4">
                                                    <div className="flex items-start space-x-3 space-x-reverse">
                                                        <Navigation className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                                                        <span className="text-white-700">{branch.address}</span>
                                                    </div>

                                                    <div className="flex items-center space-x-3 space-x-reverse">
                                                        <Phone className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                                                        <span className="text-white-700">{branch.phone}</span>
                                                    </div>

                                                    <div className="flex items-start space-x-3 space-x-reverse">
                                                        <Clock className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                                                        <span className="text-white-700">السبت - الخميس: 9ص - 4م</span>
                                                    </div>
                                                    <br />
                                                    <div className="flex gap-2 pt-4">
                                                        <Button
                                                            onClick={() => handleCallBranch(branch.phone.split(' / ')[0])}
                                                            className="btn-primary text-red  font-bold flex-1"
                                                        >
                                                            <Phone className="w-4 h-4 ml-2" />
                                                            اتصل
                                                        </Button>
                                                        <Button
                                                            onClick={() => handleGetDirections(`${branch.name}, ${branch.address}, ${cityData.city}`)}
                                                            variant="outline"
                                                            className="border-yellow-300 font-bold text-red-500 hover:bg-yellow-100 hover:text-black flex-1"
                                                        >
                                                            <Navigation className="w-4 h-4 ml-2" />
                                                            الاتجاهات
                                                        </Button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                        <br />
                                    </div>
                                    <br /><br />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ✅ قسم الخريطة */}
                    <section className="py-20 flex items-center justify-center">
                        <div className="container mx-auto px-4  max-w-5xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center mb-12"
                            >
                                <h2 className="text-4xl font-bold text-white mb-4 underline">تجدنا بسهولة</h2>
                                <br />
                                <p className="text-xl text-gray-200">استخدم الخريطة للوصول إلى أقرب فرع لك</p>
                            </motion.div>
                            <br />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="glass-effect rounded-2xl p-4 md:p-8 text-center"
                            >
                                {/* ✅ خريطة تفاعلية لكل الفروع */}
                                <BranchesMapWrapper />
                            </motion.div>
                        </div>
                    </section>
                </div>
<br />
                <Footer />
                <Sonner position="top-center" richColors />
            </div>
        </div>
    );
};

export default BranchesPage;
