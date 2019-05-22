import React from 'react';
import SiteUtils from '_SiteJs';
import MockData from '_MockDataJs';
import './Promotion.css';
import Showdown from 'showdown/dist/showdown.js';

const Promotion = ({ info }) => {

  var mockData = new MockData();
  var converter = new Showdown.Converter();
  var htmlDescription = convertMarkdownToHtml(info.description);

  function convertMarkdownToHtml (markdown) {
    return converter.makeHtml(markdown);
  }

  return(
    <div className="container promotion">
      <div dangerouslySetInnerHTML={{ __html: htmlDescription }} />
    </div>
  );
}

export default Promotion;
