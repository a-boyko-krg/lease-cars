import Hero from '@/sections/hero/Hero';
import WhyLease from '@/sections/why-lease/WhyLease';
import HowDoes from '@/sections/how-does/HowDoes';
import Welcome from '@/sections/welcome/Welcome';
import Important from '@/sections/important/Important';

function Home() {
  return (
    <main className="main">
      <Hero />
      <WhyLease/>
      <HowDoes/>
      <Welcome/>
      <Important/>
    </main>
  );
}
export default Home;
