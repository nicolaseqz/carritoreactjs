import { Link } from "react-router-dom";

const Item = ({ description, price, stock, title, id, image }) => {
    return (
      <Link to={`/item/${id}`}>
       <div className="flex bg-info" >
        <h3>{title}</h3>
        <h2>{price}</h2>
        <img src={image}/> 
        <p>{description}</p>
        <p>{stock}</p>
       </div>
      </Link>
    )
}

export default Item;