'use client'; // ✅ الملف يعمل على جهة العميل لأنه يستخدم DOM (react-leaflet)

/*
BranchesMap.tsx مسؤول عن عرض خريطة تفاعلية للفروع باستخدام مكتبة 
React Leaflet.


*/
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // ✅ مكونات الخريطة
import L from 'leaflet'; // ✅ لإنشاء أيقونات مخصصة للمواقع
import 'leaflet/dist/leaflet.css'; // ✅ تضمين تنسيقات الخريطة الافتراضية

// ✅ أيقونة مخصصة للعلامة (marker)
const customIcon = new L.Icon({
    iconUrl: "/marker-icon.png",  // ✅ مسار الأيقونة من مجلد public
    iconSize: [25, 41], // ✅ حجم الأيقونة
    iconAnchor: [12, 41], // ✅ النقطة التي تلامس الموقع بالضبط
});

// ✅ مصفوفة تحتوي على بيانات كل فرع: الاسم، المدينة، العنوان، الإحداثيات
const branches = [
    {
        name: "فرع قاريونس",
        city: "بنغازي",
        address: "محلات نادي الأهلي، قاريونس",
        lat: 32.108808,
        lng: 20.082395,
    },
    {
        name: "فرع الهواري",
        city: "بنغازي",
        address: "طريق النهر - الهواري",
        lat: 32.089971,
        lng: 20.058,
    },
    {
        name: "فرع عين زارة",
        city: "طرابلس",
        address: "عين زارة بعد الدبلوماسي مول",
        lat: 32.780774,
        lng: 13.260604,
    },
    {
        name: "فرع البيضاء",
        city: "البيضاء",
        address: "السوق الفوقي خلف التجيش",
        lat: 32.762222,
        lng: 21.755833,
    },
    {
        name: "فرع سرت",
        city: "سرت",
        address: "مفترق شارع دبي",
        lat: 31.206389,
        lng: 16.588056,
    },
    {
        name: "فرع طبرق",
        city: "طبرق",
        address: "شارع شاهر روحه",
        lat: 32.083611,
        lng: 23.976389,
    },
];

// ✅ مكون عرض الخريطة
const BranchesMap = () => {
    return (
        <div className="w-full h-[500px] rounded-xl overflow-hidden">
            
            {/* ✅ حاوية الخريطة – مركز البداية في بنغازي */}
            <MapContainer
                center={[32.108108, 20.081695]} // 👉 نبدأ على بنغازي
                zoom={6}
                scrollWheelZoom={false}
                className="w-full h-full z-0"
            >
                {/* ✅ طبقة الأرضيات (الخريطة نفسها) */}
                <TileLayer
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* ✅ عرض كل فرع باستخدام Marker */}
                {branches.map((branch, index) => {

                    // ✅ ترتيب الفرع البنغازي داخل القائمة
                    const benghaziBranches = branches.filter((b) => b.city === "بنغازي");
                    const benghaziIndex = branch.city === "بنغازي"
                        ? benghaziBranches.findIndex((b) => b.name === branch.name)
                        : 0;

                    // ✅ نحرك فقط فروع بنغازي قليلًا لتجنب التراكب في العلامات
                    const offsetLng =
                        branch.city === "بنغازي" ? branch.lng + benghaziIndex * 0.03 : branch.lng;

                    return (
                        <Marker
                            key={index}
                            position={[branch.lat, offsetLng]}// ✅ موقع الفرع
                            icon={customIcon}// ✅ استخدام الأيقونة المخصصة
                        >
                            <Popup>
                                {/* ✅ محتوى البالونة عند الضغط على العلامة */}
                                <div dir="rtl">
                                    <strong>{branch.name}</strong><br />
                                    {branch.city}<br />
                                    {branch.address}
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}

            </MapContainer>
        </div>
    );
};

export default BranchesMap;
