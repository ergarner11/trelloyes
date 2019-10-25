import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
  let cards = props.cards.map(i => <Card key={i.id} title={i.title} content={i.content} >hey</Card>);

  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {cards}
      </div>
    </section>
  );
}

export default List;