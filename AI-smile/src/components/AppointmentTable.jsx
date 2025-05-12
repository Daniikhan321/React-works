import AppointmentRow from './AppointmentRow';

const appointments = [
  { name: 'Hassan Aman', date: '2025-04-25', time: '10:00 AM', type: 'In-person', status: 'Completed' },
  { name: 'Burhan Memon IIO', date: '2025-04-26', time: '11:00 AM', type: 'In-person', status: 'Pending' },
  { name: 'Ilyaas Ahmad', date: '2025-04-27', time: '12:00 PM', type: 'In-person', status: 'Pending' },
  { name: 'Umar Amaze', date: '2025-04-28', time: '01:00 PM', type: 'In-person', status: 'Pending' },
  { name: 'Fiazan Elantra', date: '2025-04-29', time: '02:00 PM', type: 'In-person', status: 'Pending' },
];

const AppointmentTable = () => (
  <div className="bg-white rounded-lg shadow overflow-hidden">
    <div className="bg-blue-500 text-white p-2 font-semibold grid grid-cols-5">
      <div>Patient Name</div>
      <div>Date</div>
      <div>Time</div>
      <div>Type</div>
      <div>Status</div>
    </div>
    {appointments.map((appt, i) => (
      <AppointmentRow key={i} {...appt} />
    ))}
  </div>
);

export default AppointmentTable;
