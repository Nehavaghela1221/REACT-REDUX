import React, { useState } from 'react';

const Myapp = ({ data, columns }) => {
  const [searchText, setSearchText] = useState('');

  const filteredData = searchText
  ? data.filter((row) => {
      for (const col of columns) {
        try {
          // Attempt conversion to lowercase if not a string
          const value = typeof row[col] === 'string' ? row[col].toLowerCase() : String(row[col]).toLowerCase();
          if (value.includes(searchText.toLowerCase())) {
            return true; // Row matches the search criteria
          }
        } catch (error) {
          console.error(`Error converting ${col} to lowercase in row ${data.indexOf(row)}:`, error);
          // Optionally, handle the error (e.g., continue filtering, display a message)
        }
      }
      return false; // No match in this row
    })
  : data;

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id || Math.random()}> {/* Use a unique key */}
              {columns.map((col) => (
                <td key={col}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default  Myapp;
