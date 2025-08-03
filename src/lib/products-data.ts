// ✅ تعريف نوع المنتج
export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  rating: number;
}

// ✅ كل المنتجات هنا
export const products: Product[] = [
  {
    id: 1,
    name: "مرتبة ريبوند",
    category: "mattresses",
    image: "/products/ribond.jpg",
    description: "راحة فائقة مع تقنية التبريد الطبيعي لنوم منعش",
    features: ["تقنية التبريد", "مواد طبيعية", "دعم مثالي للعمود الفقري"],
    rating: 5,
  },
  {
    id: 2,
    name: "مرتبة نسمه",
    category: "mattresses",
    image: "/products/Nesma-2.jpg",
    description:
      "مرتبة عالية الجودة مع تقنية الريبوند المتطورة للحصول على نوم مريح",
    features: ["تقنية الريبوند", "مقاوم للبكتيريا", "ضمان 10 سنوات"],
    rating: 5,
  },
  {
    id: 3,
    name: "مرتبة توليب",
    category: "mattresses",
    image: "/products/tulip.jpg",
    description: "تصميم أنيق مع دعم مثالي للجسم وراحة استثنائية",
    features: ["تصميم عصري", "دعم متوازن", "مواد عالية الجودة"],
    rating: 5,
  },
  {
    id: 4,
    name: "مرتبة ريلاكس",
    category: "mattresses",
    image: "/products/Relax.jpg",
    description: "مرتبة فاخرة للاسترخاء التام مع طبقات متعددة من الراحة",
    features: ["طبقات متعددة", "نعومة فائقة", "تهوية ممتازة"],
    rating: 5,
  },
  {
    id: 5,
    name: "مرتبة بيلو توب",
    category: "mattresses",
    image: "/products/Pillwo-Top.jpg",
    description: "مرتبة بتقنية البيلو توب لراحة إضافية ونوم هادئ",
    features: ["تقنية البيلو توب", "راحة إضافية", "مقاومة التآكل"],
    rating: 4,
  },
  {
    id: 6,
    name: "مرتبة أمريكان ستايل",
    category: "mattresses",
    image: "/products/Amrican-Style-2.jpg",
    description: "مرتبة بالطراز الأمريكي الفاخر مع جودة استثنائية",
    features: ["طراز أمريكي", "جودة فاخرة", "تصميم كلاسيكي"],
    rating: 5,
  },
  {
    id: 7,
    name: "مرتبة بلاتينيوم",
    category: "mattresses",
    image: "/products/Platinum.jpg",
    description: "مرتبة بلاتينيوم الفاخرة للحصول على تجربة نوم لا مثيل لها",
    features: ["جودة بلاتينيوم", "تقنية متقدمة", "راحة استثنائية"],
    rating: 5,
  },
  {
    id: 8,
    name: "مرتبة كينج",
    category: "mattresses",
    image: "/products/King.jpg",
    description:
      "فخامة الاسم تكفي – مرتبة كينج تمنحك نوم الملوك بتصميم فاخر وجودة عالية",
    features: [
      "مقاس كبير 200x180",
      "قماش فاخر مضاد للبكتيريا",
      "دعم كامل للجسم",
    ],
    rating: 5,
  },
  {
    id: 9,
    name: "مرتبة برينس",
    category: "mattresses",
    image: "/products/Prince.jpg",
    description: "مرتبة برينس تجمع بين الأناقة والراحة بلمسة ناعمة ونقشة جذابة",
    features: [
      "طبقة خارجية برسومات أنيقة",
      "راحة متوسطة ومرنة",
      "مناسبة لجميع الأعمار",
    ],
    rating: 4,
  },
  {
    id: 10,
    name: "مرتبة جولد",
    category: "mattresses",
    image: "/products/Gold.jpg",
    description: "مرتبة جولد الفاخرة بتصميم عصري لتجربة نوم مذهلة بثبات وراحة",
    features: [
      "تقفيل فاخر بخيوط ذهبية",
      "قماش مبطن مقاوم للرطوبة",
      "دعم مثالي للعمود الفقري",
    ],
    rating: 5,
  },
];
