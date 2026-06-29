import { HomeClientChrome } from "@/components/HomeClientChrome";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { BlogsSection } from "@/components/BlogsSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <HomeClientChrome />
      <Header />
      <Hero />
      <About />
      <Services />
      <BlogsSection />
      <Footer />
    </>
  );
}
