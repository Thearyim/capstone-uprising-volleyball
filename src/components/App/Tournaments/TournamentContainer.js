import React from 'react';
import Tournament from './Tournament/Tournament.js';

const TournamentContainer = ({ ageGroup }) => {

  function getTournaments(ageGroup) {
    return [
      {
        id: '1',
        name: 'Tournament 1',
        description: `The first tournament for ${ageGroup}`,
        dateBegin: '2019-05-20T00:00:00.0000000Z',
        dateEnd: '2019-05-20T09:00:00.0000000Z'
      },
      {
        id: '2',
        name: 'Tournament 2',
        description: `The second tournament for ${ageGroup}`,
        dateBegin: '2019-05-20T08:00:00.0000000Z',
        dateEnd: '2019-05-20T17:00:00.0000000Z'
      }
    ]
  }

  return(
    <div>
      {
        getTournaments(ageGroup).map((item, key) =>
          <Tournament key={item.id} info={item} />
      )}
    </div>
  );
}

export default TournamentContainer;
