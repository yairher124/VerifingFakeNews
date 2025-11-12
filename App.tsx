
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReportPage from './pages/ReportPage';
import MethodologyPage from './pages/MethodologyPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-[1200px] flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/report/:id" element={<ReportPage />} />
                <Route path="/methodology" element={<MethodologyPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
