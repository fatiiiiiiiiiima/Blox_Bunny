"use client"
import { useState } from 'react';
import './globals.css'; // Assuming you're using CSS modules

// DateRangePicker component
const DateRangePicker = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
    onDateChange(newStartDate, endDate);
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    setEndDate(newEndDate);
    onDateChange(startDate, newEndDate);
  };

  return (
    <div className="dateRangePicker">
      <div className="inputContainer">
        <div className="inputs">
        <label htmlFor="start-date" className="dateLabel">Start</label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={handleStartDateChange}
            className="input"
          />
          <span className="dash">—</span>
          <label htmlFor="end-date" className="dateLabel">End</label>
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={handleEndDateChange}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
