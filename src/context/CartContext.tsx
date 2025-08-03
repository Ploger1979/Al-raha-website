"use client";

/* ملف CartContext.tsx الخاص بالسلة*/

import { createContext, useContext, useState, ReactNode } from "react";

// ✅ شكل كل عنصر في السلة (مقاس، ارتفاع، كثافة، تقييم بالنجوم)
interface OrderItem {
    size: string;
    height: string;
    density: string;
    stars: number;
}

// ✅ شكل البيانات اللي هيتم توفيرها من خلال الـ context
interface CartContextType {
    cart: OrderItem[]; // ✅ السلة نفسها (مصوفة من العناصر)
    addToCart: (item: OrderItem) => void; // ✅ دالة لإضافة عنصر
    removeFromCart: (index: number) => void; // ✅ دالة لحذف عنصر باستخدام index
}

// ✅ إنشاء Context فعلي (يبدأ كـ undefined)
const CartContext = createContext<CartContextType | undefined>(undefined);

// ✅ مزود السلة اللي بيغلف التطبيق كله (مثل Provider)
export const CartProvider = ({ children }: { children: ReactNode }) => {
    
    // ✅ حالة السلة
    const [cart, setCart] = useState<OrderItem[]>([]);
    
    // ✅ دالة لإضافة عنصر جديد إلى السلة
    const addToCart = (item: OrderItem) => {
        setCart((prev) => [...prev, item]);
    };

    // ✅ دالة لحذف عنصر من السلة حسب ترتيبه (index)
    const removeFromCart = (index: number) => {
        setCart((prev) => {
            const updated = [...prev];
            updated.splice(index, 1);
            return updated;
        });
    };

    // ✅ نرجّع الـ context لجميع العناصر الابن داخل التطبيق
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// ✅ Hook مخصص علشان تقدر تستخدم السلة بسهولة داخل أي مكون
export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    
    // ✅ لو حد حاول يستخدم useCart برة الـ CartProvider → يظهر له خطأ
    if (!context) throw new Error("useCart must be used inside CartProvider");
    return context;
};
