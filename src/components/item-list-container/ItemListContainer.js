

import "./ItemListContainer.css"
import { useState } from "react";
import Item from "../item/item";

const items = [
  { id: "1", name: "Helado", price: "100", },

];

const ItemListContainer = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const otherFunction = () => {
    console.log("otherFunction");
  };

  return (
    <div>
      <h1 className="lista">Lista de productos</h1>
      <h3 className="Productos">Producto seleccionado</h3>
      <p>{selectedItem ? selectedItem.name : "Ninguno"}</p>
      <p>{selectedItem ? selectedItem.price : "Ninguno"}</p>
      <p>{selectedItem ? selectedItem.id : "Ninguno"}</p>
      <hr />
      {items.map(({ id, name, price }) => (
        <Item
          key={id}
          id={id}
          name={name}
          price={price}
          setSelectedItem={setSelectedItem}
          otherFunction={otherFunction}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;