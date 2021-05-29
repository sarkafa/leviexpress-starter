import React, { useEffect, useState } from 'react';
import Seat from '../Seat';

import './style.css';

const SeatRow = ({ row, onSeatSelected, selectedSeatNumber }) => {
  return (
    <div className="seat-row">
      {row.map((row) => (
        <Seat
          key={row.number}
          number={row.number}
          isOccupied={row.isOccupied}
          onSelect={onSeatSelected}
          isSelected={selectedSeatNumber}
        />
      ))}
    </div>
  );
};

export default SeatRow;
