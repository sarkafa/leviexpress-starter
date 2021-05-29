import React, { useEffect, useState } from 'react';
import SeatRow from '../SeatRow';

import './style.css';
const SeatPicker = ({ seats, journeyId }) => {
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);

  const handleSeatSelect = (number) => {
    setSelectedSeatNumber(number);
  };
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row, index) => (
          <SeatRow
            key={index}
            row={row}
            onSeatSelected={handleSeatSelect}
            selectedSeatNumber={selectedSeatNumber}
          />
        ))}
      </div>
      <button className="btn" type="button">
        Rezervovat
      </button>
    </div>
  );
};

export default SeatPicker;
