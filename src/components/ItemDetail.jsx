import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
    const { title, price, description, stock, image } = props.item;
    return (
        <div className="flex bg-danger">
            <h3>ItemDetail</h3>
            <h3>{title}</h3>
            <h2>{price}</h2>
            <p>{description}</p>
            <p>{stock}</p>
            <img src={`${image}`} alt={`${image}`}></img>
            <Link to="/itemcount">
               <h1>ItemCount{ItemCount}</h1>
            </Link>
        </div>
    );
};

export default ItemDetail;