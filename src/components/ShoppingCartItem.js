import React, { useContext } from "react";
// import { ProductContext } from "../context/ProductContext";

const Item = props => {
  //   const { products, removeItem } = useContext(ProductContext);
  return (
    <div className="shopping-cart_item">
      <img src={props.image} alt={`${props.title} book`} />

      <div>
        <h1>{props.title}</h1>
        <p>$ {props.price}</p>
        <button onClick={() => props.removeItem(props.itemId)}>
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default Item;
