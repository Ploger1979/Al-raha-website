'use client';

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CheckoutPage() {
    const { cart } = useCart();
    const [paymentMethod, setPaymentMethod] = useState<"paypal" | "iban" | "">("");
    const [clientName, setClientName] = useState(""); // ✅ اسم العميل
    const [clientPhone, setClientPhone] = useState(""); // ✅ رقم الهاتف
    const router = useRouter();

    // ✅ حساب المجموع الكلي بشكل بسيط (لو فيه سعر لاحقًا ممكن نستخدمه هنا)
    const total = cart.length * 1;

    const handleConfirm = async () => {
        if (!paymentMethod) {
            alert("يرجى اختيار طريقة الدفع");
            return;
        }

        try {
            const response = await fetch("https://formspree.io/f/mzzvvlar", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    payment_method: paymentMethod,
                    order_details: cart.map((item) => `${item.size} - ${item.height} - ${item.density} - ${item.stars}`),
                    total: `${total} د.ل`,
                    client_name: clientName,
                    client_phone: clientPhone,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                alert("✅ تم إرسال الطلب بنجاح! سنتواصل معك قريبًا.");
                router.push("/thanks");
            } else {
                alert(`❌ فشل في الإرسال: ${result?.error || "حدث خطأ غير معروف"}`);
            }
        } catch (error) {
            alert("❌ فشل الاتصال بـ Formspree – تحقق من اتصال الإنترنت أو إعدادات النموذج.");
            console.error(error);
        }
    };


    return (
        <>
            <Navbar />
            <br />
            <section className="min-w-screen bg-gradient-to-tr from-[#3b1f99] via-[#602bb7] to-[#9e4ff1] text-white px-6 py-16 flex item-center justify-center">
                <br /><br /><br />
                <div className="w-[40%] max-w-5xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 relative">
                    <br /><br /><br />
                    <h1 className="text-3xl font-bold mb-8 text-center underline">🧾 تأكيد الطلب</h1>
                       <br />
                    {/* ✅ عرض محتوى السلة */}
                    <div className="space-y-4 text-right mb-8">
                        {cart.map((item, index) => (
                            <div key={index} className="border-b border-white/30 pb-2">
                                <p>✨ <strong className="text-yellow-300">المقاس:</strong> {item.size}</p>
                                <br />
                                <p>✨ <strong className="text-yellow-300">الارتفاع:</strong> {item.height}</p>
                                <br />
                                <p>✨ <strong className="text-yellow-300">الضغط:</strong> {item.density}</p>
                                <br />
                                <p>✨ <strong className="text-yellow-300">التقييم:</strong> {item.stars}</p>
                                <br />
                            </div> 
                        ))}
                    </div>
                    <br />
                    {/* ✅ بيانات العميل */}
                    <div className="mb-8 text-right ">
                        <p className="mb-4 text-lg font-bold text-center">👤 بيانات العميل:</p>
                         <br />
                        <input
                            type="text"
                            placeholder="الاسم الكامل"
                            className="w-full p-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/60 mb-3"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            required
                        />

                        <input
                            type="tel"
                            dir="rtl"
                            placeholder="رقم الهاتف للتواصل"
                            className="w-full p-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/60"
                            value={clientPhone}
                            onChange={(e) => setClientPhone(e.target.value)}
                            required
                        />
                    </div>
                      <br/>
                    {/* ✅ اختيار طريقة الدفع */}
                    <div className="mb-8 text-right">
                        <p className="mb-4 text-lg font-bold text-center">💳 اختر طريقة الدفع:</p>
                        <div className="space-y-2">
                            <label className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    value="paypal"
                                    checked={paymentMethod === "paypal"}
                                    onChange={() => setPaymentMethod("paypal")}
                                />
                                PayPal
                            </label>
                            <label className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    value="iban"
                                    checked={paymentMethod === "iban"}
                                    onChange={() => setPaymentMethod("iban")}
                                />
                                تحويل بنكي (IBAN)
                            </label>
                        </div>
                    </div>
                    {/* ✅ رسالة واتساب عند الدفع عبر IBAN */}
                    {paymentMethod === "iban" && (
                        <p className="text-yellow-300 mt-4 text-sm text-center">
                            بعد تأكيد الطلب، يُرجى إرسال صورة الحوالة إلى واتساب: <br />
                            <strong className="text-lg text-white">📱 +49 123 456789</strong>
                        </p>
                    )}
                    <br />
                    {/* ✅ زر تأكيد */}
                    <div className="text-center">
                        <button
                            onClick={handleConfirm}
                            className="bg-green-600 hover:bg-blue-500 text-white py-3 px-8 rounded-full font-bold text-lg"
                        >
                            ✅ تأكيد الطلب
                        </button>
                    </div>
                    <br />
                </div>
                <br />
            </section>
            <br />
            <Footer />
        </>
    );
}
