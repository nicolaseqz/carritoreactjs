import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar';
import Catalogo from './components/catalogo/catalogo';
import ItemListContainer from './components/itemlistcontainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Catalogo/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
