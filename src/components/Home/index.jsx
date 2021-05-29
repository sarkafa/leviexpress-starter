import React, { useState, useEffect } from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  const onJourneyChange = (journey) => {
    setJourney(journey);
  };
  return (
    <main>
      <JourneyPicker onJourneyChange={onJourneyChange} />
      <p>
        {journey !== null ? `Nalezeno spojení s id: ${journey.journeyId}` : ''}
      </p>
    </main>
  );
};
