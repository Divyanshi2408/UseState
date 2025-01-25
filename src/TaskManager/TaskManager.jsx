import React, { useState } from "react";

const TaskManager = () => {
  // Initial state for categories and tasks
  const [categories, setCategories] = useState({
    "To Do": [],
    "In Progress": [],
    "Completed": [],
  });

  const [newCategoryName, setNewCategoryName] = useState("");
  const [newTaskName, setNewTaskName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("To Do");

  // Add a new category
  const addCategory = () => {
    if (newCategoryName && !categories[newCategoryName]) {
      setCategories((prev) => ({
        ...prev,
        [newCategoryName]: [],
      }));
      setNewCategoryName("");
    }
  };

  // Delete a category
  const deleteCategory = (categoryName) => {
    const updatedCategories = { ...categories };
    delete updatedCategories[categoryName];
    setCategories(updatedCategories);
  };

  // Add a new task to a selected category
  const addTask = () => {
    if (newTaskName && selectedCategory) {
      setCategories((prev) => ({
        ...prev,
        [selectedCategory]: [...prev[selectedCategory], newTaskName],
      }));
      setNewTaskName("");
    }
  };

  // Move a task between categories
  const moveTask = (task, fromCategory, toCategory) => {
    setCategories((prev) => {
      const updatedFromCategory = prev[fromCategory].filter((t) => t !== task);
      const updatedToCategory = [...prev[toCategory], task];
      return {
        ...prev,
        [fromCategory]: updatedFromCategory,
        [toCategory]: updatedToCategory,
      };
    });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Dynamic Task Manager</h1>

      {/* Add New Category */}
      <div>
        <h3>Create a New Category</h3>
        <input
          type="text"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          placeholder="Category Name"
          style={{ marginRight: "10px" }}
        />
        <button onClick={addCategory}>Add Category</button>
      </div>

      {/* Add New Task */}
      <div style={{ marginTop: "20px" }}>
        <h3>Add a Task</h3>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Task Name"
          style={{ marginRight: "10px" }}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ marginRight: "10px" }}
        >
          {Object.keys(categories).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Display Categories and Tasks */}
      <div style={{ display: "flex", marginTop: "30px", gap: "20px" }}>
        {Object.keys(categories).map((category) => (
          <div key={category} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", width: "200px" }}>
            <h3>
              {category}{" "}
              <button
                onClick={() => deleteCategory(category)}
                style={{ color: "red", marginLeft: "10px", cursor: "pointer" }}
              >
                &times;
              </button>
            </h3>
            <ul>
              {categories[category].map((task, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  {task}
                  <div style={{ marginTop: "5px" }}>
                    {/* Move Task Dropdown */}
                    <select
                      onChange={(e) => moveTask(task, category, e.target.value)}
                      value={category}
                    >
                      {Object.keys(categories).map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
