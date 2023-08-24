import React, { Fragment, useState } from "react";
import IconPlus from "./IconPlus";
import Map from "./Map";
const Form = ({
  handleAddItems,
  items,
  handleDeleteItems,
  clearAll,
  handleToggleItem,
}) => {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, id: Date.now(), packed: false };
    if (description === "") {
    } else {
      handleAddItems(newItem);
      setDescription("");
    }
  }
  const completeTask = items.filter((item) => item.packed).length;
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <header>Todo App</header>
          <form action="" onSubmit={handleSubmit}>
            <div className="input">
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Add your new todo"
              />
              <button>
                <IconPlus />
              </button>
            </div>
          </form>

          <ul className="todoList">
            <Map
              handleToggleItem={handleToggleItem}
              handleDeleteItems={handleDeleteItems}
              items={items}
            />
          </ul>

          <div className="footer">
            <span>You have {items.length - completeTask} pending tasks</span>
            <button onClick={() => clearAll()}>Clear All</button>
          </div>
          <span style={items.length === 0 ? { display: "none" } : {}}>
            You have {completeTask} complete tasks
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Form;
