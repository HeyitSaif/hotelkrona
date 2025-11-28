import HeroSection from '@/components/sections/HeroSection';
import WelcomeSection from '@/components/sections/WelcomeSection';
import FeaturedRooms from '@/components/sections/FeaturedRooms';
import AmenitiesOverview from '@/components/sections/AmenitiesOverview';
import RestaurantsSection from '@/components/sections/RestaurantsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <FeaturedRooms />
      <AmenitiesOverview />
      <RestaurantsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
