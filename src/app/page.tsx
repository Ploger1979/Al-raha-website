import Hero from '@/components/home/Hero';
import Features from "@/components/home/Features";
import Testimonial from '@/components/home/Testimonial';
import VideoSection from '@/components/home/VideoSection';
import ProductsPreview from '@/components/home/ProductsPreview';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonial />
      <VideoSection />
      <ProductsPreview />
      <Navbar />
      <Footer />
    </main>
  );
}
