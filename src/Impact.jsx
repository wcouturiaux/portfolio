import { metrics } from './constants';

const Impact = () => {
  return (
    <section id="impact" className="py-24 border-y border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {metrics.map((m, i) => (
            <div key={i} className="group flex flex-col items-center md:items-start">
              <div className="mb-6 opacity-60">{m.icon}</div>
              <div className="text-6xl font-black mb-2 tracking-tighter group-hover:text-blue-500 transition-colors skew-x-[-10deg]">{m.label}</div>
              <div className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40 uppercase font-bold">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
