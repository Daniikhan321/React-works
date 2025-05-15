import React, { useState } from 'react';

const usersData = [
  { img:'/src/assets/managment-1.svg', name: 'Jayshri Tiwari', email: 'tim.jennings@example.com', date: 'May 20, 2015', status: 'Inactive' },
  { img:'/src/assets/managment-2.svg', name: 'Shalini Jain', email: 'jackson.graham@example.com', date: 'March 13, 2014', status: 'Active' },
  { img:'/src/assets/managment-3.svg', name: 'Nandan Raikwar', email: 'georgia.young@example.com', date: 'May 6, 2012', status: 'Inactive' },
  { img:'/src/assets/managment-4.svg', name: 'Hillery Moses', email: 'debbie.baker@example.com', date: 'April 28, 2016', status: 'Active' },
  { img:'/src/assets/managment-5.svg', name: 'Amardeep Singh', email: 'felicia.reid@example.com', date: 'February 28, 2018', status: 'Active' },
  { img:'/src/assets/managment-6.svg', name: 'Navjot Kaur', email: 'sara.cruz@example.com', date: 'May 29, 2017', status: 'Active' },
  { img:'/src/assets/managment-7.svg', name: 'Lalit Thakur', email: 'bill.sanders@example.com', date: 'May 31, 2015', status: 'Active' },
  { img:'/src/assets/managment-8.svg', name: 'Vikas Tiwari', email: 'alma.lawson@example.com', date: 'October 25, 2019', status: 'Active' },
  { img:'/src/assets/managment-9.svg', name: 'M. S. Subramaniam', email: 'michael.mitc@example.com', date: 'May 12, 2019', status: 'Suspended' },
];

const pageSize = 5;

const UserManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(usersData.length / pageSize);
  const paginatedUsers = usersData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Inactive':
        return 'bg-yellow-100 text-yellow-800';
      case 'Suspended':
        return 'bg-red-100 text-red-800';
      default:
        return '';
    }
  };

  return (
    <div>
      <div className='ps-10 pt-10'>
        <p style={{fontSize:"20px",fontWeight:"700",color:"#333333"}}>Users</p>
        <span style={{fontSize:"14px",fontWeight:"600",color:"#333333"}}>Dashboard • Users</span>
      </div>
      <div className="p-6">
    
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 font-semibold">
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email Address</th>
              <th className="py-2 px-4">Date Registered</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 flex gap-2"> <img src={user.img}/>  {user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.date}</td>
                <td className="py-2 px-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusStyle(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center p-4">
          <div className="space-x-2">
            <button
              className="px-3 py-1 border rounded"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              « First
            </button>
            <button
              className="px-3 py-1 border rounded"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            >
              ‹ Back
            </button>
          </div>
          <div>Page {currentPage} of {totalPages}</div>
          <div className="space-x-2">
            <button
              className="px-3 py-1 border rounded"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            >
              Next ›
            </button>
            <button
              className="px-3 py-1 border rounded"
              onClick={() => setCurrentPage(totalPages)}
            >
              Last »
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserManagement;
