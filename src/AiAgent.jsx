import { useState } from 'react';
import { Sparkles, X, Send, Loader2 } from 'lucide-react';

const AiAgent = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [aiInput, setAiInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);

  const callGemini = async (aiInput) => {
    const response = await fetch('/api/agent/agent', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: aiInput
    });
    return await response.text();
  };

  const handleAiSubmit = async (e) => {
    e.preventDefault();
    if (!aiInput.trim()) return;
    setIsAiLoading(true);
    const result = await callGemini(aiInput);
    setAiResponse(result);
    setAiInput("");
    setIsAiLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {!isAiOpen ? (
        <button
          onClick={() => setIsAiOpen(true)}
          className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:scale-110 transition-all border-t-2 border-l-2 border-white/20 text-white"
        >
          <Sparkles className="text-white group-hover:animate-pulse" />
        </button>
      ) : (
        <div className="w-80 md:w-96 bg-[#0B0B0F] border-t-[3px] border-l-[3px] border-white/20 border-b border-r border-white/5 rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,1)] overflow-hidden flex flex-col backdrop-blur-2xl">
          <div className="p-4 bg-[#0D1525] flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className='text-blue-400' />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-slate-300">Impact Layer // AI</span>
            </div>
            <button onClick={() => setIsAiOpen(false)} className="text-slate-400 hover:text-white transition-colors"><X size={16} /></button>
          </div>

          <div className="h-72 overflow-y-auto p-5 font-mono text-xs space-y-5 bg-black/40 text-slate-300 leading-relaxed tracking-wide">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5 italic text-[10px] text-slate-400">
              Ask about William's scale at JPMC, his $28M production save at GM, or his systems-first philosophy.
            </div>
            {aiResponse && (
              <div className="p-3 bg-blue-900/20 border border-blue-500/20 rounded-2x1 text-slate-200 animate-in fade-in slide-in-from-bottom-2 duration-500">
                {aiResponse}
              </div>
            )}
          </div>

          <form onSubmit={handleAiSubmit} className="p-4 border-t border-white/5 bg-[#0D0D12] flex gap-2">
            <input
              value={aiInput}
              onChange={(e) => setAiInput(e.target.value)}
              placeholder="Query metrics..."
              className="flex-grow bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2 text-xs font-mono focus:outline-none focus:border-blue-500/50 text-slate-200 placeholder:text-slate-600 transition-all font-bold"
            />
            <button type="submit" disabled={isAiLoading} className="p-2 bg-blue-700 hover:bg-blue-600 rounded-xl disabled:opacity-50 transition-colors shadow-lg shadow-blue-900/20">
              {isAiLoading ? <Loader2 size={16} className="animate-spin text-white" /> : <Send size={16} />}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AiAgent;
