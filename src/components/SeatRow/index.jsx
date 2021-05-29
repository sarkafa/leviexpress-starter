import React, { useEffect, useState } from 'react';
import Seat from '../Seat';

import './style.css';

const SeatRow = ({ row }) => {
  return (
    <div className="seat-row">
      {row.map((row) => (
        <Seat
          key={row.number}
          number={row.number}
          isOccupied={row.isOccupied}
        />
      ))}
    </div>
  );
};

export default SeatRow;
