import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon } from './Icons';
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-black/90 backdrop-blur-xl border-white/5 py-3' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/30 skew-x-[-12deg]">W</div>
          <span className="font-mono text-[11px] tracking-[0.2em] opacity-40 uppercase hidden sm:block font-bold">couturiaux.dev</span>
        </div>
        <div className="flex items-center gap-10">
          <div className="hidden md:flex gap-10 text-[10px] font-mono tracking-widest opacity-40 uppercase font-bold">
            <a href="#work" className="hover:text-blue-400 transition-colors">/Work</a>
            <a href="#stack" className="hover:text-blue-400 transition-colors">/Stack</a>
            <a href="#beyond" className="hover:text-blue-400 transition-colors">/Beyond</a>
          </div>
          <div className="flex gap-5">
            <a href="https://www.linkedin.com/in/william-couturiaux" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-all hover:text-blue-400" />
            </a>
            <a href="https://github.com/wcouturiaux" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-all hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;