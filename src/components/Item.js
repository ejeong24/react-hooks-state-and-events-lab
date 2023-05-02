import React from "react";
import { useState } from "react"

function Item({ name, category }) {

  const [cartState, setCartState] = useState(false)

  const handleClick = () => {
    setCartState(!cartState)
  }

  return (
    <li className={cartState ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={cartState ? "remove" : "add"}>
        {cartState ? "Remove" : "Add to Cart"}
        </button>
    </li>
  );
}

export default Item;
