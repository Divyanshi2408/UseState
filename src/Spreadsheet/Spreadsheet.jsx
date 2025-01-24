import React, { useState } from "react";

const Spreadsheet = () => {
  // Initial state
  const [grid, setGrid] = useState(
    Array(5).fill(Array(5).fill("")) // 5x5 grid with empty strings
  );
  const [history, setHistory] = useState([]); // To store undo history
  const [redoStack, setRedoStack] = useState([]); // To store redo history

  // Function to handle cell edits
  const handleCellChange = (row, col, value) => {
    // Save current grid to undo history
    setHistory((prev) => [...prev, grid]);

    // Clear the redo stack since a new action was made
    setRedoStack([]);

    // Update the grid with the new value
    setGrid((prev) =>
      prev.map((r, i) =>
        r.map((cell, j) => (i === row && j === col ? value : cell))
      )
    );
  };

  // Undo function
  const undo = () => {
    if (history.length === 0) return; // No undo available

    // Save current state to redo stack
    setRedoStack((prev) => [grid, ...prev]);

    // Revert to the last state in history
    const previousState = history[history.length - 1];
    setGrid(previousState);

    // Remove the last state from history
    setHistory((prev) => prev.slice(0, -1));
  };

  // Redo function
  const redo = () => {
    if (redoStack.length === 0) return; // No redo available

    // Save current state to undo history
    setHistory((prev) => [...prev, grid]);

    // Apply the next state from the redo stack
    const nextState = redoStack[0];
    setGrid(nextState);

    // Remove the state from the redo stack
    setRedoStack((prev) => prev.slice(1));
  };

  return (
    <div>
      <h1>Spreadsheet with Undo/Redo</h1>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <button onClick={undo} disabled={history.length === 0}>
          Undo
        </button>
        <button onClick={redo} disabled={redoStack.length === 0}>
          Redo
        </button>
      </div>
      <table border="1" style={{ borderCollapse: "collapse" }}>
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) =>
                      handleCellChange(rowIndex, colIndex, e.target.value)
                    }
                    style={{ width: "50px", textAlign: "center" }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
