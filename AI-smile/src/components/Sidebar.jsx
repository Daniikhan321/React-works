import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `block px-4 py-2 rounded ${
      location.pathname === path
        ? 'bg-white text-black font-semibold'
        : 'hover:bg-blue-500'
    }`;

  return (
    <div className="w-64 bg-blue-600 text-white flex flex-col justify-between p-4 min-h-screen">
      <div>
        <div className="text-center font-bold text-2xl mb-8 flex justify-center">
          <img src="/src/assets/logo.svg" alt="Logo" className="h-10" />
        </div>
        <ul className="space-y-4">
          <li className='flex'>
         
            <Link to="/" className={linkClass('/')} style={{display:"flex",gap:"15px",padding:"10px 100px 10px 10px"}}>
                 <img src="/src/assets/dashboard-icon.svg" alt=""/>   Dashboard
            </Link>
          </li>
          <li>
            <Link to="/usermanagement" className={linkClass('/usermanagement')} style={{display:"flex",gap:"15px"}}>
            <img src="/src/assets/usermanagement-icon.svg" alt=""/>  User Management
            </Link>
          </li>
          <li>
            <Link to="/smileanalysisrecord" className={linkClass('/smileanalysisrecord')} style={{display:"flex",gap:"15px"}}>
               <img src="/src/assets/smile-icon.svg" alt=""/>Smile Analysis
            </Link>
          </li>
          <li>
            <Link to="/dentalmanagement" className={linkClass('/dentalmanagement')} style={{display:"flex",gap:"15px"}}>
               <img src="/src/assets/dental-icon.svg" alt=""/>Dental Management
            </Link>
          </li>
            <li>
            <Link to="/setting" className={linkClass('/setting')} style={{display:"flex",gap:"15px"}}>
              <img src="/src/assets/setting-icon.svg" alt=""/>Setting
            </Link>
          </li>
        
        </ul>
      </div>
      <div className="text-sm px-4 py-2 cursor-pointer hover:text-gray-300">🔁 Logout</div>
    </div>
  );
};

export default Sidebar;
