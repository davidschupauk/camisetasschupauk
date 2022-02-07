import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar title="Casacapp" color="blue"/>
      <ItemListContainer greeting="¡Hola Casaqueros!"/>
    </div>
  );
}

export default App;
