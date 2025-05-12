import StatCard from './StatCard';

const DashboardStats = () => {
  const stats = [
    { title: 'Total Appointments', value: 12, color: 'purple' },
    { title: 'Upcoming Appointments', value: 3, color: 'blue' },
    { title: 'Canceled Appointments', value: 12, color: 'red' },
    { title: 'Profile Views', value: 12, color: 'green' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats;
