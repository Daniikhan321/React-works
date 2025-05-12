const Sidebar = () => (
    <div className="w-64 bg-blue-600 text-white flex flex-col justify-between p-4">
      <div>
        <div className="text-center font-bold text-2xl mb-8 flex justify-center"><img src="/src/assets/logo.svg" alt="" /></div>
        <ul className="space-y-4">
          <li className="font-semibold bg-white text-black px-4 py-2 rounded">Dashboard</li>
          <li>My Appointments</li>
          <li>Profile</li>
        </ul>
      </div>
      <div className="text-sm">🔁 Logout</div>
    </div>
  );
  
  export default Sidebar;
  