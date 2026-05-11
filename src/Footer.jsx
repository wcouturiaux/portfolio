import { ExternalLink } from "lucide-react";

const Footer = () => {

  return (
    < footer className="py-32 border-t border-white/5 bg-black text-white" >
      <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
        <div className="flex flex-col items-center gap-12">
          <div className="w-20 h-20 bg-white text-black rounded-2xl flex items-center justify-center font-black text-4xl skew-x-[-10deg] shadow-[4px_4px_0px_rgba(59,130,246,1)]">W</div>
          <p className="text-white/30 max-w-md font-mono text-[11px] tracking-widest leading-loose uppercase italic font-bold">
            Obsidian Terminal // System Status: Synchronized // Mission Critical Architecture // Columbus, OH
          </p>
          <div className="flex gap-16">
            {/* <Linkedin className="w-8 h-8 text-white/20 hover:text-blue-400 cursor-pointer transition-all" />
              <Github className="w-8 h-8 text-white/20 hover:text-white cursor-pointer transition-all" /> */}
            <ExternalLink className="w-8 h-8 text-white/20 hover:text-purple-400 cursor-pointer transition-all" />
          </div>
          <p className="text-[9px] uppercase tracking-[0.8em] text-white/10 mt-20 font-bold">
            Senior Individual Contributor // Build v5.0.0 // May 2026
          </p>
        </div>
      </div>
    </footer >
  )
}

export default Footer;