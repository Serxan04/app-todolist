import React from "react";
import Bin from "./Bin";

const List = ({ items, handleDeleteItems, handleToggleItem }) => {
  console.log(items);
  return (
    <li>
      <input
        type="checkbox"
        name="check"
        className="inp"
        value={items.packed}
        onChange={() => handleToggleItem(items.id)}
      />
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.description}
      </span>
      <button onClick={() => handleDeleteItems(items.id)} className="icon">
        <Bin />
      </button>
    </li>
  );
};

export default List;
