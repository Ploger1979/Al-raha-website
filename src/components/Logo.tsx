// ✅ Logo.tsx – مكون اللوجو
"use client";


import Image from "next/image";

type LogoProps = {
    scrolled: boolean;
};
export default function Logo({ scrolled }: LogoProps) {
    return (
        <div className="flex items-center">
            
            {/* ✅ عرض صورة اللوجو بحجم أكبر – استخدم relative لـ Image */}
            <div className={`relative ${scrolled ? "w-40 h-28" : "w-60 h-40"}`}>
                <Image
                    src="/assets/logo-Ohne-bg4.png"
                    alt="شعار الراحة"
                    fill
                    sizes="(max-width: 768px) 120px, (max-width: 1200px) 160px, 200px"
                    priority // ✅ تحميل الصورة بأولوية لتحسين الأداء
                />
            </div>

        </div>
    );
}
