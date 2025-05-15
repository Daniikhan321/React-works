import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/sidebar';
import Topbar from './components/topbar';
import DashboardStats from './components/DashboardStats';
import AppointmentTable from './components/AppointmentTable';
import UserManagement from './components/UserManagement';
import SmileAnalysisRecord from './components/SmileAnalysisRecord';
import DentalManagement from './components/DentalManagement';
import Setting from './components/setting';


const Dashboard = () => (
  <div className="p-6">
    <DashboardStats />
    <AppointmentTable />
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 bg-gray-100">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/usermanagement" element={<UserManagement />} />
            <Route path="/smileanalysisrecord" element={<SmileAnalysisRecord/>}/>
            <Route path="/dentalmanagement" element={<DentalManagement/>}/>
            <Route path="/setting" element={<Setting/>}/>
            </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
