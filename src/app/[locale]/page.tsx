import { setRequestLocale } from "next-intl/server";
import Dock from "@/components/Dock";
import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import Story from "@/components/sections/Story";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main>
      <Hero />
      <Story />
      <About />
      <Dock />
      {/* Next: Certifications, Roles, Services, Projects, Partners, Success Story,
          Testimonials, Pricing, FAQ, Footer. */}
    </main>
  );
}
