
import React from 'react';
import { Platform } from '../types';

interface PlatformCardProps {
  platform: Platform;
}

export const PlatformCard: React.FC<PlatformCardProps> = ({ platform }) => {
  const handleRedirect = () => {
    window.open(platform.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col transition-all active:scale-[0.98]">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-xl text-blue-800">{platform.name}</h3>
        <div className="flex gap-1">
          {platform.isFree && (
            <span className="bg-green-100 text-green-700 text-[10px] uppercase font-bold px-2 py-1 rounded">Free</span>
          )}
          {platform.isLowCost && (
            <span className="bg-blue-100 text-blue-700 text-[10px] uppercase font-bold px-2 py-1 rounded">Low Cost</span>
          )}
        </div>
      </div>
      
      <p className="text-slate-600 text-sm mb-4 flex-grow leading-relaxed">
        {platform.description}
      </p>

      <div className="mb-4">
        <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Certificate Type</p>
        <p className="text-sm font-medium text-slate-700">{platform.certificateType}</p>
      </div>

      <button 
        onClick={handleRedirect}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
      >
        <span>Visit Official Site</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </button>
    </div>
  );
};
