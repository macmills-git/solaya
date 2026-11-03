import React, { useState } from 'react';
import { X, Send, MessageCircle, Sparkles, Compass } from 'lucide-react';

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConciergeModal: React.FC<ConciergeModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'concierge'; text: string; time: string }>>([
    {
      sender: 'concierge',
      text: 'Akwaaba! Welcome to SOLAYA Concierge. I am Kwame from our private guest desk in Ridge, Accra. How may we orchestrate your journey across our African sanctuaries today?',
      time: 'Just now',
    },
  ]);
  const [inputVal, setInputVal] = useState('');

  if (!isOpen) return null;

  const presets = [
    'Inquire about full buyout for The Palm Residence in Ghana',
    'Arrange private helicopter transfer from Kigali to Volcanoes NP',
    'Custom 10-night honeymoon itinerary (Zanzibar + Senegal)',
    'Dietary and private sommelier consultation for Azure House',
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const newMsg = {
      sender: 'user' as const,
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputVal('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'concierge',
          text: `Medaase for your inquiry. I have logged this directly into our VIP travel dossier. Our Accra guest directors are synchronizing with your destination villa host. Would you like to connect directly on WhatsApp with our Head of Private Journeys?`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-solaya-ivory rounded-3xl overflow-hidden shadow-2xl border border-solaya-sand/40 max-h-[90vh] flex flex-col text-solaya-charcoal">
        
        {/* Header */}
        <div className="bg-solaya-forest text-solaya-sand p-5 flex items-center justify-between border-b border-solaya-sand/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-900 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-arcilla text-xl text-white font-normal">SOLAYA Concierge</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-solaya-sand/70 block">
                Direct Host Desk · Accra Headquarters
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-solaya-sand/70 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conversation Box */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 max-h-[380px]">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-solaya-forest text-solaya-sand rounded-tr-none shadow-sm'
                    : 'bg-white text-solaya-charcoal rounded-tl-none border border-solaya-sand/30 shadow-sm'
                }`}
              >
                {m.text}
              </div>
              <span className="text-[10px] font-mono text-solaya-charcoal/40 mt-1 px-1">
                {m.time}
              </span>
            </div>
          ))}
        </div>

        {/* Preset Prompt Suggestions */}
        <div className="px-6 py-2 bg-white/60 border-t border-solaya-sand/20 overflow-x-auto">
          <span className="text-[10px] uppercase font-mono tracking-wider text-solaya-charcoal/50 block mb-1.5">
            Suggested Inquiries:
          </span>
          <div className="flex gap-2 min-w-max pb-1">
            {presets.map((p) => (
              <button
                key={p}
                onClick={() => handleSend(p)}
                className="text-[11px] px-3 py-1.5 rounded-full bg-solaya-sand/20 hover:bg-solaya-sand/40 text-solaya-forest border border-solaya-sand/40 font-medium transition"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-solaya-charcoal/10 flex items-center gap-2">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend(inputVal)}
            placeholder="Type your message or custom travel request..."
            className="flex-1 p-3 rounded-full border border-solaya-sand/50 bg-solaya-ivory text-xs sm:text-sm focus:outline-none focus:border-solaya-forest"
          />
          <button
            onClick={() => handleSend(inputVal)}
            className="w-10 h-10 rounded-full bg-solaya-forest text-solaya-sand flex items-center justify-center hover:bg-solaya-charcoal transition shadow shrink-0"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

