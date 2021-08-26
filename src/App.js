import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

// COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main className="App-header">
          <Switch>
            <Route exact path = '/'>           
              <ItemListContainer titulo = 'Vinyl Record Store' />          
            </Route>
            <Route path = '/category/:categoryId'>
               <ItemListContainer titulo = 'Vinyl Record Store' />   
            </Route>
            <Route path = '/item/:itemId'>
              <ItemDetailContainer />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
