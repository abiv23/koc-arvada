import { Metadata } from "next";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Events from "@/components/events";
import News from "@/components/news";
import CTA from "@/components/cta";

export const metadata: Metadata = {
  title: "Knights of Columbus Council 12392 | St. Joan of Arc Parish",
  description: "Welcome to Knights of Columbus Council 12392, serving St. Joan of Arc Parish and the community through charity, unity, fraternity, and patriotism.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Events />
      <News />
      <CTA />
    </>
  );
}
