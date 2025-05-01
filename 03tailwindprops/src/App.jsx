import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import Dashboard from './compts/Dashboard';
import Team from './compts/team';
import Projects from './compts/projects';
import Calendar from './compts/calendar';
import Danii from './compts/danii';
import Herosection from './compts/herosection';
import Login from './compts/login';
import Signup from './compts/signup';
import Home from './compts/home'

import './App.css';




function App() {
  let myobj = {
      name: "danikhan",
      age: 21
}
let newarry =[1,2,3,4,];
  
  return (
 <>
    <Router>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?button=indigo&shade=500" alt="Logo" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link to="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Dashboard</Link>
                  <Link to="/team" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</Link>
                  <Link to="/projects" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</Link>
                  <Link to="/calendar" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar </Link>
                  <Link to="/Login" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Login </Link>
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </div>
    </Router>
    {/* <Herosection channel="daniikhan" button = "login" />
    <Herosection channel="sardar" button = "click me"/>
    <Herosection channel="nawab" button ="" /> */}
    {/* <Router>
     <Link to="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white mx-4">daniikhan</Link>
     <Link to="/home" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Home</Link>
     <Routes>
     <Route path="/" element={<Danii />} />
     <Route path="/home" element={<Home />} />
     </Routes>
    </Router> */}

    </>
  
  );
}

export default App;
