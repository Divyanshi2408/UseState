import React, { useState } from "react";

const NestedStateList = () => {
  const [items, setItems] = useState([
    { id: 1, title: "Item 1", description: "Description 1" },
    { id: 2, title: "Item 2", description: "Description 2" },
  ]);

  const handleUpdate = (id, key, value) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [key]: value } : item
      )
    );
  };

  const addItem = () => {
    const newItem = {
      id: Date.now(), 
      title: "New Item",
      description: "New Description",
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  
  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Editable List</h1>
      <button onClick={addItem} style={{ marginBottom: "20px" }}>
        Add Item
      </button>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            margin: "10px",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <input
            type="text"
            value={item.title}
            onChange={(e) => handleUpdate(item.id, "title", e.target.value)}
            style={{ width: "90%", marginBottom: "10px" }}
          />
          <textarea
            value={item.description}
            onChange={(e) =>
              handleUpdate(item.id, "description", e.target.value)
            }
            rows="3"
            style={{ width: "90%" }}
          />
          <br />
          <button
            onClick={() => removeItem(item.id)}
            style={{ marginTop: "10px", color: "red" }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default NestedStateList;
