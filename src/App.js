import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar';
import Catalogo from './components/catalogo/catalogo';
import ItemListContainer from './components/itemlistcontainer';
import Contador from './components/catalogo/Contador';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Catalogo/>
      <ItemListContainer/>
      <Contador/>
    </div>
  );
}

export default App;
