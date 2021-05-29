import React, { useEffect, useState } from 'react';
import BusStop from '../BusStop';
import './style.css';

const JourneyDetail = ({ stops }) => {
  return (
    <>
      <div className="journey-detail container">
        <h2>Podrobnosti cesty</h2>
        <div className="stops">
          {stops.map((stop) => (
            <BusStop
              key={stop.code}
              code={stop.code}
              name={stop.name}
              station={stop.station}
              time={stop.time}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default JourneyDetail;
