import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/categorias/procesadores">Procesadores</Link>
      <Link to="/categorias/perifericos">Perifericos</Link>
    </div>
  )
}

export default Navbar;