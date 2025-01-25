import React, { useState } from "react";

const initialData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Manager" },
];

const DataTable = () => {
  const [data, setData] = useState(initialData);
  const [editRowId, setEditRowId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  // Handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Enable editing for a row
  const handleEditClick = (row) => {
    setEditRowId(row.id);
    setEditFormData(row);
  };

  // Save changes and update the data
  const handleSaveClick = () => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === editRowId ? { ...row, ...editFormData } : row
      )
    );
    setEditRowId(null);
  };

  // Cancel editing and revert changes
  const handleCancelClick = () => {
    setEditRowId(null);
    setEditFormData({});
  };

  return (
    <div>
      <h1>Dynamic Data Table</h1>
      <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {editRowId === row.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name || ""}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={editFormData.email || ""}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="role"
                      value={editFormData.role || ""}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <button onClick={handleSaveClick}>Save</button>
                    <button onClick={handleCancelClick} style={{ marginLeft: "10px" }}>
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.role}</td>
                  <td>
                    <button onClick={() => handleEditClick(row)}>Edit</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
