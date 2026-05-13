import Footer from './Footer';
import Nav from './Nav';
import Hero from './Hero';
import Impact from './Impact';
import Projects from './Projects';
import Stack from './Stack';
import Beyond from './Beyond';
import AiAgent from './AiAgent';

/**
 * Obsidian Terminal v5.0
 * Architecture: Systems-First Engineering
 * Design: Heavy Plate Glass + LED Edge Lighting
 */

const App = () => {
  return (
    <div className="min-h-screen bg-[#060606] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Background Code Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)`, backgroundSize: '60px 60px' }}>
      </div>

      <Nav />
      <Hero />
      <Impact />
      <Projects />
      <Stack />
      <Beyond />
      <AiAgent />
      <Footer />
    </div>
  );
};

export default App;