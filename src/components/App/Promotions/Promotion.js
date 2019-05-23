import React from 'react';
import SiteUtils from '_SiteJs';
import MockData from '_MockDataJs';
import './Promotion.css';
import Showdown from 'showdown/dist/showdown.js';
import casey from '_SiteImages/Finished_Flyer_page-0001_large.jpg';

const Promotion = ({ info }) => {

  var mockData = new MockData();
  var converter = new Showdown.Converter();
  // var htmlDescription = convertMarkdownToHtml(info.description);

  function convertMarkdownToHtml (markdown) {
    return converter.makeHtml(markdown);
  }

  // <div dangerouslySetInnerHTML={{ __html: htmlDescription }} />
  var gridStyle = {
    display: 'grid',
    gridTemplateColumns: '40% 60%'
  }

  return(
    <div className="container promotion" style={gridStyle}>
      <div><img src={casey} /></div>
      <div className="promotion-description">
        <div className="description-name">{info.name}</div>
        <div className="description-desc">{info.description.text}</div>
      </div>
    </div>
  );
}

export default Promotion;
