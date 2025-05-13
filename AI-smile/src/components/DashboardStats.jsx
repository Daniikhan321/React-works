import React from 'react';
import StatCard from './StatCard';

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      <StatCard
        title="Total Users"
        value="21.2k"
        color="blue"
        icon="/src/assets/totaluser.svg"
      />
      <StatCard
        title="Total Smiled Photo Analyzed"
        value="36"
        color="yellow"
        icon="/src/assets/Analyzed.svg"
      />
     
      <StatCard
        title="Number of Provider List"
        value="12"
        color="purple"
        icon="/src/assets/providerlist.svg"
      />
    </div>
  );
};

export default DashboardStats;
