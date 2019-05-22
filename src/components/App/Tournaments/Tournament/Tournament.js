import React from 'react';
import SiteUtils from '_SiteJs';
import MockData from '_MockDataJs';
import './Tournament.css';
import avpLogo from '_SiteImages/avp_logo.png';


const Tournament = ({ info }) => {

  var mockData = new MockData();

  function getTournamentDateString(division) {
    var dates = mockData.getTournamentDates(division, 'play');
    if (dates == null) {
      throw `Tournament date not found for tournament division '${division.name}'`;
    }

    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    var tournamentDate = new Date(dates[0].begin);
    return tournamentDate.toLocaleDateString("en-US", options);
  }

  return(
    <div className="tournament">
      <div className="tournament-name">{info.name}</div>
      <div className="tournament-headers">
        <div></div>
        <div></div>
        <div>Start Date</div>
      </div>
      <div>
        {
          info.divisions.map((division, key) =>
            <div key={division.id} className="tournament-division">
                <div className="division-logo"><img src={avpLogo} alt="AVP logo" /></div>
                <div className="division-name"><a href="#">{division.name}</a></div>
                <div className="division-date">{getTournamentDateString(division)}</div>
            </div>
        )}
      </div>
    </div>
  );
}

export default Tournament;
