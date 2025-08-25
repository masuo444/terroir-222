import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import SolutionOverview from '@/components/SolutionOverview';
import Solution from '@/components/Solution';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import Flow from '@/components/Flow';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <SolutionOverview />
      <Solution />
      <Benefits />
      <Pricing />
      <Flow />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
