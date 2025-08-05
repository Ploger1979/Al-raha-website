// ✅ تعريف بيانات الـ SEO للصفحة
export const metadata = {
    title: "فروعنا - الراحة في كل مدن ليبيا",
    description: "تعرف على مواقع فروع شركة الراحة في بنغازي، طرابلس، البيضاء، سرت، طبرق،وصبراته نحن أقرب إليك دائمًا.",
};

// ✅ استيراد المكون الحقيقي بشكل عادي بدون dynamic
import BranchesPage from "./BranchesPageContent";

export default function Page() {
    return <BranchesPage />; // ✅ عرض الصفحة
}
