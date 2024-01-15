"use client"
import { useState } from 'react';
import './globals.css'; // Assuming you're using CSS modules

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className="dateRangePicker">
      {/* <label htmlFor="start-date"><p>Date range Picker</p></label> */}
      <div className="inputContainer">
      <div className="inputs">
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="input"
        />
        <span className="dash">—</span>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="input"
        />
      </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
