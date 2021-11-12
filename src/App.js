import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar';
import Catalogo from './components/catalogo/catalogo';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Catalogo/>
      <ItemListContainer greeting="Hola User" />
    </div>
  );
}

export default App;
