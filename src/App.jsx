import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ScenarioSection from './components/ScenarioSection'
import MethodSection from './components/MethodSection'
import ImplementationSection from './components/ImplementationSection'
import AboutSection from './components/AboutSection'
import PricingSection from './components/PricingSection'
import ScaleReadySection from './components/ScaleReadySection'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ScenarioSection />
        <MethodSection />
        <ImplementationSection />
        <AboutSection />
        <PricingSection />
        <ScaleReadySection />
      </main>
    </>
  )
}
