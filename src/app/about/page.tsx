'use client';

import { Award, Users, Factory, Heart, Star, Shield, Map, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from "next/image";
export default function AboutPage() {
    const stats = [
        { icon: <Award className="w-8 h-8" />, number: '25+', label: 'سنة من الخبرة' },
        { icon: <Users className="w-8 h-8" />, number: '50000+', label: 'عميل راضي' },
        { icon: <Map className="w-8 h-8" />, number: '5', label: 'مدن نخدمها' },
        { icon: <Factory className="w-8 h-8" />, number: '7', label: 'فروع في ليبيا' }
    ];

    const values = [
        {
            icon: <Star className="w-12 h-12" />,
            title: 'الجودة',
            description: 'نلتزم بأعلى معايير الجودة في جميع منتجاتنا لضمان راحتكم'
        },
        {
            icon: <Shield className="w-12 h-12" />,
            title: 'الثقة',
            description: 'بناء علاقات طويلة الأمد مع عملائنا قائمة على الثقة والشفافية'
        },
        {
            icon: <Heart className="w-12 h-12" />,
            title: 'الراحة',
            description: 'هدفنا الأساسي هو توفير الراحة والنوم الهادئ لجميع عملائنا'
        }
    ];

    return (
        <div dir="rtl">
            <Navbar />

            {/* ✅ Header */}
            <section className="min-h-[40vh] bg-gradient-to-tr from-[#3b1f99] via-[#602bb7] to-[#9e4ff1] py-10 text-white flex items-center justify-center text-center">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-4"
                    >
                        من نحن
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl leading-relaxed"
                    >
                        قصة نجاح امتدت لأكثر من ربع قرن في خدمة راحتكم في كل ربوع ليبيا
                    </motion.p>
                </div>
            </section>



            {/* ✅ قصتنا */}
            <section className="bg-gradient-to-tr from-[#3b1f99] via-[#602bb7] to-[#9e4ff1] py-20 text-white">
                <br />
                <div className="w-full max-w-[1440px] px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                        {/* ✅ صورة مصنع الراحة */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2 flex justify-center"
                        >
                            <div className="relative w-full max-w-md h-[350px] md:h-[400px] lg:h-[420px]">
                                <Image
                                    src="/assets/Abaut-us-1.png"
                                    alt="مصنع الراحة"
                                    fill
                                    className="rounded-2xl shadow-2xl object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </motion.div>


                        {/* ✅ النص */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2 text-center lg:text-right space-y-6"
                        >
                            <h2 className="text-4xl font-bold text-center underline">قصتنا:  من بنغازي إلى كل ليبيا</h2>
                            <br />
                            <p className="text-lg leading-relaxed text-center">
                                بدأت رحلة شركة الراحة في عام 1999 برؤية واضحة: توفير أفضل المراتب والإسفنج عالي الجودة للعائلات الليبية. انطلقنا من بنغازي، وبفضل ثقتكم، نمت الشركة لتصبح واحدة من الرواد في هذا المجال على مستوى ليبيا.
                            </p>
                            <br />
                            <p className="text-lg leading-relaxed text-center">
                                في شركة الراحة نحرص على استخدام أفضل المواد وأحدث التقنيات في صناعة منتجاتنا، لتصلكم أينما كنتم.
                            </p>
                            <br />
                            <p className="text-lg leading-relaxed text-center">
                                اليوم، نفتخر بخدمة آلاف العملاء في جميع أنحاء ليبيا، ونواصل التطوير والابتكار لنبقى عند حسن ظنكم دائمًا.
                            </p>
                        </motion.div>
                    </div>
                </div>
                <br/>
            </section>

            {/* ✅ إنجازاتنا */}
            <section className="py-24 bg-gradient-to-tr from-[#3b1f99] via-[#602bb7] to-[#9e4ff1] text-white text-center">
                <br/>
                <div className="max-w-[1440px] mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6 underline">إنجازاتنا بالأرقام</h2>
                    <br />
                    <p className="text-xl mb-12">أرقام تعكس ثقة ورضا عملائنا على مدى السنين</p>
                    
                    <br />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-effect rounded-xl p-8"
                            >
                                <div className="mb-4 flex justify-center text-blue-300 ">{stat.icon}</div>
                                <div className="text-3xl font-bold text-yellow-300 ">{stat.number}</div>
                                <div className="text-md font-bold">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <br/>
            </section>

            {/* ✅ شهادة الجودة */}
            <section className="py-20 bg-gradient-to-tr from-[#3b1f99] via-[#602bb7] to-[#9e4ff1] text-white">
                <br />
                <div className="max-w-[1440px] w-full px-6 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* ✅ صورة شهادة الجودة */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex justify-center"
                    >
                        <div className="relative w-full max-w-md h-[300px] md:h-[350px] lg:h-[400px]">
                            <Image
                                src="/assets/Abaut-us-3.png"
                                alt="شهادة الجودة"
                                fill
                                     className="rounded-2xl shadow-2xl object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 text-center lg:text-right space-y-6"
                    >
                        <h3 className="text-4xl font-bold underline">صناعة ليبية بمعايير عالمية</h3>
                        <br/>
                        <ul className="space-y-2 list-disc text-xl text-right pr-6">
                            <li>اختيار أفضل المواد الخام</li>
                            <li>تطبيق معايير الجودة الدولية</li>
                            <li>فحص دقيق لكل منتج قبل التسليم</li>
                            <li>تطوير مستمر للمنتجات والخدمات</li>
                        </ul>
                        <br/>
                        <div className="flex items-center gap-3 justify-center lg:justify-start pt-4">
                            <CheckCircle className="text-green-300 w-6 h-6" />
                            <p className="font-semibold text-xl">حاصلون على شهادة الأيزو العالمية</p>
                        </div>
                    </motion.div>
                </div>
                <br />
            </section>


            {/* ✅ رؤيتنا / رسالتنا / قيمنا */}
            <section className="bg-gradient-to-tr from-[#3b1f99] via-[#602bb7] to-[#9e4ff1] py-20 text-white">
                <br />
                <div className="max-w-screen-2xl mx-auto px-4">
                    {/* ✅ رؤيتنا / رسالتنا */}
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mb-16">
                        
                        <div className="bg-white rounded-xl p-6 shadow text-gray-800 w-full max-w-md text-center">
                            <h3 className="text-3xl font-bold mb-4 underline">رؤيتنا</h3>
                            <br />
                            <p className="text-lg">
                                أن نكون الخيار الأول لكل عائلة ليبية عند اختيار مراتب النوم المريحة والجودة التي تدوم.
                            </p>
                            <br />
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow text-gray-800 w-full max-w-md text-center">
                            <h3 className="text-3xl font-bold mb-4 underline">رسالتنا</h3>
                            <br />
                           <p className="text-lg">
                                تقديم منتجات عالية الجودة بأسعار تنافسية، مع الحرص على راحة ورضا عملائنا الدائم.
                            </p>
                            <br />
                        </div>
                    </div>
                    <br />
                    {/* ✅ عنوان قيمنا */}
                    <h2 className="text-5xl font-bold text-center mb-10 text-yellow-400 underline">قيمنا</h2>
                    <br />
                    {/* ✅ القيم */}
                    <div className="flex flex-wrap justify-center items-stretch gap-6">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl p-8 text-center shadow text-gray-800 w-full max-w-sm"
                            >
                                <div className="mb-4 flex text-yellow-500 justify-center">{v.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                                
                                <br />
                                <p>{v.description}</p>
                            </motion.div>
                        ))}
                    </div>
                    <br/>
                </div>
            </section>


            <Footer />
        </div>
    );
}
