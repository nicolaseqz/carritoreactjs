import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import getProducts from '../services/handMadePromise';


useEffect(() => {
    getProducts.then((res) => setItem(res))
    .catch((err) => alert("Ha ocurrido un error", err));
}, []);