import React from 'react';
import './deck.scss';
import Card from '../card/card.js';

const Deck = props => (
  <section className='deck'>
    <header>
      <h2>{props.content.deckTitle}</h2>
    </header>
    {props.content.records && props.content.records.map((card, index) => <Card key={index} content={card} />)}
  </section>
);

export default Deck;