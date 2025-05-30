// frontend/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ScanPage from './pages/ScanPage';
import OverviewPage from './pages/OverviewPage';
import AdminPage from './pages/AdminPage';
import './index.css';

const App: React.FC = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-white text-gray-900">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scan/:code_id" element={<ScanPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
