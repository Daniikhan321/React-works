import AppointmentRow from './AppointmentRow';

const appointments = [
  { name: 'Hassan Aman', upload:'/src/assets/upload-img.svg', date: '2025-04-25, 10:00 AM', type: 'Uploaded smile photo', status: 'Delete', icon: '/src/assets/user.svg'},
  { name: 'Burhan Memon IIO', upload:'/src/assets/upload-img.svg', date: '2025-04-26, 11:00 AM', type: 'Booked in-person consultation', status: 'Delete', icon: '/src/assets/dashboard-2.svg' },
  { name: 'Ilyaas Ahmad', upload:'/src/assets/upload-img.svg', date: '2025-04-27, 12:00 PM', type: '	Received AI dental assessment', status: 'Delete', icon: '/src/assets/dashboard-3.svg' },
  { name: 'Umar Amaze',  upload:'/src/assets/upload-img.svg', date: '2025-04-28, 01:00 PM', type: 'Made payment for consultation', status: 'Delete', icon: '/src/assets/dashboard-4.svg' },
  { name: 'Fiazan Elantra',  upload:'/src/assets/upload-img.svg', date: '2025-04-29, 02:00 PM', type: '	Viewed provider profile', status: 'Delete', icon: '/src/assets/dashboard-5.svg' },
];

const AppointmentTable = () => (
  <div>
   <div className='mb-5 flex justify-between'>
     <p style={{fontSize:"20px", fontWeight:"700", color:"#333333"}} >Recent User Activity</p>
      <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 me-2">
      <span style={{fontSize:"14px",color:"#666666",fontWeight:"600"}}>View All</span>
      <span className="ml-1 text-lg" style={{fontSize:"14px",color:"#666666",fontWeight:"600"}}>{'>'}</span>
    </button>
   </div>
     <div className="bg-white rounded-lg shadow overflow-hidden">
    <div className="bg-blue-500 text-white p-2 font-semibold grid grid-cols-5">
      <div> Name</div>
      <div>Upload Image</div>
      <div>Date and Time</div>
      <div>AI Analysis</div>
      <div className='ms-15'>	Actions</div>
    </div>
    {appointments.map((appt, i) => (
      <AppointmentRow key={i} {...appt} />
    ))}
  </div>
  </div>
 
);

export default AppointmentTable;
