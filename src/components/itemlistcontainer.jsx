import { useState, useEffect } from 'react';
import axios from "axios";
import ItemList from './ItemList';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";
import getProducts from '../services/handMadePromise';

const ItemListContainer = ({greeting}) => {
 const [products, setProducts] = useState([])
 console.log(products);

/* const getProductsFetch = () => {
     fetch("../JSON/DataList.json")
     .then((response) => response.json())
     .then((data) => console.log("A ver la data", data));
 };*/

 /*const getProductsAA = async () => {
    const getData = await fetch("../JSON/DataList.json");
    const dataResponse = await getData.json();
    console.log("Respuesta de async/await", dataResponse);
  };*/

/*useEffect(() => {
    getProducts
    .then(res => {
        setProducts(res)
    })
    .catch(err => alert('Tenemos un problema!', err))
}, [])

    return (
        <div className="container col-12 bg-warning">
            <h2>Hola mundo!</h2>
            <h3>{greeting}</h3>
            <ItemCount stock={5} initial={1}/>
            <ItemList products={products}/>
        </div>
    )
}*/
    /*useEffect(() => {
     setTimeout(() => getProductsAA(), 2000);
    }, []);*/


    useEffect(() => {
        getProducts
        .then((res) => setProducts(res))
        .catch((err) => alert("Ha ocurrido un error", err));
    });
    
    return (
    <div className="container col-12 bg-warning">
      <h3>{greeting}</h3>
      <Link to="/about">
        <h1>About</h1>
      </Link>
      <ItemCount stock={5} initial={1} />
      <h1>ITEMDETAILCONTAINER</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
