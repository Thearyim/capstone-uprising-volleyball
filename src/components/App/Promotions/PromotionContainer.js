import React from 'react';
import Promotion from './Promotion.js';
import MockData from '_MockDataJs';
import './PromotionContainer.css';
import avpLogoWh from '_SiteImages/avp_logo_med_white_2.png';

const PromotionContainer = () => {

  var mockData = new MockData();

  return(
      <div className="promotion-container">
        <div className="title"><img src={avpLogoWh} /><span>Events</span></div>
        {
          mockData.getPromotions().map((item, key) =>
            <Promotion key={item.id} info={item} />
        )}
      </div>
  );
}

export default PromotionContainer;
