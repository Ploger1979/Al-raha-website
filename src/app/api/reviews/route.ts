// ✅ ملف: src/app/api/reviews/route.ts
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  const body = await req.json();
  const { rating, comment, name } = body; // ✅ هنا الإضافة

  try {
    const client = await clientPromise;
    const db = client.db("al-raha-db");
    const collection = db.collection("reviews");

    await collection.insertOne({
      rating,
      comment,
      name,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "تم الحفظ بنجاح" }, { status: 201 });
  } catch (error) {
    console.error("❌ Error:", error);
    return NextResponse.json({ error: "حدث خطأ أثناء الحفظ" }, { status: 500 });
  }
}


// ✅ إضافة جلب التقييمات
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("al-raha-db");
    const collection = db.collection("reviews");

    const reviews = await collection.find().sort({ _id: -1 }).toArray();

    return NextResponse.json(reviews);
  } catch (error) {
    console.error("❌ Error loading reviews:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء تحميل التقييمات" },
      { status: 500 }
    );
  }
}
