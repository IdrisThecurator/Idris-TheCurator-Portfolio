import { setRequestLocale } from "next-intl/server";
import Dock from "@/components/Dock";
import Hero from "@/components/hero/Hero";
import RoughFilter from "@/components/RoughFilter";
import About from "@/components/sections/About";
import Certifications from "@/components/sections/Certifications";
import Story from "@/components/sections/Story";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main>
      <RoughFilter />
      <Hero />
      <Story />
      <About />
      <Certifications />
      <Dock />
      {/* Next: Roles, Services, Projects, Partners, Success Story,
          Testimonials, Pricing, FAQ, Footer. */}
    </main>
  );
}
