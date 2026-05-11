import { useState } from 'react';
import { projects } from './constants';

const Projects = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section id="work" className="py-40 relative text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-xl">
            <h2 className="text-[11px] font-mono uppercase tracking-[0.4em] text-blue-500 mb-6 italic skew-x-[-10deg] font-bold">/ Strategic Execution</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic skew-x-[-10deg]">Impact Reports</h3>
          </div>
          <div className="flex gap-4">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveCard(i)}
                className={`w-16 h-1 transition-all duration-700 ${activeCard === i ? 'bg-blue-500 scale-x-125' : 'bg-white/10'}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-4 space-y-4">
            {projects.map((p, i) => (
              <div
                key={i}
                onClick={() => setActiveCard(i)}
                className={`relative p-8 rounded-xl cursor-pointer transition-all border group ${activeCard === i ? `bg-white/[0.12] border-${p.cardColor}/40 skew-x-[-12deg] shadow-lg` : 'bg-transparent border-transparent hover:bg-white/[0.02]'
                  }`}
              >
                <div className={activeCard === i ? 'skew-x-[12deg]' : ''}>
                  <span className="text-[9px] font-mono opacity-30 block mb-3 uppercase tracking-widest font-bold group-hover:opacity-100 transition-opacity">{p.company}</span>
                  <h4 className={`text-xl font-bold transition-all ${activeCard === i ? 'text-white' : 'text-white/30 group-hover:text-white/60'}`}>
                    {p.title}
                  </h4>
                </div>
                {activeCard === i && <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-${p.cardColor} rounded-r shadow-[0_0_20px_rgba(255,255,255,0.4)]`}></div>}
              </div>
            ))}
          </div>

          {/* Main Detail Plate - LED EDGE LIT */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="relative flex-grow">
              <div className={`absolute -inset-[2px] rounded-[2.5rem] blur-[20px] transition-colors duration-700 opacity-20 ${activeCard === 0 ? 'bg-red-500' :
                activeCard === 1 ? 'bg-blue-500' :
                  'bg-green-500'
                }`}></div>

              <div className={`relative h-full bg-white/[0.02] backdrop-blur-3xl border-t-[4px] border-l-[4px] rounded-[2.5rem] p-8 md:p-16 flex flex-col shadow-[0_50px_100px_-20px_rgba(0,0,0,1),inset_0_0_80px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-700 ${activeCard === 0 ? 'border-t-red-500/60 border-l-red-500/60' :
                activeCard === 1 ? 'border-t-blue-500/60 border-l-blue-500/60' :
                  'border-t-green-500/60 border-l-green-500/60'
                }`}>
                <div className={`absolute -top-24 -right-24 w-64 h-64 blur-[120px] pointer-events-none transition-colors duration-700 ${activeCard === 0 ? 'bg-red-500/20' :
                  activeCard === 1 ? 'bg-blue-500/20' :
                    'bg-green-500/20'
                  }`}></div>

                <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6 relative z-10">
                  <div>
                    <h4 className={`text-[10px] font-mono uppercase tracking-[0.4em] mb-4 underline underline-offset-8 font-bold ${activeCard === 0 ? 'text-red-400 decoration-red-500/30' :
                      activeCard === 1 ? 'text-blue-400 decoration-blue-500/30' :
                        'text-green-400 decoration-green-500/30'
                      }`}>{projects[activeCard].company}</h4>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tight uppercase italic">{projects[activeCard].headline}</h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 mt-auto relative z-10">
                  <div className="space-y-10">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-500 block mb-4 font-bold tracking-widest">The Blocker</span>
                      <p className="text-base leading-relaxed text-white/60 font-light italic">"{projects[activeCard].problem}"</p>
                    </div>
                    <div>
                      <span className={`text-[10px] font-mono uppercase tracking-[0.3em] block mb-4 font-bold tracking-widest ${activeCard === 0 ? 'text-red-400' :
                        activeCard === 1 ? 'text-blue-400' :
                          'text-green-400'
                        }`}>Strategic Move</span>
                      <p className="text-base leading-relaxed text-white/80">{projects[activeCard].action}</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-green-400 block mb-4 font-bold tracking-widest">Proven Outcome</span>
                      <p className="text-base leading-relaxed text-white/80">{projects[activeCard].result}</p>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-12">
                      {projects[activeCard].tags.map((t, idx) => (
                        <span key={idx} className="text-[9px] font-mono bg-white/[0.05] border border-white/10 px-4 py-2 rounded-full uppercase tracking-widest text-white/50 hover:text-white transition-colors font-bold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
