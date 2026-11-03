import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-solaya-forest/95 text-solaya-sand backdrop-blur-md px-4 py-3 rounded-2xl shadow-2xl border border-solaya-sand/30 flex items-center gap-3 transition-all animate-bounce-short">
      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
      <span className="text-xs font-mono font-medium tracking-wide">
        {message}
      </span>
    </div>
  );
};

