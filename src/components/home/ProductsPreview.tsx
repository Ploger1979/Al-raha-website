'use client'; // ✅ المكون يعمل على جهة العميل (Client Component)

import { products } from '@/lib/products-data'; // ✅ استيراد بيانات المنتجات (مصفوفة من الكائنات)
import ProductCard from '../products/ProductCard'; // ✅ مكون كرت المنتج الواحد
import Link from 'next/link'; // ✅ رابط للتنقل بين صفحات Next.js

// ✅ مكون يعرض معاينة مختصرة لعدد من المنتجات داخل الصفحة الرئيسية
export default function ProductsPreview() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#3b1f99] via-[#602bb7] to-[#9e4ff1] text-white">

            {/* ✅ طبقة شفافة فوق الخلفية لتحسين التباين (بدون أن تمنع النقرات) */}
            <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

            {/* ✅ حاوية المحتوى فوق الطبقة الشفافة */}
            <div className="relative z-20 w-full max-w-screen-xl mx-auto px-4 text-center">

                <br />

                {/* ✅ عنوان القسم */}
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">منتجاتنا المميزة</h2>

                <br />

                {/* ✅ وصف قصير تحت العنوان */}
                <p className="text-lg sm:text-xl mb-10">
                    ✨تشكيلة واسعة تلبي كل الأذواق والاحتياجات✨
                </p>

                <br />

                {/* ✅ شبكة عرض كروت المنتجات */}
                <div className="w-full flex justify-center">
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                        style={{ maxWidth: '1020px', width: '100%' }}
                    >
                        {/* ✅ عرض أول 3 منتجات فقط كمُعاينة */}
                        {products.slice(0, 3).map((product) => (
                            <ProductCard
                                key={product.id} // ✅ مفتاح فريد لكل كرت
                                product={product} // ✅ تمرير بيانات المنتج للكرت
                                onOrderNow={() => console.log(`طلب المنتج: ${product.name}`)} // ✅ زر "اطلب الآن" يسجل في Console
                                onCallNow={() => console.log(`اتصل الآن بخصوص: ${product.name}`)} // ✅ زر "اتصل الآن" يسجل في Console
                            />
                        ))}
                    </div>
                </div>

                <br />

                {/* ✅ زر ينقل المستخدم إلى صفحة جميع المنتجات */}
                <div className="mt-12">
                    <Link href="/products">
                        <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-3 px-6 rounded-full text-lg shadow-md">
                            عرض جميع المنتجات
                        </button>
                    </Link>
                </div>

                <br />
            </div>
        </section>
    );
}
