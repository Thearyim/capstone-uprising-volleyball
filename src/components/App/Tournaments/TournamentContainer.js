import React from 'react';
import Tournament from './Tournament/Tournament.js';
import TournamentMockData from './Tournament/TournamentData.js';
import './TournamentContainer.css';

const TournamentContainer = ({ ageGroup }) => {

  var mockData = new TournamentMockData();

  return(
    <div className="container tournamentContainer">
      {
        mockData.getTournaments(ageGroup).map((item, key) =>
          <Tournament key={item.id} info={item} />
      )}
    </div>
  );
}

export default TournamentContainer;
