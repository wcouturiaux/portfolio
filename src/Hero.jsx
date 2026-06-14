import { useState } from "react";
import { Command } from "lucide-react";
const Hero = () => {
  const [hoveredName, setHoveredName] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 text-white">
      <div className="absolute inset-0 flex opacity-10 pointer-events-none text-[9px] font-mono leading-tight select-none italic">
        <div className="w-1/2 p-12 border-r border-white/5 overflow-hidden text-blue-500/50">
          {new Array(3).fill(`@Service\npublic class PurgeEngine {\n  // Industrial Efficiency Applied to Code\n  public void executePurge() {\n    return purgeRepository.cleanupMillions();\n  }\n}`).join('\n\n')}
        </div>
        <div className="w-1/2 p-12 overflow-hidden text-purple-500/50">
          {new Array(3).fill(`const Dashboard = () => {\n  const metrics = useMetrics$();\n  // Throughput Optimized State\n  return metrics.map(m => <Card data={m} />);\n}`).join('\n\n')}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-white/[0.03] border-t border-l border-white/10 backdrop-blur-sm mb-10 group cursor-default skew-x-[-12deg]">
            <div className="skew-x-[12deg] flex items-center gap-2">
              <Command className="w-3 h-3 text-blue-500" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-60 font-bold">Architecting High-Scale Systems</span>
            </div>
          </div>

          <div
            className="relative mb-8"
            onMouseEnter={() => setHoveredName(true)}
            onMouseLeave={() => setHoveredName(false)}
          >
            <h1 className={`text-6xl md:text-9xl font-black tracking-tight leading-[0.95] transition-all duration-700 ${hoveredName ? 'text-blue-500' : 'text-white'}`}>
              William L.<br />Couturiaux
            </h1>
            {hoveredName && (
              <div 
                className="absolute -top-10 left-0 font-mono text-xs text-blue-500 animate-pulse font-bold"
                aria-hidden="true"
              >
                {`> sudo execute --systems_first_engineering`}
              </div>
            )}
          </div>

          <h2 className="text-xl md:text-3xl font-mono text-blue-400 mb-10 uppercase tracking-tighter italic skew-x-[-10deg] font-bold">
            Senior Software Engineer
          </h2>

          <p className="text-lg text-white/50 mb-12 max-w-xl leading-relaxed font-light">
            Architecting mission-critical systems for enterprise scale.
            Applying a <span className="text-white font-medium italic underline decoration-blue-500/50 underline-offset-4">Systems-First methodology</span> to eliminate technical debt and drive operational value.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            <button
              onClick={() => document.getElementById("impact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative px-10 py-4 font-bold overflow-hidden rounded bg-white text-black transition-all hover:bg-white/90 shadow-[4px_4px_0px_rgba(59,130,246,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none skew-x-[-10deg]"
            >
              <span className="relative z-10 block skew-x-[10deg]">VIEW IMPACT</span>
            </button>
            <button disabled className="px-10 py-4 font-mono text-xs tracking-widest border border-white/10 rounded hover:bg-white/[0.03] transition-all uppercase font-bold text-white">
              Read My Story
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative w-72 h-96 group">
            <div className="absolute top-4 left-4 w-full h-full border border-blue-500/20 rounded-2xl transition-all duration-500"></div>
            <div className="relative w-full h-full bg-white/[0.03] backdrop-blur-3xl border-t-[3px] border-l-[3px] border-white/40 border-b border-r border-white/5 rounded-[2.5rem] overflow-hidden flex items-center justify-center shadow-[0_30px_60px_-10px_rgba(0,0,0,0.8),inset_0_0_40px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
              <img
                src="/profile.webp"
                alt="William Couturiaux"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal"
                onError={(e) => e.target.style.display = 'none'}
              />
              <div className="absolute bottom-10 left-0 right-0 text-center z-20">
                <p className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-30 font-bold drop-shadow-md">Identify [Self]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;