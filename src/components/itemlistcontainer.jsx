import { useState, useEffect } from 'react';
import axios from "axios";
import ItemList from './ItemList';
import ItemCount from './ItemCount';
import { Link, useParams } from "react-router-dom";
import getProducts from '../services/handMadePromise';

const ItemListContainer = ({greeting}) => {
 const [products, setProducts] = useState([])
 console.log(products);

 const { categoria } = useParams ()
 


    useEffect(() => {
        getProducts
        .then((res) => setProducts(res.filter((product) => product.category.toLowerCase() === categoria)))
        .catch((err) => alert("Ha ocurrido un error", err));
    }, []);
    
    return (
    <div className="container col-12 bg-warning">
      <h3>{greeting}</h3>
      <Link to="/about">
        <h1>About</h1>
      </Link>
      <ItemCount stock={5} initial={1} />
      <h1>IDC</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
