import { ArrowRight } from 'lucide-react';
import { skillClusters } from './constants';

const Stack = () => {
  return (
    <section id="stack" className="py-40 relative border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-32">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.4em] text-blue-500 mb-6 italic skew-x-[-10deg] font-bold">/ Technical Authority</h2>
          <h3 className="text-5xl font-black tracking-tight italic skew-x-[-10deg] uppercase">Technical Ecosystem</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillClusters.map((cluster, i) => (
            <div key={i} className="group relative p-12 rounded-[2rem] bg-white/[0.01] border-t-[3px] border-l-[3px] border-white/20 border-b border-r border-white/5 hover:border-blue-500/40 transition-all shadow-2xl backdrop-blur-xl">
              <h4 className="text-2xl font-black mb-8 group-hover:text-blue-400 transition-colors tracking-tight uppercase italic">{cluster.title}</h4>
              <div className="space-y-5">
                {cluster.skills.map((skill, j) => (
                  <div key={j} className="flex items-center gap-4">
                    <ArrowRight className="w-4 h-4 text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="text-sm font-mono text-white/40 group-hover:text-white/80 transition-colors uppercase tracking-widest leading-none font-bold">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
