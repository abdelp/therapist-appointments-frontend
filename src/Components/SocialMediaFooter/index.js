import React from 'react';

import facebookIcon from '../../assets/icons/facebook.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import instagramIcon from '../../assets/icons/instagram.svg';

const SocialMediaFooter = () => (
  <div className="social-media-footer">
    <a href="www.facebook.com" target="_blank" className="sm-circular">
      <img src={facebookIcon} alt="facebook icon" />
    </a>
    <a href="www.twitter.com" target="_blank" className="sm-circular">
      <img src={twitterIcon} alt="twitter icon" />
    </a>
    <a href="www.instram.com" target="_blank" className="sm-circular">
      <img src={instagramIcon} alt="instagram icon" />
    </a>
  </div>
);

export default SocialMediaFooter;
