import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import DashboardStats from './components/DashboardStats';
import AppointmentTable from './components/AppointmentTable';

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <Topbar />
        <div className="p-6">
          <DashboardStats />
          <AppointmentTable />
        </div>
      </div>
    </div>
  );
};

export default App;
