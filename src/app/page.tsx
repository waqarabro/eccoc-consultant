'use client';

import HeroSlider from '@/components/HeroSlider';
import WhyUs from '@/components/WhyUs';
import ImageGrid from '@/components/ImageGrid';
import CoreCompetencies from '@/components/CoreCompetencies';
import Outcomes from '@/components/Outcomes';
import Process from '@/components/Process';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <WhyUs />
      <CoreCompetencies />
      <ImageGrid />
      <Outcomes />
      <Process />
      <FinalCTA />
    </main>
  );
}
