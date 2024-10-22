import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (inputText) => {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  };

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => index !== id);
    });
  }

  // Handle editing a todo item
  const editItem = (id, newText) => {
    setItems((prevItems) => {
      return prevItems.map((item, index) => (index === id ? newText : item));
    });
  };

  return (
    <div className="container mt-4">
      <div className="heading">
        <h1>To-Do list</h1>
      </div>
      <InputArea onAdd={addItem} />

      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              text={todoItem}
              onDelete={deleteItem}
              onEdit={editItem} // Pass edit handler
              id={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
