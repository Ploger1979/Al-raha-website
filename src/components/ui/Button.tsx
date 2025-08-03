'use client';
/*
الملف مبني باستخدام cva من مكتبة class-variance-authority لتوليد أصناف Tailwind حسب النوع (variant) والحجم (size)، 
ويستخدم Slot من Radix UI لدعم التخصيص الكامل.

✅ الفائدة من هذا المكون:
قابل لإعادة الاستخدام في جميع صفحات المشروع

موحد التصميم (Dark/Light Mode سهل لاحقًا)

قابل للتخصيص الكامل (أنواع، أحجام، سلوك)

يمكن استخدامه كزر أو ملفوف حول <a> أو أي عنصر
*/ 
import * as React from 'react';
import { cn } from '@/lib/utils'; // ✅ دالة لتجميع أصناف CSS بشكل نظيف
import { Slot } from '@radix-ui/react-slot';// ✅ تتيح استخدام الزر كـ "غلاف" لعناصر أخرى
import { cva, type VariantProps } from 'class-variance-authority';// ✅ مكتبة للتحكم الذكي في التنسيقات حسب النوع والحجم

// ✅ تعريف أنماط الأزرار باستخدام cva
const buttonVariants = cva(
    // ✅ تنسيقات أساسية لكل زر، مهما كان نوعه
    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            // ✅ الأنواع المختلفة من الأزرار
            variant: {
                default: 'bg-blue-800 text-white hover:bg-blue-900',
                destructive: 'bg-red-600 text-white hover:bg-red-700',
                outline: 'border border-gray-300 bg-white hover:bg-gray-50 text-black',
                secondary: 'bg-gray-800 text-white hover:bg-gray-700',
                ghost: 'bg-transparent hover:bg-gray-100 text-gray-800',
                link: 'text-blue-800 underline-offset-4 hover:underline',
            },
            // ✅ الأحجام المختلفة من الأزرار
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',// زر دائري للأيقونات فقط
            },
        },
        // ✅ القيم الافتراضية (نوع = default ، حجم = default)
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

// ✅ تعريف الخصائص التي يمكن تمريرها للمكون Button
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean; // ✅ لو true → يستخدم Slot بدلًا من <button>
}

// ✅ مكون الزر القابل لإعادة الاستخدام
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        // ✅ نحدد إذا كنا سنستخدم <button> أو عنصر مخصص داخلي (Slot)
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size }), className)}// ✅ ندمج التنسيقات مع المخصصة
                ref={ref}
                {...props}
            />
        );
    }
);

// ✅ لتسهيل التصحيح عند عرض المكون في React DevTools
Button.displayName = 'Button';

// ✅ التصدير
export { Button, buttonVariants };
