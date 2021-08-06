import './App.scss';

// COMPONENTS
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="App-header">
        <h1>Vinyl Record Store</h1>
        <p>
          Tu tienda de música amiga
        </p>
      </main>
    </div>
  );
}

export default App;
