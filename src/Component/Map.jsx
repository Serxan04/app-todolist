import React from "react";
import List from "./List";

const Map = ({ items, handleDeleteItems, handleToggleItem }) => {
  return (
    <div>
      {items.map((items, i) => (
        <List
          handleToggleItem={handleToggleItem}
          handleDeleteItems={handleDeleteItems}
          items={items}
          key={i}
        />
      ))}
    </div>
  );
};

export default Map;
