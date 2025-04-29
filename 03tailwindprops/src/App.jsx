import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './compts/Dashboard';
import Team from './compts/team';
import Projects from './compts/projects';
import Calendar from './compts/calendar';
import Herosection from './compts/herosection';
import './App.css';


function App() {
  return (
 <>
    <Router>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Logo" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link to="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Dashboard</Link>
                  <Link to="/team" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</Link>
                  <Link to="/projects" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</Link>
                  <Link to="/calendar" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <div className="bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
    <Herosection/>
    </>

  );
}

export default App;
