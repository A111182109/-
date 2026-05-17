/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import AboutMe from './components/AboutMe';
import TravelPlan from './components/TravelPlan';
import Navigation from './components/Navigation';

export default function App() {
  const [activeTab, setActiveTab] = useState<'about' | 'travel'>('about');

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-sky-500/30">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {activeTab === 'about' ? <AboutMe /> : <TravelPlan />}
      </main>
    </div>
  );
}

