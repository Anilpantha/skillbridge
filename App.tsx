
import React, { useState, useMemo } from 'react';
import { PLATFORMS } from './constants';
import { Category, Platform } from './types';
import { PlatformCard } from './components/PlatformCard';
import { CategoryButton } from './components/CategoryButton';

const App: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<Category | 'All' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const filteredPlatforms = useMemo(() => {
    return PLATFORMS.filter(p => {
      const matchesCategory = currentCategory === 'All' || !currentCategory || p.categories.includes(currentCategory as Category);
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [currentCategory, searchQuery]);

  const getCountForCategory = (cat: Category) => {
    return PLATFORMS.filter(p => p.categories.includes(cat)).length;
  };

  const resetFilters = () => {
    setCurrentCategory(null);
    setSearchQuery('');
  };

  const DisclaimerModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
        <h2 className="text-2xl font-black text-blue-900 mb-4">Legal Disclaimer</h2>
        <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
          <p>SkillBridge is developed by <strong>Anil Pantha</strong>.</p>
          <p>This application is <strong>not affiliated</strong> with any of the listed learning platforms. All trademarks, service marks, trade names, logos, and icons are the property of their respective owners.</p>
          <p>SkillBridge serves only as a bridge to help users discover professional skill sources. We redirect users to <strong>official websites</strong> to ensure trust and security.</p>
          <p>We do not host any course content inside this application.</p>
        </div>
        <button 
          onClick={() => setShowDisclaimer(false)}
          className="w-full mt-8 bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 active:scale-95 transition-all"
        >
          I Understand
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pb-20 flex flex-col bg-slate-50 max-w-md mx-auto shadow-2xl relative">
      {showDisclaimer && <DisclaimerModal />}

      {/* Header */}
      <header className="bg-white px-6 pt-10 pb-6 rounded-b-[2.5rem] shadow-sm sticky top-0 z-30">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-black text-blue-700 tracking-tight">SkillBridge</h1>
            <p className="text-slate-400 text-xs font-medium">By Anil Pantha</p>
          </div>
          <button 
            onClick={() => setShowDisclaimer(true)}
            className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-blue-600 active:bg-blue-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search platforms or skills..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-100 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          )}
        </div>
      </header>

      <main className="px-6 mt-8 flex-grow">
        {!currentCategory && !searchQuery ? (
          <>
            <h2 className="text-xl font-bold text-slate-800 mb-6">Explore Categories</h2>
            <div className="grid grid-cols-2 gap-4">
              <CategoryButton 
                category={Category.TECH} 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>}
                count={getCountForCategory(Category.TECH)}
                onClick={() => setCurrentCategory(Category.TECH)}
              />
              <CategoryButton 
                category={Category.BUSINESS} 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>}
                count={getCountForCategory(Category.BUSINESS)}
                onClick={() => setCurrentCategory(Category.BUSINESS)}
              />
              <CategoryButton 
                category={Category.DESIGN} 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>}
                count={getCountForCategory(Category.DESIGN)}
                onClick={() => setCurrentCategory(Category.DESIGN)}
              />
              <CategoryButton 
                category={Category.AI} 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"></path><path d="M12 18v4"></path><path d="M4.93 4.93l2.83 2.83"></path><path d="M16.24 16.24l2.83 2.83"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="M4.93 19.07l2.83-2.83"></path><path d="M16.24 7.76l2.83-2.83"></path><circle cx="12" cy="12" r="4"></circle></svg>}
                count={getCountForCategory(Category.AI)}
                onClick={() => setCurrentCategory(Category.AI)}
              />
              <div className="col-span-2">
                <button 
                  onClick={() => setCurrentCategory('All')}
                  className="w-full bg-white rounded-2xl p-4 shadow-sm border border-slate-100 font-bold text-slate-700 flex items-center justify-center gap-2 active:bg-blue-50 transition-colors"
                >
                  View All Platforms
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={resetFilters}
                className="flex items-center gap-1 text-blue-600 font-bold text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Home
              </button>
              <h2 className="text-slate-800 font-bold">{currentCategory === 'All' ? 'All Platforms' : currentCategory}</h2>
            </div>
            
            <div className="space-y-4">
              {filteredPlatforms.length > 0 ? (
                filteredPlatforms.map(platform => (
                  <PlatformCard key={platform.id} platform={platform} />
                ))
              ) : (
                <div className="bg-white rounded-2xl p-10 text-center border border-dashed border-slate-300">
                  <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="text-slate-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  </div>
                  <p className="text-slate-500 font-medium">No platforms found.</p>
                  <button 
                    onClick={resetFilters}
                    className="mt-4 text-blue-600 text-sm font-bold underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Persistent Footer Credit */}
      <footer className="px-6 py-4 mt-auto text-center border-t border-slate-100 bg-white/50">
        <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Developed by Anil Pantha</p>
      </footer>
    </div>
  );
};

export default App;
