'use client';

import HeroSlider from '@/components/HeroSlider';
import WhyUs from '@/components/WhyUs';
// import ImageGrid from '@/components/ImageGrid'; // Removing as per request
import CoreCompetencies from '@/components/CoreCompetencies';
import WhoWeWorkBestWith from '@/components/WhoWeWorkBestWith';
import Outcomes from '@/components/Outcomes';
import Process from '@/components/Process';
import Expectations from '@/components/Expectations';
// import FinalCTA from '@/components/FinalCTA'; // Moved to layout

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <WhyUs />
      <CoreCompetencies />
      <Outcomes />
      <Process />
      <Expectations />
      <WhoWeWorkBestWith />
      {/* <ImageGrid /> */}
      {/* <FinalCTA /> */}
    </main>
  );
}
