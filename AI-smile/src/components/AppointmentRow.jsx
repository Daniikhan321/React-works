const AppointmentRow = ({ name, date, time, type, status }) => (
    <div className="grid grid-cols-5 p-2 border-t items-center">
      <div className="flex items-center space-x-2">
        <img src="/src/assets/user.svg" className="w-8 h-8 rounded-full" alt={name} />
        <span>{name}</span>
      </div>
      <div>{date}</div>
      <div>{time}</div>
      <div>
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">{type}</span>
      </div>
      <div>
        <span className={`px-2 py-1 rounded ${
          status === 'Completed' ? 'bg-green-100 text-green-700' :
          'bg-green-200 text-green-800'
        }`}>
          {status}
        </span>
      </div>
    </div>
  );
  
  export default AppointmentRow;
  