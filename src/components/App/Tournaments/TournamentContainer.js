import React from 'react';
import Tournament from './Tournament/Tournament.js';

const TournamentContainer = ({ ageGroup }) => {

    return(
      <div>
        <h1>{ageGroup}</h1>
      </div>
    );
}

export default TournamentContainer;
