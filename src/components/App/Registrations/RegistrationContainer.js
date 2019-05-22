import React from 'react';
import Registration from './Registration/Registration.js';
import MockData from '_MockDataJs';
import './RegistrationContainer.css';
import volleyballLogo from '_SiteImages/volleyball.png';

const RegistrationContainer = ({ ageGroup }) => {

  var mockData = new MockData();

  return(
      <div className="registration-container">
        <div className="title"><img src={volleyballLogo} /><span>Registration</span></div>
        {
          mockData.getTournaments(ageGroup).map((item, key) =>
            <Registration key={item.id} info={item} />
        )}
      </div>
  );
}

export default RegistrationContainer;
