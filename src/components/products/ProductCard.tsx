'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// ✅ تعريف نوع المنتج
type Product = {
    id: number;
    name: string;
    image: string;
    description: string;
    features: string[];
    rating: number;
};

// ✅ خصائص المكون - يتم تمرير المنتج ودوال الطلب/الاتصال
type ProductCardProps = {
    product: Product;
    onOrderNow: () => void;
    onCallNow: () => void;
};

export default function ProductCard({ product, onOrderNow, onCallNow }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4}}
            className="product-card rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl"
        >

            {/* ✅ صورة المنتج مع التقييم */}
            <div className="relative overflow-hidden">
                <div className="relative overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={800} // ✅ عرض فعلي (أو حسب حجم صورك الحقيقي)
                        height={400} // ✅ ارتفاع فعلي
                        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <br />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 space-x-reverse shadow-md">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-black font-bold">{product.rating}</span>
                    </div>
                </div>

                {/* ✅ تقييم المنتج يظهر كنجمة مع الرقم */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 space-x-reverse shadow-md">
                    <Star className="w-4 h-4 text-yellow-500  fill-current" />
                    <span className="text-sm  text-black font-bold">{product.rating}</span>
                </div>
            </div>

            {/* ✅ محتوى بطاقة المنتج */}
            <div className="p-6">

                {/* ✅ اسم المنتج */}
                <h3 className="text-xl flex item-center justify-center font-semibold  underline text-gray-800 mb-2">{product.name}</h3><br />
                
                {/* ✅ وصف مختصر للمنتج */}
                <p className="text-gray-600 flex item-center justify-center mb-4 text-sm leading-relaxed">{product.description}</p>
                
                <br />

                {/* ✅ قائمة المميزات */}
                <div className="mb-4">
                    <span className="text-sm font-semibold flex item-center justify-center text-gray-700 mb-2 block">المميزات:</span><br />
                    <div className="flex flex-wrap gap-3 flex item-center justify-center">
                        {product.features.map((feature, idx) => (
                            <span
                                key={idx}
                                className="bg-purple-100  text-black text-xs px-2 py-1 rounded-full"
                            >
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>

                <br />
                
                {/* ✅ أزرار التفاعل (اطلب الآن / اتصل الآن) */}
                <div className="flex gap-2">
                    <Button
                        onClick={onOrderNow}
                        className="bg-purple-600 hover:bg-purple-700 text-white flex-1"
                    >
                        اطلب الآن
                    </Button>
                    <Button
                        onClick={onCallNow}
                        variant="outline"
                        size="icon"
                        className="border-purple-600 text-purple-600 hover:bg-purple-50"
                    >
                        <Phone className="w-4 h-4" />
                    </Button>
                </div>
                <br />
            </div>
        </motion.div>
    );
}
