import { metrics } from './constants';

const Impact = () => {
  return (
    <section id="impact" className="py-24 border-y border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row flex-wrap justify-center lg:justify-between gap-16 lg:gap-8 xl:gap-12">
          {metrics.map((m) => (
            <div key={m.label} className="group flex flex-col items-center md:items-start">
              <div className="mb-6 opacity-60">{m.icon}</div>
              <div className="text-5xl xl:text-6xl font-black mb-2 tracking-tighter group-hover:text-blue-500 transition-colors skew-x-[-10deg]">{m.label}</div>
              <div className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40 uppercase font-bold">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
