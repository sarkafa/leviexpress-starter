import React, { useState, useEffect } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import JourneyDetail from '../JourneyDetail';
import SeatPicker from '../SeatPicker';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  const onJourneyChange = (journey) => {
    setJourney(journey);
  };
  return (
    <main>
      <JourneyPicker onJourneyChange={onJourneyChange} />
      {journey !== null ? <JourneyDetail stops={journey.stops} /> : ''}
      {journey !== null ? (
        <SeatPicker seats={journey.seats} journeyId={journey.journeyId} />
      ) : (
        ''
      )}
      {console.log(journey)}
    </main>
  );
};
