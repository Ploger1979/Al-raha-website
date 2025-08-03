'use client'; // ✅ هذا المكون يعمل فقط على العميل (الواجهة)، لأنه يستخدم DOM
/*

BranchesMapWrapper.tsx، وهو بس مجرد غلاف (Wrapper) لتحميل مكون الخريطة (BranchesMap) بطريقة ديناميكية بدون SSR (Server-Side Rendering).
وده مهم لأن مكتبة react-leaflet تعتمد على DOM الموجود في المتصفح فقط، وما تشتغلش في بيئة السيرفر.

| السبب                                  | التوضيح                                       |
| -------------------------------------- | --------------------------------------------- |
| ❌ `react-leaflet` ما تشتغل على السيرفر | لأنها تعتمد على `window` وDOM                 |
| ✅ `next/dynamic` يحل المشكلة           | لأنه يؤجل التحميل لوقت تشغيل المتصفح فقط      |
| 💡 فصلناها في ملف مستقل                | عشان يبقى الكود أنظف وأسهل في إعادة الاستخدام |

*/
import dynamic from 'next/dynamic'; // ✅ نستدعي مكون بشكل ديناميكي

// ✅ تحميل خريطة الفروع بشكل ديناميكي بدون SSR (مهم لـ react-leaflet)
const BranchesMap = dynamic(() => import('./BranchesMap'), {
    ssr: false, // ❌ لا يتم عرضه في السيرفر
});

// ✅ مكون بسيط يقوم بعرض خريطة الفروع
export default function BranchesMapWrapper() {
    return <BranchesMap />;
}
