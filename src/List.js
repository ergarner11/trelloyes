import React from 'react';
import Card from './Card';
import './List.css';

class List extends React.Component {
  render() {
    let cards = this.props.cards.map(i => <Card key={i.id} title={i.title} content={i.content} 
      onDeleteCard={() => this.props.onDeleteCard(i.id)}
      onAddRandomCard={this.props.onAddRandomCard} />);
  
    return (
      <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">
          {cards}
        </div>
        <button
          type='button'
          className='List-add-button'
          onClick={this.props.onAddRandomCard}
        >
          Add Random Card
        </button>
      </section>
    );
  }
}

export default List;