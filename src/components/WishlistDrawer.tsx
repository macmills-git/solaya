import React from 'react';
import { X, Trash2, ArrowUpRight, Heart } from 'lucide-react';
import { WishlistItem, CurrencyCode } from '../types';
import { CURRENCIES } from '../data/solayaData';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: WishlistItem[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
  onBookItem: (item: WishlistItem) => void;
  currency: CurrencyCode;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearAll,
  onBookItem,
  currency,
}) => {
  if (!isOpen) return null;

  const curr = CURRENCIES[currency] || CURRENCIES.USD;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-solaya-ivory shadow-2xl border-l border-solaya-sand/30 flex flex-col justify-between text-solaya-charcoal">
          
          {/* Header */}
          <div className="p-6 border-b border-solaya-charcoal/10 flex items-center justify-between bg-solaya-forest text-solaya-sand">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-solaya-terracotta fill-solaya-terracotta" />
              <h3 className="font-arcilla text-xl text-white font-normal">Saved Sanctuaries</h3>
              <span className="text-xs font-mono bg-solaya-sand/20 px-2 py-0.5 rounded-full text-solaya-sand">
                {items.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-solaya-sand/70 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="p-6 overflow-y-auto flex-1 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <Heart className="w-10 h-10 text-solaya-sand/40 mx-auto" />
                <p className="font-arcilla text-xl text-solaya-forest">No Escapes Saved</p>
                <p className="text-xs text-solaya-charcoal/60 max-w-xs mx-auto font-ambiant">
                  Tap the heart icon on any destination or private villa to curate your personal sanctuary shortlist.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-white border border-solaya-sand/40 shadow-sm flex gap-3 items-center justify-between"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-mono text-solaya-terracotta tracking-wider block">
                      {item.type}
                    </span>
                    <h4 className="font-arcilla text-lg text-solaya-forest truncate">{item.title}</h4>
                    <p className="text-xs text-solaya-charcoal/60 truncate">{item.subtitle}</p>
                    {item.rateUSD && (
                      <span className="text-xs font-mono font-bold text-solaya-forest block mt-1">
                        {curr.symbol}{Math.round(item.rateUSD * curr.rate).toLocaleString()}/nt
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-solaya-charcoal/40 hover:text-rose-600 transition"
                      title="Remove"
                      aria-label={`Remove ${item.title} from wishlist`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    {item.type === 'property' && (
                      <button
                        onClick={() => {
                          onClose();
                          onBookItem(item);
                        }}
                        className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-solaya-forest text-solaya-sand hover:bg-solaya-charcoal transition flex items-center gap-1"
                      >
                        Book <ArrowUpRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-solaya-charcoal/10 bg-white flex items-center justify-between">
              <button
                onClick={onClearAll}
                className="text-xs text-solaya-charcoal/50 hover:text-rose-600 font-mono transition"
              >
                Clear Shortlist
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-solaya-forest text-solaya-sand font-bold text-xs uppercase tracking-wider hover:bg-solaya-charcoal transition shadow"
              >
                Continue Exploring
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

