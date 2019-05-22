import React from 'react';
import Tournament from './Tournament/Tournament.js';
import MockData from '_MockDataJs';
import './TournamentContainer.css';
import volleyballLogo from '_SiteImages/volleyball.png';

const TournamentContainer = ({ ageGroup }) => {

  var mockData = new MockData();

  return(
      <div className="tournament-container">
        <div className="title"><img src={volleyballLogo} /><span>Tournaments</span></div>
        {
          mockData.getTournaments(ageGroup).map((item, key) =>
            <Tournament key={item.id} info={item} />
        )}
      </div>
  );
}

export default TournamentContainer;
