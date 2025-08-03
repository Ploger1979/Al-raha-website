'use client';

import { useCart } from "@/context/CartContext";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CartPage() {
    const { cart, removeFromCart } = useCart();

    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-gradient-to-tr from-[#3b1f99] via-[#602bb7] to-[#9e4ff1] text-white px-4 py-16">
                <br /> <br /> <br /> <br />
                <h1 className="text-4xl font-bold text-center underline mb-12">
                    🛒 سلة المشتريات
                </h1>
                <br />
                <div className="flex flex-col items-center gap-8">
                    {cart.length === 0 ? (
                        <p className="text-xl text-yellow-300">السلة فارغة حاليًا</p>
                    ) : (
                        cart.map((item, index) => (
                            <div
                                key={index}
                                className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 text-right space-y-4"
                            ><br />
                                <p><strong className="text-yellow-300">المقاس:</strong> {item.size}</p>
                                <br />
                                <p><strong className="text-yellow-300">الارتفاع:</strong > {item.height}</p>
                                <br />
                                <p><strong className="text-yellow-300">درجة الضغط:</strong> {item.density}</p>
                                <br />
                                <p><strong className="text-yellow-300">التقييم:</strong> ⭐ {item.stars}</p>
                                <br />

                                {/* زر الحذف */}
                                <div className="flex justify-center">
                                    <button
                                        onClick={() => removeFromCart(index)}
                                        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full flex items-center gap-2"
                                    >
                                        حذف <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                                <br />
                            </div>
                        ))
                    )}
                   <br />
                    {/* زر تأكيد الطلب */}
                    {cart.length > 0 && (
                        <Link
                            href="/checkout"
                            className="bg-green-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg mt-8"
                        >
                            ✅ تأكيد الطلب
                        </Link>
                    )}
                    <br/>
                </div>
            </section>

            <Footer />
        </>
    );
}
