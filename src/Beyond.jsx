import { Terminal, Users, Globe, ShieldCheck, Database, Code2 } from 'lucide-react';

const Beyond = () => {
  return (
    <section id="beyond" className="py-40 bg-white/[0.01] text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <h2 className="text-[11px] font-mono uppercase tracking-[0.4em] text-blue-500 mb-8 italic skew-x-[-10deg] font-bold">/ Beyond The Terminal</h2>
            <h3 className="text-6xl font-black tracking-tight italic mb-10 skew-x-[-10deg] uppercase">Leadership & Velocity</h3>
            <p className="text-xl text-white/50 leading-relaxed font-light mb-12">
              Engineering excellence extends beyond the terminal. Whether winning GM Racing Hackathons or mentoring at Black Girls Code, I focus on being the <span className="text-white font-medium italic underline decoration-blue-500/50 underline-offset-4">Force Multiplier</span> who lifts the ceiling for the whole team.
            </p>

            <div className="grid gap-8">
              <div className="p-8 rounded-[2rem] bg-white/[0.03] border-l-[4px] border-blue-600 flex gap-6 items-center shadow-lg border-t border-white/5">
                <Terminal className="w-8 h-8 text-blue-500" />
                <div>
                  <h5 className="font-bold text-lg uppercase tracking-tight italic">Racing Hackathon Winner</h5>
                  <p className="text-sm text-white/40 font-mono tracking-widest mt-1 uppercase font-bold">GM Racing // Telemetry Engine</p>
                </div>
              </div>
              <div className="p-8 rounded-[2rem] bg-white/[0.03] border-l-[4px] border-purple-600 flex gap-6 items-center shadow-lg border-t border-white/5">
                <Users className="w-8 h-8 text-purple-500" />
                <div>
                  <h5 className="font-bold text-lg uppercase tracking-tight italic">Technical Mentorship</h5>
                  <p className="text-sm text-white/40 font-mono tracking-widest mt-1 uppercase font-bold">Black Girls Code // Ideation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[
              { icon: <Globe className="text-blue-500" />, label: "Global Reach" },
              { icon: <ShieldCheck className="text-red-500" />, label: "Security First" },
              { icon: <Database className="text-green-500" />, label: "High Scale" },
              { icon: <Code2 className="text-purple-500" />, label: "AI Augmented" }
            ].map((item, idx) => (
              <div key={idx} className={`aspect-square rounded-[2rem] bg-white/[0.02] border-t-[2px] border-l-[2px] border-white/20 flex flex-col items-center justify-center p-8 group hover:bg-white/5 transition-all shadow-xl backdrop-blur-md ${idx === 1 ? 'mt-12' : idx === 2 ? '-mt-12' : ''}`}>
                <div className="group-hover:scale-125 transition-transform duration-500 mb-4">{item.icon}</div>
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-40 font-bold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beyond;
