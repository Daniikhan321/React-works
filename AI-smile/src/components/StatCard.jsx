const StatCard = ({ title, value, color }) => (
    <div className="bg-white rounded-lg shadow p-4">
      <h4 className="text-sm text-gray-600">{title}</h4>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">{value}</span>
        <span className={`w-6 h-6 rounded-full bg-${color}-400`}> <img src="" alt="" /></span>
      </div>
    </div>
  );
  
  export default StatCard;
  