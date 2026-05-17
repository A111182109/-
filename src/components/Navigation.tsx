import { User, Map } from 'lucide-react';
import { motion } from 'motion/react';

interface NavigationProps {
  activeTab: 'about' | 'travel';
  setActiveTab: (tab: 'about' | 'travel') => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 glass-panel">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold tracking-tight text-white">
              李宥杰 (Lee Yu-Jie)
            </h1>
          </div>
          <div className="flex space-x-2 sm:space-x-8">
            <button
              onClick={() => setActiveTab('about')}
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                activeTab === 'about'
                  ? 'border-sky-400 text-sky-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-500'
              }`}
            >
              <User className="w-4 h-4 mr-2" />
              個人介紹
            </button>
            <button
              onClick={() => setActiveTab('travel')}
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                activeTab === 'travel'
                  ? 'border-sky-400 text-sky-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-500'
              }`}
            >
              <Map className="w-4 h-4 mr-2" />
              旅遊規劃
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
