import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Language } from '../types';

export interface BreadcrumbItem {
  label: string;
  page?: string;
}

export interface SiblingLink {
  label: string;
  page: string;
  active?: boolean;
}

interface BreadcrumbsProps {
  currentLang: Language;
  items: BreadcrumbItem[];
  onNavigate: (page: string) => void;
  siblingLinks?: SiblingLink[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  onNavigate,
  siblingLinks
}) => {
  return (
    <div className="bg-stone-100/90 border-b border-stone-200/80 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trail */}
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs text-stone-600 mb-2">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 text-stone-500 hover:text-amber-900 transition-colors font-medium cursor-pointer"
            title="Home"
          >
            <Home className="w-3.5 h-3.5 text-stone-400 hover:text-amber-800" />
            <span className="sr-only">Home</span>
          </button>

          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" />
                {isLast || !item.page ? (
                  <span className="font-semibold text-amber-950 truncate max-w-[200px] sm:max-w-none">
                    {item.label}
                  </span>
                ) : (
                  <button
                    onClick={() => onNavigate(item.page!)}
                    className="hover:text-amber-900 transition-colors font-medium cursor-pointer truncate max-w-[160px] sm:max-w-none"
                  >
                    {item.label}
                  </button>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Quick Sibling Bar (if provided) */}
        {siblingLinks && siblingLinks.length > 0 && (
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pt-1 pb-0.5 no-scrollbar text-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mr-1 shrink-0">
              Explore:
            </span>
            {siblingLinks.map((s, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(s.page)}
                className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-all cursor-pointer text-xs ${
                  s.active
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'bg-white hover:bg-stone-200/80 text-stone-700 border border-stone-200'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
