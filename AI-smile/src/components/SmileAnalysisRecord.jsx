import React from "react";

const SmileAnalysisRecord = () => {
  const records = [
    { img: "/src/assets/analysis-1.svg", name: "Jayshri Tiwari", result: "Mild crowding; whitening sug", date: "May 20, 2015", score: "8/10", finding: "Excellent Smile" },
    { img: "/src/assets/analysis-2.svg", name: "Shalini Jain", result: "Good alignment, minor gum", date: "March 13, 2014", score: "8/10", finding: "Excellent Smile" },
    { img: "/src/assets/analysis-3.svg", name: "Nandan Raikwar", result: "Overbite detected, ortho consult", date: "May 6, 2012", score: "8/10", finding: "Excellent Smile" },
    { img: "/src/assets/analysis-4.svg", name: "Hillery Moses", result: "Gaps between upper incisors", date: "April 28, 2016", score: "8/10", finding: "Excellent Smile" },
    { img: "/src/assets/analysis-5.svg", name: "Amardeep Singh", result: "Great smile, no issues found", date: "February 28, 2018", score: "8/10", finding: "Excellent Smile" },
    { img: "/src/assets/analysis-6.svg", name: "Navjot Kaur", result: "Minor overjet, no urgent action", date: "May 29, 2017", score: "8/10", finding: "Excellent Smile" },
    { img: "/src/assets/analysis-7.svg", name: "Lalita Thakur", result: "Excellent dental symmetry, well", date: "May 31, 2016", score: "8/10", finding: "Excellent Smile" },
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-1">Smile</h2>
      <p className="mb-3" style={{fontSize:"14px",fontWeight:"600",color:"#333333"}}>Dashboard • Smile Analysis Record </p>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-2 px-4 ">Name</th>
            <th className="py-2 px-4">Result Summary</th>
            <th className="py-2 px-4">Upload Date</th>
            <th className="py-2 px-4">Smile Score</th>
            <th className="py-2 px-4">Key Finding</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, idx) => (
            <tr key={idx} className="even:bg-gray-100">
              <td className="py-2 px-4 flex gap-2 items-center"> <img src={record.img}/> {record.name}</td>
              <td className="py-2 px-4">{record.result}</td>
              <td className="py-2 px-4">{record.date}</td>
              <td className="py-2 px-4">{record.score}</td>
              <td className="py-2 px-4">{record.finding}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SmileAnalysisRecord;
