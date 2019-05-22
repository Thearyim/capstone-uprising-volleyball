import React from 'react';
import SiteUtils from '_SiteJs';
import './Registration.css';


const Registration = ({ info }) => {

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

  return(
    <div className="container registration">
      <div className="registration-name">{info.name}</div>
      <div className="registration-headers">
        <div></div>
        <div>Register By</div>
        <div>Register/Fee</div>
      </div>
      <div>
        {
          info.divisions.map((division, key) =>
            <div key={division.id} className="registration-division">
              <div className="registration-details">
                <div className="division-name"><a href="#">{division.name}</a></div>
                <div>{getRegisterByDateString(division)}</div>
                <div className="registration-fee">
                  <a href='#'>Fee: ${parseFloat(division.fee)}</a>
                </div>
              </div>
              <div className="division-dates">
                <div>
                {
                  getTournamentDates(division, 'play').map((date, key) =>
                    <div key={division.id}>day 1: {formatDate(new Date(date.begin))}</div>
                )}
                </div>
              </div>
            </div>
        )}
      </div>
    </div>
  );
}

export default Registration;
