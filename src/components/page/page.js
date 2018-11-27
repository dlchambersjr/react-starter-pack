import React from 'react';
import Deck from '../deck/deck.js';

import './page.scss';

const Page = props => {
  return props.content.map((section, index) => <Deck key={index} content={section} />);
};

export default Page;