import React from 'react';
import SiteUtils from '_SiteJs';
import './Tournament.css';


const Tournament = ({ info }) => {

  function formatDate(date) {
      // Example Format:
      // Monday July 5th, 2019
      var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };

      return date.toLocaleDateString("en-US", options);
  }

  function getRegisterByDateString(division) {
    var dates = getTournamentDates(division, 'registrationClose');
    if (dates == null) {
      throw `Registration date not found for tournament division '${division.name}'`;
    }

    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZoneName: 'short'
    };

    var registrationDate = new Date(dates[0].begin);
    return registrationDate.toLocaleDateString("en-US", options);
  }

  function getTournamentDates(division, type) {
    var dates = [];
    division.dates.forEach((date) =>
    {
      if (date.description == type) {
        dates.push(date);
      }
    });

    return dates;
  }

  var myStyle = {
    display: 'grid',
    gridTemplateColumns: '50% 30% 20%',
    marginLeft: '40px'
  }

  return(
    <div className="container tournament">
      <div className="tournament-name">{info.name}</div>
      <div className="tournament-headers">
        <div>Division</div>
        <div>Register By</div>
        <div>Register/Fee</div>
      </div>
      <div>
        {
          info.divisions.map((division, key) =>
            <div key={division.id} className="tournament-division ">
              <div style={myStyle}>
                <div className="tournament-division-name"><a href="#">{division.name}</a></div>
                <div>{getRegisterByDateString(division)}</div>
                <div className="tournament-registration-fee">
                  <a href='#'>Fee: ${parseFloat(division.fee)}</a>
                </div>
              </div>
              <div className="tournament-division-dates">
                <div>
                {
                  getTournamentDates(division, 'play').map((date, key) =>
                    <div key={division.id}>| {formatDate(new Date(date.begin))}</div>
                )}
                </div>
              </div>
            </div>
        )}
      </div>
    </div>
  );
}

export default Tournament;
