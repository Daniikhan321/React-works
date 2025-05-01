import React, { useState } from 'react';

function Calendar() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const generateCalendarCells = () => {
    const cells = [];
    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`empty-${i}`} className="border p-3 bg-light" />);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday =
        i === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear();

      cells.push(
        <div
          key={i}
          className={`border p-3 text-center ${isToday ? 'bg-primary text-white rounded' : ''}`}
        >
          {i}
        </div>
      );
    }
    return cells;
  };

  const handlePrevMonth = () => {
    const prev = new Date(year, month - 1, 1);
    setCurrentDate(prev);
  };

  const handleNextMonth = () => {
    const next = new Date(year, month + 1, 1);
    setCurrentDate(next);
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2>{monthNames[month]} {year}</h2>
        <div className="btn-group mt-3">
          <button className="btn btn-outline-primary" onClick={handlePrevMonth}>← Prev</button>
          <button className="btn btn-outline-primary" onClick={handleNextMonth}>Next →</button>
        </div>
      </div>

      <div className="row text-center fw-bold">
        {days.map((day) => (
          <div key={day} className="col border py-2 bg-dark text-white">{day}</div>
        ))}
      </div>

      <div className="row row-cols-7 g-0">
        {generateCalendarCells().map((cell, index) => (
          <div key={index} className="col">{cell}</div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
