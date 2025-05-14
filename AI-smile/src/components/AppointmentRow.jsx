const AppointmentRow = ({ name, upload,  date,  type, status, icon}) => (
  
    <div className="grid grid-cols-5 p-2 border-t items-center">
      <div className="flex items-center space-x-2">
        <img src={icon} className="w-8 h-8 rounded-full" alt={name} />
        <span>{name}</span>
      </div>
      <div><img src={upload} alt="upload-img"  className="ps-15"/></div>
      <div>{date}</div>
      {/* <div>{time}</div> */}
      <div>
        <span className="py-1 rounded " style={{fontSize:"15px"}}>{type}</span>
      </div>
      <div>
        <span className={`px-2 ms-15 py-1 rounded ${
          status === 'Completed' ? 'bg-green-100 text-green-700' :
          'bg-red-200 text-green-800'
        }`}>
          {status}
        </span>
      </div>
    </div>
  );
  
  export default AppointmentRow;
  