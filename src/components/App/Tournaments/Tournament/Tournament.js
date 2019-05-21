import React from 'react';
import SiteUtils from '../../../../assets/js/site.js';
import './Tournament.css';

const Tournament = ({ info }) => {

  var siteUtils = new SiteUtils();

  return(
    <div className="container tournament">
      <div className="tournament-name">{info.name}</div>
      <div className="tournament-date">{siteUtils.getFormattedDate(new Date(info.dateBegin), new Date(info.dateEnd))}</div>
      <div className="tournament-description">{info.description}</div>
    </div>
  );
}

export default Tournament;
