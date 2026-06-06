import Header from './components/Header';
import Hero from './components/Hero';
import ShipMap from './components/ShipMap';
import Timeline from './components/Timeline';
import KeyFigures from './components/KeyFigures';
import ImpactArgentina from './components/ImpactArgentina';
import Context from './components/Context';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <ShipMap />
        <Timeline />
        <KeyFigures />
        <ImpactArgentina />
        <Context />
      </main>
      <Footer />
    </div>
  );
}
