'use client';

import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { MapPin, Facebook, Instagram } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link'; 

// ✅ مكون التذييل (Footer)
const Footer = () => {
    return (
        <section className="relative bg-gradient-to-tr from-[#3b1f99] via-[#602bb7] to-[#9e4ff1] text-white flex items-center justify-center">
            {/* ✅ طبقة شفافة فوق الخلفية البنفسجية */}
            <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />

            {/* ✅ الحاوية الرئيسية للمحتوى */}
            <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10 py-12">

                {/* ✅ توزيع المحتوى في 3 أعمدة (روابط - شعار - تواصل) */}
                <div className="flex flex-col md:flex-row justify-between items-start text-center md:text-right gap-8">

                    {/* ✅ العمود الأول – روابط سريعة */}
                    <div className="w-full md:basis-1/3 flex flex-col items-center md:items-end space-y-3 text-center">

                        <br />
                        <h3 className="text-xl font-semibold flex item-center justify-center text-yellow-500 underline">روابط سريعة</h3>
                        <br />
                        <div className=" flex items-center justify-center text-right">
                            <ul className="space-y-2 text-md text-right">
                                <li>
                                    <Link href="/products" className="hover:text-yellow-500 cursor-pointer block">
                                        المنتجات
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="hover:text-yellow-500 cursor-pointer block">
                                        من نحن
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/branches" className="hover:text-yellow-500 cursor-pointer block">
                                        الفروع
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-yellow-500 cursor-pointer block">
                                        تواصل معنا
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>

                    {/* ✅ العمود الثاني – شعار الشركة + وصف + حقوق النشر */}
                    <div className="w-full md:basis-1/3 flex flex-col items-center space-y-4">
                        
                        {/* ✅ الشعار */}
                        <Image
                            src="/assets/logo-Ohne-bg11.png"
                            alt="شعار الراحة"
                            width={192}
                            height={192}
                            style={{ height: 'auto' }} // ✅ يحافظ على الأبعاد الأصلية
                        />

                        {/* ✅ وصف الشركة */}
                        <p className="text-sm leading-relaxed text-center max-w-xs ">
                            فى شركتنا نؤمن ان النوم المريح أساس الحياه الصحيه<br />
                            لذلك نحن نقدم افضل المراتب والإسفنج بجوده عالميه منذ عام 1999
                        </p>

                        <br />

                        {/* ✅ خط فاصل */}
                        <hr className="w-full border-t border-white/50 my-6" />

                        {/* ✅ حقوق النشر */}
                        <div className="text-center text-sm w-full">
                            <p>© 2024 الراحة لصناعة الإسفنج والمراتب. جميع الحقوق محفوظة</p>
                            <p className="mt-1">بصناعتنا_نفتخر_وبراحتكم_نعلو</p>
                        </div>
                        <br />
                    </div>

                    {/* ✅ العمود الثالث – معلومات التواصل وأيقونات السوشيال */}
                    <div className="w-full md:basis-1/3 flex flex-col items-center md:items-start space-y-3">
                        <br />
                        <h3 className="text-xl font-semibold text-center md:text-right text-yellow-500 underline">معلومات التواصل</h3>
                        <br />
                        <div className="space-y-2 text-md text-center md:text-right">
                            <div className="flex justify-center md:justify-start items-center  hover:text-yellow-500 gap-2">📞 0949830643</div>
                            <div className="flex justify-center md:justify-start items-center  hover:text-yellow-500 gap-2">📞 0918803098</div>
                            <div className="flex justify-center md:justify-start items-center  hover:text-yellow-500 gap-2"><MapPin className="w-5 text-red-500" /> بنغازي - قاريونس</div>
                            <div className="flex justify-center md:justify-start items-center  hover:text-yellow-500 gap-2">📧 info@raha-mattresses.com</div>
                        </div>

                        <br/>

                        {/* ✅ روابط السوشيال ميديا */}
                        <div className="flex justify-center md:justify-start gap-3 pt-2">
                            <a href="#" className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-600">
                                <FaWhatsapp className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700">
                                <Facebook className="w-5" />
                            </a>
                            <a href="#" className="bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-700">
                                <Instagram className="w-5" />
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </section>

    );
};

export default Footer;
