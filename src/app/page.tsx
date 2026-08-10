import { HomeClientChrome } from "@/components/HomeClientChrome";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { SocialProof } from "@/components/SocialProof";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <HomeClientChrome />
      <Header />
      <Hero />
      <Services />
      <SocialProof />
      <FAQ />
      <Footer />
    </>
  );
}
