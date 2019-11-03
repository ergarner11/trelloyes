import React from 'react';
import List from './List';
import './App.css';
import STORE from './store'

class App extends React.Component {
  state = {
    store: STORE
  };

  handleDeleteCard = (listId, cardId) => {   
    this.state.store.lists.find(list => list.id === listId).cardIds = this.state.store.lists.find(list => list.id === listId).cardIds.filter(t => t !== cardId)
    
    this.setState({
      store : this.state.store
    })
  }

  handleAddRandomCard = (listId) => {
    let newCard = this.newRandomCard();
    let newStore = this.state.store
    
    newStore.lists.find(list => list.id === listId).cardIds.push(newCard.id)
    newStore.allCards[newCard.id] = { id: newCard.id, title: newCard.title, content: newCard.content}
    
    this.setState({
      store : newStore
    })
  }

  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  render() {
    let lists = this.state.store.lists.map( i => {
      let cards = i.cardIds.map( cardId => this.state.store.allCards[cardId] );
      return <List key={i.id} header={i.header} cards={cards} 
              onDeleteCard={(cardId) => this.handleDeleteCard(i.id, cardId)} 
              onAddRandomCard={() => this.handleAddRandomCard(i.id)}/>
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
}

export default App;