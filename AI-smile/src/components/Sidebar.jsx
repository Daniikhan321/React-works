import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="w-50 bg-blue-600 text-white flex flex-col justify-between p-4 min-h-screen">
    <div>
      <div className="text-center font-bold text-2xl mb-8 flex justify-center">
        <img src="/src/assets/logo.svg" alt="Logo" className="h-10" />
      </div>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="block px-4 py-2 hover:bg-blue-500 rounded">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/usermanagement" className="block px-4 py-2 hover:bg-blue-500 rounded">
            User Management
          </Link>
        </li>
        <li className="px-4 py-2">Profile</li>
      </ul>
    </div>
    <div className="text-sm px-4 py-2 cursor-pointer hover:text-gray-300">🔁 Logout</div>
  </div>
);

export default Sidebar;
