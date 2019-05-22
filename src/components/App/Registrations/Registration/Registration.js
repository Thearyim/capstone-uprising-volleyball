import React from 'react';
import SiteUtils from '_SiteJs';
import MockData from '_MockDataJs';
import './Registration.css';


const Registration = ({ info }) => {

  var mockData = new MockData();

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

  function getRegistrationFee(division) {
    var fee = parseFloat(division.fee);
    return fee.toFixed(2);
  }

  function getRegisterByDateString(division) {
    var dates = mockData.getTournamentDates(division, 'registrationClose');
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
                  <a href='#'>Fee: ${getRegistrationFee(division)}</a>
                </div>
              </div>
              <div className="division-dates">
                <div>
                {
                  mockData.getTournamentDates(division, 'play').map((date, index, key) =>
                    <div key={date.begin}>day {index + 1}: {formatDate(new Date(date.begin))}</div>
                  )
                }
                </div>
              </div>
            </div>
        )}
      </div>
    </div>
  );
}

export default Registration;
