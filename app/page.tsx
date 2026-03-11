'use client';

import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { GallerySection } from '@/components/gallery-section';
import { SpecsSection } from '@/components/specs-section';
import { CTASection } from '@/components/cta-section';
import { FooterSection } from '@/components/footer-section';
import { ThemeToggle } from '@/components/theme-toggle';
import { SmoothScroll } from '@/components/smooth-scroll';
import { Preloader } from '@/components/preloader';

export default function Home() {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <ThemeToggle />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <GallerySection />
        <SpecsSection />
        <CTASection />
        <FooterSection />
      </main>
    </>
  );
}
