import { Component } from 'react';

const Contador = () => {
    return (
        <div className="contador">
            <h1>0</h1>
            <div className="buttons">
                <button>-</button>
                <button>+</button>
            </div>
        </div>
    )
}

export default Contador;