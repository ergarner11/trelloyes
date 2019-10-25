import React from 'react';
import List from './List';
import './App.css';

function App(props) {
  let lists = props.store.lists.map( i => {
    let cards = i.cardIds.map( cardId => props.store.allCards[cardId] );
    return <List key={i.id} header={i.header} cards={cards}>hey</List>
  });

  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>
    </main>
  );
}

export default App;