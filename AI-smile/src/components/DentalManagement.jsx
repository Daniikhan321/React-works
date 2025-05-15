import React, { useState } from "react";

const dentists = [
  {
    name: "Dr. Ahsan Tariq",
    specialization: "Orthodontist",
    location: "Seattle, Washington",
    registerDate: "12/04/2023",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Maria Imran",
    specialization: "Cosmetic Dentistry",
    location: "Oklahoma City, Oklahoma",
    registerDate: "12/04/2023",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Usman Qureshi",
    specialization: "Prosthodontist",
    location: "San Diego, California",
    registerDate: "12/04/2023",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Dr. Hira Shah",
    specialization: "Pediatric Dentist",
    location: "Columbus, Ohio",
    registerDate: "12/04/2023",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Dr. Bilal Khan",
    specialization: "Oral Surgeon",
    location: "San Jose, California",
    registerDate: "12/04/2023",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Dr. Ahsan Tariq",
    specialization: "Orthodontist",
    location: "Nashville, Tennessee",
    registerDate: "12/04/2023",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Usman Qureshi",
    specialization: "Prosthodontist",
    location: "Charlotte, North Carolina",
    registerDate: "12/04/2023",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Dr. Ahsan Tariq",
    specialization: "Cosmetic Dentistry",
    location: "Detroit, Michigan",
    registerDate: "12/04/2023",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Bilal Khan",
    specialization: "Cosmetic Dentistry",
    location: "Fort Worth, Texas",
    registerDate: "12/04/2023",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
   {
    name: "Dr. Bilal Khan",
    specialization: "Cosmetic Dentistry",
    location: "Fort Worth, Texas",
    registerDate: "12/04/2023",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
   {
    name: "Dr. Ahsan Tariq",
    specialization: "Cosmetic Dentistry",
    location: "Detroit, Michigan",
    registerDate: "12/04/2023",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const itemsPerPage = 6;

const DentalManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dentists.length / itemsPerPage);

  const handleFirst = () => setCurrentPage(1);
  const handleBack = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const handleLast = () => setCurrentPage(totalPages);

  const paginatedDentists = dentists.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Dental</h2>
          <p className="text-gray-600 text-sm">
            Dashboard <span className="font-semibold">• Dental Management</span>
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
          + Add New Dentist
        </button>
      </div>

      <table className="min-w-full text-left border-collapse">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-3 px-4 rounded-tl-lg">Name</th>
            <th className="py-3 px-4">Specialization</th>
            <th className="py-3 px-4">Location</th>
            <th className="py-3 px-4">Register Date</th>
            <th className="py-3 px-4 rounded-tr-lg">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedDentists.map((dentist, idx) => (
            <tr
              key={idx}
              className={`${
                idx % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="py-3 px-4 flex items-center gap-3">
                <img
                  src={dentist.avatar}
                  alt={dentist.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-semibold">{dentist.name}</span>
              </td>
              <td className="py-3 px-4">{dentist.specialization}</td>
              <td className="py-3 px-4">{dentist.location}</td>
              <td className="py-3 px-4">{dentist.registerDate}</td>
              <td className="py-3 px-4 cursor-pointer text-gray-400 hover:text-gray-600 text-xl select-none">
                &#8942;
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="flex justify-center items-center mt-6 space-x-2 text-gray-600">
        <button
          onClick={handleFirst}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-200 disabled:opacity-50"
        >
          &laquo; First
        </button>
        <button
          onClick={handleBack}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-200 disabled:opacity-50"
        >
          &lt; Back
        </button>

        <span className="px-3 py-1 font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-200 disabled:opacity-50"
        >
          Next &gt;
        </button>
        <button
          onClick={handleLast}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-200 disabled:opacity-50"
        >
          Last &raquo;
        </button>
      </div>
    </div>
  );
};

export default DentalManagement;
