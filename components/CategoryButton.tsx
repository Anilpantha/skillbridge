
import React from 'react';
import { Category } from '../types';

interface CategoryButtonProps {
  category: Category;
  icon: React.ReactNode;
  count: number;
  onClick: () => void;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({ category, icon, count, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center transition-all active:bg-blue-50 active:scale-95 group"
    >
      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-bold text-slate-800 text-lg mb-1">{category}</h3>
      <p className="text-slate-400 text-xs">{count} Platforms</p>
    </button>
  );
};
