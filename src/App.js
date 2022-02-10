import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import FunctionCounter from './components/FunctionCounter/FunctionCounter'
import ClassCounter from './components/ClassCounter/ClassCounter'
import ItemCount from './components/ItemCount/ItemCount'

function App() {

  return (
    <div className="App">
      <NavBar title="Casacapp" color="blue"/>
      <ItemListContainer greeting="¡Hola Casaqueros!"/>
      <ItemCount stock ="10" initial="1"/>
    </div>
  );
}

export default App;
