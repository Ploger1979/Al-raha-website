"use client" // ✅ لأننا نستخدم hook من useTheme (مطلوب على جهة العميل)
/*

Toaster.tsx، والذي يُستخدم لعرض الإشعارات (notifications) في مشروعك باستخدام مكتبة sonner المتقدمة.

-----------------------------------------------------------------------|
| العنصر        | الوظيفة                                             |
| ------------- | ---------------------------------------------------- |
| `Sonner`      | المكون المسؤول عن عرض الإشعارات                     |
| `theme`       | يجعل الإشعارات تتبع الثيم الحالي (فاتح أو داكن)    |
| `style={...}` | يخصص ألوان الإشعار حسب المتغيرات الموجودة في الثيم |
| `...props`    | يمكن تمرير خصائص إضافية مثل `position="top-right"` |

*/

import { useTheme } from "next-themes" // ✅ لجلب الثيم الحالي (light أو dark أو system)
import { Toaster as Sonner, ToasterProps } from "sonner" // ✅ مكون الإشعارات من مكتبة sonner

// ✅ تعريف مكون Toaster الخاص بنا
const Toaster = ({ ...props }: ToasterProps) => {

  // ✅ جلب الثيم الحالي من Context
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      // ✅ تمرير الثيم للإشعارات (مهم ليتبع Light/Dark Mode)
      theme={theme as ToasterProps["theme"]}

      // ✅ إضافة كلاس لتخصيص تصميم التوستر
      className="toaster group"

      // ✅ تحديد خصائص CSS مخصصة: الخلفية، النص، الحدود
      style={
        {
          "--normal-bg": "var(--popover)", // ✅ متغير CSS للخلفية
          "--normal-text": "var(--popover-foreground)", // ✅ متغير CSS للون النص
          "--normal-border": "var(--border)", // ✅ متغير CSS للحدود
        } as React.CSSProperties
      }
      // ✅ تمرير باقي الخصائص القادمة من الأعلى (مثل position، duration...)
      {...props}
    />
  )
}

// ✅ تصدير المكون ليُستخدم في كل المشروع
export { Toaster }
