import "./App.css";
import { Fragment, useState } from "react";
import Form from "./Component/Form";
function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function clearAll() {
    setItems([]);
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    
  }
  return (
    <Fragment>
      <Form
      handleToggleItem={handleToggleItem}
        clearAll={clearAll}
        handleDeleteItems={handleDeleteItems}
        items={items}
        handleAddItems={handleAddItems}
      />
    </Fragment>
  );
}

export default App;
