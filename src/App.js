import React from 'react';
import './App.scss';

// COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="App-header">
        {/* <ItemListContainer 
         titulo = 'Vinyl Record Store'
          /> */}
        <ItemDetailContainer />
      </main>
    </div>
  );
}

export default App;
