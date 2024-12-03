import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import FindTalent from './pages/FindTalent';
import Profile from './pages/Profile';
import HiringPipeline from './pages/HiringPipeline';
import YourJobs from './pages/YourJobs';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/find-talent" element={<FindTalent />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/hiring-pipeline" element={<HiringPipeline />} />
          <Route path="/jobs" element={<YourJobs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;