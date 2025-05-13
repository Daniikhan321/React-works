const StatCard = ({ title, value, color, icon }) => (
  <div className="bg-white rounded-lg shadow p-4">
    <h4 className="text-sm text-gray-600">{title}</h4>
    <div className="flex justify-between items-center">
      <span className="text-2xl font-bold">{value}</span>
      <span className={`w-8 h-8 flex items-center justify-center rounded-full bg-${color}-400`}>
        <img src={icon} alt="" className="w-5 h-5" />
      </span>
    </div>
  </div>
);

export default StatCard;
