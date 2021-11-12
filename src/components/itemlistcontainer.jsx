import { Component } from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h2>Hola mundo!</h2>
            <h3>{greeting}</h3>
            <ItemCount stock={5} initial={1}/>
        </div>
    )
}

export default ItemListContainer;
