import React, { useState } from "react";

const initialFileStructure = [
  {
    id: 1,
    name: "Folder 1",
    type: "folder",
    isOpen: false,
    children: [
      {
        id: 2,
        name: "File 1-1",
        type: "file",
      },
      {
        id: 3,
        name: "Folder 1-2",
        type: "folder",
        isOpen: false,
        children: [
          {
            id: 4,
            name: "File 1-2-1",
            type: "file",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "File 2",
    type: "file",
  },
];

const FileExplorer = () => {
  const [fileStructure, setFileStructure] = useState(initialFileStructure);

  // Function to toggle folder open/close state
  const toggleFolder = (id, structure) => {
    return structure.map((item) => {
      if (item.id === id) {
        return { ...item, isOpen: !item.isOpen };
      } else if (item.type === "folder" && item.children) {
        return { ...item, children: toggleFolder(id, item.children) };
      }
      return item;
    });
  };

  const handleFolderClick = (id) => {
    setFileStructure((prev) => toggleFolder(id, prev));
  };

  // Recursive function to render the file structure
  const renderFileStructure = (structure) => {
    return (
      <ul>
        {structure.map((item) => (
          <li key={item.id}>
            {item.type === "folder" ? (
              <>
                <span
                  style={{
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                  onClick={() => handleFolderClick(item.id)}
                >
                  {item.isOpen ? "📂" : "📁"} {item.name}
                </span>
                {item.isOpen && item.children && (
                  <div style={{ paddingLeft: "20px" }}>
                    {renderFileStructure(item.children)}
                  </div>
                )}
              </>
            ) : (
              <span>📄 {item.name}</span>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>File Explorer</h1>
      {renderFileStructure(fileStructure)}
    </div>
  );
};

export default FileExplorer;
