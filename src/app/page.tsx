import { HomeClientChrome } from "@/components/HomeClientChrome";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ToolsSection } from "@/components/ToolsSection";
import { BlogsSection } from "@/components/BlogsSection";
import { SocialProof } from "@/components/SocialProof";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <HomeClientChrome />
      <Header />
      <Hero />
      <About />
      <Services />
      <ToolsSection />
      <BlogsSection />
      <SocialProof />
      <FAQ />
      <Footer />
    </>
  );
}
