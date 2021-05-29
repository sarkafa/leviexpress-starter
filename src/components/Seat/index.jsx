import React, { useEffect, useState } from 'react';
import './style.css';

const Seat = ({ number, isOccupied, onSelect, isSelected }) => {
  const handleClick = () => {
    onSelect(number);
  };
  return (
    <svg
      className={`seat ${isOccupied ? 'seat--occupied seat' : ''} ${
        isSelected === number ? 'seat--selected seat' : ''
      }`}
      viewBox="0 0 100 100"
      role="button"
      onClick={handleClick}
    >
      <rect
        className="seat__rect"
        width="80"
        height="80"
        x="14"
        y="10"
        rx="15"
        ry="15"
      />
      <path className="seat__path" d="M 65,10 H 25 C 5,35 5,65 25,90 H 65" />
      <text className="seat__text" x="55" y="65">
        {number}
      </text>
    </svg>
  );
};

export default Seat;
