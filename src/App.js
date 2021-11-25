import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navbar/navbar';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Hola User"/>}/>
        <Route path="item/:id" element={<ItemDetailContainer/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
